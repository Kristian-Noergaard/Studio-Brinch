import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

type Submission = {
  navn?: string;
  telefon?: string;
  mail?: string;
  besked?: string;
};

export async function POST(req: Request) {
  let body: Submission;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
  }

  const navn = body.navn?.trim() ?? "";
  const telefon = body.telefon?.trim() ?? "";
  const mail = body.mail?.trim() ?? "";
  const besked = body.besked?.trim() ?? "";

  if (!navn || (!mail && !telefon)) {
    return NextResponse.json(
      { error: "Udfyld venligst navn samt mail eller telefon." },
      { status: 400 }
    );
  }

  const submission = {
    navn,
    telefon,
    mail,
    besked,
    receivedAt: new Date().toISOString(),
  };

  // Persist locally so no inquiry is lost, even without email configured.
  // Best-effort: serverless filesystems (Vercel) are read-only.
  try {
    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "submissions.jsonl"),
      JSON.stringify(submission) + "\n"
    );
  } catch {
    console.log("Contact submission (file storage unavailable):", submission);
  }

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Studio Brinch <onboarding@resend.dev>",
        to: process.env.CONTACT_TO ?? "Kimmie@studio-brinch.dk",
        reply_to: mail || undefined,
        subject: `Ny henvendelse fra ${navn}`,
        text: [
          `Navn: ${navn}`,
          `Telefon: ${telefon || "—"}`,
          `Mail: ${mail || "—"}`,
          "",
          besked || "(ingen besked)",
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Beskeden kunne ikke sendes. Prøv igen senere." },
        { status: 502 }
      );
    }
  } else {
    console.log("Contact submission (no RESEND_API_KEY set):", submission);
  }

  return NextResponse.json({ ok: true });
}
