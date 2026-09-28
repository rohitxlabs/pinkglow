"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { bookingSteps, enrolSteps } from "@/lib/data";

const panels = [
  {
    value: "book",
    label: "Book a Service",
    steps: bookingSteps,
    image: "/images/hero-bride.jpg",
    alt: "Bridal makeup session at PinkGlow studio",
  },
  {
    value: "academy",
    label: "Join the Academy",
    steps: enrolSteps,
    image: "/images/academy-brushes.jpg",
    alt: "PinkGlow academy makeup brush collection",
  },
];

export function Process() {
  const [active, setActive] = useState("book");

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            How It Works
          </span>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            From first message to full glow.
          </h2>
        </Reveal>

        <Tabs
          value={active}
          onValueChange={setActive}
          className="mt-14 items-center gap-0"
        >
          <TabsList className="hairline-gold-soft h-auto rounded-full bg-secondary/70 p-1.5">
            {panels.map((panel) => (
              <TabsTrigger
                key={panel.value}
                value={panel.value}
                className="rounded-full px-5 py-2 text-sm font-medium data-[state=active]:bg-brand-pink data-[state=active]:text-white"
              >
                {panel.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {panels.map((panel) => (
            <TabsContent key={panel.value} value={panel.value} className="w-full">
              <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
                <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
                  {panel.steps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      variants={revealItem}
                      className="hairline-gold-soft relative rounded-2xl bg-card p-6"
                    >
                      <span className="font-heading text-gradient-gold text-3xl font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading mt-3 text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </RevealGroup>

                <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={panel.image}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="hairline-gold glow-premium absolute inset-0 overflow-hidden rounded-[2.5rem]"
                    >
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, 80vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-brand-plum/50 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
