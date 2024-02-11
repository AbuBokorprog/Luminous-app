import User from "@/models/users";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

database();
export async function POST(request, _) {
  const { displayName, email, password, photoURL } = await request.json();
  const user = new User({ displayName, email, password, photoURL });
  try {
    user.password = bcrypt.hashSync(password, 10);
    const result = await user.save();
    const response = NextResponse.json({
      message: "Registered successfully",
      status: 200,
      user: result,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "Registered failed",
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
