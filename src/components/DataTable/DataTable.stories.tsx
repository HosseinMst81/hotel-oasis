import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./DataTable";
import type { DataTableProps } from "./DataTable.types";

type Row = {
  id: string;
  name: string;
  base_price: number;
  price: number;
  booked_on: string;
  status: "available" | "booked" | "maintenance";
};

const columns = [
  { field: "name", label: "Cabin", type: "text", sortable: true },
  { field: "base_price", label: "Base", type: "number", sortable: true },
  { field: "price", label: "Price", type: "number", sortable: true },
  { field: "booked_on", label: "Booked On", type: "date", sortable: true },
  { field: "status", label: "Status", type: "badge", sortable: true },
] as const;

const baseRows: Row[] = [
  {
    id: "c1",
    name: "Seaside Cabin",
    base_price: 180,
    price: 220,
    booked_on: "2026-01-10T00:00:00.000Z",
    status: "available",
  },
  {
    id: "c2",
    name: "Forest Hideaway",
    base_price: 210,
    price: 265,
    booked_on: "2026-01-15T00:00:00.000Z",
    status: "booked",
  },
  {
    id: "c3",
    name: "Mountain Lodge",
    base_price: 240,
    price: 310,
    booked_on: "2026-01-22T00:00:00.000Z",
    status: "maintenance",
  },
];

const meta = {
  title: "Components/Composed/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "DataTable composed from design primitives (Badge, Loading, Button, Text, Container/Stack/Inline).",
      },
    },
  },
} satisfies Meta<typeof DataTable<Row>>;

export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {
  render: () => {
    const [sortState, setSortState] = useState<
      DataTableProps<typeof baseRows[number]>["sort"]
    >([]);
    const [globalSearchState, setGlobalSearchState] = useState("");
    const [selectedRowIdsState, setSelectedRowIdsState] = useState<Set<string>>(new Set());

    return (
      <DataTable<Row>
        tableId="demo"
        title="Cabins"
        columns={columns as unknown as DataTableProps<Row>["columns"]}
        rows={baseRows}
        pagination={{ page: 1, pageSize: 10, total: 3 }}
        sort={sortState}
        onSortChange={setSortState}
        globalSearch={globalSearchState}
        onGlobalSearchChange={setGlobalSearchState}
        selectedRowIds={selectedRowIdsState}
        onSelectedRowIdsChange={setSelectedRowIdsState}
        getRowId={(r) => r.id}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        loading={{ isLoading: false }}
        emptyState={{
          icon: "🗃️",
          title: "No cabins",
          description: "Try adjusting filters or search.",
        }}
        rowActions={{ onEdit: () => {}, onDelete: () => {} }}
        bulkActions={[
          { label: "Archive", danger: true, icon: "🗑️", onClick: () => {} },
        ]}
        columnVisibility={{
          name: true,
          base_price: true,
          price: true,
          booked_on: true,
          status: true,
        }}
        onColumnVisibilityChange={() => {}}
      />
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [sortState, setSortState] = useState<
      DataTableProps<typeof baseRows[number]>["sort"]
    >([]);
    const [globalSearchState, setGlobalSearchState] = useState("");
    const [selectedRowIdsState, setSelectedRowIdsState] = useState<Set<string>>(new Set());

    return (
      <DataTable<Row>
        tableId="demo-loading"
        title="Cabins"
        columns={columns as unknown as DataTableProps<Row>["columns"]}
        rows={baseRows}
        pagination={{ page: 1, pageSize: 10, total: 3 }}
        sort={sortState}
        onSortChange={setSortState}
        globalSearch={globalSearchState}
        onGlobalSearchChange={setGlobalSearchState}
        selectedRowIds={selectedRowIdsState}
        onSelectedRowIdsChange={setSelectedRowIdsState}
        getRowId={(r) => r.id}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        loading={{ isLoading: true }}
        emptyState={{
          icon: "🗃️",
          title: "No cabins",
          description: "Try adjusting filters or search.",
        }}
        columnVisibility={{
          name: true,
          base_price: true,
          price: true,
          booked_on: true,
          status: true,
        }}
        onColumnVisibilityChange={() => {}}
      />
    );
  },
};

export const EmptyState: Story = {
  render: () => {
    const [sortState, setSortState] = useState<
      DataTableProps<typeof baseRows[number]>["sort"]
    >([]);
    const [globalSearchState, setGlobalSearchState] = useState("");
    const [selectedRowIdsState, setSelectedRowIdsState] = useState<Set<string>>(new Set());

    return (
      <DataTable<Row>
        tableId="demo-empty"
        title="Cabins"
        columns={columns as unknown as DataTableProps<Row>["columns"]}
        rows={[]}
        pagination={{ page: 1, pageSize: 10, total: 0 }}
        sort={sortState}
        onSortChange={setSortState}
        globalSearch={globalSearchState}
        onGlobalSearchChange={setGlobalSearchState}
        selectedRowIds={selectedRowIdsState}
        onSelectedRowIdsChange={setSelectedRowIdsState}
        getRowId={(r) => r.id}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        loading={{ isLoading: false }}
        emptyState={{
          icon: "🗃️",
          title: "No cabins",
          description: "Try adjusting filters or search.",
        }}
        columnVisibility={{
          name: true,
          base_price: true,
          price: true,
          booked_on: true,
          status: true,
        }}
        onColumnVisibilityChange={() => {}}
      />
    );
  },
};
