"use client";

import { useStore } from "@/hooks";
import { HeaderProps } from "@/types";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header({
  title = "title",
  breadcrumb = [],
  actions = null,
}: HeaderProps) {
  const { ui } = useStore();

  return (
    <header className="bg-white border-b border-gray-200 px-2 py-1.5 flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-40">
      <div className="flex-1 flex items-center gap-4">
        <div className="flex items-center">
          <Button
            size="sm"
            onClick={() => {
              ui.isMobile
                ? ui.toggleSidebar()
                : ui.setSidebar(ui.sidebarMode === "full" ? "compact" : "full");
            }}
            className="p-2 text-primary-foreground"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          {breadcrumb.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex items-center text-sm text-gray-500 mt-1 space-x-2"
            >
              {breadcrumb.map((item, idx) => {
                const isLast = idx === breadcrumb.length - 1;
                return (
                  <div key={idx} className="flex items-center">
                    {!isLast && item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-gray-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? "page" : undefined}>
                        {item.label}
                      </span>
                    )}
                    {!isLast && (
                      <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
      {actions && <div className="mt-3 md:mt-0 hidden md:block">{actions}</div>}
    </header>
  );
}
