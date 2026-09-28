import { Sparkle } from "lucide-react";
import { Marquee } from "@/components/motion/marquee";

const words = [
  "Bridal Makeup",
  "Certified MUA Academy",
  "HD Glam",
  "Hairstyling",
  "Draping",
  "Colour Theory",
  "Skin Prep",
  "Editorial Makeup",
];

export function Ticker() {
  return (
    <div className="relative -rotate-1 border-y border-brand-gold/25 bg-linear-to-r from-brand-pink-deep via-brand-pink to-brand-pink-deep py-4 shadow-[0_20px_50px_-20px_rgba(216,17,89,0.45)]">
      <Marquee>
        {words.map((word) => (
          <span
            key={word}
            className="flex items-center gap-3 text-lg font-medium tracking-wide text-white sm:text-xl"
          >
            <Sparkle className="size-4 shrink-0 text-brand-gold-light" />
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
