"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, GraduationCap, Sparkle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/motion/smooth-link";
import { academyHighlights, courseModules } from "@/lib/data";

export function Academy() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden bg-brand-plum py-28 text-brand-cream sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-pink/25 blur-[140px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <GraduationCap className="size-4 text-brand-gold-light" />
                Certified Academy
              </div>
              <h2 className="font-heading mt-5 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
                Professional MUA{" "}
                <span className="text-gradient-gold italic font-script">
                  Ultimate Course
                </span>{" "}
                — Basic to Advance
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-brand-cream/70">
                Twelve structured modules, real bridal demonstrations, and an
                examination after every module — so you graduate with proof
                of skill, not just a certificate.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hairline-gold-soft glow-premium relative mt-8 h-48 overflow-hidden rounded-3xl">
                <Image
                  src="/images/academy-brushes.jpg"
                  alt="Professional makeup brush collection used in the PinkGlow academy"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-plum/70 via-brand-plum/0 to-transparent" />
              </div>
            </Reveal>

            <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {academyHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={revealItem}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <Award className="size-5 text-brand-gold-light" />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-cream/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <Button
                asChild
                size="lg"
                className="btn-shine relative mt-10 overflow-hidden rounded-full bg-linear-to-r from-brand-pink to-brand-gold px-7 font-semibold text-brand-plum shadow-[0_20px_50px_-16px_rgba(201,151,79,0.55)] hover:opacity-95"
              >
                <SmoothLink href="#contact">
                  <Sparkle className="size-4" />
                  Enrol in the Next Batch
                </SmoothLink>
              </Button>
            </Reveal>
          </div>

          <Reveal direction="left">
            <Accordion
              type="single"
              collapsible
              defaultValue="module-01"
              className="flex flex-col gap-3"
            >
              {courseModules.map((mod) => (
                <AccordionItem
                  key={mod.number}
                  value={`module-${mod.number}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur transition-colors duration-300 hover:border-brand-gold/25"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline [&>svg]:text-brand-gold-light">
                    <span className="flex items-center gap-4">
                      <span className="font-heading ring-brand-gold-light/30 flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-pink to-brand-gold text-sm font-semibold text-brand-plum ring-1">
                        {mod.number}
                      </span>
                      <span className="text-base font-semibold text-brand-cream sm:text-lg">
                        {mod.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-13">
                    <ul className="flex flex-col gap-2">
                      {mod.points?.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-brand-cream/70"
                        >
                          <Sparkle className="mt-0.5 size-3.5 shrink-0 text-brand-gold-light" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
