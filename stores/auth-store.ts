import { autorun, makeAutoObservable, runInAction } from "mobx";
import { encrypt, decrypt } from "@/lib/utils";
import { constants } from "@/lib";
import { AuthState } from "@/types";

const LOCAL_STORAGE_KEY = "AUTH_STATE";

const initUser = {
  username: "",
  role: "null",
  email: "",
};

class AuthStore {
  user = { ...initUser };
  permissions = {};
  isAuthenticated = false;
  isOtpSent = false;
  authState: AuthState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
  };

  constructor() {
    makeAutoObservable(this);

    this.loadFromLocalStorage();

    autorun(() => {
      this.saveToLocalStorage();
    });
  }

  init() {
    console.log("Authstore initialised");
  }

  saveToLocalStorage() {
    if (typeof window === "undefined") return;

    try {
      const data = {
        user: this.user,
        permissions: this.permissions,
        isAuthenticated: this.isAuthenticated,
        isOtpSent: this.isOtpSent,
        authState: this.authState,
      };
      const encrypted = encrypt(data);
      if (encrypted) {
        localStorage.setItem(LOCAL_STORAGE_KEY, encrypted);
      }
    } catch (err) {
      console.warn("Failed to persist auth store:", err);
    }
  }

  loadFromLocalStorage() {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!saved) return;

      const parsed = decrypt(saved);
      if (parsed) {
        runInAction(() => {
          this.user = parsed.user || { ...initUser };
          this.permissions = parsed.permissions || {};
          this.isAuthenticated = parsed.isAuthenticated || false;
          this.isOtpSent = parsed.isOtpSent || false;
          this.authState = parsed.authState || {
            isLoading: false,
            isSuccess: false,
            isError: false,
          };
        });
      }
    } catch (error) {
      console.warn("AuthStore init failed:", error);
    }
  }

  clearPersisted() {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (err) {
      console.warn("Failed to clear persisted auth state:", err);
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    runInAction(() => {
      this.authState = { isError: false, isSuccess: false, isLoading: true };
    });

    try {
      const res = await fetch(constants.api.LOGIN, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (json.success && json.statusCode === 200) {
        runInAction(() => {
          this.authState.isSuccess = json.message || "OTP sent!";
          this.isOtpSent = true;
        });
      } else {
        this.resetWithError(json.message || json.error || "Login failed!");
      }
    } catch (error: unknown) {
      this.resetWithError((error as Error).message || "Login failed!");
    } finally {
      runInAction(() => {
        this.authState.isLoading = false;
      });
    }
  }

  async verifyOtp({ otp }: { otp: string | number }) {
    runInAction(() => {
      this.authState = { isError: false, isSuccess: false, isLoading: true };
    });

    try {
      const res = await fetch(constants.api.VERIFY_OTP, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ otp }),
      });
      const json = await res.json();
      if (res.status === 200 && json.success) {
        runInAction(() => {
          this.authState.isSuccess = json.message || "Logged in successfully";
          this.user = { ...json.data.user };
          this.permissions = { ...json.data.permissions };
          this.isAuthenticated = true;
        });
      } else {
        this.resetWithError(json.error || "OTP verification failed!");
      }
    } catch (error: unknown) {
      this.resetWithError((error as Error).message || "Error occurred!");
    } finally {
      runInAction(() => {
        this.authState.isLoading = false;
      });
    }
  }

  async logout() {
    runInAction(() => {
      this.authState = { isError: false, isSuccess: false, isLoading: true };
    });

    try {
      const res = await fetch(constants.api.LOGOUT, {
        credentials: "include",
      });
      const json = await res.json();

      if (json.success && json.statusCode === 200) {
        runInAction(() => {
          this.authState.isSuccess = "Logged out successfully!";
        });
        this.reset();
      } else {
        this.resetWithError(json.message || "Logout failed!");
      }
    } catch (error: unknown) {
      this.resetWithError((error as Error).message || "Logout failed!");
    } finally {
      runInAction(() => {
        this.authState.isLoading = false;
      });
    }
  }

  reset() {
    runInAction(() => {
      this.user = { ...initUser };
      this.permissions = {};
      this.isAuthenticated = false;
      this.isOtpSent = false;
      this.authState = { isLoading: false, isSuccess: false, isError: false };
    });
    this.clearPersisted();
  }

  resetWithError(errorMsg: string) {
    runInAction(() => {
      this.user = { ...initUser };
      this.permissions = {};
      this.authState.isError = errorMsg;
      this.isAuthenticated = false;
      this.isOtpSent = false;
    });
    this.clearPersisted();
  }

  get role() {
    return this.user.role || null;
  }

  get username() {
    return this.user.username;
  }

  get email() {
    return this.user.email;
  }
}

export default AuthStore;
