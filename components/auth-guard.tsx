"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks";
import { observer } from "mobx-react-lite";

function ProtectedGuard({ children }: any) {
  const router = useRouter();
  const { auth } = useStore();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.replace("/admin/login");
    }
  }, [auth.isAuthenticated]);

  if (!auth.isAuthenticated) return null;

  return children;
}

export default observer(ProtectedGuard);
