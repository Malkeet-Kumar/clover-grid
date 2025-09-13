import { NextResponse } from "next/server";
import { teamMembers } from "@/lib/mock-data";
import type { ApiResponse, PricePlan } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");

  const response: ApiResponse<any[]> = {
    data: teamMembers,
    success: true,
    message: "Pricing plans retrieved successfully",
  };

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In a real application, you would save to database
    const newPlan: PricePlan = {
      id: Date.now().toString(),
      ...body,
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<PricePlan> = {
      data: newPlan,
      success: true,
      message: "Pricing plan created successfully",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create pricing plan" },
      { status: 500 }
    );
  }
}
