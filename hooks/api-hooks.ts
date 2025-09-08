import { useState } from "react";
import { fetchApi } from "@/lib";
import type { HookState, HookConfig, Pagination, ApiResponse } from "@/types";

type PaginatedData<T> = {
  data: T;
  pagination?: Pagination;
};

type GetHookReturn<T, P extends boolean> = [
  HookState,
  P extends true ? PaginatedData<T> : T,
  {
    fetchData: (config?: HookConfig) => Promise<void>;
    setData: React.Dispatch<
      React.SetStateAction<P extends true ? PaginatedData<T> : T>
    >;
  }
];

function useBaseHook<T>(initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [state, setState] = useState<HookState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const setLoading = () =>
    setState({ isLoading: true, isSuccess: false, isError: false });
  const setSuccess = (message: string | boolean | null = true) =>
    setState({ isLoading: false, isSuccess: message, isError: false });
  const setError = (error: string | boolean | null = true) =>
    setState({ isLoading: false, isSuccess: false, isError: error });

  return { data, setData, state, setLoading, setSuccess, setError };
}

export function useGet<T, P extends boolean = false>(
  endpoint: string,
  initialData: P extends true ? PaginatedData<T> : T,
  paginated?: P
): GetHookReturn<T, P> {
  const { data, setData, state, setLoading, setSuccess, setError } =
    useBaseHook<typeof initialData>(initialData);

  const fetchData = async (config?: HookConfig) => {
    try {
      setLoading();
      const result = await fetchApi<T>(endpoint, "GET", undefined, config);

      if (result.success) {
        if (paginated) {
          setData({
            data: result.data,
            pagination: result.pagination,
          } as any);
        } else {
          setData(result.data as any);
        }
        setSuccess(result.message);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return [
    state,
    data,
    {
      fetchData,
      setData,
    },
  ] as GetHookReturn<T, P>;
}
// usePost
export function usePost<T>(endpoint: string, initialData: T) {
  const { data, setData, state, setLoading, setSuccess, setError } =
    useBaseHook<T>(initialData);

  const postData = async (body: object, config?: HookConfig) => {
    try {
      setLoading();
      const result = await fetchApi<T>(endpoint, "POST", body, config);
      setData(result.data);
      setSuccess();
    } catch (err) {
      setError();
    }
  };

  return [
    state,
    data,
    {
      postData,
    },
  ] as const;
}

// usePut
export function usePut<T>(endpoint: string, initialData: T) {
  const { data, setData, state, setLoading, setSuccess, setError } =
    useBaseHook<T>(initialData);

  const putData = async (body: object, config?: HookConfig) => {
    try {
      setLoading();
      const result = await fetchApi<T>(endpoint, "PUT", body, config);
      setData(result.data);
      setSuccess();
    } catch (err) {
      setError();
    }
  };

  return [
    state,
    data,
    {
      putData,
    },
  ] as const;
}

// useDelete
export function useDelete<T>(endpoint: string, initialData: T) {
  const { data, setData, state, setLoading, setSuccess, setError } =
    useBaseHook<T>(initialData);

  const deleteData = async (body?: object, config?: HookConfig) => {
    try {
      setLoading();
      const result = await fetchApi<T>(endpoint, "DELETE", body, config);
      setData(result.data);
      setSuccess();
    } catch (err) {
      setError();
    }
  };

  return [
    state,
    data,
    {
      deleteData,
    },
  ] as const;
}
