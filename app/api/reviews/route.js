import Reviews from "@/models/reviews";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const { name, productId, userId, email, rating, review } = await req.json();
  try {
    const reviews = new Reviews({
      name,
      email,
      userId,
      productId,
      rating,
      review,
    });
    const result = await reviews.save();
    return NextResponse.json({
      success: "Review saved successfully",
      status: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}

export async function GET(req, res) {
  try {
    const reviews = await Reviews.find();
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({
      error: `Reviews ${error.message}`,
      status: false,
    });
  }
}
