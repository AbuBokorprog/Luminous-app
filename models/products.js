const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  benefits: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  concern: {
    type: String,
  },
  offer: {
    type: String,
  },
  brands: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  ml: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "declined"],
    default: "pending",
  },
});

const Products =
  mongoose.models.Products || mongoose.model("Products", productsSchema);
export default Products;
