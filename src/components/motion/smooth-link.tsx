"use client";

import { forwardRef, type MouseEvent, type ReactNode } from "react";
import { useLenis } from "@/components/site/smooth-scroll-provider";

type SmoothLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  offset?: number;
};

export const SmoothLink = forwardRef<HTMLAnchorElement, SmoothLinkProps>(
  ({ href, children, className, onNavigate, offset = -88, ...props }, ref) => {
    const lenisRef = useLenis();

    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
      if (!href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset, duration: 1.3 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onNavigate?.();
    }

    return (
      <a ref={ref} href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }
);

SmoothLink.displayName = "SmoothLink";
