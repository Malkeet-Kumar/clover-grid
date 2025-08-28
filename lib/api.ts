import type { ApiResponse, Service, Portfolio, BlogPost, JobPost, PricePlan } from "./types"

const API_BASE_URL = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"

async function fetchApi<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
    next: { revalidate: 60 }, // Revalidate every minute
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
}

export async function getServices(category?: string): Promise<Service[]> {
  const params = new URLSearchParams()
  if (category) params.append("category", category)
  params.append("published", "true")

  const response = await fetchApi<Service[]>(`/services?${params.toString()}`)
  return response.data
}

export async function getPortfolio(options?: {
  category?: string
  featured?: boolean
  limit?: number
}): Promise<Portfolio[]> {
  const params = new URLSearchParams()
  if (options?.category) params.append("category", options.category)
  if (options?.featured !== undefined) params.append("featured", options.featured.toString())
  if (options?.limit) params.append("limit", options.limit.toString())

  const response = await fetchApi<Portfolio[]>(`/portfolio?${params.toString()}`)
  return response.data
}

export async function getBlogPosts(options?: {
  category?: string
  featured?: boolean
  limit?: number
  page?: number
}): Promise<{ posts: BlogPost[]; pagination?: any }> {
  const params = new URLSearchParams()
  if (options?.category) params.append("category", options.category)
  if (options?.featured !== undefined) params.append("featured", options.featured.toString())
  if (options?.limit) params.append("limit", options.limit.toString())
  if (options?.page) params.append("page", options.page.toString())

  const response = await fetchApi<BlogPost[]>(`/blog?${params.toString()}`)
  return { posts: response.data, pagination: response.pagination }
}

export async function getJobPosts(options?: {
  department?: string
  type?: string
  featured?: boolean
}): Promise<JobPost[]> {
  const params = new URLSearchParams()
  if (options?.department) params.append("department", options.department)
  if (options?.type) params.append("type", options.type)
  if (options?.featured !== undefined) params.append("featured", options.featured.toString())

  const response = await fetchApi<JobPost[]>(`/jobs?${params.toString()}`)
  return response.data
}

export async function getPricingPlans(category?: string): Promise<PricePlan[]> {
  const params = new URLSearchParams()
  if (category) params.append("category", category)

  const response = await fetchApi<PricePlan[]>(`/pricing?${params.toString()}`)
  return response.data
}
