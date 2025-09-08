import { useContext } from "react";
import { StoreContext } from "@/contexts/store-context";
import { RootStore } from "@/stores/root-store";

export const useStore = (): RootStore => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore: hook must be used inside StoreProvider!");
  }

  return context as RootStore;
};
