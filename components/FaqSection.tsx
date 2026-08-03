"use client";

import { useState } from"react";
import Overline from"./Overline";

const FAQS = [
  {
    q:"Hvad koster det at samarbejde med Studio Brinch?",
    a:"Prisen afhænger af projektets omfang, fra et enkelt rådgivningsbesøg til et komplet forløb med renovering eller nybyg. Vi starter altid med en uforpligtende samtale, hvor vi afstemmer ønsker og budget, og du får et fast tilbud, inden vi går i gang.",
  },
  {
    q:"Hvordan foregår det første møde?",
    a:"Vi mødes hjemme hos jer eller online. Her taler vi om jeres bolig, hverdag, stilart og drømme, og I får en klar fornemmelse af, hvordan et forløb kunne se ud for netop jeres projekt. Mødet er helt uforpligtende.",
  },
  {
    q:"Arbejder I både med renovering og nybyg?",
    a:"Ja. Vi har speciale i begge dele, fra totalrenovering af eksisterende boliger til indretning og materialevalg i nybyggeri, hvor vi gerne kommer med allerede i plantegningsfasen.",
  },
  {
    q:"Hjælper I også med håndværkere og leverandører?",
    a:"Ja, vi kan styre projektet fra start til slut og holder den løbende dialog med håndværkere og leverandører, så designet bliver ført ud i livet som aftalt, og I kan bruge tiden på alt det andet.",
  },
  {
    q:"Hvor i landet arbejder I?",
    a:"Vi holder til i Kolding og arbejder primært i Trekantområdet og det øvrige Jylland, men tag endelig kontakt, hvis I bor længere væk. Online rådgivning er også en mulighed.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <div
      className="bg-cream px-6 py-24 md:px-16 md:py-[120px]"
      data-reveal
      data-sec="faq"
    >
      <div className="mx-auto flex max-w-[820px] flex-col gap-16">
        <div className="flex flex-col items-center text-center">
          <Overline label="FAQ" centered className="mb-[22px]" />
          <h2 className="m-0 font-serif text-[34px] font-medium leading-[1.2] text-ink md:text-[42px]">
            Ofte stillede spørgsmål
          </h2>
        </div>
        <div className="flex w-full flex-col border-b border-hairline">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq-item border-t border-hairline">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent py-[26px] text-left font-serif text-[21px] font-medium text-ink md:text-[24px]"
                >
                  {f.q}
                  <span
                    className="flex-none font-serif text-[26px] font-light text-accent transition-transform duration-300"
                    style={{
                      transform: isOpen ?"rotate(45deg)" :"rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="m-0 pb-7 pr-6 text-[20px] font-light leading-[1.75] text-body md:pr-[60px]"
                    style={{ textWrap:"pretty" }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
