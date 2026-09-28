"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { galleryItems } from "@/lib/data";

const spans = ["sm:row-span-2", "", "", "", "sm:row-span-2", ""];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            Portfolio
          </span>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            A glimpse of the glow.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:auto-rows-[14rem] sm:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              className={spans[i % spans.length]}
            >
              <div className="hairline-gold-soft group relative h-full min-h-56 overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.category} makeup look by PinkGlow`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/0 transition-opacity duration-500 group-hover:from-black/70" />
                <Sparkles className="absolute top-5 right-5 size-5 text-white/70 drop-shadow" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold tracking-wide text-brand-gold-light uppercase">
                    {item.category}
                  </p>
                  <p className="font-heading text-lg font-semibold text-white drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
