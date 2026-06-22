import type React from "react";

export type SortDirection = "asc" | "desc";

export type SortDescriptor<TData> = {
  field: Extract<keyof TData, string>;
  direction: SortDirection;
};

export type SortState<TData> = SortDescriptor<TData>[];

export type ColumnType = "text" | "number" | "date" | "badge" | "image" | "custom";

export type BadgeTone = "indigo" | "green" | "yellow" | "gray" | "red" | "blue" | "purple" | "emerald" | "amber" | "rose" | "sky";

export type BadgeVariant = {
  label: string;
  tone: BadgeTone;
};

export type ColumnConfig<TData extends Record<string, unknown>> = {
  field: Extract<keyof TData, string>;
  label: string;
  type: ColumnType;
  sortable?: boolean;
  width?: number | string;

  badgeMap?: Record<string, BadgeVariant>;

  formatNumber?: {
    currency?: boolean;
    currencyCode?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  };

  formatDate?: (value: string) => string;

  render?: (row: TData) => React.ReactNode;

  ariaLabel?: string;
};

export type RowActions<TData> = {
  onView?: (row: TData) => void;
  onEdit?: (row: TData) => void;
  onDelete?: (row: TData) => void;
};

export type BulkAction<TData> = {
  label: string;
  onClick: (rows: TData[]) => void;
  danger?: boolean;
  icon?: React.ReactNode;
};

export type DataTablePaginationState = {
  page: number; // 1-based
  pageSize: number;
  total: number;
};

export type DataTableDensity = "default" | "compact";

export type DataTableProps<TData extends Record<string, unknown>> = {
  tableId: string;
  title?: string;

  columns: ColumnConfig<TData>[];
  rows: TData[];

  pagination: DataTablePaginationState;

  sort: SortState<TData>;
  onSortChange: (next: SortState<TData>) => void;

  globalSearch: string;
  onGlobalSearchChange: (next: string) => void;

  selectedRowIds: Set<string>;
  onSelectedRowIdsChange: (next: Set<string>) => void;
  getRowId: (row: TData) => string;

  onPageChange: (nextPage: number) => void;
  onPageSizeChange: (nextPageSize: number) => void;

  rowActions?: RowActions<TData>;
  bulkActions?: BulkAction<TData>[];

  columnVisibility: Record<string, boolean>;
  onColumnVisibilityChange: (next: Record<string, boolean>) => void;

  loading: {
    isLoading: boolean;
    isDeleting?: boolean;
    hasError?: boolean;
    errorMessage?: string;
  };

  density?: DataTableDensity;
  emptyState: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
};
