import { NextResponse } from "next/server";
import { useContext } from "react";
import { authContext } from "./utils/provider/auth_provider";
export function middleware(request) {
  const { user } = useContext(authContext);
  return NextResponse.json({ success: "successfully run" });
}

export const config = {
  matcher: ["/users", "/admin", "/manager", "/login", "/sign_up"],
};
