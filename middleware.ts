import { ApiResponse } from "@/types";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = "sadasdasdas";
const encoder = new TextEncoder();
const secret = encoder.encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname; // use pathname for comparisons
  const isAPI = pathname.startsWith("/api/");

  // Allow internal server requests (any method) when caller sets this header
  console.log("Headers:", Object.fromEntries(request.headers));

  if (isAPI && request.headers.get("x-internal-request") === "true") {
    return NextResponse.next();
  }

  // Bypass auth for login/logout endpoints
  if (pathname === "/api/auth/login" || pathname === "/api/auth/logout") {
    return NextResponse.next();
  }

  // Optionally: if you want to bypass all /api/auth/* subpaths:
  // if (pathname.startsWith("/api/auth/")) return NextResponse.next();

  if (!token) {
    if (isAPI) {
      const response: ApiResponse<any> = {
        success: false,
        message: "Unauthorised Access!",
        data: null,
      };
      return NextResponse.json(response, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    const payload = await jwtVerify(token, secret);
    const {
      payload: { userId },
    } = payload;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", (userId as string) || "null");

    return NextResponse.next({
      request: new Request(request.url, {
        headers: requestHeaders,
        method: request.method,
        body: request.body,
      }),
    });
  } catch (err) {
    console.log("Error => ", err);
    if (isAPI) {
      const response: ApiResponse<any> = {
        success: false,
        message: "Unauthorised Access!",
        data: null,
      };
      return NextResponse.json(response, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
