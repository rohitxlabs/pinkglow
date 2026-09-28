"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/site/smooth-scroll-provider";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const lenisRef = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 700);
  });

  function handleClick() {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-full bg-linear-to-br from-brand-pink to-brand-gold text-white shadow-[0_12px_32px_-8px_rgba(216,17,89,0.55)] ring-1 ring-white/20 sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
