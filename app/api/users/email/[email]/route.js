import User from "@/models/users";
import { database } from "@/utils/database/database";
import bcrypt from "bcrypt";
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

export async function PUT(req, res) {
  const { email } = params;
  const { displayName, newPassword, photoURL } = await req.json();

  try {
    const user = await User.findOne(email);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }
    const matched = bcrypt.compareSync(newPassword, user.password);
    if (!matched) {
      return NextResponse.json({
        message: "current password is incorrect",
        status: 500,
      });
    }

    user.displayName = displayName || user.displayName;
    user.photoURL = photoURL || user.photoURL;
    user.password = newPassword || user.password;

    await user.save();

    return NextResponse.json({
      success: "Profile updated successfully",
      status: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Error: ${error.message}`,
      status: false,
    });
  }
}
