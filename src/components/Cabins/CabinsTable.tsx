import { useState, type ReactNode } from "react";
import { FiTrash2 } from "react-icons/fi";
import {
  useBulkDeleteCabins,
  useCabins,
  useDeleteCabin,
} from "../../hooks/useCabinsTable";
import { DataTable } from "../DataTable/DataTable";
import type { ColumnConfig, SortState } from "../DataTable/DataTable.types";
import type { CabinRow } from "../../types/database.types";
import Text from "../../design/primitives/Text/Text";
import { Badge } from "../../design/primitives";

export function CabinsTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<SortState<CabinRow>>([]);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({});

  const params = { page, pageSize, sortBy, search };
  const { data, isLoading, isError, error } = useCabins(params);
  const { mutate: deleteCabin, isPending: isDeleting } = useDeleteCabin(params);
  const { mutate: bulkDelete } = useBulkDeleteCabins(params);

  const columns: ColumnConfig<CabinRow>[] = [
    {
      field: "name",
      label: "Cabin",
      type: "text",
      sortable: true,
      render: (row) => <CabinCellText>{row.name}</CabinCellText>,
    },
    {
      field: "capacity",
      label: "Capacity",
      type: "text",
      sortable: true,
      render: (row) => (
        <CabinCellText>Up to {row.capacity} guests</CabinCellText>
      ),
    },
    {
      field: "base_price",
      label: "Price",
      type: "number",
      sortable: true,
      formatNumber: { currency: true },
      render: (row) => (
        <CabinCellText>
          {new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "USD",
          }).format(row.base_price)}
        </CabinCellText>
      ),
    },
    {
      field: "discount_percent",
      label: "Discount",
      type: "text",
      sortable: true,
      render: (row) => {
        if (!row.discount_percent || row.discount_percent === 0) {
          return <Text textAlign="center" fontWeight="thin">—</Text>;
        }
        const discountAmount = row.base_price * (row.discount_percent / 100);
        return <CabinCellText>-${discountAmount.toFixed(2)}</CabinCellText>;
      },
    },
    {
      field: "capacity", // Using existing field for typing, sortable is false
      label: "Status",
      type: "badge",
      sortable: false,
      render: (row) => {
        const status =
          row.discount_percent && row.discount_percent > 0
            ? "Available"
            : "Booked";
        const tone = status === "Available" ? "success" : "error";
        return (
          <Badge
            size="sm"
            fontWeight="bold"
            appearance="subtle"
            colorScheme={tone}
          >
            {status.toUpperCase()}
          </Badge>
        );
      },
    },
  ];

  const handleBulkDelete = (rows: CabinRow[]) => {
    const ids = rows.map((r) => r.cabin_id);
    if (
      window.confirm(`Are you sure you want to delete ${ids.length} cabins?`)
    ) {
      bulkDelete(ids, {
        onSuccess: () => setSelectedIds(new Set()),
      });
    }
  };

  if (isError) {
    return (
      <div
        style={{
          padding: "20px",
          color: "var(--color-brand-error)",
          background: "var(--color-bg-error-subtle)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Error loading cabins:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    <DataTable
      tableId="cabins-table"
      title="Luxurious Cabins"
      columns={columns}
      rows={data?.cabins || []}
      pagination={{
        page,
        pageSize,
        total: data?.total || 0,
      }}
      sort={sortBy}
      onSortChange={setSortBy}
      globalSearch={search}
      onGlobalSearchChange={setSearch}
      selectedRowIds={selectedIds}
      onSelectedRowIdsChange={setSelectedIds}
      getRowId={(row) => row.cabin_id}
      onPageChange={setPage}
      onPageSizeChange={(size) => {
        setPageSize(size);
        setPage(1);
      }}
      columnVisibility={columnVisibility}
      onColumnVisibilityChange={setColumnVisibility}
      loading={{
        isLoading,
        isDeleting,
      }}
      rowActions={{
        onEdit: (row) => console.log("Edit", row),
        onDelete: (row) => {
          if (window.confirm(`Delete cabin ${row.name}?`)) {
            deleteCabin(row.cabin_id);
          }
        },
      }}
      bulkActions={[
        {
          label: "Delete",
          icon: <FiTrash2 />,
          onClick: handleBulkDelete,
        },
      ]}
      emptyState={{
        icon: "🏡",
        title: "No cabins found",
        description:
          "Try adjusting your search or filters to find what you're looking for.",
      }}
    />
  );
}

export const CabinCellText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontFamily="primary"
      fontWeight="semibold"
      fontSize="sm"
      letterSpacing="wider"
    >
      {children}
    </Text>
  );
};
