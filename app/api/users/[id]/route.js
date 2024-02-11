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

export async function PUT(req, { params }) {
  const { id } = params;
  const { displayName, password, photoURL, role } = await req.json();
  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        displayName: displayName,
        password: password,
        photoURL: photoURL,
        role: role,
      },
      { new: true, runValidators: true }
    );
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }
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

export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const deleteUser = await User.findOneAndDelete({ _id: id });
    if (!deleteUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }
    return NextResponse.json({
      message: "User deleted successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Delete failed",
      status: false,
    });
  }
}
