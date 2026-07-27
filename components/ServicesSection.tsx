import Link from "next/link";
import Overline from "./Overline";

const SERVICES = [
  {
    n: "1",
    title: "Design besøget",
    body: "For dem der vil have hurtig retning og sparring. Et intensivt besøg i jeres hjem, hvor vi analyserer rummene og giver konkrete forslag til indretning, farver og møbler.",
  },
  {
    n: "2",
    title: "Hjemmekoncept",
    body: "Et skræddersyet interiørkoncept for flere rum, hvor vi skaber sammenhæng i funktion, materialer og stemning. Vi kombinerer æstetik med hverdagsflow, så rummet både føles smukt og fungerer.",
  },
  {
    n: "3",
    title: "Fuldt designforløb",
    body: "Et komplet designforløb til nybyg, renovering eller totalindretning. Vi guider dig gennem alle valg — fra planløsning til farver, inventar og styling. Hele vejen sikrer vi en rød tråd, der matcher din stil og hverdagsbehov.",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-brown px-6 pt-24 pb-28 md:px-16 md:pt-[130px] md:pb-[140px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[90px] flex flex-col items-center text-center">
          <Overline label="VORES SERVICES" centered dark className="mb-3.5" />
          <h2
            className="m-0 mb-6 max-w-[760px] font-serif text-[34px] font-normal leading-[1.2] text-cream md:text-[46px]"
            style={{ textWrap: "pretty" }}
          >
            Fra idé til virkelighed — fra hurtig sparring til total designløsning
          </h2>
          <p
            className="m-0 max-w-[680px] text-[17px] font-light leading-[1.7] text-cream/75"
            style={{ textWrap: "pretty" }}
          >
            Uanset om du har brug for et enkelt besøg, et samlet koncept eller et
            fuldt designforløb, tilpasser vi processen til dit projekt. Hos
            Studio Brinch handler design om mere end æstetik — det handler om at
            skabe ro, funktion og personlighed i hverdagen.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-px lg:grid-cols-3"
          style={{ background: "rgba(247,245,239,0.18)" }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col overflow-hidden bg-brown px-11 pt-[54px] pb-[46px] transition-colors duration-400 hover:bg-brown-hover"
            >
              {/* Giant decorative numeral intentionally overlaps behind the heading */}
              <div
                className="pointer-events-none absolute right-4 top-[-30px] font-serif text-[150px] italic leading-none"
                style={{ color: "rgba(201,167,143,0.14)" }}
              >
                {s.n}
              </div>
              <h3 className="m-0 mb-[18px] font-serif text-[31px] font-medium text-cream">
                {s.title}
              </h3>
              <p
                className="m-0 text-[16px] font-light leading-[1.75] text-cream/72"
                style={{ textWrap: "pretty" }}
              >
                {s.body}
              </p>
              <div className="mt-auto flex items-baseline justify-between gap-5 pt-9">
                <span className="font-serif text-[18px] italic text-cream/65">
                  Pris efter aftale
                </span>
                <Link
                  href="/ydelser"
                  className="inline-flex items-center gap-2.5 text-[14px] tracking-[2px] text-rose hover:text-cream"
                >
                  LÆS MERE <span className="text-[17px]">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
