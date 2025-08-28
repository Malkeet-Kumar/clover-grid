import { NextResponse } from "next/server"
import { mockPortfolio } from "@/lib/mock-data"
import type { ApiResponse, Portfolio } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")
  const limit = searchParams.get("limit")

  let filteredPortfolio = mockPortfolio

  if (category) {
    filteredPortfolio = filteredPortfolio.filter((item) => item.category === category)
  }

  if (featured !== null) {
    const isFeatured = featured === "true"
    filteredPortfolio = filteredPortfolio.filter((item) => item.featured === isFeatured)
  }

  if (limit) {
    const limitNum = Number.parseInt(limit)
    filteredPortfolio = filteredPortfolio.slice(0, limitNum)
  }

  const response: ApiResponse<Portfolio[]> = {
    data: filteredPortfolio,
    success: true,
    message: "Portfolio items retrieved successfully",
  }

  return NextResponse.json(response)
}
