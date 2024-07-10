import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  subscribed: { type: Boolean },
  isVerified: { type: Boolean, default: false },
  planName: { type: String },
  joined: {
    type: Date,
    default: Date.now,
  },
  credits: {
    type: Number,
    default: 0,
  },
  subId: {
    type: String,
    default: null,
  },
  profileImage: {
    type: String,
    default: "",
  },
  cusId: {
    type: String,
    default: null,
  },
  address: {
    type: Object,
  },
  subscribedOn: {
    type: Date,
  },
  appointmentTime: {
    type: Date,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
