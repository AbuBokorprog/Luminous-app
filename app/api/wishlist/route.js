import Wishlist from "@/models/wishlist";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const { userId, productDetails, productId } = await req.json();

  try {
    const wishlist = new Wishlist({ userId, productDetails, productId });
    const result = await wishlist.save();
    return NextResponse.json({
      success: "wishlist added successfully",
      status: 200,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}

export async function GET() {
  try {
    const wishlist = await Wishlist.find();
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
