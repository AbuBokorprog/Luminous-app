import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
database();
export async function POST(req) {
  const response = NextResponse.json({
    message: "logout successfully",
    status: 200,
  });
  response.cookies.set("authToken", "", {
    expiresIn: new Date(0),
  });
  return response;
}
