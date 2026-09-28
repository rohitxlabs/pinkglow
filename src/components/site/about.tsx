"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Brush, Heart, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { founder } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative mx-auto aspect-3/2 w-full max-w-lg">
            <div className="hairline-gold glow-premium absolute inset-6 overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/vanity.jpg"
                alt="PinkGlow makeup studio interior with vanity stations"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-plum/40 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="hairline-gold-soft glow-ring absolute -top-4 -left-6 flex items-center gap-2 rounded-2xl bg-card/95 px-4 py-3 backdrop-blur"
            >
              <Brush className="size-4 text-brand-pink" />
              <span className="text-xs font-semibold text-foreground">
                2+ Years Artistry
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="hairline-gold-soft glow-ring absolute -right-4 -bottom-6 flex items-center gap-2 rounded-2xl bg-card/95 px-4 py-3 backdrop-blur"
            >
              <Heart className="size-4 text-brand-pink" />
              <span className="text-xs font-semibold text-foreground">
                200+ Happy Faces
              </span>
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            Our Story
          </span>
          <h2 className="font-heading mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Precision artistry, built like{" "}
            <span className="text-gradient-glow italic font-script">
              a discipline
            </span>
            , not a trend.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            PinkGlow started as a single artist&apos;s obsession with getting
            undertones, contour, and finish exactly right — every single
            time. Today it&apos;s a full studio and certified academy, built
            around one rule: technique first, glow always.
          </p>

          <div className="hairline-gold-soft mt-8 rounded-3xl bg-card/60 p-6 backdrop-blur">
            <Quote className="size-6 text-brand-gold" />
            <p className="mt-3 text-sm leading-relaxed text-foreground/80 italic">
              &ldquo;{founder.bio}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-brand-pink to-brand-gold font-heading text-sm font-semibold text-white">
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {founder.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {founder.role}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
