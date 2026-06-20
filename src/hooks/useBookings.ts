import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../lib/queryKeys";
import { bookingsService } from "../services/bookingsService";
import type { BookingInsert, BookingRow, BookingUpdate } from "../types/database.types";



type GetAllParams = Parameters<typeof bookingsService.getAll>[0];

export const useBookings = (filters?: GetAllParams) => {
  const queryClient = useQueryClient();

  const bookingsQuery = useQuery({
    queryKey: queryKeys.bookings.list(filters ?? {}),
    queryFn: () => bookingsService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  });

  const createBookingMutation = useMutation({
    mutationFn: (payload: BookingInsert) => bookingsService.create(payload),
    onMutate: async (newBooking) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.bookings.all });

      const previous = queryClient.getQueryData<BookingRow[]>(
        queryKeys.bookings.list({}),
      );

      // Optimistic update: append to the unfiltered list.
      if (previous) {
        queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}), [
          ...previous,
          newBooking as unknown as BookingRow,
        ]);
      }

      return { previous };
    },
    onError: (_err, _variables, ctx) => {
      if (!ctx?.previous) return;
      queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}), ctx.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all });
    },
  });

  const updateBookingMutation = useMutation({
    mutationFn: ({ bookingId, payload }: { bookingId: string; payload: BookingUpdate }) =>
      bookingsService.update(bookingId, payload),

    onMutate: async ({ bookingId, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.bookings.all });

      const previousList = queryClient.getQueryData<BookingRow[]>(
        queryKeys.bookings.list({}),
      );
      const previousDetail = queryClient.getQueryData<BookingRow>(
        queryKeys.bookings.detail(bookingId),
      );

      // Optimistic update for details.
      if (previousDetail) {
        queryClient.setQueryData<BookingRow>(queryKeys.bookings.detail(bookingId), {
          ...previousDetail,
          ...payload,
        });
      }

      // Optimistic update for unfiltered list.
      if (previousList) {
        queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}),
          previousList.map((b) => (b.booking_id === bookingId ? { ...b, ...payload } : b)),
        );
      }

      return { previousList, previousDetail };
    },

    onError: (_err, { bookingId }, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}), ctx.previousList);
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<BookingRow>(queryKeys.bookings.detail(bookingId), ctx.previousDetail);
      }
    },

    onSettled: (_data, _err, variables) => {
      if (variables?.bookingId) {
        queryClient.invalidateQueries({ queryKey: queryKeys.bookings.detail(variables.bookingId) });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all });
    },
  });

  const deleteBookingMutation = useMutation({
    mutationFn: (bookingId: string) => bookingsService.delete(bookingId),

    onMutate: async (bookingId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.bookings.all });

      const previousList = queryClient.getQueryData<BookingRow[]>(
        queryKeys.bookings.list({}),
      );
      const previousDetail = queryClient.getQueryData<BookingRow>(
        queryKeys.bookings.detail(bookingId),
      );

      // Optimistically remove from unfiltered list.
      if (previousList) {
        queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}),
          previousList.filter((b) => b.booking_id !== bookingId),
        );
      }

      // Optimistically clear detail.
      if (previousDetail) {
        queryClient.setQueryData<BookingRow | undefined>(queryKeys.bookings.detail(bookingId), undefined);
      }

      return { previousList, previousDetail };
    },

    onError: (_err, bookingId, ctx) => {
      if (ctx?.previousList) {
        queryClient.setQueryData<BookingRow[]>(queryKeys.bookings.list({}), ctx.previousList);
      }
      if (ctx?.previousDetail) {
        queryClient.setQueryData<BookingRow>(queryKeys.bookings.detail(bookingId), ctx.previousDetail);
      }
    },

    onSettled: (_data, _err, bookingId) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.detail(bookingId) });
    },
  });

  return {
    bookingsQuery,
    createBookingMutation,
    updateBookingMutation,
    deleteBookingMutation,
  };
};

export const useBooking = (bookingId?: string) => {
  return useQuery({
    queryKey: queryKeys.bookings.detail(bookingId ?? ""),
    queryFn: () => bookingsService.getById(bookingId as string),
    staleTime: 1000 * 60 * 5,
    enabled: !!bookingId,
  });
};

