import { TSideBarState } from "@/types";
import { makeAutoObservable, runInAction } from "mobx";

const LOCAL_STORAGE_KEY = "UI_STORE";

class UIStore {
  darkMode = false;
  sideBarState: TSideBarState = "full";
  isMobile: boolean = false;
  isPc: boolean = false;
  isTab: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!saved) return;

      const parsed = JSON.parse(saved);
      runInAction(() => {
        if (typeof parsed.darkMode === "boolean")
          this.darkMode = parsed.darkMode;
        if (["full", "compact", "hidden"].includes(parsed.sideBarState)) {
          this.sideBarState = parsed.sideBarState;
        }
      });
      console.info("UIStore initialized!");
    } catch (error) {
      console.warn("Failed to load UIStore from localStorage:", error);
    }
  }

  persist() {
    if (typeof window === "undefined") return;

    try {
      const data = {
        darkMode: this.darkMode,
        sideBarState: this.sideBarState,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn("Failed to save UIStore to localStorage:", error);
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.persist();
  }

  toggleSidebar() {
    runInAction(() => {
      this.sideBarState = this.sideBarState === "hidden" ? "full" : "hidden";
    });
    console.log("trying toggling", this.sidebarMode)
  }

  setSidebar(state: TSideBarState) {
    if (["full", "compact", "hidden"].includes(state)) {
      this.sideBarState = state;
      this.persist();
    }
  }

  setDeviceFlags({
    isTab,
    isMobile,
    isPc,
  }: {
    isTab: boolean;
    isMobile: boolean;
    isPc: boolean;
  }) {
    runInAction(() => {
      this.isMobile = isMobile;
      this.isTab = isTab;
      this.isPc = isPc;
    });
    console.info("Device Flags updated!");
    console.info("Mobile->", isMobile);
    console.info("Tab->", isTab);
    console.info("Pc->", isPc);
  }

  get theme() {
    return this.darkMode ? "dark" : "light";
  }

  get sidebarMode() {
    return this.sideBarState
  }
}

export default UIStore;
