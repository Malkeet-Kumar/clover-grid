"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ITableCol } from "@/types";
import { cn } from "@/lib/utils";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface DataTableProps<T> {
  data: T[];
  columns: ITableCol<T>[];
  caption?: string;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  onSortChange?: (key: string, order: "asc" | "desc") => void;
  page?: number;
  limit?: number;
  totalPages?: number;
  totalDocs?: number;
  loading?: boolean;
  className?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  caption,
  onPageChange,
  onLimitChange,
  onSortChange,
  page = 1,
  limit = 10,
  totalPages = 1,
  totalDocs = 0,
  loading = false,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  function handleSort(col: ITableCol<T>) {
    if (!col.sortable) return;

    const key = col.sortKey || String(col.key);
    let order: "asc" | "desc" = "asc";

    if (sortKey === key && sortOrder === "asc") order = "desc";

    setSortKey(key);
    setSortOrder(order);
    onSortChange?.(key, order);
  }

  return (
    <div
      className={cn(
        "flex-1 w-full min-h-[90dvh] bg-primary-foreground overflow-auto rounded-md px-2 pb-2 flex flex-col",
        className
      )}
    >
      <div className="flex-1">
        <Table className="w-full table-auto">
          <TableHeader>
            <TableRow className="">
              {columns.map((col) => {
                const key = col.sortKey || String(col.key);
                const isActive = sortKey === key;
                return (
                  <TableHead
                    key={String(col.key)}
                    className={cn(
                      col.className,
                      "text-left",
                      data.length === 0
                        ? "w-[calc(100%/_" + columns.length + ")]"
                        : ""
                    )}
                    onClick={() => handleSort(col)}
                  >
                    <div className="flex items-center gap-1">
                      {col.header}
                      {col.sortable &&
                        (isActive ? (
                          sortOrder === "asc" ? (
                            <ArrowUp size={14} />
                          ) : (
                            <ArrowDown size={14} />
                          )
                        ) : (
                          <ArrowUpDown size={14} className="opacity-50" />
                        ))}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col) => (
                    <TableCell
                      key={String(col.key)}
                      className={cn(col.className, "max-w-[250px] truncate")}
                    >
                      {col.render
                        ? col.render(row[col.key as keyof T], row, rowIndex)
                        : String(row[col.key as keyof T] ?? "")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {data.length} of {totalDocs} records
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="bg-accent"
            size="sm"
            disabled={page <= 1}
            onClick={() => onPageChange?.(page - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm">
            Page {page} / {totalPages}
          </span>
          <Button
            variant="outline"
            className="bg-accent"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => onPageChange?.(page + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div>
            <Select
              onValueChange={(val) => onLimitChange?.(Number(val))}
              value={String(limit)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 20, 50].map((n) => (
                  <SelectItem value={String(n)}>{n} / page</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
