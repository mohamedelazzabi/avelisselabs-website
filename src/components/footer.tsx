import { Instagram, Mail, Music2 } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const columns = [
  { title: "Company", links: [{ label: "About", href: "/#about" }, { label: "Our Vision", href: "/#vision" }, { label: "Contact", href: "/#contact" }] },
  { title: "Products", links: [{ label: "Our Apps", href: "/#apps" }, { label: "App Hub", href: "https://apps.avelisselabs.com" }, { label: "SaaS Coming Soon", href: "https://saas.avelisselabs.com" }] },
  { title: "Support", links: [{ label: "Help Center", href: "https://support.avelisselabs.com" }, { label: "Email Support", href: `mailto:${siteConfig.supportEmail}` }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Building smart apps for wellness, family life, fitness, nutrition, cycle tracking, and AI-powered support.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon label="Instagram" href="#" icon={<Instagram size={18} />} />
            <SocialIcon label="TikTok" href="#" icon={<Music2 size={18} />} />
            <SocialIcon label="Email" href={`mailto:${siteConfig.supportEmail}`} icon={<Mail size={18} />} />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section-shell mt-10 text-sm text-[var(--muted)]">© 2026 Avelisse Labs LLC. All rights reserved.</div>
    </footer>
  );
}

function SocialIcon({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} aria-label={label} className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white/60 transition hover:-translate-y-0.5 dark:bg-white/10">
      {icon}
    </Link>
  );
}
