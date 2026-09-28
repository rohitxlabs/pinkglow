/**
 * The Google Sheet acts as the datastore for enquiries. Rows are written by a
 * Google Apps Script web app bound to the sheet (source in
 * `scripts/enquiries.gs`); this module POSTs each enquiry to it.
 *
 * Everything here is server-only: it is imported exclusively by the Server
 * Action, and the web app URL is read from a non-`NEXT_PUBLIC_` env var. Keep
 * it that way — anyone holding the URL can append rows to the sheet.
 */

export class SheetsNotConfiguredError extends Error {
  constructor() {
    super("Google Apps Script URL is not configured.");
    this.name = "SheetsNotConfiguredError";
  }
}

/** Apps Script cold starts can take several seconds. */
const TIMEOUT_MS = 15_000;

/**
 * Read at call time rather than module scope so that a build without
 * credentials still succeeds — the site stays statically prerenderable.
 */
function readScriptUrl(): string | null {
  return process.env.GOOGLE_SCRIPT_URL || null;
}

export function isSheetsConfigured(): boolean {
  return readScriptUrl() !== null;
}

export type EnquiryRow = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  source: string;
};

export async function appendEnquiry(enquiry: EnquiryRow): Promise<void> {
  const url = readScriptUrl();
  if (!url) throw new SheetsNotConfiguredError();

  // Apps Script answers a POST with a 302 to script.googleusercontent.com,
  // which fetch follows to read the script's JSON output.
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const text = await response.text();

  // A script that throws still returns HTTP 200, but with an HTML error page
  // instead of JSON — so the body, not the status, is the source of truth.
  let result: { ok?: boolean; error?: string } | null = null;
  try {
    result = JSON.parse(text);
  } catch {
    // Fall through to the error below.
  }

  if (!response.ok || result?.ok !== true) {
    throw new Error(
      `Apps Script append failed (HTTP ${response.status}): ` +
        (result?.error ?? text.slice(0, 300))
    );
  }
}
