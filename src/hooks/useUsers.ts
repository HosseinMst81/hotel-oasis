import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../lib/queryKeys";
import { usersService } from "../services/usersService";
import type { UserInsert, UserRow, UserUpdate } from "../types/database.types";

type GetAllParams = Parameters<typeof usersService.getAll>[0];

export const useUsers = (filters?: GetAllParams) => {
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: queryKeys.users.list(filters ?? {}),
    queryFn: () => usersService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  });

  const createUserMutation = useMutation({
    mutationFn: (payload: UserInsert) => usersService.create(payload),
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users.all });

      const previous = queryClient.getQueryData<UserRow[]>(queryKeys.users.list({}));

      if (previous) {
        queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}), [
          ...previous,
          newUser as unknown as UserRow,
        ]);
      }

      return { previous };
    },
    onError: (_err, _variables, ctx) => {
      if (!ctx?.previous) return;
      queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}), ctx.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ userId, payload }: { userId: string; payload: UserUpdate }) =>
      usersService.update(userId, payload),

    onMutate: async ({ userId, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users.all });

      const previousList = queryClient.getQueryData<UserRow[]>(queryKeys.users.list({}));
      const previousDetail = queryClient.getQueryData<UserRow>(queryKeys.users.detail(userId));

      if (previousDetail) {
        queryClient.setQueryData<UserRow>(queryKeys.users.detail(userId), {
          ...previousDetail,
          ...payload,
        });
      }

      if (previousList) {
        queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}),
          previousList.map((u) => (u.user_id === userId ? { ...u, ...payload } : u)),
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, { userId }, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}), ctx.previousList);
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<UserRow>(queryKeys.users.detail(userId), ctx.previousDetail);
      }
    },

    onSettled: (_data, _err, variables) => {
      if (variables?.userId) {
        queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(variables.userId) });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: (userId: string) => usersService.delete(userId),

    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users.all });

      const previousList = queryClient.getQueryData<UserRow[]>(queryKeys.users.list({}));
      const previousDetail = queryClient.getQueryData<UserRow>(queryKeys.users.detail(userId));

      if (previousList) {
        queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}),
          previousList.filter((u) => u.user_id !== userId),
        );
      }

      if (previousDetail) {
        queryClient.setQueryData<UserRow | undefined>(queryKeys.users.detail(userId), undefined);
      }

      return { previousList, previousDetail };
    },

    onError: (_err, userId, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<UserRow[]>(queryKeys.users.list({}), ctx.previousList);
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<UserRow>(queryKeys.users.detail(userId), ctx.previousDetail);
      }
    },

    onSettled: (_data, _err, userId) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(userId) });
    },
  });

  return {
    usersQuery,
    createUserMutation,
    updateUserMutation,
    deleteUserMutation,
  };
};

export const useUser = (userId?: string) => {
  return useQuery({
    queryKey: queryKeys.users.detail(userId ?? ""),
    queryFn: () => usersService.getById(userId as string),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
};

