import { NextResponse } from "next/server"
import { mockJobPosts } from "@/lib/mock-data"
import type { ApiResponse, JobPost } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const department = searchParams.get("department")
  const type = searchParams.get("type")
  const featured = searchParams.get("featured")

  let filteredJobs = mockJobPosts.filter((job) => job.published)

  if (department) {
    filteredJobs = filteredJobs.filter((job) => job.department.toLowerCase() === department.toLowerCase())
  }

  if (type) {
    filteredJobs = filteredJobs.filter((job) => job.type === type)
  }

  if (featured !== null) {
    const isFeatured = featured === "true"
    filteredJobs = filteredJobs.filter((job) => job.featured === isFeatured)
  }

  const response: ApiResponse<JobPost[]> = {
    data: filteredJobs,
    success: true,
    message: "Job posts retrieved successfully",
  }

  return NextResponse.json(response)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, you would save to database
    const newJob: JobPost = {
      id: Date.now().toString(),
      ...body,
      published: false,
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const response: ApiResponse<JobPost> = {
      data: newJob,
      success: true,
      message: "Job post created successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create job post" }, { status: 500 })
  }
}
