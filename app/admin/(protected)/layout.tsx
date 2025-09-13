"use client";
import ProtectedGuard from "@/components/auth-guard";
import Sidebar from "@/components/sidebar";
import { useStore } from "@/hooks";
import { BriefcaseBusiness, Home, LayoutDashboard } from "lucide-react";
import { observer } from "mobx-react-lite";

const AdminLayout = ({ children }: any) => {
  const store = useStore();

  const navigations = [
    {
      label: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
      auth: ["Admin"],
    },
    {
      label: "Manage Services",
      path: "/admin/services",
      icon: Home,
      auth: ["Admin"],
    },
    {
      label: "Manage Jobs",
      path: "/admin/jobs",
      icon: BriefcaseBusiness,
      auth: ["Admin"],
    },
    {
      label: "Manage Portfolio",
      path: "/admin/portfolio",
      icon: BriefcaseBusiness,
      auth: ["Admin"],
    },
    {
      label: "Manage Pricing",
      path: "/admin/pricing",
      icon: BriefcaseBusiness,
      auth: ["Admin"],
    },
  ];

  return (
    <>
      <ProtectedGuard>
        <div className="flex h-screen">
          <div>
            <Sidebar
              isMobile={store.ui.isMobile}
              navigation={navigations}
              sidebarMode={store.ui.sidebarMode}
              title="SARU CODER"
              user={{
                name: "Admin",
                role: "Admin",
                avatar: "",
              }}
              logoUrl={"/emblem.svg"}
              onLogout={() => {}}
              setSidebarMode={(mode) => store.ui.setSidebar(mode)}
            />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </ProtectedGuard>
    </>
  );
};

export default observer(AdminLayout);
