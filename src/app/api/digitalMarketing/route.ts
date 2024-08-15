import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { MAIL_USER, MAIL_PASS } = process.env;

async function sendEmail({ subject, body }: { subject: string; body: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: `"Digital Marketing Lead" <${MAIL_USER}>`,
    to: "hurayarahsays@gmail.com", // Change this to the email where you want to receive the submissions
    subject,
    html: body,
  });
}

export async function POST(req: Request) {
  try {
    const { fullName, email, phoneNumber, highestQualification } =
      await req.json();

    if (!fullName || !email || !phoneNumber || !highestQualification) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const subject = `Digital Marketing Lead from ${fullName}`;
    const body = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f0f4f8; color: #333;">
    <h2 style="color: #333; border-bottom: 2px solid #9089fc; padding-bottom: 10px;">Digital Marketing Lead</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Highest Qualification:</strong> ${highestQualification}</p>
    
  </div>
`;

    await sendEmail({ subject, body });

    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Email sent successfully!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
