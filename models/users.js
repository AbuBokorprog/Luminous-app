const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],
    default: "user",
  },
});

const User = mongoose.models.User || mongoose.model("User", usersSchema);
export default User;
