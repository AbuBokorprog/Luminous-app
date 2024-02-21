import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";

database();
export async function GET(_, { params }) {
  const { id } = params;
  try {
    const shippingAddress = await ShippingAddress.findById({ _id: id });
    return NextResponse.json(shippingAddress);
  } catch (error) {
    return NextResponse.json({
      error: `Specific shipping address get failed: ${error.message}`,
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { id } = params;
  const {
    firstName,
    lastName,
    userId,
    companyName,
    country,
    street,
    state,
    town,
    postCode,
    phone,
    email,
  } = await req.json();
  try {
    const updateShippingAddress = await ShippingAddress.findOneAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        userId,
        companyName,
        country,
        street,
        state,
        town,
        postCode,
        phone,
        email,
      }
    );
    if (!updateShippingAddress) {
      return NextResponse.json({
        error: "Could not find shipping address",
        status: false,
      });
    }
    return NextResponse.json({
      message: "Shipping address updated successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Could not update shipping address ${error.message}`,
      status: false,
    });
  }
}

export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const deleteShippingAddress = await ShippingAddress.findOneAndDelete({
      _id: id,
    });
    if (!deleteShippingAddress) {
      return NextResponse.json({
        error: `Could not find shipping address`,
        status: false,
      });
    }

    return NextResponse.json({
      message: `Shipping address deleted successfully`,
      status: true,
      deleteShippingAddress,
    });
  } catch (error) {
    return NextResponse.json({
      error: `Shipping address deleted failed: ${error.message}`,
      status: false,
    });
  }
}
