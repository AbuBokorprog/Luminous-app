import ShippingAddress from "@/models/shippingAddress";
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
    street,
    state,
    town,
    postcode,
    phone,
    email,
  } = await req.json();
  try {
    const updateShippingAddress = await ShippingAddress.findOneAndUpdate(
      { _id: id },
      {
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        companyName: companyName,
        street: street,
        state: state,
        town: town,
        postcode: postcode,
        phone: phone,
        email: email,
      },
      { new: true, runValidators: true }
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
