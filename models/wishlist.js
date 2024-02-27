const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productDetails: {
    type: Object,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
