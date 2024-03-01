import Order from "@/models/order";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(req, { params }) {
  const { userId } = params;
  try {
    const product = await Order.find({ userId: userId });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Couldn't find order",
      status: false,
    });
  }
}
