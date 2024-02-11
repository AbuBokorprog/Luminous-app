import User from "@/models/users";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const user = await User.findById({ _id: id });
    return NextResponse.json({
      user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't find",
      status: false,
    });
  }
}

export async function POST(req, { params }) {
  const { id } = params;
  const { displayName, password, photoURL, role } = req.json();
  try {
    const user = await User.findAndUpdate(
      { _id: id },
      {
        displayName: displayName,
        password: password,
        photoURL: photoURL,
        role: role,
      }
    );
    return NextResponse.json({
      message: "User updated successfully",
      status: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error updating user",
      status: false,
    });
  }
}
