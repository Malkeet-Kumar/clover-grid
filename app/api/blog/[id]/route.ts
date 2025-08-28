import { NextResponse } from "next/server"
import { mockBlogPosts } from "@/lib/mock-data"
import type { ApiResponse, BlogPost } from "@/lib/types"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const post = mockBlogPosts.find((p) => p.id === params.id)

  if (!post) {
    return NextResponse.json({ success: false, message: "Blog post not found" }, { status: 404 })
  }

  const response: ApiResponse<BlogPost> = {
    data: post,
    success: true,
    message: "Blog post retrieved successfully",
  }

  return NextResponse.json(response)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const postIndex = mockBlogPosts.findIndex((p) => p.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ success: false, message: "Blog post not found" }, { status: 404 })
    }

    // In a real application, you would update the database
    const updatedPost: BlogPost = {
      ...mockBlogPosts[postIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    }

    const response: ApiResponse<BlogPost> = {
      data: updatedPost,
      success: true,
      message: "Blog post updated successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update blog post" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const postIndex = mockBlogPosts.findIndex((p) => p.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ success: false, message: "Blog post not found" }, { status: 404 })
    }

    // In a real application, you would delete from database
    const response: ApiResponse<null> = {
      data: null,
      success: true,
      message: "Blog post deleted successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete blog post" }, { status: 500 })
  }
}
