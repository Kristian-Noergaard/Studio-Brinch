import Link from"next/link";
import MobileCarousel from"./MobileCarousel";

const SERVICES = [
  {
    title:"Et enkelt besøg",
    price:"Pris, 5.000 kr.",
    body:"For dem der vil have hurtig retning og sparring. Et intensivt besøg i jeres hjem, hvor vi analyserer rummene og giver konkrete forslag til indretning, farver og møbler.",
    mobileBody:"For dem der vil have hurtig retning og sparring. Et intensivt besøg i jeres hjem, hvor vi analyserer rummene og giver konkrete forslag til indretning, farver og møbler.",
    image:"/assets/service_1.webp",
    mobileImage:"/assets/service_1.webp",
    imageLabel:"Farvekort med varme neutrale toner",
    overlay: null,
  },
  {
    title:"Indretning og Design Service",
    price:"Pris efter aftale",
    body:"Et skræddersyet interiørkoncept for flere rum, hvor vi skaber sammenhæng i funktion, materialer og stemning. Vi kombinerer æstetik med hverdagsflow, så rummet både føles smukt og fungerer.",
    mobileBody:"Et skræddersyet interiørkoncept for flere rum med sammenhæng i funktion, materialer og stemning, én rød tråd gennem hele hjemmet.",
    image:"/assets/service_2b.webp",
    mobileImage:"/assets/service_2a.webp",
    imageLabel:"Håndtegnet skitse af køkken højskabe",
    overlay: { src:"/assets/service_2a.webp", aspect:"4/3" },
  },
  {
    title:"Total Interiør Design Service",
    price:"Pris efter aftale",
    body:"Et komplet designforløb til nybyg, renovering eller totalindretning. Vi guider dig gennem alle valg, fra planløsning til farver, inventar og styling. Hele vejen sikrer vi en rød tråd, der matcher din stil og hverdagsbehov.",
    mobileBody:"Et komplet designforløb til nybyg, renovering eller totalindretning. Vi følger projektet fra første streg til færdigt hjem, inkl. plantegninger, materialevalg og koordinering.",
    image:"/assets/service_3.webp",
    mobileImage:"/assets/service_3.webp",
    imageLabel:"Færdigt snedkerkøkken i egetræ",
    overlay: { src:"/assets/service_3b.webp", aspect:"3/4" },
  },
];

export default function ServicesSection() {
  return (
    <div
      className="bg-brown px-6 pt-24 pb-20 max-md:bg-cream max-md:pt-9 max-md:pb-14 md:px-16 md:pt-[120px] md:pb-[90px]"
      data-reveal
      data-sec="services"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[50px] grid grid-cols-1 items-center justify-center gap-8 max-md:mb-10 max-md:gap-5 lg:grid-cols-[auto_auto] lg:gap-2">
          <div className="text-left">
            {/* Mobile-only eyebrow above the heading; desktop keeps it in the right column */}
            <div className="mb-[18px] font-sans text-[11px] tracking-[4px] text-accent md:hidden">
              VORES SERVICES
            </div>
            <h2
              className="m-0 max-w-[560px] font-serif text-[30px] font-normal leading-[1.2] text-cream max-md:text-[31px] max-md:italic max-md:leading-[1.3] max-md:text-ink md:text-[46px]"
              style={{ textWrap:"pretty" }}
            >
              <span className="">Fra idé til virkelighed</span>
              <span className="md:hidden">, </span>
              <span className="max-md:hidden">
                ,<br />
              </span>
              <span className="">
                fra hurtig sparring til total designløsning
              </span>
            </h2>
          </div>
          <div className="max-w-[480px] lg:justify-self-start">
            <div className="mb-3.5 flex items-center gap-[18px] max-md:hidden">
              <div className="font-sans text-[14px] tracking-[5px] text-rose">
                VORES SERVICES
              </div>
              <div className="h-px flex-1 bg-rose max-md:hidden" />
            </div>
            <p
              className="m-0 text-left text-[21px] font-light leading-[1.7] text-cream max-md:text-[17px] max-md:text-body"
              style={{ textWrap:"pretty" }}
            >
              Uanset om du har brug for et enkelt besøg, et samlet koncept eller
              et fuldt designforløb, tilpasser vi processen til dit projekt.{" "}
              <span className="max-md:hidden">
                Hos Studio Brinch handler design om mere end æstetik, det
                handler om at skabe ro, funktion og personlighed i hverdagen.
              </span>
            </p>
          </div>
        </div>
        <MobileCarousel slideClassName="w-[80%]" desktopClassName="md:gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col">
              {/* Mobile: full-image card with the text overlaid at the bottom */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-beige bg-cover bg-center bg-no-repeat md:hidden"
                style={{ backgroundImage: `url('${s.mobileImage}')` }}
                role="img"
                aria-label={s.imageLabel}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                     "linear-gradient(180deg, rgba(20,18,14,0.5), transparent 30%), linear-gradient(180deg, rgba(20,18,14,0.05) 25%, rgba(20,18,14,0.72) 100%)",
                  }}
                />
                <h3 className="absolute left-6 right-6 top-6 m-0 font-serif text-[25px] font-medium leading-[1.2] text-cream">
                  {s.title}
                </h3>
                <div className="absolute bottom-7 left-6 right-6 text-cream">
                  <div className="mb-2.5 font-serif text-[17px] italic text-cream/85">
                    {s.price}
                  </div>
                  <p className="m-0 mb-3.5 min-h-[112px] text-[14px] font-light leading-[1.6] text-cream/90">
                    {s.mobileBody}
                  </p>
                  <Link
                    href="/ydelser"
                    className="inline-block border-b border-cream/70 pb-1.5 font-sans text-[12px] tracking-[3px] text-cream"
                  >
                    LÆS MERE →
                  </Link>
                </div>
              </div>
              {/* Desktop: image with overlay collage + text block below */}
              <div
                className="om-zoomwrap relative aspect-[5/5.6] overflow-hidden max-md:hidden"
                role="img"
                aria-label={s.imageLabel}
              >
                <div
                  className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${s.image}')`,
                    backgroundColor:"#4A483F",
                  }}
                />
                {s.overlay && (
                  <div
                    className="absolute right-4 top-4 w-[42%] bg-hairline bg-cover bg-center bg-no-repeat"
                    style={{
                      aspectRatio: s.overlay.aspect,
                      backgroundImage: `url('${s.overlay.src}')`,
                      boxShadow:"0 6px 20px rgba(0,0,0,0.35)",
                    }}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col bg-brown-hover px-[26px] pt-6 pb-[26px] max-md:hidden">
                <h3 className="m-0 font-serif text-[28px] font-medium text-cream">
                  {s.title}
                </h3>
                <span className="mt-1.5 font-serif text-[21px] italic text-cream">
                  {s.price}
                </span>
                <p
                  className="m-0 mt-3 text-[19px] font-light leading-[1.7] text-cream"
                  style={{ textWrap:"pretty" }}
                >
                  {s.body}
                </p>
                <Link
                  href="/ydelser"
                  className="mt-auto inline-flex w-fit items-center gap-2.5 pt-[18px] font-sans text-[14px] tracking-[2px] text-rose hover:text-cream"
                >
                  LÆS MERE <span className="text-[21px]">→</span>
                </Link>
              </div>
            </div>
          ))}
        </MobileCarousel>
      </div>
    </div>
  );
}
