import { NextRequest, NextResponse } from "next/server";
import type { ApiResponse, Service } from "@/types";
import { ServiceModel } from "@/models/Service";
import { paginate } from "@/lib/generic-api";
import { connectDB } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const published = searchParams.get("published");
    const all = searchParams.get("all");
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    let query: Record<string, any> = {};

    if (all !== "true") {
      if (published !== null) query.published = published === "true";
      if (category !== null && category !== "all") query.category = category;
    }

    const result: ApiResponse<Service[]> = await paginate(ServiceModel, query, {
      page,
      limit,
      sort: { createdAt: -1 },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { _id, ...body } = await req.json();
    const job = await ServiceModel.create(body);

    const response: ApiResponse<Service> = {
      data: job,
      success: true,
      message: "Service created!",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { _id, ...body } = await req.json();
    const job = await ServiceModel.updateOne({ _id }, { ...body });

    const response: ApiResponse<number> = {
      success: job.modifiedCount > 0,
      data: job.modifiedCount,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { _id } = await req.json();
    const job = await ServiceModel.deleteOne({ _id });

    const response: ApiResponse<number> = {
      success: job.deletedCount > 0,
      data: job.deletedCount,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
