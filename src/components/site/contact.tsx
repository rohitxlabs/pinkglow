"use client";

import { useActionState, useState } from "react";
import { motion } from "motion/react";
import { Camera, Clock, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/motion/reveal";
import { businessHours, contactDetails, interestOptions } from "@/lib/data";
import {
  emptyContactValues,
  hasErrors,
  honeypotField,
  initialContactState,
  maxLengths,
  validateContact,
  validateField,
  type ContactField,
  type ContactFieldErrors,
} from "@/lib/contact-validation";
import { submitEnquiry } from "@/lib/actions/contact";

const contactInfo = [
  { icon: Phone, label: "Call / WhatsApp", value: contactDetails.phone },
  { icon: Mail, label: "Email", value: contactDetails.email },
  { icon: MapPin, label: "Studio", value: contactDetails.location },
  { icon: Camera, label: "Instagram", value: contactDetails.instagram },
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-medium text-destructive">
      {message}
    </p>
  );
}

export function Contact() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialContactState
  );
  const [values, setValues] = useState(emptyContactValues);
  const [clientErrors, setClientErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>(
    {}
  );

  // Server errors are authoritative, but a field the user has since edited
  // shows its live client-side result instead of the stale server one.
  const errors: ContactFieldErrors = { ...state.fieldErrors, ...clientErrors };

  function setField(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      setClientErrors((current) => ({
        ...current,
        [field]: validateField(field, value),
      }));
    }
  }

  function handleBlur(field: ContactField) {
    setTouched((current) => ({ ...current, [field]: true }));
    setClientErrors((current) => ({
      ...current,
      [field]: validateField(field, values[field]),
    }));
  }

  /**
   * Gate the Server Action on client-side validation so an obviously invalid
   * form never costs a roundtrip. The action re-validates server-side anyway.
   */
  function handleAction(formData: FormData) {
    const found = validateContact(values);
    if (hasErrors(found)) {
      setClientErrors(found);
      setTouched(
        Object.fromEntries(Object.keys(found).map((key) => [key, true]))
      );
      return;
    }
    setClientErrors({});
    formAction(formData);
  }

  function fieldProps(field: ContactField) {
    const message = errors[field];
    return {
      "aria-invalid": Boolean(message),
      "aria-describedby": message ? `${field}-error` : undefined,
      maxLength: maxLengths[field],
      onBlur: () => handleBlur(field),
    };
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="right">
          <span className="text-sm font-semibold tracking-[0.25em] text-brand-pink uppercase">
            Contact
          </span>
          <h2 className="font-heading mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Let&apos;s plan your glow.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us whether you&apos;re booking a look or joining the
            academy, and we&apos;ll get back within 24 hours.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand-pink">
                  <item.icon className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hairline-gold-soft mt-8 rounded-2xl bg-card/60 p-5 backdrop-blur">
            <div className="mb-3 flex items-center gap-2">
              <Clock className="size-4 text-brand-pink" />
              <p className="text-sm font-semibold text-foreground">
                Studio Hours
              </p>
            </div>
            <ul className="flex flex-col gap-1.5">
              {businessHours.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between text-xs text-muted-foreground"
                >
                  <span>{slot.day}</span>
                  <span className="font-medium text-foreground/80">
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="hairline-gold-soft glow-premium rounded-3xl bg-card p-7 sm:p-9">
            {state.status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-pink/10 text-2xl">
                  🪷
                </span>
                <p className="font-heading text-xl font-semibold text-foreground">
                  Thank you!
                </p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Your enquiry has been received. Our team will reach out to
                  you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form action={handleAction} noValidate className="flex flex-col gap-5">
                {/* Honeypot: hidden from humans, irresistible to bots. */}
                <div aria-hidden className="hidden">
                  <label htmlFor={honeypotField}>Company</label>
                  <input
                    id={honeypotField}
                    name={honeypotField}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {state.status === "error" && state.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                  >
                    <TriangleAlert className="mt-0.5 size-4 shrink-0" />
                    {state.message}
                  </motion.p>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => setField("name", e.target.value)}
                      {...fieldProps("name")}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      {...fieldProps("phone")}
                    />
                    <FieldError id="phone-error" message={errors.phone} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => setField("email", e.target.value)}
                    {...fieldProps("email")}
                  />
                  <FieldError id="email-error" message={errors.email} />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="interest">I&apos;m interested in</Label>
                  <Select
                    name="interest"
                    value={values.interest}
                    onValueChange={(value) => setField("interest", value)}
                  >
                    <SelectTrigger
                      id="interest"
                      className="w-full"
                      aria-invalid={Boolean(errors.interest)}
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError id="interest-error" message={errors.interest} />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us your date, event, or what you'd like to learn"
                    rows={4}
                    value={values.message}
                    onChange={(e) => setField("message", e.target.value)}
                    {...fieldProps("message")}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={pending}
                  className="btn-shine relative mt-2 overflow-hidden rounded-full bg-brand-pink text-white shadow-lg shadow-brand-pink/25 hover:bg-brand-pink-deep disabled:opacity-70"
                >
                  {pending ? "Sending…" : "Send Enquiry"}
                  <Send className="size-4" />
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
