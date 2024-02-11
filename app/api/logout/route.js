import { NextResponse } from "next/server";
export async function POST(req) {
  const response = NextResponse.json({
    message: "logout successfully",
    status: 200,
  });
  response.cookies.delete("authToken");
  return response;
}
