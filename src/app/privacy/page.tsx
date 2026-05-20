import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Avelisse Labs LLC",
  description:
    "Learn how Avelisse Labs LLC collects, uses, protects, and manages information across our website, applications, and digital products.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: "Avelisse Labs LLC may collect information you provide directly through contact forms, support requests, newsletter subscriptions, account registrations, feedback submissions, and communications with us. We may also collect limited technical information such as browser type, device information, IP address, operating system, crash reports, and usage analytics.",
  },

  {
    title: "How We Use Information",
    body: "We use collected information to provide, operate, improve, and personalize our services. Information may be used to respond to inquiries, provide requested functionality, send updates and communications, improve product performance, maintain security, prevent misuse, and comply with legal obligations.",
  },

  {
    title: "Pregnancy, Health, and Wellness Information",
    body: "Certain Avelisse Labs applications may include pregnancy, health, wellness, and tracking-related features. Users may voluntarily provide sensitive information to enable app functionality. Such information is processed solely for service functionality and user experience purposes. Our applications support informational and tracking purposes only and do not replace professional medical advice, diagnosis, or treatment.",
  },

  {
    title: "Analytics and Service Providers",
    body: "We may work with trusted third-party providers that support our infrastructure and services, including hosting, analytics, crash reporting, email delivery, customer support, and cloud providers. These services may process limited information solely to provide functionality on our behalf.",
  },

  {
    title: "Cookies and Similar Technologies",
    body: "Our website and services may use cookies and related technologies to improve functionality, understand usage trends, enhance experiences, and maintain security. Users may manage cookie settings through their browser preferences.",
  },

  {
    title: "Data Security",
    body: "We implement reasonable technical, organizational, and administrative safeguards intended to protect information from unauthorized access, disclosure, alteration, or destruction. However, no transmission or storage system can be guaranteed to be completely secure.",
  },

  {
    title: "Your Rights and Choices",
    body: "Depending on your location and applicable laws, you may have rights regarding access, correction, deletion, portability, restriction, or objection to processing of your information. Users may unsubscribe from communications and submit privacy requests at any time.",
  },

  {
    title: "Children's Privacy",
    body: "Our services are not intentionally directed toward children under the age required by applicable law. We do not knowingly collect personal information from children without required authorization.",
  },

  {
    title: "International Data Transfers",
    body: "Information may be processed and stored in countries where our infrastructure providers operate. By using our services, users understand that information may be transferred internationally as necessary to provide services.",
  },

  {
    title: "Changes to This Privacy Policy",
    body: "We may periodically update this Privacy Policy to reflect operational, legal, or service changes. Updated versions will appear on this page with a revised effective date.",
  },
]

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
      <p className="mt-5 text-[var(--muted)]">
  Last updated May 20, 2026 for {siteConfig.name}.
</p>
    </div>
  );
}

function LegalNotice() {
  return (
    <div className="mt-8 rounded-[1.4rem] border border-[var(--line)] bg-white/70 p-5 text-sm leading-6 text-[var(--muted)] dark:bg-white/10">
      Questions about this Privacy Policy or data practices can be directed to{" "}
      <Link
        className="font-bold text-[var(--foreground)]"
        href={`mailto:${siteConfig.supportEmail}`}
      >
        {siteConfig.supportEmail}
      </Link>.
      By using Avelisse Labs services, websites, or applications, you acknowledge and agree to the practices described in this Privacy Policy.
    </div>
  );
}
