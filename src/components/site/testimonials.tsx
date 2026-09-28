import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="hairline-gold-soft relative flex w-[22rem] flex-col gap-4 overflow-hidden rounded-3xl bg-card p-6 shadow-sm">
      <Quote className="pointer-events-none absolute -top-3 -right-2 size-20 text-brand-pink/[0.06]" />
      <div className="flex gap-0.5 text-brand-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="relative text-sm leading-relaxed text-foreground/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-brand-pink to-brand-gold font-heading text-sm font-semibold text-white">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, half);
  const rowTwo = testimonials.slice(half).length
    ? testimonials.slice(half)
    : testimonials;

  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <Reveal className="mx-auto max-w-2xl px-4 text-center">
        <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
          Reviews
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-balance sm:text-5xl">
          Brides, grads &amp; glow-ups.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-6">
        <Marquee>
          {rowOne.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowTwo.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
