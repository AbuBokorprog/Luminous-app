import User from "@/models/users";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { email } = params;
  try {
    const user = await User.find({ email: email });
    return NextResponse.json({
      user: user,
    });
  } catch (error) {
    return NextResponse.json({
      Message: "Error getting",
      status: false,
    });
  }
}
