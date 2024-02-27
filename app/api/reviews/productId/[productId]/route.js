import Reviews from "@/models/reviews";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { productId } = params;
  try {
    const review = await Reviews.find({ productId });

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
