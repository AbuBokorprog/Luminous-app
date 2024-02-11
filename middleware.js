import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;

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
    request.nextUrl.pathname === "/admin" ||
    request.nextUrl.pathname === "/users" ||
    request.nextUrl.pathname === "/manager"
  ) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/sign_up", "/users", "/manager", "/admin"],
};
