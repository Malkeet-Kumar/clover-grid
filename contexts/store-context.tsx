"use client";
import React from "react";
import { createContext, useEffect } from "react";
import { initializeStore, RootStore } from "@/stores/root-store";
import { useLocalObservable } from "mobx-react-lite";

export const StoreContext = createContext<RootStore>(new RootStore());

export function StoreProvider({ children }: any) {
  const store = useLocalObservable(() => initializeStore());

  useEffect(() => {
    store.ui.init();
    store.auth.init();
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
