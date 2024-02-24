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
  },
  category: {
    type: Array,
    required: true,
  },
  sub_category: {
    type: Array,
    required: true,
  },
  concern: {
    type: Array,
  },
  offer: {
    type: Array,
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
  },
  description: {
    type: String,
  },
  weight: {
    type: String,
  },
  made: {
    type: String,
  },
  size: {
    type: Array,
  },
  lowStockMessage: {
    type: String,
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
