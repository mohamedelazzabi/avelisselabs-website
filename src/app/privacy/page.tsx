import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy template for Avelisse Labs LLC apps and digital products.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We May Collect",
    body: "Avelisse Labs may collect information you provide directly, such as contact form submissions, newsletter signups, support requests, and future app account details. Pregnancy and wellness app data handling must be finalized before launch.",
  },
  {
    title: "How We May Use Information",
    body: "Information may be used to respond to requests, improve products, provide app functionality, send opted-in updates, protect services, and meet legal obligations.",
  },
  {
    title: "Pregnancy, Health, and Wellness Data",
    body: "Future pregnancy and wellness apps may process sensitive personal information. Final app-specific disclosures, permissions, retention periods, and deletion controls should be reviewed before publication.",
  },
  {
    title: "Analytics and Service Providers",
    body: "Avelisse Labs may use privacy-conscious analytics, hosting, support, email, crash reporting, and infrastructure providers. Provider names and data categories should be inserted once vendors are selected.",
  },
  {
    title: "Your Choices",
    body: "Users should be able to unsubscribe from marketing emails, request support, and request access, correction, or deletion where applicable. App-specific privacy controls will be documented at launch.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="section-shell pb-20 pt-32">
        <LegalHeader eyebrow="Legal Template" title="Privacy Policy" />
        <LegalNotice />
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="glass rounded-[1.6rem] p-6">
              <h2 className="font-display text-2xl font-bold">{section.title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function LegalHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold text-[var(--pink)]">{eyebrow}</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-5 text-[var(--muted)]">Last updated May 19, 2026 for {siteConfig.name}.</p>
    </div>
  );
}

function LegalNotice() {
  return (
    <div className="mt-8 rounded-[1.4rem] border border-[var(--line)] bg-white/70 p-5 text-sm leading-6 text-[var(--muted)] dark:bg-white/10">
      This page is a launch-ready business template and should be reviewed by qualified counsel before public use. For questions, contact{" "}
      <Link className="font-bold text-[var(--foreground)]" href={`mailto:${siteConfig.supportEmail}`}>
        {siteConfig.supportEmail}
      </Link>
      .
    </div>
  );
}
