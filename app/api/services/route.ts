import { NextResponse } from "next/server"
import { mockServices } from "@/lib/mock-data"
import type { ApiResponse, Service } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const published = searchParams.get("published")

  let filteredServices = mockServices

  if (category) {
    filteredServices = filteredServices.filter((service) => service.category === category)
  }

  if (published !== null) {
    const isPublished = published === "true"
    filteredServices = filteredServices.filter((service) => service.published === isPublished)
  }

  const response: ApiResponse<Service[]> = {
    data: filteredServices,
    success: true,
    message: "Services retrieved successfully",
  }

  return NextResponse.json(response)
}
