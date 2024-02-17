import Cart from "@/models/cart";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { userId } = params;
  try {
    const cart = await Cart.find({ userId: userId });
    if (!cart) {
      return NextResponse.json({
        error: "Cart not found",
        status: 404,
      });
    }
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({
      error: `Cart ${error.message}`,
      status: false,
    });
  }
}
