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
  } catch (error) {}
}
