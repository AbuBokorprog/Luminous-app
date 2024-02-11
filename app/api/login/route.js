import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { database } from "@/utils/database/database";
import User from "@/models/users";

database();
export async function POST(req, res) {
  const { email, password } = await req.json();
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: 500,
      });
    }

    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      return NextResponse.json({
        message: "Password mismatch",
        status: 500,
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.displayName,
      },
      process.env.JWT_KEY
    );
    const response = NextResponse.json({
      message: "Login success",
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "login failed",
      status: 500,
    });
  }
}
