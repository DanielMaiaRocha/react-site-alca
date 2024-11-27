import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const res = await fetch("http://localhost:8800/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json({
        message: "User has been created",
        status: 201,
        data: data,
      });
    } else {
      return NextResponse.json({
        error: data.message || "Failed to register the user",
        status: res.status,
      });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({
      error: "An error occurred while registering the user",
      status: 500,
    });
  }
}
