import { NextResponse } from "next/server";

const FORMSPARK_URL = "https://submit-form.com/HbAeInpMi";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(FORMSPARK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Error submitting form");

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
