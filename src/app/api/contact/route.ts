import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, formDataToObject } from "@/lib/validation";

export const runtime = "nodejs";

const contactRecipient = process.env.CONTACT_TO_EMAIL ?? "support@avelisselabs.com";
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Avelisse Labs Website <support@avelisselabs.com>";

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = contactSchema.safeParse(formDataToObject(formData));

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Please check the form and try again." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please set RESEND_API_KEY and try again." },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [contactRecipient],
    replyTo: email,
    subject: `New Avelisse Labs contact form message from ${name}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "---",
      "This message was sent via the contact form on avelisselabs.com",
    ].join("\n"),
    html: contactEmailHtml({ name, email, message }),
  });

  if (error) {
    return NextResponse.json(
      { message: "We could not send your message right now. Please email support@avelisselabs.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks. Your message has been sent to Avelisse Labs support." });
}

function contactEmailHtml({ name, email, message }: { name: string; email: string; message: string }) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #101321; line-height: 1.6;">
      <h1 style="margin: 0 0 16px; font-size: 24px;">New Avelisse Labs contact message</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <div style="margin-top: 20px; padding: 18px; border-radius: 16px; background: #F7F8FA;">
        <strong>Message</strong>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #6B7280; border-top: 1px solid #E5E7EB; padding-top: 12px;">
        This message was sent via the contact form on <a href="https://avelisselabs.com" style="color: #6B7280;">avelisselabs.com</a>
      </p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
