import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "user",
  },
  provider: {
    type: String,
    default: "signup",
  },
  isVerified: { type: Boolean, default: false },
  joined: {
    type: Date,
    default: Date.now,
  },
  credits: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
