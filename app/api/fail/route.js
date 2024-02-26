import { NextResponse } from "next/server";

export async function POST(req) {
  return NextResponse.redirect(new URL("/check_out/fail", req.url), 303);
}
