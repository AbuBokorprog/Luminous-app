import ShippingAddress from "@/models/shippingAddress";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();

export async function GET(_, { params }) {
  const { userId } = params;
  try {
    const shippingAddress = await ShippingAddress.findOne({ userId: userId });
    return NextResponse.json(shippingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `userId by shipping address get failed: ${error.message}`,
      status: false,
    });
  }
}
