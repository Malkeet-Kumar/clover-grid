import UIStore from "./ui-store";
import AuthStore from "./auth-store";

export class RootStore {
  ui: UIStore;
  auth: AuthStore;
  constructor() {
    this.ui = new UIStore();
    this.auth = new AuthStore();
  }
}

let store: RootStore | null = null;

export function initializeStore() {
  const _store = store ?? new RootStore();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return store;
}
