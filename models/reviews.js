const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
    maxLength: 300,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Reviews =
  mongoose.models.Reviews || mongoose.model("Reviews", reviewsSchema);
export default Reviews;
