import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = NextResponse.json(
      {
        success: true,
        statusCode: 200,
        message: "Logout success!",
        error: null,
        data: null,
        meta: null,
      },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (err) {
    console.error("Error in logout:", err);
    return NextResponse.json(
      { success: false, data: null, message: "Internal server error!" },
      { status: 500 }
    );
  }
}
