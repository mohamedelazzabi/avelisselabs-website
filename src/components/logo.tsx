import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Avelisse Labs home">
      <span className="relative grid size-11 place-items-center rounded-2xl bg-white shadow-[0_16px_40px_rgba(255,126,182,0.22)] dark:bg-white/10">
        <span className="font-display text-3xl font-extrabold leading-none gradient-text">A</span>
        <span className="absolute right-2 top-2 size-2 rounded-full bg-[var(--lavender)]" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">Avelisse Labs</span>
    </Link>
  );
}
