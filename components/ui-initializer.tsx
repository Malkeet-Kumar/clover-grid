"use client"
import { useEffect } from "react";
import { useMediaQuery, useStore } from "@/hooks";
/**
 * Headless component to initialize UIStore with media query flags
 */
export const UIInitializer = () => {
  const isMobile = useMediaQuery("mobile");
  const isTab = useMediaQuery("tab");
  const isPc = useMediaQuery("pc");
  const store = useStore();

  useEffect(() => {
    store.ui.setDeviceFlags({
      isMobile,
      isTab,
      isPc,
    });
    console.info("Device Flag Initialization Complete")
  }, [isMobile, isTab, isPc]);

  return null;
};
