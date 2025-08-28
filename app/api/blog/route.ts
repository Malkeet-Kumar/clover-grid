import { NextResponse } from "next/server"
import { mockBlogPosts } from "@/lib/mock-data"
import type { ApiResponse, BlogPost } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")
  const limit = searchParams.get("limit")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const pageLimit = Number.parseInt(searchParams.get("limit") || "10")

  let filteredPosts = mockBlogPosts.filter((post) => post.published)

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  if (featured !== null) {
    const isFeatured = featured === "true"
    filteredPosts = filteredPosts.filter((post) => post.featured === isFeatured)
  }

  // Pagination
  const startIndex = (page - 1) * pageLimit
  const endIndex = startIndex + pageLimit
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const response: ApiResponse<BlogPost[]> = {
    data: paginatedPosts,
    success: true,
    message: "Blog posts retrieved successfully",
    pagination: {
      page,
      limit: pageLimit,
      total: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / pageLimit),
    },
  }

  return NextResponse.json(response)
}
