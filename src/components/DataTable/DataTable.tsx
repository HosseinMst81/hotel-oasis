import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styled, { css } from "styled-components";
import {
  FiSearch,
  FiX,
  FiEdit2,
  FiTrash2,
  FiArrowLeft,
  FiArrowRight,
  FiLayout,
} from "react-icons/fi";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

// ─── ARCHITECTURE: PRIMITIVES ────────────────────────────────────────────────
import { Button } from "../../design/primitives/Button";
import { zIndex } from "../../design/tokens/z-index";

import {
  debounce,
  formatDate,
  formatNumber,
  getNextSortState,
  getPageCount,
  getSkeletonRows,
} from "../../utils/DataTable.utils";
import type { DataTableProps } from "./DataTable.types";
import { Badge, Input } from "../../design/primitives";
import Text from "../../design/primitives/Text/Text";
import Inline from "../../design/primitives/Inline/Inline";
import { Heading } from "../../design/primitives/Heading/Heading";
import Stack from "../../design/primitives/Stack/Stack";

// ─── STYLED COMPONENTS ───────────────────────────────────────────────────────

const TableWrapper = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-brand-light);
  box-shadow: var(--shadow-md);
  position: relative;
`;

const Title = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-brand-primary);
  margin: 0;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: var(--color-brand-muted);
  font-size: 2rem;
  pointer-events: none;
`;

const BulkActionBar = styled.div<{ $visible: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
  background: var(--color-brand-primary);
  color: var(--color-brand-secondary);
  border-bottom: 1px solid
    color-mix(in oklch, var(--color-brand-secondary) 30%, transparent);
  transform: translateY(${(props) => (props.$visible ? "0" : "-100%")});
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s;
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
`;

const BulkActionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const BulkCountBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-brand-secondary);
  color: var(--color-brand-primary);
  font-size: 12px;
  font-weight: 700;
`;

const BulkText = styled.span`
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const BulkActionRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const BulkButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const BulkDivider = styled.div`
  width: 1px;
  height: 16px;
  background: color-mix(
    in oklch,
    var(--color-brand-secondary) 20%,
    transparent
  );
`;

const TableScroll = styled.div`
  overflow: auto;
  max-height: 65vh;
  position: relative;
  z-index: 2;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: var(--text-sm);
  min-width: 900px;
`;

const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  z-index: ${zIndex.raised};
  background: var(--color-brand-background);
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
`;

const HeaderRow = styled.tr`
  font-size: var(--text-xs);
  color: var(--color-brand-secondary);
  font-weight: 700;
`;
const ThBase = styled.th<{ $border?: boolean; $highlight?: boolean }>`
  padding: var(--space-4) var(--space-6);
  border-right: ${(props) =>
    props.$border
      ? "1px solid color-mix(in oklch, var(--color-border-base) 30%, transparent)"
      : "none"};
  background: ${(props) =>
    props.$highlight
      ? "color-mix(in oklch, var(--color-brand-primary) 5%, transparent)"
      : "inherit"};
  color: ${(props) =>
    props.$highlight ? "var(--color-brand-primary)" : "inherit"};
`;

const ThSortButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: inherit;
  font: inherit;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    color: var(--color-brand-primary);
  }

  ${(props) =>
    props.$active &&
    css`
      color: var(--color-brand-primary);
    `}
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid var(--color-border-base);
    transition: background 0.2s;
  }
  tr:hover {
    background: var(--color-brand-background);
  }
  tr[data-selected="true"] {
    background: color-mix(in oklch, var(--color-brand-success) 5%, transparent);
  }
`;

const TdBase = styled.td<{
  $border?: boolean;
  $highlight?: boolean;
  $sticky?: boolean;
}>`
  padding: var(--space-4) var(--space-6);
  border-right: ${(props) =>
    props.$border
      ? "1px solid color-mix(in oklch, var(--color-border-base) 30%, transparent)"
      : "none"};
  background: ${(props) =>
    props.$highlight
      ? "color-mix(in oklch, var(--color-brand-primary) 5%, transparent)"
      : "inherit"};
  position: ${(props) => (props.$sticky ? "sticky" : "inherit")};
  right: ${(props) => (props.$sticky ? "0" : "auto")};
  z-index: ${(props) => (props.$sticky ? zIndex.base : "auto")};

  /* Update sticky cell background on row hover */

  tr[data-selected="true"] &:not([data-sticky]) {
    /* Don't override sticky right column background if selected */
  }
`;
const ActionCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
`;

const ActionIconButton = styled.button<{ $danger?: boolean }>`
  color: var(--color-text-secondary);
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) =>
      props.$danger
        ? "var(--color-brand-error)"
        : "var(--color-brand-primary)"};
  }
`;

const SkeletonPulse = styled.div`
  height: 16px;
  border-radius: var(--radius-sm);
  background: linear-gradient(
    90deg,
    var(--color-brand-background) 25%,
    var(--color-border-base) 50%,
    var(--color-brand-background) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-base);
`;

const ColumnVisibilityMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 200px;
  padding: var(--space-3);
  background: var(--color-brand-light);
  border: 1px solid var(--color-border-base);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: ${zIndex.dropdown};
`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function DataTable<TData extends Record<string, unknown>>(
  props: DataTableProps<TData>
): React.ReactElement {
  const {
    title,
    columns,
    rows,
    pagination,
    sort,
    onSortChange,
    globalSearch,
    onGlobalSearchChange,
    selectedRowIds,
    onSelectedRowIdsChange,
    getRowId,
    onPageChange,
    rowActions,
    bulkActions,
    columnVisibility,
    onColumnVisibilityChange,
    loading,
    emptyState,
  } = props;

  const [colMenuOpen, setColMenuOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setColMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const debouncedSearch = useMemo(
    () => debounce((val: string) => onGlobalSearchChange(val), 300),
    [onGlobalSearchChange]
  );

  const visibleColumns = useMemo(
    () => columns.filter((c) => columnVisibility[c.field] !== false),
    [columns, columnVisibility]
  );

  const totalPages = getPageCount(pagination.total, pagination.pageSize);
  const selectedCount = selectedRowIds.size;

  const handleToggleAll = () => {
    if (selectedCount === rows.length && rows.length > 0) {
      onSelectedRowIdsChange(new Set());
    } else {
      const next = new Set(selectedRowIds);
      rows.forEach((r) => next.add(getRowId(r)));
      onSelectedRowIdsChange(next);
    }
  };

  const handleSort = (field: Extract<keyof TData, string>, multi: boolean) => {
    onSortChange(getNextSortState({ current: sort, field, multi }));
  };

  const startIndex = (pagination.page - 1) * pagination.pageSize + 1;
  const endIndex = Math.min(
    pagination.page * pagination.pageSize,
    pagination.total
  );

  return (
    <TableWrapper ref={rootRef}>
      {/* TOOLBAR */}
      <Inline
        px={5}
        mt={5}
        pb={2}
        fullWidth
        justify="space-between"
        align="center"
      >
        {title && <Title>{title}</Title>}
        <Inline spacing={4} justify="flex-end">
          <div style={{ position: "relative" }}>
            <SearchIcon aria-hidden="true" />
            <Input
              py={2}
              rounded="md"
              placeholder="Search cabins..."
              value={globalSearch}
              onChange={(e) => {
                onGlobalSearchChange(e.target.value);
                debouncedSearch(e.target.value);
              }}
              aria-label="Search"
            />
            {globalSearch && (
              <Button
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                leftIcon={<FiX size={16} />}
                appearance="link"
                onClick={() => onGlobalSearchChange("")}
              ></Button>
            )}
          </div>

          <div style={{}}>
            <Button
              colorScheme="primary"
              appearance="outline"
              size="xs"
              rounded="md"
              py={2}
              px={3}
              leftIcon={<FiLayout size={18}/>}
              onClick={() => setColMenuOpen(!colMenuOpen)}
            >
              Columns
            </Button>
            {colMenuOpen && (
              <ColumnVisibilityMenu>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--color-brand-muted)",
                    marginBottom: 8,
                    padding: "0 4px",
                  }}
                >
                  Visibility
                </div>
                {columns.map((col) => (
                  <label
                    key={col.field}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 4px",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={columnVisibility[col.field] !== false}
                      onChange={(e) =>
                        onColumnVisibilityChange({
                          ...columnVisibility,
                          [col.field]: e.target.checked,
                        })
                      }
                    />
                    <span style={{ fontWeight: 500 }}>{col.label}</span>
                  </label>
                ))}
              </ColumnVisibilityMenu>
            )}
          </div>
        </Inline>
      </Inline>

      {/* TABLE */}
      <TableScroll>
        <BulkActionBar $visible={selectedCount > 0 && !!bulkActions?.length}>
          <BulkActionLeft>
            <BulkCountBadge>{selectedCount}</BulkCountBadge>
            <BulkText>CABINS SELECTED</BulkText>
          </BulkActionLeft>
          <BulkActionRight>
            {bulkActions?.map((action) => (
              <BulkButton
                key={action.label}
                onClick={() =>
                  action.onClick(
                    rows.filter((r) => selectedRowIds.has(getRowId(r)))
                  )
                }
              >
                {action.icon} {action.label}
              </BulkButton>
            ))}
            <BulkDivider />
            <BulkButton onClick={() => onSelectedRowIdsChange(new Set())}>
              Clear Selection
            </BulkButton>
          </BulkActionRight>
        </BulkActionBar>

        <StyledTable role="grid" aria-busy={loading.isLoading}>
          <TableHeader>
            <HeaderRow>
              <ThBase style={{ width: 48 }}>
                <input
                  type="checkbox"
                  checked={selectedCount > 0 && selectedCount === rows.length}
                  onChange={handleToggleAll}
                  style={{
                    width: 16,
                    height: 16,
                    accentColor: "var(--color-brand-primary)",
                  }}
                />
              </ThBase>
              {visibleColumns.map((col) => {
                const sortIndex = sort.findIndex((s) => s.field === col.field);
                const activeSort = sortIndex > -1 ? sort[sortIndex] : null;
                return (
                  <ThBase key={col.field} $border>
                    {col.sortable ? (
                      <ThSortButton
                        type="button"
                        $active={!!activeSort}
                        onClick={(e) => handleSort(col.field, e.shiftKey)}
                      >
                        {col.label}
                        {activeSort && (
                          <span style={{ display: "inline-flex" }}>
                            {activeSort.direction === "asc" ? (
                              <HiChevronUp />
                            ) : (
                              <HiChevronDown />
                            )}
                          </span>
                        )}
                      </ThSortButton>
                    ) : (
                      col.label
                    )}
                  </ThBase>
                );
              })}
              {rowActions && (
                <ThBase
                  style={{
                    position: "sticky",
                    right: 0,
                    background: "var(--color-brand-background)",
                    textAlign: "center",
                  }}
                >
                  Actions
                </ThBase>
              )}
            </HeaderRow>
          </TableHeader>
          <TableBody>
            {loading.isLoading ? (
              getSkeletonRows(5).map((i) => (
                <tr key={`skeleton-${i}`}>
                  <TdBase style={{ width: 48 }}>
                    <SkeletonPulse style={{ width: 16, height: 16 }} />
                  </TdBase>
                  {visibleColumns.map((col, idx) => (
                    <TdBase
                      key={col.field}
                      $border
                      $highlight={col.field === "base_price"}
                    >
                      <SkeletonPulse
                        style={{ width: idx === 0 ? "12rem" : "4rem" }}
                      />
                    </TdBase>
                  ))}
                  {rowActions && (
                    <TdBase $sticky>
                      <SkeletonPulse
                        style={{ width: "3rem", margin: "0 auto" }}
                      />
                    </TdBase>
                  )}
                </tr>
              ))
            ) : rows.length === 0 ? (
              <tr>
                <TdBase
                  colSpan={visibleColumns.length + (rowActions ? 2 : 1)}
                  style={{ padding: "60px 0", textAlign: "center" }}
                >
                  <Stack align="center">
                    <div
                      style={{
                        fontSize: 40,
                        color: "var(--color-brand-primary)",
                      }}
                    >
                      {emptyState.icon}
                    </div>
                    <Stack align="center">
                      <Heading textAlign="center" level={2}>
                        {emptyState.title}
                      </Heading>
                      <Text as="p" textColor="muted" fontFamily="primary">
                        {emptyState.description}
                      </Text>
                    </Stack>
                  </Stack>
                </TdBase>
              </tr>
            ) : (
              rows.map((row) => {
                const id = getRowId(row);
                const isSelected = selectedRowIds.has(id);

                return (
                  <tr key={id} data-selected={isSelected}>
                    <TdBase style={{ width: 48 }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {
                          const next = new Set(selectedRowIds);
                          if (next.has(id)) next.delete(id);
                          else next.add(id);
                          onSelectedRowIdsChange(next);
                        }}
                        style={{
                          width: 16,
                          height: 16,
                          accentColor: "var(--color-brand-primary)",
                        }}
                      />
                    </TdBase>
                    {visibleColumns.map((col) => (
                      <TdBase
                        key={col.field}
                        $border
                        $highlight={col.field === "base_price"}
                      >
                        {col.render ? (
                          col.render(row)
                        ) : col.type === "badge" ? (
                          row[col.field] ? (
                            <Badge>{String(row[col.field])}</Badge>
                          ) : (
                            "—"
                          )
                        ) : col.type === "number" ? (
                          formatNumber(row[col.field], col.formatNumber)
                        ) : col.type === "date" ? (
                          formatDate(String(row[col.field]), col.formatDate)
                        ) : (
                          String(row[col.field] ?? "—")
                        )}
                      </TdBase>
                    ))}
                    {rowActions && (
                      <TdBase $sticky>
                        <ActionCell>
                          {rowActions.onEdit && (
                            <ActionIconButton
                              onClick={() => rowActions.onEdit?.(row)}
                            >
                              <FiEdit2 size={20} />
                            </ActionIconButton>
                          )}
                          {rowActions.onDelete && (
                            <ActionIconButton
                              $danger
                              onClick={() => rowActions.onDelete?.(row)}
                            >
                              <FiTrash2 size={20} />
                            </ActionIconButton>
                          )}
                        </ActionCell>
                      </TdBase>
                    )}
                  </tr>
                );
              })
            )}
          </TableBody>
        </StyledTable>
      </TableScroll>

      {/* PAGINATION */}
      <Pagination>
        <Text
          fontFamily="primary"
          textColor="muted"
          fontSize="sm"
          letterSpacing="wide"
        >
          Showing{" "}
          <span
            style={{ fontWeight: 700, color: "var(--color-brand-secondary)" }}
          >
            {pagination.total > 0 ? startIndex : 0}
          </span>{" "}
          to{" "}
          <span
            style={{ fontWeight: 700, color: "var(--color-brand-secondary)" }}
          >
            {endIndex}
          </span>{" "}
          of{" "}
          <span
            style={{ fontWeight: 700, color: "var(--color-brand-secondary)" }}
          >
            {pagination.total}
          </span>{" "}
          cabins
        </Text>

        <Inline spacing={2}>
          <Button
            appearance="outline"
            rounded="lg"
            onClick={() => onPageChange(pagination.page - 1)}
            disabled={pagination.page <= 1}
            style={{ paddingInline: "1.1rem", paddingBlock: "1.1rem" }}
          >
            <FiArrowLeft size={18} />
          </Button>

          {/* Simple page numbers: 1, 2, 3 (can be expanded) */}
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(
            (p) => (
              <Button
                key={p}
                fontSize="sm"
                rounded="lg"
                style={{
                  paddingInline: "1.7rem",
                  paddingBlock: "1rem",
                  cursor: "initial",
                  backgroundColor:
                    p === pagination.page
                      ? "var(--color-brand-primary)"
                      : "var(--color-brand-muted)",
                }}
                onClick={() => onPageChange(p)}
              >
                {p}
              </Button>
            )
          )}

          <Button
            onClick={() => onPageChange(pagination.page + 1)}
            rounded="lg"
            appearance="outline"
            disabled={pagination.page >= totalPages || pagination.total === 0}
            style={{ paddingInline: "1.1rem", paddingBlock: "1.1rem" }}
          >
            <FiArrowRight size={18} />
          </Button>
        </Inline>
      </Pagination>
    </TableWrapper>
  );
}

export default DataTable;
