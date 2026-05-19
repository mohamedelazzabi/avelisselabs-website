"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const response = await fetch("/api/newsletter", { method: "POST", body: new FormData(event.currentTarget) });
    const data = await response.json();
    setState(response.ok ? "success" : "error");
    setMessage(data.message);
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl" aria-describedby="newsletter-status">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input className="min-h-14 flex-1 rounded-full border border-[var(--line)] bg-white/90 px-5 text-sm text-neutral-950 outline-none placeholder:text-neutral-500" type="email" name="email" placeholder="Email address" aria-label="Email address" required />
        <input className="hidden" name="company" tabIndex={-1} autoComplete="off" />
        <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-70" disabled={state === "loading"}>
          {state === "loading" ? "Joining..." : "Subscribe"}
          <Send size={16} />
        </button>
      </div>
      <p id="newsletter-status" className="mt-3 text-sm font-bold text-white/90" role="status">
        {message}
      </p>
    </form>
  );
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const response = await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget) });
    const data = await response.json();
    setState(response.ok ? "success" : "error");
    setMessage(data.message);
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-5 sm:p-7" aria-describedby="contact-status">
      <label className="grid gap-2 text-sm font-bold">
        Name
        <input className="min-h-12 rounded-2xl border border-[var(--line)] bg-white/75 px-4 font-normal outline-none dark:bg-white/10" name="name" required minLength={2} />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Email
        <input className="min-h-12 rounded-2xl border border-[var(--line)] bg-white/75 px-4 font-normal outline-none dark:bg-white/10" type="email" name="email" required />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea className="min-h-32 rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 font-normal outline-none dark:bg-white/10" name="message" required minLength={10} />
      </label>
      <input className="hidden" name="company" tabIndex={-1} autoComplete="off" />
      <button className="soft-gradient inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white disabled:opacity-70" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
      <p id="contact-status" role="status" className={`text-sm font-bold ${state === "error" ? "text-red-500" : "text-[var(--muted)]"}`}>
        {message}
      </p>
    </form>
  );
}
