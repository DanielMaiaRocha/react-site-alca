import User from "@/app/models/User"; 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/app/utils/db";
import mongoose from "mongoose";

export default async function POST(req) {
  try {
    const { name, email, password, confirmPassword } = await req.json();

    await connect();

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return NextResponse.json({
        message: "E-mail already registered",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

  
    await mongoose.connection.close();

    return NextResponse.json({
      message: "User has been created",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "An error has been caught, failed to register the user",
      status: 500,
    });
  }
}