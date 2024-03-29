import Wishlist from "@/models/wishlist";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(req, { params }) {
  const { userId } = params;

  try {
    const wishlist = await Wishlist.find({ userId: userId });

    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
