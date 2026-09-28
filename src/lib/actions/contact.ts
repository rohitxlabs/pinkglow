"use server";

import { headers } from "next/headers";
import {
  contactFields,
  validateContact,
  hasErrors,
  honeypotField,
  type ContactState,
  type ContactValues,
} from "@/lib/contact-validation";
import {
  appendEnquiry,
  SheetsNotConfiguredError,
} from "@/lib/google-sheets";
import { rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const GENERIC_ERROR =
  "Something went wrong sending your enquiry. Please try again, or reach us on WhatsApp.";

async function clientKey(): Promise<string> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  // The left-most entry is the original client; the rest are proxies.
  const ip = forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip");
  return ip || "unknown";
}

export async function submitEnquiry(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // A filled honeypot means a bot. Report success so it does not retry, but
  // write nothing to the sheet.
  if (String(formData.get(honeypotField) ?? "").trim() !== "") {
    return { status: "success" };
  }

  const { allowed } = rateLimit(await clientKey(), RATE_LIMIT, RATE_WINDOW_MS);
  if (!allowed) {
    return {
      status: "error",
      message:
        "That's a few enquiries in a short window. Please give it a few minutes, or call us directly.",
    };
  }

  const values = Object.fromEntries(
    contactFields.map((field) => [
      field,
      String(formData.get(field) ?? "").trim(),
    ])
  ) as ContactValues;

  // Re-validated here regardless of what the client checked — a Server Action
  // is reachable by direct POST, so the client is never the authority.
  const fieldErrors = validateContact(values);
  if (hasErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    await appendEnquiry({ ...values, source: "contact-section" });
    return { status: "success" };
  } catch (error) {
    if (error instanceof SheetsNotConfiguredError) {
      console.error(
        "[contact] Google Sheets is not configured — enquiry was NOT saved. " +
          "Set GOOGLE_SCRIPT_URL to the Apps Script web app /exec URL."
      );
    } else {
      console.error("[contact] Failed to append enquiry to Google Sheets:", error);
    }
    // Never surface internal details to the browser.
    return { status: "error", message: GENERIC_ERROR };
  }
}
