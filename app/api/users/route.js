import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
// database();
export async function GET() {
  return NextResponse.json({ result: "hello world" });
}
