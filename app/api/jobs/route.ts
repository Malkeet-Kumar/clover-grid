import { NextRequest, NextResponse } from "next/server";
import { JobPostModel } from "@/models/JobPost";
import { paginate } from "@/lib/generic-api";
import { connectDB } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const published = searchParams.get("published");
    const featured = searchParams.get("featured");
    const all = searchParams.get("all");
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    let query: Record<string, any> = {};

    if (all !== "true") {
      if (published !== null) query.published = published === "true";
      if (featured !== null) query.featured = featured === "true";
    }

    const result = await paginate(JobPostModel, query, {
      page,
      limit,
      sort: { createdAt: -1 },
    });

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { _id, ...body } = await req.json();
    const job = await JobPostModel.create(body);

    return NextResponse.json({ success: true, data: job }, { status: 201 });
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
    const job = await JobPostModel.updateOne({ _id }, { ...body });

    return NextResponse.json(
      { success: job.modifiedCount > 0, data: job.modifiedCount },
      { status: 200 }
    );
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
    const job = await JobPostModel.deleteOne({ _id });

    return NextResponse.json(
      { success: job.deletedCount > 0, data: job.deletedCount },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
