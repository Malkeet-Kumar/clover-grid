"use client";
import { BreadcrumbItem } from "@/types";
import Header from "./header";

interface IAdminPageLayoutProps {
  children?: any;
  title: string;
  breadcrumb?: BreadcrumbItem[];
  actions?: React.ReactNode[] | null;
}

export const AdminPageLayout = ({
  children,
  actions = null,
  breadcrumb,
  title,
}: IAdminPageLayoutProps) => {
  return (
    <div className="h-screen flex-1 flex flex-col overflow-auto">
      <Header title={title} breadcrumb={breadcrumb} actions={actions} />
      <main id="content" className="flex-1 bg-gray-100 overflow-auto p-2 w-full">
        {children}
      </main>
    </div>
  );
};
