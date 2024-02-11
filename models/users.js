const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  displayName: {
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
  photoURL: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],
  },
});

const User = mongoose.models.User || mongoose.model("User", usersSchema);
export default User;
