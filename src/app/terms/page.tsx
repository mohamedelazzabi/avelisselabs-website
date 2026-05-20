import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Avelisse Labs LLC",
  description:
    "Terms of Service governing the use of Avelisse Labs LLC websites, applications, and digital services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using Avelisse Labs LLC websites, applications, products, or services, you agree to be bound by these Terms of Service. If you do not agree with these terms, you should not access or use our services.",
  },

  {
    title: "Use of Services",
    body: "Avelisse Labs services are intended for lawful, personal, and informational use. Users agree not to misuse, interfere with, disrupt, reverse engineer, attempt unauthorized access to, or exploit our services in ways that could negatively affect other users or system integrity.",
  },

  {
    title: "Accounts and User Responsibilities",
    body: "Some services may require users to create accounts or provide information. Users are responsible for maintaining the confidentiality of account credentials and for activities occurring under their account. Users agree to provide accurate and current information.",
  },

  {
    title: "Subscriptions, Purchases, and App Stores",
    body: "Certain applications or features may include subscriptions, purchases, trials, or premium functionality delivered through platforms such as the Apple App Store, Google Play, or other providers. Billing, cancellation, renewal, and refund policies may additionally be governed by the terms of those platforms.",
  },

  {
    title: "Health and Pregnancy Disclaimer",
    body: "Avelisse Labs may provide pregnancy, wellness, health tracking, educational content, and AI-powered features. Such services are provided for informational purposes only and do not constitute medical advice, diagnosis, or treatment. Users should consult qualified healthcare professionals regarding medical decisions.",
  },

  {
    title: "Artificial Intelligence Features",
    body: "Future Avelisse Labs products may include AI-generated content or recommendations. AI outputs may occasionally contain inaccuracies or incomplete information and should not be relied upon as professional, legal, financial, or medical advice.",
  },

  {
    title: "Intellectual Property",
    body: "All software, websites, applications, content, trademarks, logos, interface designs, graphics, text, branding, and related materials provided by Avelisse Labs LLC remain the exclusive property of Avelisse Labs LLC or its licensors unless otherwise stated. Users receive only limited rights necessary to access and use services.",
  },

  {
    title: "Third-Party Services",
    body: "Our services may integrate or link to third-party providers, platforms, websites, or tools. We are not responsible for third-party content, policies, availability, or practices.",
  },

  {
    title: "Termination",
    body: "We reserve the right to suspend, limit, or terminate access to services at our discretion if users violate these Terms or engage in activities that may harm our services, systems, users, or business operations.",
  },

  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by applicable law, Avelisse Labs LLC and its affiliates, officers, employees, and partners shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of our services.",
  },

  {
    title: "Changes to Terms",
    body: "We may revise these Terms periodically. Updated versions will be posted on this page with a revised effective date. Continued use of services following changes constitutes acceptance of updated terms.",
  },

  {
    title: "Contact Information",
    body: "Questions regarding these Terms of Service may be submitted through our support channels.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="section-shell pb-20 pt-32">

        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[var(--pink)]">
            Legal
          </p>

          <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-5 text-[var(--muted)]">
            Last updated May 20, 2026 for {siteConfig.name}.
          </p>
        </div>

        <div className="mt-8 rounded-[1.4rem] border border-[var(--line)] bg-white/70 p-5 text-sm leading-6 text-[var(--muted)] dark:bg-white/10">
          Questions regarding these Terms of Service can be directed to{" "}

          <Link
            className="font-bold text-[var(--foreground)]"
            href={`mailto:${siteConfig.supportEmail}`}
          >
            {siteConfig.supportEmail}
          </Link>

          . By accessing Avelisse Labs websites, applications, or services,
          you acknowledge and agree to these Terms.
        </div>

        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="glass rounded-[1.6rem] p-6"
            >
              <h2 className="font-display text-2xl font-bold">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                {section.body}
              </p>
            </section>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}