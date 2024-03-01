import Cart from "@/models/cart";
import Order from "@/models/order";
import Products from "@/models/products";
import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const {
    displayName,
    phone,
    email,
    area,
    district,
    address,
    totalPrice,
    userId,
    delivery,
    tran_id,
  } = await req.json();

  let price = 0;
  if (delivery === "Delivery inside Dhaka") {
    price = totalPrice + 49;
  } else {
    price = totalPrice + 100;
  }

  try {
    const cart = await Cart.find({ userId: userId });
    const order = new Order({
      userId,
      tran_id,
      productDetails: cart,
      customerName: displayName,
      customerEmail: email,
      price: price,
      shippingAddress: {
        address: address,
        city: area,
        state: district,
        country: "Bangladesh",
        postcode: "3540",
      },
    });

    await order.save();

    await Promise.all(
      cart.map(async (item) => {
        const product = await Products.findById(item.productId);
        if (product) {
          product.quantity -= item.quantity;
          if (product.quantity < 10) {
            product.lowStockMessage = `Your product "${product.name}" is going out of stock. You need to restock.`;
          } else {
            product.lowStockMessage = null;
          }
          await product.save();
        }
      })
    );
    await Cart.deleteMany({ userId: userId });
    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function GET(req, res) {
  try {
    const order = await Order.find();
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
