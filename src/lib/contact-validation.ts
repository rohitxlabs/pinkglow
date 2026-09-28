import { interestOptions } from "@/lib/data";

export const contactFields = [
  "name",
  "phone",
  "email",
  "interest",
  "message",
] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactValues = Record<ContactField, string>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export const emptyContactValues: ContactValues = {
  name: "",
  phone: "",
  email: "",
  interest: "bridal",
  message: "",
};

/** Length caps mirror the Sheets cell limit and keep the action payload small. */
export const maxLengths: Record<ContactField, number> = {
  name: 80,
  phone: 24,
  email: 254,
  interest: 32,
  message: 2000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

const interestValues = new Set<string>(interestOptions.map((o) => o.value));

/**
 * Validates a single field. Returns `undefined` when the value is acceptable.
 * Shared by the client (instant feedback) and the Server Action (authority),
 * so the two can never drift apart.
 */
export function validateField(
  field: ContactField,
  raw: string
): string | undefined {
  const value = raw.trim();

  if (value.length > maxLengths[field]) {
    return `Please keep this under ${maxLengths[field]} characters.`;
  }

  switch (field) {
    case "name":
      if (!value) return "Please tell us your name.";
      if (value.length < 2) return "That name looks too short.";
      return undefined;

    case "phone": {
      if (!value) return "We need a number to reach you on.";
      const digits = value.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15) {
        return "Enter a valid phone number with country code.";
      }
      return undefined;
    }

    case "email":
      if (!value) return "Please add an email address.";
      if (!emailPattern.test(value)) return "That email doesn't look right.";
      return undefined;

    case "interest":
      if (!value) return "Pick what you're interested in.";
      if (!interestValues.has(value)) return "Pick one of the listed options.";
      return undefined;

    case "message":
      // Optional field — only the length cap above applies.
      return undefined;
  }
}

export function validateContact(values: ContactValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  for (const field of contactFields) {
    const error = validateField(field, values[field] ?? "");
    if (error) errors[field] = error;
  }
  return errors;
}

export function hasErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Result of a submission attempt, returned by the Server Action into
 * `useActionState`. Declared here rather than in the action module because a
 * `"use server"` file may only export async functions.
 */
export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

export const initialContactState: ContactState = { status: "idle" };

/** Name of the hidden field bots tend to fill in. Humans never see it. */
export const honeypotField = "company";
