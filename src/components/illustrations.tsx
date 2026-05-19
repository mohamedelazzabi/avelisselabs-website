import { Baby, Flag, Heart, ShieldCheck, Sparkles, Star } from "lucide-react";

export function FamilyIllustration() {
  return (
    <div className="relative mx-auto aspect-square max-w-[430px]">
      <div className="absolute inset-6 rounded-full bg-[var(--light-pink)]" />
      <div className="absolute inset-x-14 bottom-10 top-20 rounded-t-full bg-gradient-to-b from-white to-pink-100 shadow-2xl dark:from-white/20 dark:to-pink-300/20" />
      <div className="absolute left-1/2 top-24 grid size-32 -translate-x-1/2 place-items-center rounded-full bg-[#f0c4a8] shadow-lg">
        <Heart size={44} className="text-white" />
      </div>
      <div className="absolute bottom-24 left-1/2 grid size-28 -translate-x-1/2 place-items-center rounded-full bg-white shadow-xl dark:bg-white/15">
        <Baby size={54} className="text-pink-500" strokeWidth={1.6} />
      </div>
      <div className="absolute right-10 top-28 grid size-14 place-items-center rounded-2xl bg-white shadow-xl dark:bg-white/15">
        <Heart className="fill-pink-400 text-pink-400" size={24} />
      </div>
    </div>
  );
}

export function VisionIllustration() {
  return (
    <div className="relative mx-auto h-72 max-w-[520px] overflow-hidden rounded-[2rem]">
      <div className="absolute inset-x-4 bottom-8 h-36 rounded-[50%] bg-[var(--light-pink)] opacity-70" />
      <div className="absolute bottom-10 left-1/2 h-48 w-72 -translate-x-1/2 bg-gradient-to-br from-[var(--lavender)] to-[#7a6de8]" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
      <div className="absolute bottom-10 left-[42%] h-36 w-44 bg-gradient-to-br from-white/60 to-transparent" style={{ clipPath: "polygon(52% 0, 100% 100%, 18% 100%)" }} />
      <div className="absolute left-1/2 top-7 h-28 w-1 -translate-x-1/2 bg-[var(--foreground)] opacity-50" />
      <Flag className="absolute left-[51%] top-5 fill-pink-400 text-pink-400" size={34} />
      <Sparkles className="absolute right-16 top-16 text-[var(--lavender)]" />
      <Star className="absolute left-16 top-20 fill-pink-300 text-pink-300" />
    </div>
  );
}

export const valueIcons = {
  heart: Heart,
  shield: ShieldCheck,
  star: Star,
  sparkles: Sparkles,
};
