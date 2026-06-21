import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";
import type { CabinRow } from "../types/database.types";
import type { SortDescriptor } from "../components/DataTable/DataTable.types";

interface CabinsQueryParams {
  page: number;
  pageSize: number;
  sortBy: SortDescriptor<CabinRow>[];
  search: string;
}

export const queryKeys = {
  cabins: {
    all: ["cabins"] as const,
    list: (params: CabinsQueryParams) => ["cabins", "list", params] as const,
  },
};

// ─── FETCHING ─────────────────────────────────────────────────────────────────

async function getCabins(params: CabinsQueryParams) {
  const { page, pageSize, sortBy, search } = params;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase.from("cabins").select("*", { count: "exact" });

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  if (sortBy.length > 0) {
    sortBy.forEach((s) => {
      query = query.order(s.field, { ascending: s.direction === "asc" });
    });
  } else {
    query = query.order("name", { ascending: true });
  }

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return {
    cabins: data as CabinRow[],
    total: count || 0,
  };
}

export function useCabins(params: CabinsQueryParams) {
  return useQuery({
    queryKey: queryKeys.cabins.list(params),
    queryFn: () => getCabins(params),
    staleTime: 1000 * 60 * 5,
  });
}

// ─── MUTATIONS ────────────────────────────────────────────────────────────────

export function useDeleteCabin(params: CabinsQueryParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cabinId: string) => {
      const { error } = await supabase
        .from("cabins")
        .delete()
        .eq("cabin_id", cabinId);
      if (error) throw new Error(error.message);
    },
    onMutate: async (deletedId) => {
      const queryKey = queryKeys.cabins.list(params);
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<{
        cabins: CabinRow[];
        total: number;
      }>(queryKey);

      if (previousData) {
        queryClient.setQueryData(queryKey, {
          ...previousData,
          cabins: previousData.cabins.filter((c) => c.cabin_id !== deletedId),
          total: previousData.total - 1,
        });
      }

      return { previousData };
    },
    onError: (err, deletedId, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          queryKeys.cabins.list(params),
          context.previousData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cabins.all });
    },
  });
}

export function useBulkDeleteCabins(params: CabinsQueryParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cabinIds: string[]) => {
      const { error } = await supabase
        .from("cabins")
        .delete()
        .in("cabin_id", cabinIds);
      if (error) throw new Error(error.message);
    },
    onMutate: async (deletedIds) => {
      const queryKey = queryKeys.cabins.list(params);
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<{
        cabins: CabinRow[];
        total: number;
      }>(queryKey);

      if (previousData) {
        queryClient.setQueryData(queryKey, {
          ...previousData,
          cabins: previousData.cabins.filter(
            (c) => !deletedIds.includes(c.cabin_id)
          ),
          total: previousData.total - deletedIds.length,
        });
      }

      return { previousData };
    },
    onError: (err, deletedIds, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          queryKeys.cabins.list(params),
          context.previousData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cabins.all });
    },
  });
}
