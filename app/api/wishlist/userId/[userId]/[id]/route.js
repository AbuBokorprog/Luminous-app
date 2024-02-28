import Wishlist from "@/models/wishlist";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function DELETE(req, { params }) {
  const { userId, id } = params;

  try {
    const deleteWishlist = await Wishlist.findOneAndDelete({
      userId: userId,
      _id: id,
    });
    if (!deleteWishlist) {
      return NextResponse.json({
        error: "Wishlist not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "Wishlist deleted",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
