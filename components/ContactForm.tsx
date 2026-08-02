"use client";

import { useState } from "react";

const inputClasses =
  "border-0 border-b border-hairline-dark bg-transparent py-2.5 font-serif text-[17px] font-light text-ink outline-none focus:border-accent";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2.5 font-sans text-[13px] tracking-[2px] text-body">
      {label}
      {children}
    </label>
  );
}

export default function ContactForm({
  heading,
  requiredFields = false,
}: {
  heading?: string;
  requiredFields?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          navn: fd.get("navn"),
          telefon: fd.get("telefon"),
          mail: fd.get("mail"),
          besked: fd.get("besked"),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error ?? "Noget gik galt. Prøv igen senere.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMsg("Noget gik galt. Prøv igen senere.");
      setStatus("error");
    }
  }

  return (
    <form className="flex flex-col gap-[26px]" onSubmit={handleSubmit}>
      {heading && (
        <h2 className="m-0 mb-1.5 font-serif text-[34px] font-medium">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2">
        <Field label="NAVN">
          <input
            type="text"
            name="navn"
            required={requiredFields}
            className={inputClasses}
          />
        </Field>
        <Field label="TELEFON">
          <input type="tel" name="telefon" className={inputClasses} />
        </Field>
      </div>
      <Field label="MAIL">
        <input
          type="email"
          name="mail"
          required={requiredFields}
          className={inputClasses}
        />
      </Field>
      <Field label="BESKED">
        <textarea
          name="besked"
          rows={8}
          placeholder="Fortæl kort om jeres projekt…"
          className={`${inputClasses} resize-y`}
        />
      </Field>
      {status === "sent" ? (
        <p className="m-0 mt-3.5 font-serif text-[19px] italic text-accent">
          Tak for din besked! Vi vender tilbage hurtigst muligt.
        </p>
      ) : (
        <>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 w-max cursor-pointer border border-brown bg-brown px-[42px] py-[17px] font-sans text-[13px] tracking-[3px] text-cream transition-colors hover:bg-transparent hover:text-brown disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-brown disabled:hover:text-cream"
          >
            {status === "sending" ? "SENDER…" : "SEND BESKED"}
          </button>
          {status === "error" && (
            <p className="m-0 text-[15px] font-light text-accent">{errorMsg}</p>
          )}
        </>
      )}
    </form>
  );
}
