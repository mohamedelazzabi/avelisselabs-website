"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { pregnancyScreens } from "@/lib/site";

export function AppCarousel() {
  const [index, setIndex] = useState(0);
  const current = pregnancyScreens[index];

  return (
    <div className="glass rounded-[2rem] p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-[var(--muted)]">Screenshot preview</p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => setIndex((value) => (value + pregnancyScreens.length - 1) % pregnancyScreens.length)}
            className="grid size-10 place-items-center rounded-full bg-white/70 transition hover:-translate-y-0.5 dark:bg-white/10"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => setIndex((value) => (value + 1) % pregnancyScreens.length)}
            className="grid size-10 place-items-center rounded-full bg-white/70 transition hover:-translate-y-0.5 dark:bg-white/10"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[240px_1fr]">
        <div className="mx-auto w-[220px] rounded-[2rem] bg-neutral-950 p-2">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.6rem] bg-[#fbf6f4]">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-pink-100 px-4 py-2 text-xs font-bold text-pink-700 dark:bg-pink-400/15 dark:text-pink-200">
            Coming Soon
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold">{current.title}</h3>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            {current.label} is part of the pregnancy tracker currently in development, with a broader Avelisse app family planned around wellness, fitness, nutrition, cycles, and AI support.
          </p>
          <div className="mt-6 flex gap-2">
            {pregnancyScreens.map((screen, dotIndex) => (
              <button
                key={screen.label}
                type="button"
                aria-label={`Show ${screen.label}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${index === dotIndex ? "w-9 bg-[var(--pink)]" : "w-2.5 bg-black/20 dark:bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
