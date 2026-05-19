"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Apps in Development", value: 3, suffix: "+" },
  { label: "Future Users", value: 100, suffix: "k+" },
  { label: "Features Built", value: 40, suffix: "+" },
  { label: "Platforms Supported", value: 2, suffix: "" },
];

export function Counters() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <CounterCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

function CounterCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1100;
      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass rounded-[1.6rem] p-6 text-center">
      <div className="font-display text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-bold text-[var(--muted)]">{label}</p>
    </div>
  );
}
