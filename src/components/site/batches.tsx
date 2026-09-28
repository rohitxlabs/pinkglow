"use client";

import { Check, Sparkle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { SmoothLink } from "@/components/motion/smooth-link";
import { cn } from "@/lib/utils";

const batches = [
  {
    name: "Weekend Batch",
    tagline: "For working professionals",
    features: [
      "All 12 modules, Sat–Sun sessions",
      "Live bridal demonstrations",
      "Module-wise examinations",
      "Certificate & celebration",
    ],
    highlighted: false,
  },
  {
    name: "Weekday Intensive",
    tagline: "Most chosen by our students",
    features: [
      "All 12 modules, 5 days a week",
      "Extended hands-on practice hours",
      "Personal kit guidance",
      "Live bridal demonstrations",
      "Module-wise examinations",
      "Certificate & celebration",
    ],
    highlighted: true,
  },
  {
    name: "Fast-Track Pro",
    tagline: "For quick, focused upskilling",
    features: [
      "All 12 modules, compressed schedule",
      "Priority one-on-one mentoring",
      "Live bridal demonstrations",
      "Certificate & celebration",
    ],
    highlighted: false,
  },
];

export function Batches() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            Batches
          </span>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            Pick the pace that fits your life.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Every batch covers the complete Ultimate Course curriculum.
            Message us for current seats &amp; fees.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {batches.map((batch) => (
            <motion.div key={batch.name} variants={revealItem}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8",
                  batch.highlighted
                    ? "hairline-gold glow-premium bg-linear-to-b from-brand-pink/10 to-transparent"
                    : "hairline-gold-soft bg-card"
                )}
              >
                {batch.highlighted && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-semibold text-white">
                    <Sparkle className="size-3" />
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {batch.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {batch.tagline}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {batch.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    "mt-8 rounded-full",
                    batch.highlighted
                      ? "bg-brand-pink text-white hover:bg-brand-pink-deep"
                      : "bg-secondary text-brand-pink-deep hover:bg-secondary/70"
                  )}
                >
                  <SmoothLink href="#contact">Get Batch Details</SmoothLink>
                </Button>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
