export default function Loading() {
  return (
    <main className="section-shell min-h-screen py-28" aria-label="Loading Avelisse Labs">
      <div className="h-10 w-48 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-4">
          <div className="h-16 max-w-2xl animate-pulse rounded-3xl bg-black/10 dark:bg-white/10" />
          <div className="h-5 max-w-lg animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
          <div className="h-5 max-w-md animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
        </div>
        <div className="h-96 animate-pulse rounded-[2rem] bg-black/10 dark:bg-white/10" />
      </div>
    </main>
  );
}
