"use client";

import Image from "next/image";
import { MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/motion/smooth-link";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal direction="right">
          <div className="lg:sticky lg:top-32">
            <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
              FAQ
            </span>
            <h2 className="font-heading mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Everything brides and future artists ask us before booking a
              session or enrolling in a batch.
            </p>

            <div className="hairline-gold-soft glow-premium relative mt-8 hidden aspect-4/5 overflow-hidden rounded-[2rem] sm:block">
              <Image
                src="/images/gallery-hairstyle.jpg"
                alt="Professional makeup kit at PinkGlow studio"
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-plum/55 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center gap-2.5 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                <MessageCircleQuestion className="size-4 text-brand-pink" />
                <span className="text-xs font-semibold text-foreground">
                  Still unsure? Just ask us directly.
                </span>
              </div>
            </div>

            <Button
              asChild
              className="btn-shine relative mt-6 overflow-hidden rounded-full bg-brand-pink text-white hover:bg-brand-pink-deep"
            >
              <SmoothLink href="#contact">Ask Your Question</SmoothLink>
            </Button>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`faq-${i}`}
                className="hairline-gold-soft overflow-hidden rounded-2xl bg-card px-5 transition-colors duration-300 hover:border-brand-gold/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline [&>svg]:text-brand-pink">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
