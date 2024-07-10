import Appointment from "@/app/model/Appointment";
import User from "@/app/model/User";
import dbConnect from "@/app/utils/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  await dbConnect();
  try {
    const body = await req.json();

    const { name, email, phone, userId, schedule,isDone } = body;
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found", success: false });
    }
    const ap = await Appointment.findOne({ userId });
    if(isDone){
      ap.isDone = true;
      await ap.save();
      const appointments = await Appointment.find({ isDone: false });
      return NextResponse.json({
        message: "Appointment updated",
        appointments,
        success: true,
      });
    }
    if (ap) {
      ap.schedule = schedule;
      await ap.save();
    } else {
      await Appointment.create({ name, email, phone, userId, schedule });
    }
    user.appointmentTime = schedule;
    await user.save();
    const appointments = await Appointment.find({ isDone: false });
    return NextResponse.json({
      message: "Appointment updated",
      appointments,
      success: true,
    });
  } catch (error) {}
}
export async function GET(req, res) {
  try {
    await dbConnect();
    const headerList = headers();
    const userId = headerList.get("id");
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({
        message: "Sorry! invalid authorization",
        success: false,
      });
    }
    const appointments = await Appointment.find({ isDone: false });
    return NextResponse.json({
      message: "Appointment found",
      appointments,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
