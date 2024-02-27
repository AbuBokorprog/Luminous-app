import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { tran_id } = params;

  try {
    const order = await Order.findOneAndUpdate(
      { tran_id: tran_id },
      { status: "Paid" },
      { new: true, runValidators: true }
    );

    await Cart.deleteMany({ userId: order?.userId });

    return NextResponse.redirect(new URL("/users/orders", req.url), 303);
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.error("An error occurred.");
  }
}
