type CommonFields = { name: string; phone: string; email: string; status: string };
export type SheetsSubmission =
  | { type: "appointment"; data: CommonFields & { practice_area: string; method: string; preferred_date: string; preferred_time: string; notes: string } }
  | { type: "contact"; data: CommonFields & { message: string } }
  | { type: "career"; data: CommonFields & { position: string; cv_file_path: string; cv_link?: string } };

// Database success is authoritative; this convenience copy must never reject.
export async function copySubmissionToSheets(submission: SheetsSubmission): Promise<void> {
  const url = process.env['SHEETS_WEBHOOK_URL'];
  const secret = process.env['SHEETS_WEBHOOK_SECRET'];
  if (!url || !secret) return;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      signal: controller.signal,
      body: JSON.stringify({ secret, ...submission }),
    });
    // Consume the response within the same timeout, without logging its contents.
    await response.text();
    if (!response.ok) console.error("Sheets copy failed: HTTP status", response.status);
  } catch {
    // Fetch errors and response bodies can contain the secret URL or credentials.
    console.error(controller.signal.aborted ? "Sheets copy timed out." : "Sheets copy failed: request error.");
  } finally {
    clearTimeout(timer);
  }
}