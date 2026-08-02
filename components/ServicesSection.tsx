import Link from "next/link";

const SERVICES = [
  {
    title: "Design besøget",
    body: "For dem der vil have hurtig retning og sparring. Et intensivt besøg i jeres hjem, hvor vi analyserer rummene og giver konkrete forslag til indretning, farver og møbler.",
    image: "/assets/service_1.png",
    imageLabel: "Farvekort med varme neutrale toner",
    overlay: null,
  },
  {
    title: "Hjemmekoncept",
    body: "Et skræddersyet interiørkoncept for flere rum, hvor vi skaber sammenhæng i funktion, materialer og stemning. Vi kombinerer æstetik med hverdagsflow, så rummet både føles smukt og fungerer.",
    image: "/assets/service_2b.webp",
    imageLabel: "Håndtegnet skitse af køkken højskabe",
    overlay: { src: "/assets/service_2a.webp", aspect: "4/3" },
  },
  {
    title: "Fuldt designforløb",
    body: "Et komplet designforløb til nybyg, renovering eller totalindretning. Vi guider dig gennem alle valg, fra planløsning til farver, inventar og styling. Hele vejen sikrer vi en rød tråd, der matcher din stil og hverdagsbehov.",
    image: "/assets/service_3.jpg",
    imageLabel: "Færdigt snedkerkøkken i egetræ",
    overlay: { src: "/assets/service_3b.webp", aspect: "3/4" },
  },
];

export default function ServicesSection() {
  return (
    <div
      className="bg-brown px-6 pt-24 pb-20 md:px-16 md:pt-[120px] md:pb-[90px]"
      data-reveal
      data-sec="services"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[50px] grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-[auto_auto] lg:gap-2">
          <div className="text-left">
            <h2
              className="m-0 max-w-[560px] font-serif text-[34px] font-normal leading-[1.2] text-cream md:text-[46px]"
              style={{ textWrap: "pretty" }}
            >
              <span className="om-w1">Fra idé til virkelighed,</span>
              <br />
              <span className="om-w2">
                fra hurtig sparring til total designløsning
              </span>
            </h2>
          </div>
          <div className="max-w-[480px] lg:justify-self-start">
            <div className="om-w2 mb-3.5 flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-rose">
                VORES SERVICES
              </div>
              <div className="h-px flex-1 bg-rose" />
            </div>
            <p
              className="om-v3 om-words m-0 text-left text-[17px] font-light leading-[1.7] text-cream/75"
              style={{ textWrap: "pretty" }}
            >
              Uanset om du har brug for et enkelt besøg, et samlet koncept eller
              et fuldt designforløb, tilpasser vi processen til dit projekt. Hos
              Studio Brinch handler design om mere end æstetik, det handler om
              at skabe ro, funktion og personlighed i hverdagen.
            </p>
          </div>
        </div>
        <div className="reveal-grid grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col">
              <div
                className="om-zoomwrap relative aspect-[5/5.6] overflow-hidden"
                role="img"
                aria-label={s.imageLabel}
              >
                <div
                  className="om-zoom om-parallax absolute inset-x-0 -inset-y-[8%] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${s.image}')`,
                    backgroundColor: "#4A483F",
                  }}
                />
                {s.overlay && (
                  <div
                    className="absolute right-4 top-4 w-[42%] bg-hairline bg-cover bg-center bg-no-repeat"
                    style={{
                      aspectRatio: s.overlay.aspect,
                      backgroundImage: `url('${s.overlay.src}')`,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                    }}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col bg-brown-hover px-[26px] pt-6 pb-[26px]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1.5">
                  <h3 className="m-0 font-serif text-[28px] font-medium text-cream">
                    {s.title}
                  </h3>
                  <span className="flex-none font-serif text-[17px] italic text-cream/65">
                    Pris efter aftale
                  </span>
                </div>
                <p
                  className="m-0 mt-3 text-[15px] font-light leading-[1.7] text-cream/72"
                  style={{ textWrap: "pretty" }}
                >
                  {s.body}
                </p>
                <Link
                  href="/ydelser"
                  className="mt-auto inline-flex w-fit items-center gap-2.5 pt-[18px] font-sans text-[14px] tracking-[2px] text-rose hover:text-cream"
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
