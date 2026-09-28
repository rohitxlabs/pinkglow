/**
 * Google Apps Script web app that receives contact-form enquiries from the
 * site (src/lib/google-sheets.ts) and appends them to the sheet.
 *
 * Setup: open the sheet → Extensions → Apps Script, replace Code.gs with this
 * file, then Deploy → Manage deployments → edit (pencil) → Version: "New
 * version" → Deploy. Editing the existing deployment keeps the same /exec URL.
 * The deployment must "Execute as: Me" with access "Anyone".
 */

const SPREADSHEET_ID = "1F6UCjt8SnJhEol2ZKwPmvPOAZg7I78GaWyhG4gn-kRA";
const SHEET_NAME = "Enquiries";
const HEADERS = ["Timestamp", "Name", "Phone", "Email", "Interest", "Message", "Source"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet =
      spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      new Date(),
      asText(data.name),
      asText(data.phone),
      asText(data.email),
      asText(data.interest),
      asText(data.message),
      asText(data.source),
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * appendRow parses values like typed input: "=HYPERLINK(...)" would run as a
 * formula, "09876543210" would become a number and lose its leading zero, and
 * "3/4" would become a date. A leading apostrophe forces plain text for every
 * value; Sheets does not display it.
 */
function asText(value) {
  return "'" + String(value == null ? "" : value);
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
