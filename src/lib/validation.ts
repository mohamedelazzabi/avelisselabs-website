import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  company: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(80),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please include a little more detail.").max(2000),
  company: z.string().max(0).optional(),
});

export function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}
