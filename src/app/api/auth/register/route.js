import User from "@/app/models/User.js"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/app/utils/db";
import mongoose from "mongoose";

await connect();

export async function POST(req) {
  try {
    const { name, email, password, lang, country, isSeller } = await req.json();

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
      isSeller: isSeller || false,  
      lang: lang || "",             
      country: country || "",      
    });

    await newUser.save();

    await mongoose.connection.close();

    return NextResponse.json({
      message: "User has been created",
      status: 201,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({
      error: "An error has been caught, failed to register the user",
      status: 500,
    });
  } 
}
