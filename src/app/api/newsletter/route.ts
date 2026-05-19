import { NextResponse } from "next/server";
import { formDataToObject, newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = newsletterSchema.safeParse(formDataToObject(formData));

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Please check your email address." }, { status: 400 });
  }

  // Delivery provider hook: connect this to an email or CRM service when launch credentials are available.
  return NextResponse.json({ message: "You're on the early update list. Thank you for joining the journey." });
}
