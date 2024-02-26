const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  tran_id: { type: String, required: true, unique: true },
  productDetails: { type: Object, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  status: {
    type: String,
    enum: ["Unpaid", "Paid"],
    default: "Unpaid",
  },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postcode: { type: String, required: true },
  },
  price: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;
