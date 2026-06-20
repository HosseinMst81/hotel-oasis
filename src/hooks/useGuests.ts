import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../lib/queryKeys";
import type {
  GuestInsert,
  GuestRow,
  GuestUpdate,
} from "../types/database.types";
import { guestsService } from "../services/guestsService";

type GetAllParams = Parameters<typeof guestsService.getAll>[0];

export const useGuests = (filters?: GetAllParams) => {
  const queryClient = useQueryClient();

  const guestsQuery = useQuery({
    queryKey: queryKeys.guests.list(filters ?? {}),
    queryFn: () => guestsService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  });

  const createGuestMutation = useMutation({
    mutationFn: (payload: GuestInsert) => guestsService.create(payload),
    onMutate: async (newGuest) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.guests.all });

      const previous = queryClient.getQueryData<GuestRow[]>(
        queryKeys.guests.list({})
      );

      if (previous) {
        queryClient.setQueryData<GuestRow[]>(queryKeys.guests.list({}), [
          ...previous,
          newGuest as unknown as GuestRow,
        ]);
      }

      return { previous };
    },
    onError: (_err, _variables, ctx) => {
      if (!ctx?.previous) return;
      queryClient.setQueryData<GuestRow[]>(
        queryKeys.guests.list({}),
        ctx.previous
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.guests.all });
    },
  });

  const updateGuestMutation = useMutation({
    mutationFn: ({
      guestId,
      payload,
    }: {
      guestId: string;
      payload: GuestUpdate;
    }) => guestsService.update(guestId, payload),

    onMutate: async ({ guestId, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.guests.all });

      const previousList = queryClient.getQueryData<GuestRow[]>(
        queryKeys.guests.list({})
      );
      const previousDetail = queryClient.getQueryData<GuestRow>(
        queryKeys.guests.detail(guestId)
      );

      if (previousDetail) {
        queryClient.setQueryData<GuestRow>(queryKeys.guests.detail(guestId), {
          ...previousDetail,
          ...payload,
        });
      }

      if (previousList) {
        queryClient.setQueryData<GuestRow[]>(
          queryKeys.guests.list({}),
          previousList.map((g) =>
            g.guest_id === guestId ? { ...g, ...payload } : g
          )
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, { guestId }, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<GuestRow[]>(
          queryKeys.guests.list({}),
          ctx.previousList
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<GuestRow>(
          queryKeys.guests.detail(guestId),
          ctx.previousDetail
        );
      }
    },

    onSettled: (_data, _err, variables) => {
      if (variables?.guestId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.guests.detail(variables.guestId),
        });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.guests.all });
    },
  });

  const deleteGuestMutation = useMutation({
    mutationFn: (guestId: string) => guestsService.delete(guestId),

    onMutate: async (guestId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.guests.all });

      const previousList = queryClient.getQueryData<GuestRow[]>(
        queryKeys.guests.list({})
      );
      const previousDetail = queryClient.getQueryData<GuestRow>(
        queryKeys.guests.detail(guestId)
      );

      if (previousList) {
        queryClient.setQueryData<GuestRow[]>(
          queryKeys.guests.list({}),
          previousList.filter((g) => g.guest_id !== guestId)
        );
      }

      if (previousDetail) {
        queryClient.setQueryData<GuestRow | undefined>(
          queryKeys.guests.detail(guestId),
          undefined
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, guestId, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<GuestRow[]>(
          queryKeys.guests.list({}),
          ctx.previousList
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<GuestRow>(
          queryKeys.guests.detail(guestId),
          ctx.previousDetail
        );
      }
    },

    onSettled: (_data, _err, guestId) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.guests.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.guests.detail(guestId),
      });
    },
  });

  return {
    guestsQuery,
    createGuestMutation,
    updateGuestMutation,
    deleteGuestMutation,
  };
};

export const useGuest = (guestId?: string) => {
  return useQuery({
    queryKey: queryKeys.guests.detail(guestId ?? ""),
    queryFn: () => guestsService.getById(guestId as string),
    staleTime: 1000 * 60 * 5,
    enabled: !!guestId,
  });
};
