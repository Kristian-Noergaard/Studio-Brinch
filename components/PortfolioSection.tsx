import Link from "next/link";
import MobileCarousel from "./MobileCarousel";

const PROJECTS = [
  {
    image: "/assets/step_bad_sovevaerelse.webp",
    position: "52% center",
    name: "Soveværelse",
    sub: "En afslappende oase",
    body: "Det primære soveværelse er en afslappende oase inspireret af farver fra naturen.",
  },
  {
    image: "/assets/step_island.png",
    position: "center",
    name: "Køkken",
    sub: "Snedkerkøkken i egetræ",
    body: "Det første du ser, når du åbner hoveddøren i dette total renoverede hus er kigget direkte ind til det håndlavede egetræskøkken.",
  },
  {
    image: "/assets/step_pigevaerelse.png",
    position: "center",
    name: "Pige værelse",
    sub: "Pastel og enkelhed",
    body: "Til pigeværelset designede jeg en multifunktionel seng med masser af opbevaring.",
  },
];

function SeProjekt() {
  return (
    <div className="inline-flex items-center gap-2.5 border-b border-cream/70 pb-1.5 font-sans text-[13px] tracking-[3px]">
      SE PROJEKT <span className="text-[20px]">→</span>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <div className="relative pb-8 md:pb-0" data-reveal>
      {/* Full-bleed top band, split panorama + portrait (desktop only) */}
      <div className="hidden aspect-[3/1] min-h-[260px] gap-3.5 md:grid md:grid-cols-[1.5fr_1fr]">
        <Link
          href="/projekter"
          aria-label="Stue, samler familien"
          className="relative overflow-hidden text-cream"
        >
          <div
            className="om-zoom absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/panorama_stue.jpg')",
              backgroundPosition: "center 75%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,18,14,0.30) 0%, transparent 40%, rgba(20,18,14,0.55) 100%)",
            }}
          />
          <div className="absolute left-[18px] top-5 font-serif text-[36px] font-normal leading-none text-cream md:text-[52px]">
            Portfolio
          </div>
          <div className="absolute bottom-6 left-[18px] right-9 flex flex-col">
            <h3 className="m-0 font-serif text-[22px] font-medium md:text-[28px]">
              Stue | Samler familien
            </h3>
            <p
              className="m-0 mt-3 hidden max-w-[520px] text-[19px] font-light leading-[1.7] text-cream md:block"
              style={{ textWrap: "pretty" }}
            >
              Fra køkkenet er et åbent rum, der kombinerer både spisestue og en
              familievenlig stue, hvor hele familien kan mødes.
            </p>
          </div>
          <div className="absolute bottom-6 right-9 hidden md:block">
            <SeProjekt />
          </div>
        </Link>
        <Link
          href="/projekter"
          aria-label="Badeværelse"
          className="relative overflow-hidden text-cream"
        >
          <div
            className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/portfolio_badevaerelse.jpg')",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 45%, rgba(20,18,14,0.55) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-[18px] right-9 flex flex-col">
            <h3 className="m-0 font-serif text-[22px] font-medium md:text-[28px]">
              Badeværelse
            </h3>
          </div>
          <div className="absolute bottom-6 right-9 hidden md:block">
            <SeProjekt />
          </div>
        </Link>
      </div>

      {/* Mobile: stacked full-bleed panels with a caption row under each image.
          reveal-grid makes each panel fade in on its own as it scrolls into view */}
      <div className="reveal-grid flex flex-col gap-11 px-6 pt-7 md:hidden">
        {PROJECTS.map((p) => (
          <Link key={p.name} href="/projekter" aria-label={`${p.name} | ${p.sub}`} className="block">
            <div
              className="h-[480px] bg-beige bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${p.image}')`,
                backgroundPosition: p.position,
              }}
            />
            <div className="flex items-baseline justify-between gap-4 border-b border-hairline py-4">
              <div className="flex-1">
                <h3 className="m-0 mb-1 font-serif text-[22px] font-normal text-ink">
                  {p.name}
                </h3>
                <div className="font-serif text-[16px] italic text-body">
                  {p.sub}
                </div>
              </div>
              <span className="flex-none whitespace-nowrap font-sans text-[11px] tracking-[3px] text-accent">
                SE PROJEKT →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: edge-to-edge project tile grid (the carousel component
          renders a plain reveal grid from md up) */}
      <div className="max-md:hidden px-6 pt-8 md:px-0 md:pt-0">
        <MobileCarousel
          slideClassName="w-[92%]"
          desktopClassName="md:grid-cols-3 md:gap-3.5 md:pt-3.5"
        >
          {PROJECTS.map((p) => (
          <Link
            key={p.name}
            href="/projekter"
            aria-label={`${p.name} | ${p.sub}`}
            className="relative block aspect-[4/5] overflow-hidden text-cream max-md:min-h-[540px]"
          >
            <div
              className="om-zoom absolute inset-0 bg-beige bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${p.image}')`,
                backgroundPosition: p.position,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 transition-colors duration-400"
              style={{
                background:
                  "linear-gradient(180deg, transparent 45%, rgba(20,18,14,0.55) 100%)",
              }}
            />
            <div className="absolute bottom-3.5 left-[18px] right-9 flex flex-col text-cream md:top-[calc(100%-190px)]">
              <h3 className="m-0 font-serif text-[24px] font-medium md:text-[28px]">
                {p.name} | {p.sub}
              </h3>
              <p
                className="m-0 mt-3 text-[19px] font-light leading-[1.7] text-cream"
                style={{ textWrap: "pretty" }}
              >
                {p.body}
              </p>
              <div className="mb-1.5 mt-4 self-end md:absolute md:bottom-4 md:right-0 md:m-0">
                <SeProjekt />
              </div>
            </div>
          </Link>
        ))}
        </MobileCarousel>
      </div>

      <div className="mt-10 flex justify-center">
        {/* Mobile: plain underlined text link; desktop: boxed button */}
        <Link
          href="/projekter"
          className="border-b border-ink pb-1.5 font-sans text-[12px] tracking-[3px] text-ink md:border md:border-ink md:px-[34px] md:py-4 md:pb-4 md:text-[13px] md:transition-colors md:hover:bg-ink md:hover:text-cream"
        >
          SE ALLE PROJEKTER<span className="md:hidden"> →</span>
        </Link>
      </div>
    </div>
  );
}
