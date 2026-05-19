import Image from "next/image";
import { pregnancyScreens } from "@/lib/site";

export function PhoneMockups() {
  const heroScreens = [pregnancyScreens[0], pregnancyScreens[3], pregnancyScreens[4]];

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[650px]" aria-label="Pregnancy app screens currently in development">
      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-[var(--light-pink)] opacity-70 blur-2xl" />
      <div className="absolute right-0 top-3 h-80 w-80 rounded-full bg-[var(--soft-purple)] opacity-80 blur-2xl" />
      <div className="absolute left-10 top-8 z-30 rotate-[-7deg] sm:left-16">
        <ScreenPhone screen={heroScreens[0]} priority />
      </div>
      <div className="absolute right-4 top-28 z-20 rotate-[8deg] scale-[0.88] sm:right-8">
        <ScreenPhone screen={heroScreens[1]} />
      </div>
      <div className="absolute bottom-2 left-1/2 z-10 hidden -translate-x-1/2 rotate-[2deg] scale-[0.74] opacity-90 sm:block">
        <ScreenPhone screen={heroScreens[2]} />
      </div>
    </div>
  );
}

function ScreenPhone({
  screen,
  priority = false,
}: {
  screen: (typeof pregnancyScreens)[number];
  priority?: boolean;
}) {
  return (
    <figure className="w-[235px] rounded-[2.35rem] bg-neutral-950 p-2 shadow-[0_28px_90px_rgba(74,42,65,0.28)] sm:w-[270px]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] bg-[#fbf6f4]">
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes="(max-width: 640px) 235px, 270px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="sr-only">
        {screen.title}: {screen.label}
      </figcaption>
    </figure>
  );
}
