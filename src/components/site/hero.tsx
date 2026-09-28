"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, GraduationCap, Palette, Sparkle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic-button";
import { SmoothLink } from "@/components/motion/smooth-link";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { stats } from "@/lib/data";

const headline = ["Glow that's", "engineered,", "not accidental."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-rose/40 via-background to-background" />
        <motion.div
          style={{ y: blobOneY }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-pink/30 blur-[110px]"
        />
        <motion.div
          style={{ y: blobTwoY }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-brand-gold/30 blur-[110px]"
        />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hairline-gold-soft mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-1.5 text-sm font-medium text-brand-pink-deep backdrop-blur"
          >
            <Sparkle className="size-3.5 text-brand-gold-deep" />
            Certified MUA Academy &amp; Luxury Glam Studio
          </motion.div>

          <h1 className="font-heading max-w-xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    i === headline.length - 1
                      ? "text-gradient-glow block italic font-script"
                      : "block"
                  }
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground text-balance"
          >
            PinkGlow pairs precision bridal artistry with a certified,
            module-by-module MUA academy — so every face we touch, and every
            artist we train, leaves camera-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Magnetic>
              <Button
                asChild
                size="lg"
                className="btn-shine relative overflow-hidden rounded-full bg-brand-pink px-7 text-white shadow-xl shadow-brand-pink/30 hover:bg-brand-pink-deep"
              >
                <SmoothLink href="#contact">
                  Book a Glam Session
                  <ArrowRight className="size-4" />
                </SmoothLink>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hairline-gold rounded-full bg-transparent px-7 text-brand-pink-deep hover:bg-secondary"
              >
                <SmoothLink href="#academy">
                  <Palette className="size-4" />
                  Explore MUA Course
                </SmoothLink>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid w-full max-w-lg grid-cols-2 gap-6 border-t border-brand-gold/15 pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="font-heading flex items-baseline text-3xl font-semibold text-gradient-gold sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.label.includes("Rating") ? 1 : 0}
                  />
                </span>
                <span className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="hairline-gold glow-premium relative aspect-4/5 overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/hero-bride.jpg"
              alt="Bridal makeup and jewellery look by PinkGlow"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-plum/50 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hairline-gold-soft glow-ring absolute -top-5 -right-4 flex items-center gap-2 rounded-2xl bg-card/95 px-4 py-3 backdrop-blur"
          >
            <GraduationCap className="size-4 text-brand-pink" />
            <span className="text-xs font-semibold text-foreground">
              Certified Academy
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="hairline-gold-soft glow-premium absolute -bottom-8 -left-8 h-28 w-28 overflow-hidden rounded-2xl bg-card sm:h-32 sm:w-32"
          >
            <Image
              src="/images/gallery-eye-glow.jpg"
              alt="Soft glam eye makeup detail"
              fill
              sizes="128px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-16 flex justify-center text-brand-gold-deep/60"
      >
        <Sparkles className="size-5" />
      </motion.div>
    </section>
  );
}
