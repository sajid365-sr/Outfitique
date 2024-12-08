import { NextResponse } from "next/server";
import { sendThankYouEmail } from "../../../utils/sendEmail";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Validate email
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  // Save email to the database
  const existingUser = await prisma.waitlistSubscriber.findUnique({
    where: { email },
  });
  if (existingUser) {
    return NextResponse.json(
      { message: "Email already registered" },
      { status: 200 }
    );
  }

  const newUser = await prisma.waitlistSubscriber.create({
    data: { email },
  });

  // Send thank you email
  await sendThankYouEmail(email);

  return NextResponse.json(
    { message: "Successfully registered", user: newUser },
    { status: 200 }
  );
}
