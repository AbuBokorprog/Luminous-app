const mongoose = require("mongoose");

const billingAddressSchema = mongoose.Schema({
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
  phone: {
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
    type: String,
    required: true,
  },
});

const BillingAddress =
  mongoose.models.BillingAddress ||
  mongoose.model("BillingAddress", billingAddressSchema);
export default BillingAddress;
