import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service template for Avelisse Labs LLC websites, apps, and digital products.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Use of Services",
    body: "Avelisse Labs websites and future apps are intended for lawful, personal, and informational use. Users must not misuse, disrupt, reverse engineer, or attempt unauthorized access to any service.",
  },
  {
    title: "Health and Pregnancy Disclaimer",
    body: "Future pregnancy, wellness, and AI features are not a substitute for professional medical advice, diagnosis, or treatment. Users should consult qualified healthcare professionals for health decisions.",
  },
  {
    title: "Accounts, Purchases, and App Stores",
    body: "Account, subscription, purchase, refund, and store-specific terms should be completed when the first app is published through the Apple App Store, Google Play, or other platforms.",
  },
  {
    title: "Intellectual Property",
    body: "Avelisse Labs owns its websites, product names, interface designs, content, software, and brand assets unless otherwise stated. Users receive only the limited rights needed to access the services.",
  },
  {
    title: "Limitation of Liability",
    body: "The final liability, warranty, dispute, governing law, and indemnity provisions should be reviewed by counsel and tailored to the jurisdictions where Avelisse Labs operates.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="section-shell pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[var(--pink)]">Legal Template</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-5 text-[var(--muted)]">Last updated May 19, 2026 for {siteConfig.name}.</p>
        </div>
        <div className="mt-8 rounded-[1.4rem] border border-[var(--line)] bg-white/70 p-5 text-sm leading-6 text-[var(--muted)] dark:bg-white/10">
          This page is a launch-ready terms template and should be reviewed by qualified counsel before public use. For questions, contact{" "}
          <Link className="font-bold text-[var(--foreground)]" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </Link>
          .
        </div>
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
