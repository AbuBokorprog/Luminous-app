const mongoose = require("mongoose");

const shippingAddressSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  postcode: {
    type: Number,
  },
  town: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
});

const ShippingAddress =
  mongoose.models.ShippingAddress ||
  mongoose.model("ShippingAddress", shippingAddressSchema);
export default ShippingAddress;
