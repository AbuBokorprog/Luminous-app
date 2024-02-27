import Wishlist from "@/models/wishlist";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const wishlist = await Wishlist.findById({ _id: id });
    if (!wishlist) {
      return NextResponse.json({
        error: "Wishlist not found",
        status: 404,
      });
    }
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const wishlist = await Wishlist.findOneAndDelete({ _id: id });
    if (!wishlist) {
      return NextResponse.json({
        error: "Wishlist not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "Wishlist deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
