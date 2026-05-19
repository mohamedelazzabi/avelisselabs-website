"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "nav-glass" : ""}`}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/#contact" icon={false}>
            Get in Touch
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white/60 dark:bg-white/10"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="section-shell pb-5 lg:hidden">
          <div className="glass grid gap-2 rounded-[1.6rem] p-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <Button href="/#contact" icon={false}>
              Get in Touch
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
