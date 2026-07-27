"use client";

import { useState } from "react";
import Link from "next/link";
import Overline from "./Overline";
import SocialIcons from "./SocialIcons";

const inputClasses =
  "border-0 border-b border-hairline-dark bg-transparent py-2.5 font-sans text-[17px] font-light text-ink outline-none focus:border-accent";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2.5 text-[13px] tracking-[2px] text-body">
      {label}
      {children}
    </label>
  );
}

export default function ContactSection() {
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
    <div id="kontakt" className="bg-beige px-6 pt-24 pb-28 md:px-16 md:pt-[130px] md:pb-[140px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[70px]">
          <Overline label="KONTAKT" className="mb-3.5" />
          <h2 className="m-0 mb-5 font-serif text-[34px] font-medium leading-[1.2] text-ink md:text-[46px]">
            Skal jeg hjælpe dig videre? Kontakt mig
          </h2>
          <p
            className="m-0 max-w-[680px] text-[17px] font-light leading-[1.7] text-body"
            style={{ textWrap: "pretty" }}
          >
            Vi starter med en{" "}
            <strong className="font-medium text-ink">uforpligtende snak</strong>
            , lytter til jeres ønsker og former et designforløb, der passer til
            jer. Processen er enkel, tryg og bygget på ærlig rådgivning og
            gennemsigtighed.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_420px] lg:gap-[110px]">
          <form className="flex flex-col gap-[26px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2">
              <Field label="NAVN">
                <input type="text" name="navn" className={inputClasses} />
              </Field>
              <Field label="TELEFON">
                <input type="tel" name="telefon" className={inputClasses} />
              </Field>
            </div>
            <Field label="MAIL">
              <input type="email" name="mail" className={inputClasses} />
            </Field>
            <Field label="BESKED">
              <textarea
                name="besked"
                rows={5}
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
                  className="mt-3.5 w-max cursor-pointer border border-brown bg-brown px-[42px] py-[17px] font-sans text-[13px] tracking-[3px] text-cream transition-colors hover:bg-transparent hover:text-brown disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-brown disabled:hover:text-cream"
                >
                  {status === "sending" ? "SENDER…" : "SEND BESKED"}
                </button>
                {status === "error" && (
                  <p className="m-0 text-[15px] font-light text-accent">
                    {errorMsg}
                  </p>
                )}
              </>
            )}
          </form>
          <div className="border-l border-hairline-dark pl-8 md:pl-16">
            <h3 className="m-0 mb-1.5 font-serif text-[32px] font-medium text-ink">
              Kimmie Brinch
            </h3>
            <div className="mb-9 font-serif text-[19px] italic text-body">
              Ejer &amp; Indehaver
            </div>
            <div className="mb-9 flex flex-col gap-4 text-[16px] font-light">
              <a
                href="tel:+4541866431"
                className="w-fit text-ink underline underline-offset-4 hover:text-accent"
              >
                +45 41 86 64 31
              </a>
              <a
                href="mailto:Kimmie@studio-brinch.dk"
                className="w-fit text-ink underline underline-offset-4 hover:text-accent"
              >
                Kimmie@studio-brinch.dk
              </a>
              <div className="text-body">CVR: 44717077</div>
            </div>
            <SocialIcons className="mb-11 text-ink [&_a:hover]:text-accent" />
            <Link
              href="/kontakt"
              className="inline-block border border-ink px-[30px] py-4 text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              SKAL JEG KONTAKTE DIG I STEDET?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
