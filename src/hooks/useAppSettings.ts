import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../lib/queryKeys";
import {
  appSetttingsService,
} from "../services/appSetttingsService";
import type {
  AppSettingInsert,
  AppSettingRow,
  AppSettingUpdate,
} from "../types/database.types";

type GetAllParams = Parameters<typeof appSetttingsService.getAll>[0];

export const useAppSettings = (filters?: GetAllParams) => {
  const queryClient = useQueryClient();

  const appSettingsQuery = useQuery({
    queryKey: queryKeys.appSettings.list(filters ?? {}),
    queryFn: () => appSetttingsService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  });

  const createAppSettingMutation = useMutation({
    mutationFn: (payload: AppSettingInsert) =>
      appSetttingsService.create(payload),
    onMutate: async (newAppSetting) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.appSettings.all });

      const previous = queryClient.getQueryData<AppSettingRow[]>(
        queryKeys.appSettings.list({}),
      );

      if (previous) {
        queryClient.setQueryData<AppSettingRow[]>(queryKeys.appSettings.list({}), [
          ...previous,
          newAppSetting as unknown as AppSettingRow,
        ]);
      }

      return { previous };
    },
    onError: (_err, _variables, ctx) => {
      if (!ctx?.previous) return;
      queryClient.setQueryData<AppSettingRow[]>(
        queryKeys.appSettings.list({}),
        ctx.previous,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.appSettings.all });
    },
  });

  const updateAppSettingMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: AppSettingUpdate }) =>
      appSetttingsService.update(id, payload),

    onMutate: async ({ id, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.appSettings.all });

      const previousList = queryClient.getQueryData<AppSettingRow[]>(
        queryKeys.appSettings.list({}),
      );
      const previousDetail = queryClient.getQueryData<AppSettingRow>(
        queryKeys.appSettings.detail(id),
      );

      if (previousDetail) {
        queryClient.setQueryData<AppSettingRow>(queryKeys.appSettings.detail(id), {
          ...previousDetail,
          ...payload,
        });
      }

      if (previousList) {
        queryClient.setQueryData<AppSettingRow[]>(queryKeys.appSettings.list({}),
          previousList.map((s) => (s.id === id ? { ...s, ...payload } : s)),
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, { id }, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<AppSettingRow[]>(
          queryKeys.appSettings.list({}),
          ctx.previousList,
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<AppSettingRow>(
          queryKeys.appSettings.detail(id),
          ctx.previousDetail,
        );
      }
    },

    onSettled: (_data, _err, variables) => {
      if (variables?.id !== undefined) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.appSettings.detail(variables.id),
        });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.appSettings.all });
    },
  });

  const deleteAppSettingMutation = useMutation({
    mutationFn: (id: number) => appSetttingsService.delete(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.appSettings.all });

      const previousList = queryClient.getQueryData<AppSettingRow[]>(
        queryKeys.appSettings.list({}),
      );
      const previousDetail = queryClient.getQueryData<AppSettingRow>(
        queryKeys.appSettings.detail(id),
      );

      if (previousList) {
        queryClient.setQueryData<AppSettingRow[]>(queryKeys.appSettings.list({}),
          previousList.filter((s) => s.id !== id),
        );
      }

      if (previousDetail) {
        queryClient.setQueryData<AppSettingRow | undefined>(
          queryKeys.appSettings.detail(id),
          undefined,
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, id, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<AppSettingRow[]>(
          queryKeys.appSettings.list({}),
          ctx.previousList,
        );
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<AppSettingRow>(
          queryKeys.appSettings.detail(id),
          ctx.previousDetail,
        );
      }
    },

    onSettled: (_data, _err, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.appSettings.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.appSettings.detail(id) });
    },
  });

  return {
    appSettingsQuery,
    createAppSettingMutation,
    updateAppSettingMutation,
    deleteAppSettingMutation,
  };
};

export const useAppSetting = (id?: number) => {
  return useQuery({
    queryKey: queryKeys.appSettings.detail(id ?? 0),
    queryFn: () => appSetttingsService.getById(id as number),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};

