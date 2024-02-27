import Reviews from "@/models/reviews";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const review = await Reviews.findOne({ _id: id });
    if (!review) {
      return NextResponse.json({
        failed: "review not found",
        status: 404,
      });
    }
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}

export async function PUT(req, { params }) {
  const { rating, reviews } = await req.json();
  const { id } = params;
  try {
    const review = await Reviews.findOneAndUpdate(
      { _id: id },
      { rating: rating, reviews: reviews },
      { new: true, runValidators: true }
    );
    if (!review) {
      return NextResponse.json({
        failed: "review not update",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "review updated",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const review = await Reviews.findOneAndDelete({ _id: id });

    if (!review) {
      return NextResponse.json({
        failed: "review not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "review successfully deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
