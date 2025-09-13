import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/User";
import { connectDB } from "@/lib/db";
import { ApiResponse } from "@/types";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      const response: ApiResponse<any> = {
        data: null,
        success: false,
        message: "Email and password both are required!",
      };
      NextResponse.json(response, { status: 400 });
    }

    // const user = await User.findOne({ email: email.toLowerCase() });
    // if (!user) {
    //   const response: ApiResponse<any> = {
    //     data: null,
    //     success: false,
    //     message: "User not found!",
    //   };
    //   NextResponse.json(response, { status: 400 });
    // }

    // const isMatch = await user?.comparePassword(password);
    // if (!isMatch) {
    //   const response: ApiResponse<any> = {
    //     data: null,
    //     success: false,
    //     message: "Password is invalid!",
    //   };
    //   NextResponse.json(response, { status: 400 });
    // }

    if (email !== "admin@sarucoder.com" && password !== "Lenovo@E470!") {
      const response: ApiResponse<any> = {
        data: null,
        success: false,
        message: "Invalid credentials!",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const tempToken = jwt.sign({ id: "1", email }, "sadasdasdas", {
      expiresIn: 8 * 60 * 60,
    });

    const response = NextResponse.json(
      { success: true, statusCode: 200, message: "Logged in!" },
      { status: 200 }
    );

    response.cookies.set("token", tempToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 8 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error(err);
    const response: ApiResponse<null> = {
      data: null,
      message: "Internal server error",
      success: false,
    };
  }
}
