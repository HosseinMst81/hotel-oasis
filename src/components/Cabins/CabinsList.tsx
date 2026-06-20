import React from 'react';
import EmptyState from '../../design/components/EmptyState/EmptyState';
import { Card } from '../../design/primitives/Card/Card';
import { Divider } from '../../design/primitives/Divider/Divider';
import { Heading } from '../../design/primitives/Heading/Heading';
import Stack from '../../design/primitives/Stack/Stack';
import { useCabins } from '../../hooks/useCabins';
import Loading from '../../pages/Loading';
import type { CabinRow } from '../../types/database.types';
import Text from '../../design/primitives/Text/Text';




type CabinsFilters = Parameters<typeof useCabins>[0];

export interface CabinsListProps {
  filters?: CabinsFilters;
  renderCabin?: (cabin: CabinRow) => React.ReactNode;
}

export function CabinsList({ filters, renderCabin }: CabinsListProps) {
  const { cabinsQuery } = useCabins(filters ?? undefined);

  const { data: cabins, isLoading, isError, error } = cabinsQuery;

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <ErrorBlock message={(error as Error | null)?.message ?? 'Failed to load cabins'} />
    );
  if (!cabins?.length) return <EmptyState />;

  return (
    <Stack spacing={4}>
      <Heading level={2}>Cabins</Heading>
      <Divider />
      <Stack spacing={3}>
        {cabins.map((cabin) => (
          <Card key={cabin.cabin_id} rounded="md">
            {renderCabin ? renderCabin(cabin) : <DefaultCabinRow cabin={cabin} />}
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

function DefaultCabinRow({ cabin }: { cabin: CabinRow }) {
  return (
    <Stack spacing={1}>
      <Text fontWeight="bold">{cabin.name}</Text>
      <Text fontSize='sm' textColor="secondary">Cabin ID: {cabin.cabin_id}</Text>
      <Text fontSize='sm' textColor="secondary">Capacity: {cabin.capacity}</Text>
      <Text fontSize='sm' textColor="secondary">Base price: {cabin.base_price}</Text>
    </Stack>
  );
}

function ErrorBlock({ message }: { message: string }) {
  return (
    <Card rounded="md">
      <Stack  spacing={2}>
        <Heading level={3}>Error</Heading>
        <Text fontSize="sm" textColor="error">{message}</Text>
      </Stack>
    </Card>
  );
}

