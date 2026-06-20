import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { cabinsService } from "../services/cabinsService";
import { queryKeys } from "../lib/queryKeys";
import type { CabinInsert, CabinRow, CabinUpdate } from "../types/database.types";


type GetAllParams = Parameters<typeof cabinsService.getAll>[0];

export const useCabins = (filters?: GetAllParams) => {
  const queryClient = useQueryClient();

  const cabinsQuery = useQuery({
    queryKey: queryKeys.cabins.list(filters ?? {}),
    queryFn: () => cabinsService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  });

  const createCabinMutation = useMutation({
    mutationFn: (payload: CabinInsert) => cabinsService.create(payload),
    onMutate: async (newCabin) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.cabins.all });

      const previous = queryClient.getQueryData<CabinRow[]>(
        queryKeys.cabins.list({}),
      );

      if (previous) {
        queryClient.setQueryData<CabinRow[]>(queryKeys.cabins.list({}), [
          ...previous,
          newCabin as unknown as CabinRow,
        ]);
      }

      return { previous };
    },
    onError: (_err, _variables, ctx) => {
      if (!ctx?.previous) return;
      queryClient.setQueryData<CabinRow[]>(
        queryKeys.cabins.list({}),
        ctx.previous,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cabins.all });
    },
  });

  const updateCabinMutation = useMutation({
    mutationFn: ({
      cabinId,
      payload,
    }: {
      cabinId: string;
      payload: CabinUpdate;
    }) => cabinsService.update(cabinId, payload),

    onMutate: async ({ cabinId, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.cabins.all });

      const previousList = queryClient.getQueryData<CabinRow[]>(
        queryKeys.cabins.list({}),
      );
      const previousDetail = queryClient.getQueryData<CabinRow>(
        queryKeys.cabins.detail(cabinId),
      );

      if (previousDetail) {
        queryClient.setQueryData<CabinRow>(queryKeys.cabins.detail(cabinId), {
          ...previousDetail,
          ...payload,
        });
      }

      if (previousList) {
        queryClient.setQueryData<CabinRow[]>(
          queryKeys.cabins.list({}),
          previousList.map((c) =>
            c.cabin_id === cabinId ? { ...c, ...payload } : c,
          ),
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, { cabinId }, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<CabinRow[]>(
          queryKeys.cabins.list({}),
          ctx.previousList,
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<CabinRow>(
          queryKeys.cabins.detail(cabinId),
          ctx.previousDetail,
        );
      }
    },

    onSettled: (_data, _err, variables) => {
      if (variables?.cabinId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.cabins.detail(variables.cabinId),
        });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.cabins.all });
    },
  });

  const deleteCabinMutation = useMutation({
    mutationFn: (cabinId: string) => cabinsService.delete(cabinId),

    onMutate: async (cabinId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.cabins.all });

      const previousList = queryClient.getQueryData<CabinRow[]>(
        queryKeys.cabins.list({}),
      );
      const previousDetail = queryClient.getQueryData<CabinRow>(
        queryKeys.cabins.detail(cabinId),
      );

      if (previousList) {
        queryClient.setQueryData<CabinRow[]>(
          queryKeys.cabins.list({}),
          previousList.filter((c) => c.cabin_id !== cabinId),
        );
      }

      if (previousDetail) {
        queryClient.setQueryData<CabinRow | undefined>(
          queryKeys.cabins.detail(cabinId),
          undefined,
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, cabinId, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<CabinRow[]>(
          queryKeys.cabins.list({}),
          ctx.previousList,
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<CabinRow>(
          queryKeys.cabins.detail(cabinId),
          ctx.previousDetail,
        );
      }
    },

    onSettled: (_data, _err, cabinId) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cabins.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.cabins.detail(cabinId),
      });
    },
  });

  return {
    cabinsQuery,
    createCabinMutation,
    updateCabinMutation,
    deleteCabinMutation,
  };
};

export const useCabin = (cabinId?: string) => {
  return useQuery({
    queryKey: queryKeys.cabins.detail(cabinId ?? ""),
    queryFn: () => cabinsService.getById(cabinId as string),
    staleTime: 1000 * 60 * 5,
    enabled: !!cabinId,
  });
};
