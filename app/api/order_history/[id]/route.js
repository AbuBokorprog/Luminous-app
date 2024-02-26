import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const deleteOrder = await Order.findOneAndDelete({ _id: id });
    if (!deleteOrder) {
      return NextResponse.json({
        message: "Order not found",
        status: 404,
      });
    }
    return NextResponse.json({
      success: "Order deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
