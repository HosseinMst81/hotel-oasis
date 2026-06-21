import type { SortDescriptor } from "../components/DataTable/DataTable.types";

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function getNextSortState<TData extends Record<string, unknown>>(params: {
  current: SortDescriptor<TData>[];
  field: Extract<keyof TData, string>;
  multi?: boolean;
}): SortDescriptor<TData>[] {
  const { current, field, multi = false } = params;
  
  const existingIndex = current.findIndex(s => s.field === field);
  const existing = current[existingIndex];

  let nextDescriptor: SortDescriptor<TData> | null;



  if (!existing) {
    nextDescriptor = { field, direction: "asc" };
  } else if (existing.direction === "asc") {
    nextDescriptor = { field, direction: "desc" };
  } else {
    nextDescriptor = null; // Cycles out
  }

  if (multi) {
    const next = [...current];
    if (existingIndex > -1) {
      if (nextDescriptor) {
        next[existingIndex] = nextDescriptor;
      } else {
        next.splice(existingIndex, 1);
      }
    } else if (nextDescriptor) {
      next.push(nextDescriptor);
    }
    return next;
  }

  return nextDescriptor ? [nextDescriptor] : [];
}

export function getPageCount(total: number, pageSize: number): number {
  if (pageSize <= 0) return 1;
  return Math.max(1, Math.ceil(total / pageSize));
}

export function formatDate(dateValue: string, formatter?: (value: string) => string): string {
  if (typeof formatter === "function") return formatter(dateValue);
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return dateValue;
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatNumber(
  value: unknown,
  options?: {
    currency?: boolean;
    currencyCode?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  },
): string {
  if (typeof value !== "number" || Number.isNaN(value)) return "—";

  const currency = options?.currency ?? false;

  const formatter = new Intl.NumberFormat(undefined, {
    style: currency ? "currency" : "decimal",
    currency: options?.currencyCode ?? "USD",
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });

  return formatter.format(value);
}

export function debounce<TArgs extends unknown[]>(fn: (...args: TArgs) => void, waitMs: number) {
  let timeoutId: number | undefined;

  return (...args: TArgs) => {
    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), waitMs);
  };
}

export function getSkeletonRows(count: number): number[] {
  return Array.from({ length: count }, (_, i) => i);
}
