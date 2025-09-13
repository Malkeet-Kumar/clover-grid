import { NextResponse } from "next/server"
import { mockPricePlans } from "@/lib/mock-data"
import type { ApiResponse, PricePlan } from "@/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const popular = searchParams.get("popular")

  let filteredPlans = mockPricePlans.filter((plan) => plan.published)

  if (category) {
    filteredPlans = filteredPlans.filter((plan) => plan.category === category)
  }

  if (popular !== null) {
    const isPopular = popular === "true"
    filteredPlans = filteredPlans.filter((plan) => plan.popular === isPopular)
  }

  const response: ApiResponse<PricePlan[]> = {
    data: filteredPlans,
    success: true,
    message: "Pricing plans retrieved successfully",
  }

  return NextResponse.json(response)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, you would save to database
    const newPlan: PricePlan = {
      id: Date.now().toString(),
      ...body,
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const response: ApiResponse<PricePlan> = {
      data: newPlan,
      success: true,
      message: "Pricing plan created successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create pricing plan" }, { status: 500 })
  }
}
