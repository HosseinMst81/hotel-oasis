import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useBulkDeleteCabins, useCabins, useDeleteCabin } from "../../hooks/useCabinsTable";
import { DataTable } from "../DataTable/DataTable";
import type { ColumnConfig, SortState } from "../DataTable/DataTable.types";
import type { CabinRow } from "../../types/database.types";

export function CabinsTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<SortState<CabinRow>>([]);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({});

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
      render: (row) => (
        <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {row.cabin_id} · {row.name}
        </span>
      )
    },
    {
      field: "capacity",
      label: "Capacity",
      type: "text",
      sortable: true,
      render: (row) => <span>Up to {row.capacity} guests</span>
    },
    {
      field: "base_price",
      label: "Price",
      type: "number",
      sortable: true,
      formatNumber: { currency: true },
      render: (row) => <span style={{ fontWeight: 700, color: 'var(--color-brand-primary)' }}>{new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(row.base_price)}</span>
    },
    {
      field: "discount_percent",
      label: "Discount",
      type: "text",
      sortable: true,
      render: (row) => {
        if (!row.discount_percent || row.discount_percent === 0) {
          return <span style={{ color: 'var(--color-text-muted)' }}>—</span>;
        }
        const discountAmount = row.base_price * (row.discount_percent / 100);
        return <span style={{ color: 'var(--color-brand-success)' }}>-${discountAmount.toFixed(2)}</span>;
      }
    },
    {
      field: "capacity", // Using existing field for typing, sortable is false
      label: "Status",
      type: "badge",
      sortable: false,
      render: (row) => {
        const status = row.discount_percent && row.discount_percent > 0 ? "Available" : "Booked";
        const tone = status === "Available" ? "var(--color-brand-success)" : "var(--color-brand-warning)";
        return (
          <span style={{
            display: 'inline-flex',
            borderRadius: '9999px',
            padding: '2px 10px',
            fontSize: '11px',
            fontWeight: 700,
            background: `color-mix(in oklch, ${tone} 10%, transparent)`,
            color: tone
          }}>
            {status.toUpperCase()}
          </span>
        );
      }
    }
  ];

  const handleBulkDelete = (rows: CabinRow[]) => {
    const ids = rows.map(r => r.cabin_id);
    if (window.confirm(`Are you sure you want to delete ${ids.length} cabins?`)) {
      bulkDelete(ids, {
        onSuccess: () => setSelectedIds(new Set())
      });
    }
  };

  if (isError) {
    return (
      <div style={{ padding: "20px", color: "var(--color-brand-error)", background: "var(--color-bg-error-subtle)", borderRadius: "var(--radius-md)" }}>
        Error loading cabins: {error instanceof Error ? error.message : "Unknown error"}
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
        }
      }}
      bulkActions={[
        {
          label: "Delete",
          icon: <FiTrash2 />,
          onClick: handleBulkDelete
        }
      ]}
      emptyState={{
        icon: "🏡",
        title: "No cabins found",
        description: "Try adjusting your search or filters to find what you're looking for."
      }}
    />
  );
}
