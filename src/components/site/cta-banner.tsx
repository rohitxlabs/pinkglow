"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import { SmoothLink } from "@/components/motion/smooth-link";

export function CtaBanner() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-pink via-brand-pink-deep to-brand-plum px-8 py-16 text-center text-white sm:py-20">
          <Image
            src="/images/gallery-editorial.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-br from-brand-pink/90 via-brand-pink-deep/85 to-brand-plum/90" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-gold/40 blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-10 hidden text-brand-gold-light sm:block"
          >
            <Sparkles className="size-6" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute right-10 bottom-8 hidden text-brand-gold-light sm:block"
          >
            <GraduationCap className="size-7" />
          </motion.div>

          <h2 className="font-heading relative mx-auto max-w-2xl text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Ready to book your glow or start your MUA journey?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-white/75">
            Limited seats every batch. Limited slots every wedding season.
            Reach out today.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Button
                asChild
                size="lg"
                className="btn-shine relative overflow-hidden rounded-full bg-white px-7 text-brand-pink-deep shadow-[0_20px_50px_-16px_rgba(0,0,0,0.35)] hover:bg-white/90"
              >
                <SmoothLink href="#contact">
                  Book a Session
                  <ArrowRight className="size-4" />
                </SmoothLink>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/0 text-white hover:bg-white/10"
              >
                <SmoothLink href="#academy">Join the Academy</SmoothLink>
              </Button>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
