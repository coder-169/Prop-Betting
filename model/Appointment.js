import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  phone: {
    type: String,
    default: "",
  },
  schedule: { type: Date, required: true },
  isDone: { type: Boolean, default: false },
});

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
