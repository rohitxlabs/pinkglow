import Image from "next/image";
import { Camera, MessageCircle, Play } from "lucide-react";
import { SmoothLink } from "@/components/motion/smooth-link";
import { navLinks, contactDetails } from "@/lib/data";

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: Play, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-brand-gold/15 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <SmoothLink href="#home" className="flex items-center">
              <Image
                src="/logo-trimmed.png"
                alt="PinkGlow"
                width={970}
                height={325}
                className="h-14 w-auto object-contain"
              />
            </SmoothLink>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Luxury makeup artistry and a certified MUA academy — technique
              first, glow always.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-brand-pink/40 hover:text-brand-pink"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmoothLink
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-pink"
                  >
                    {link.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>{contactDetails.phone}</li>
              <li>{contactDetails.email}</li>
              <li>{contactDetails.location}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Academy</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>Ultimate MUA Course</li>
              <li>Module-wise Examinations</li>
              <li>Certificate &amp; Celebration</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>{`© ${new Date().getFullYear()} PinkGlow Studio & Academy. All rights reserved.`}</p>
          <p>Crafted with 🪷 for artists who glow with precision.</p>
        </div>
      </div>
    </footer>
  );
}
