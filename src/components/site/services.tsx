"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Clock,
  Crown,
  Camera,
  Droplets,
  PartyPopper,
  Scissors,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { SmoothLink } from "@/components/motion/smooth-link";
import { services } from "@/lib/data";

const icons = [Crown, PartyPopper, Camera, Scissors, Droplets, Users];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            Services
          </span>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            Every look, engineered for the moment it needs to survive.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div key={service.title} variants={revealItem}>
                <TiltCard className="group h-full">
                  <div className="border-border/70 hairline-gold-soft relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:border-brand-gold/40 hover:shadow-[0_24px_60px_-24px_rgba(216,17,89,0.28)]">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} by PinkGlow`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-black/0" />
                      <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md">
                        <Icon className="size-4.5" />
                      </span>
                      <span className="hairline-gold-soft absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-pink-deep uppercase">
                        {service.tag}
                      </span>
                      <div className="absolute inset-x-4 bottom-3 flex items-center gap-1.5 text-xs font-medium text-white/90">
                        <Clock className="size-3.5" />
                        {service.duration}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <ul className="mt-4 flex flex-col gap-1.5 border-t border-border/60 pt-4">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-foreground/75"
                          >
                            <Check className="mt-0.5 size-3.5 shrink-0 text-brand-pink" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <SmoothLink
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-pink-deep"
                      >
                        Enquire
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </SmoothLink>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
