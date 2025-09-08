import type {
  ApiResponse,
  Service,
  Portfolio,
  BlogPost,
  JobPost,
  PricePlan,
  HookConfig,
} from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

function buildQueryString(params?: Record<string, string | number>) {
  if (!params) return "";
  const query = new URLSearchParams(params as Record<string, string>);
  return `?${query.toString()}`;
}

export async function fetchApi<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: object | FormData,
  config?: HookConfig
): Promise<ApiResponse<T>> {
  const query = buildQueryString(config?.queryParams);
  const url = `${API_BASE_URL}/api${endpoint}${query}`;

  const headers: HeadersInit = {};

  let requestBody: BodyInit | undefined = undefined;

  if (body instanceof FormData) {
    requestBody = body;
  } else if (body && config?.formData) {
    const form = new FormData();
    for (const [key, value] of Object.entries(body)) {
      form.append(key, value as any);
    }
    requestBody = form;
  } else if (body) {
    headers["Content-Type"] = "application/json";
    requestBody = JSON.stringify(body);
  }

  const response = await fetch(url, {
    method,
    headers,
    body: method === "GET" ? undefined : requestBody,
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}

export async function getServices(category?: string): Promise<Service[]> {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  params.append("published", "true");

  const response = await fetchApi<Service[]>(`/services?${params.toString()}`);
  return response.data;
}

export async function getPortfolio(options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
}): Promise<Portfolio[]> {
  const params = new URLSearchParams();
  if (options?.category) params.append("category", options.category);
  if (options?.featured !== undefined)
    params.append("featured", options.featured.toString());
  if (options?.limit) params.append("limit", options.limit.toString());

  const response = await fetchApi<Portfolio[]>(
    `/portfolio?${params.toString()}`
  );
  return response.data;
}

export async function getBlogPosts(options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
}): Promise<{ posts: BlogPost[]; pagination?: any }> {
  const params = new URLSearchParams();
  if (options?.category) params.append("category", options.category);
  if (options?.featured !== undefined)
    params.append("featured", options.featured.toString());
  if (options?.limit) params.append("limit", options.limit.toString());
  if (options?.page) params.append("page", options.page.toString());

  const response = await fetchApi<BlogPost[]>(`/blog?${params.toString()}`);
  return { posts: response.data, pagination: response.pagination };
}

export async function getJobPosts(options?: {
  department?: string;
  type?: string;
  featured?: boolean;
}): Promise<JobPost[]> {
  const params = new URLSearchParams();
  if (options?.department) params.append("department", options.department);
  if (options?.type) params.append("type", options.type);
  if (options?.featured !== undefined)
    params.append("featured", options.featured.toString());

  const response = await fetchApi<JobPost[]>(`/jobs?${params.toString()}`);
  return response.data;
}

export async function getPricingPlans(category?: string): Promise<PricePlan[]> {
  const params = new URLSearchParams();
  if (category) params.append("category", category);

  const response = await fetchApi<PricePlan[]>(`/pricing?${params.toString()}`);
  return response.data;
}
