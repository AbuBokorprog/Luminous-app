import User from "@/models/users";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function POST(request, _) {
  const { displayName, email, password, photoURL } = await request.json();
  const user = new User({ displayName, email, password, photoURL });
  try {
    const result = await user.save();
    const response = NextResponse.json({
      message: "user saved successfully",
      status: 200,
      user: result,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "user saved failed",
      status: false,
      error: error.message,
    });
  }
}
export async function GET(req, res) {
  try {
    const user = await User.find();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: "user not found",
      status: false,
    });
  }
}
