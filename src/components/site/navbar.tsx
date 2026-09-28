"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/motion/smooth-link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 24
  );
  const [active, setActive] = useState("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 sm:px-6",
          scrolled
            ? "border-brand-gold/15 bg-background/75 shadow-[0_18px_50px_-20px_rgba(216,17,89,0.4)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        )}
      >
        <SmoothLink href="#home" className="flex items-center">
          <Image
            src="/logo-trimmed.png"
            alt="PinkGlow"
            width={970}
            height={325}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </SmoothLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <SmoothLink
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="border-brand-gold/25 absolute inset-0 rounded-full border bg-secondary/80"
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </SmoothLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="lg"
            className="btn-shine relative overflow-hidden rounded-full bg-brand-pink text-white shadow-lg shadow-brand-pink/30 hover:bg-brand-pink-deep"
          >
            <SmoothLink href="#contact">
              <Sparkles className="size-4" />
              Book Consultation
            </SmoothLink>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon-lg"
              variant="ghost"
              className="rounded-full lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-brand-gold/15 bg-background/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle asChild>
                <Image
                  src="/logo-trimmed.png"
                  alt="PinkGlow"
                  width={970}
                  height={325}
                  className="h-11 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <SmoothLink
                    href={link.href}
                    className={cn(
                      "rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-brand-pink-deep",
                      active === link.href
                        ? "bg-secondary text-brand-pink-deep"
                        : "text-foreground/80"
                    )}
                  >
                    {link.label}
                  </SmoothLink>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-3 rounded-full bg-brand-pink text-white hover:bg-brand-pink-deep"
                >
                  <SmoothLink href="#contact">Book Consultation</SmoothLink>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
