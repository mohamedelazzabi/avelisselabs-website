export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-bold text-[var(--pink)]">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{children}</p> : null}
    </div>
  );
}
