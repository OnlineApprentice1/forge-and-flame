import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // TODO: Wire up Resend for email delivery
  console.log("Contact form submission:", data);
  return NextResponse.json({
    success: true,
    message: "Message received. We'll be in touch within one business day.",
  });
}
