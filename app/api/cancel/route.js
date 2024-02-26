import { NextResponse } from "next/server";

export async function POST(req) {
  return NextResponse.redirect(new URL("/check_out/cancel", req.url), 303);
}
