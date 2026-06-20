import React from 'react';
import EmptyState from '../../design/components/EmptyState/EmptyState';
import { Card } from '../../design/primitives/Card/Card';
import { Divider } from '../../design/primitives/Divider/Divider';
import { Heading } from '../../design/primitives/Heading/Heading';
import Stack from '../../design/primitives/Stack/Stack';
import { useBookings } from '../../hooks/useBookings';
import Loading from '../../pages/Loading';
import type { BookingRow } from '../../types/database.types';
import Text from '../../design/primitives/Text/Text';



type BookingsFilters = Parameters<typeof useBookings>[0];

export interface BookingsListProps {
  filters?: BookingsFilters;
  renderBooking?: (booking: BookingRow) => React.ReactNode;
}

export function BookingsList({ filters, renderBooking }: BookingsListProps) {
  const { bookingsQuery } = useBookings(filters ?? undefined);

  const { data: bookings, isLoading, isError, error } = bookingsQuery;

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <ErrorBlock message={(error as Error | null)?.message ?? 'Failed to load bookings'} />
    );
  if (!bookings?.length) return <EmptyState />;

  return (
    <Stack spacing={4}>
      <Heading level={2}>Bookings</Heading>
      <Divider />
      <Stack  spacing={3}>
        {bookings.map((booking) => (
          <Card key={booking.booking_id} rounded="md">
            {renderBooking ? renderBooking(booking) : <DefaultBookingRow booking={booking} />}
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

function DefaultBookingRow({ booking }: { booking: BookingRow }) {
  return (
    <Stack spacing={1}>
      <Text fontWeight="bold">{booking.status}</Text>
      <Text fontSize='md' textColor='secondary'>Booking ID: {booking.booking_id}</Text>
      <Text fontSize='md' textColor='secondary'>Guest: {booking.guest_id}</Text>
      <Text fontSize='md' textColor='secondary'>Cabin: {booking.cabin_id}</Text>
      <Text fontSize='md' textColor='secondary'>Arrives: {booking.arrival_date}</Text>
      <Text fontSize='md' textColor='secondary'>Departs: {booking.departure_date}</Text>
      <Text fontSize='md' textColor='secondary'>Total: {booking.total_price}</Text>
    </Stack>
  );
}

function ErrorBlock({ message }: { message: string }) {
  return (
    <Card rounded="md">
      <Stack spacing={2}>
        <Heading level={3}>Error</Heading>
        <Text fontSize="sm" textColor="error">{message}</Text>
      </Stack>
    </Card>
  );
}

