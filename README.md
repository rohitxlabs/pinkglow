# PinkGlow

Single-page marketing site for a luxury bridal makeup studio and certified MUA
academy. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind v4
and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site runs fully without any configuration — only the contact form needs the
Google Sheets setup below.

## Contact form → Google Sheets

Enquiries submitted through the contact section are appended as rows to a Google
Sheet, which acts as the datastore. A Server Action
(`src/lib/actions/contact.ts`) POSTs each enquiry to a Google Apps Script web app
bound to the sheet; the web app URL never reaches the browser.

### 1. Add the Apps Script

1. Open the spreadsheet → **Extensions → Apps Script**.
2. Replace the contents of `Code.gs` with `scripts/enquiries.gs` from this repo,
   and set `SPREADSHEET_ID` at the top if you are using a different sheet. The
   sheet ID is the `<SHEET_ID>` part of
   `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`.
3. Save.

The script writes to a tab named **`Enquiries`**, creating it with this header
row if it does not exist:

| Timestamp | Name | Phone | Email | Interest | Message | Source |
| --------- | ---- | ----- | ----- | -------- | ------- | ------ |

### 2. Deploy it as a web app

**Deploy → New deployment → Web app**, with **Execute as: Me** and **Who has
access: Anyone**. Authorise it when prompted, then copy the **Web app URL**
(ending in `/exec`).

After editing the script later, use **Deploy → Manage deployments → edit →
Version: New version**. This step is easy to miss — the `/exec` URL keeps
serving the old version until you do, and editing the existing deployment keeps
the URL unchanged.

### 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Required | Notes |
| -------- | -------- | ----- |
| `GOOGLE_SCRIPT_URL` | yes | The web app URL, ending in `/exec`. |

`.env.local` is gitignored. Anyone holding the URL can append rows, so treat it
like a credential and never commit it or expose it as `NEXT_PUBLIC_`.

Restart the dev server after changing it.

### Behaviour when unconfigured

If `GOOGLE_SCRIPT_URL` is missing, the form does **not** pretend to succeed: the
submission fails, the visitor sees an error message pointing them at WhatsApp,
and the server logs what is missing.

## Form protections

- **Validation** runs client-side for instant feedback and again inside the
  Server Action, which is the authority — the action is reachable by direct POST.
- **Honeypot** — a hidden `company` field. Submissions that fill it are silently
  discarded.
- **Rate limiting** — 5 submissions per IP per 10 minutes. This is in-memory, so
  it is per-instance and resets on cold start; see `src/lib/rate-limit.ts` if you
  need a shared store.
- **Formula injection** — the Apps Script prefixes every value with an
  apostrophe, so submitted text is stored as plain text: never evaluated as a
  formula, and phone numbers keep their leading `+` or `0`.

## Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Before going live

Replace the placeholder contact details in `src/lib/data.ts` — `contactDetails`
still holds the dummy phone `+91 98765 43210` and email `hello@pinkglow.studio`.
# pinkglow
