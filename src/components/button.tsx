import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
};

export function Button({ href, children, variant = "primary", icon = true }: ButtonProps) {
  const styles = {
    primary:
      "soft-gradient text-white shadow-[0_18px_45px_rgba(255,126,182,0.34)] hover:translate-y-[-2px]",
    secondary:
      "border border-[var(--pink)] bg-white/55 text-[var(--foreground)] hover:bg-white dark:bg-white/5 dark:hover:bg-white/10",
    ghost: "text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
      {icon ? <ArrowRight aria-hidden="true" size={17} /> : null}
    </Link>
  );
}
