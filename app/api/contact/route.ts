import { Resend } from "resend"
import { ContactFormEmail } from "@/emails/contact-form"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "pankaj44ahuja@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
      }),
      replyTo: email,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
