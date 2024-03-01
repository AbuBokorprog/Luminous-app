import Order from "@/models/order";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const order = await Order.findById(id);
    return NextResponse.json(order);
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
