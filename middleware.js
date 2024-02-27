import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value || "";

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/sign_up"
  ) {
    return;
  }
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/sign_up"
  ) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (
    request.nextUrl.pathname === "/admin/:path*" ||
    request.nextUrl.pathname === "/users/:path*" ||
    request.nextUrl.pathname === "/check_out/:path*" ||
    request.nextUrl.pathname === "/manager/:path*"
  ) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return;
    }
  }
}

export const config = {
  matcher: [
    "/login",
    "/sign_up",
    "/view_cart",
    "/users/:path*",
    "/manager/:path*",
    "/admin/:path*",
    "/check_out/:path*",
  ],
};
