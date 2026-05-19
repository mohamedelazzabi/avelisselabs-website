import { NextResponse } from "next/server";
import { contactSchema, formDataToObject } from "@/lib/validation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = contactSchema.safeParse(formDataToObject(formData));

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Please check the form and try again." }, { status: 400 });
  }

  // Delivery provider hook: send parsed.data to support tooling after choosing a provider.
  return NextResponse.json({ message: "Thanks. Your message has been received for prerelease follow-up." });
}
