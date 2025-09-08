"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LogOut, Menu, Triangle } from "lucide-react";
import { TSideBarState } from "@/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

type NavItem = {
  label: string;
  path: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  auth?: string[]; // roles allowed
};

type User = {
  avatar?: string;
  name: string;
  role: string;
};

type SidebarProps = {
  navigation: NavItem[];
  user: User;
  logoUrl?: string;
  title?: string;
  onLogout?: () => void;
  sidebarMode: TSideBarState;
  setSidebarMode?: (mode: TSideBarState) => void;
  isMobile: boolean;
};

export default function Sidebar({
  navigation,
  user,
  logoUrl = "/logo.png",
  title = "App Title",
  onLogout,
  sidebarMode,
  isMobile,
  setSidebarMode,
}: SidebarProps) {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const pathname = usePathname();
  const [tooltip, setTooltip] = useState<{ label: string; top: number } | null>(
    null
  );

  return (
    <>
      <div
        className={clsx(
          "-mt-10 fixed h-screen inset-0 z-40 transition-opacity duration-300 bg-black/40", // backdrop
          {
            "opacity-100 visible": sidebarMode === "full" && isMobile,
            "opacity-0 invisible": !(sidebarMode === "full" && isMobile),
          }
        )}
        onClick={() => setSidebarMode?.("hidden")}
      />

      {/* overlay */}
      <aside
        className={clsx(
          "overflow-visible flex flex-col bg-primary-foreground text-white h-screen shadow-lg transition-all duration-300 ease-in-out z-50",
          {
            "w-64": sidebarMode === "full" && !isMobile,
            "w-56": sidebarMode === "full" && isMobile,
            "w-16": sidebarMode === "compact",
            "w-0 invisible": sidebarMode === "hidden",
          },
          isMobile ? "fixed top-0 left-0" : "relative"
        )}
      >
        <div
          className={clsx(
            "flex items-center h-16 relative border-b border-r border-border",
            sidebarMode === "compact" ? "justify-center px-2" : "px-4"
          )}
        >
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
          {sidebarMode === "full" && (
            <h1 className="ml-3 text-xl font-semibold whitespace-nowrap">
              {title}
            </h1>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto mt-1 px-1.5 relative">
          <ul>
            {navigation.map(({ label, path, icon: Icon, auth }, idx) => {
              const isAuthorized =
                !auth || auth.length === 0 || auth.includes(user.role);

              if (!isAuthorized) return null;

              const isActive = pathname === path;

              return (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li key={idx} className="relative group my-1">
                      <Link
                        href={path}
                        className={clsx(
                          "flex items-center rounded hover:bg-primary/80 hover:border-r-6 hover:border-secondary hover:text-secondary-foreground transition-colors duration-150 px-4",
                          sidebarMode === "compact"
                            ? "justify-center"
                            : "justify-start",
                          isActive
                            ? "bg-primary text-primary-foreground border-l-6 pl-2 border-secondary"
                            : "text-secondary",
                          isMobile ? "py-1 text-sm" : "py-3 "
                        )}
                        onMouseEnter={(e) => {
                          const rect = (
                            e.currentTarget as HTMLElement
                          ).getBoundingClientRect();
                          setTooltip({
                            label,
                            top: rect.top + rect.height / 2,
                          });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        onClick={() => isMobile && setSidebarMode?.("hidden")}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                        {sidebarMode === "full" && (
                          <span className="ml-3 whitespace-nowrap">
                            {label}
                          </span>
                        )}
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    className={sidebarMode !== "compact" ? "hidden" : ""}
                    side="right"
                  >
                    {label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <footer
          className={clsx(
            "border-t border-border bg-background py-2 flex items-center",
            sidebarMode === "compact" ? "justify-center" : "space-x-3 px-4"
          )}
        >
          <Tooltip>
            <TooltipTrigger>
              <img
                src={
                  user.avatar ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNd2LZxcvUCyW1N5UVQJ9fejpX2Yf3oW4aA&s"
                }
                alt="User Avatar"
                className={clsx(
                  "rounded-full",
                  sidebarMode === "compact" ? "w-10 h-10" : "w-12 h-12"
                )}
              />
            </TooltipTrigger>
            {sidebarMode === "full" && (
              <>
                <div className="flex-1 text-secondary overflow-hidden">
                  <p className="text-sm font-semibold truncate">{user.name}</p>
                  <p className="text-xs text-secondary/40 truncate">
                    {user.role}
                  </p>
                </div>
                <Button>
                  <LogOut className="w-4 h-4 text-primary-foreground" />
                </Button>
              </>
            )}
            <TooltipContent
              side="right"
              className={`${sidebarMode === "compact" ? "p-0 ml-2" : "hidden"}`}
            >
              <Button
                size={"sm"}
                className="flex items-center hover:cursor-pointer"
              >
                Logout
                <LogOut className="w-3 h-3 text-primary-foreground" />
              </Button>
            </TooltipContent>
          </Tooltip>
        </footer>
      </aside>
    </>
  );
}
