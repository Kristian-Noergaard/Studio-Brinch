import Link from "next/link";
import { REVIEWS, ReviewCard } from "./ReviewCard";
import ReviewsCarousel from "./ReviewsCarousel";

const PROJECTS = [
  {
    image: "/assets/step_bad_sovevaerelse.webp",
    position: "52% center",
    title: "Soveværelse | En afslappende oase",
    body: "Det primære soveværelse er en afslappende oase inspireret af farver fra naturen.",
  },
  {
    image: "/assets/step_island.png",
    position: "center",
    title: "Køkken | Snedkerkøkken i egetræ",
    body: "Det første du ser, når du åbner hoveddøren i dette total renoverede hus er kigget direkte ind til det håndlavede egetræskøkken.",
  },
  {
    image: "/assets/step_pigevaerelse.png",
    position: "center",
    title: "Pige værelse | Pastel og enkelhed",
    body: "Til pigeværelset designede jeg en multifunktionel seng med masser af opbevaring.",
  },
];

function SeProjekt() {
  return (
    <div className="inline-flex items-center gap-2.5 border-b border-cream/70 pb-1.5 font-sans text-[13px] tracking-[3px]">
      SE PROJEKT <span className="text-[16px]">→</span>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <div className="relative pb-28 md:pb-[120px]" data-reveal>
      {/* Mobile-only heading — the panorama that carries it on desktop is hidden there */}
      <div className="px-6 pt-10 pb-2 font-serif text-[36px] font-normal leading-none text-ink md:hidden">
        Portfolio
      </div>
      {/* Full-bleed panorama (desktop only) */}
      <Link
        href="/projekter"
        aria-label="Stue, samler familien"
        className="relative hidden aspect-[3/1] min-h-[260px] overflow-hidden text-cream md:block"
      >
        <div
          className="om-zoom om-parallax absolute inset-x-0 -inset-y-[12%] bg-cover bg-no-repeat"
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
            className="m-0 mt-3 hidden max-w-[520px] text-[15px] font-light leading-[1.7] text-cream/85 md:block"
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

      {/* Edge-to-edge project tiles */}
      <div className="reveal-grid relative grid grid-cols-1 gap-3.5 pt-2 md:grid-cols-3 md:pt-3.5">
        {PROJECTS.map((p) => (
          <Link
            key={p.title}
            href="/projekter"
            aria-label={p.title}
            className="relative block aspect-[4/5] overflow-hidden text-cream"
          >
            <div
              className="om-zoom om-parallax absolute inset-x-0 -inset-y-[14%] bg-beige bg-cover bg-no-repeat"
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
            <div className="absolute bottom-3.5 left-[18px] right-9 flex flex-col text-cream md:top-[calc(100%-160px)]">
              <h3 className="m-0 font-serif text-[24px] font-medium md:text-[28px]">
                {p.title}
              </h3>
              <p
                className="m-0 mt-3 text-[15px] font-light leading-[1.7] text-cream/85"
                style={{ textWrap: "pretty" }}
              >
                {p.body}
              </p>
              <div className="mt-4 self-end md:mt-auto">
                <SeProjekt />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projekter"
          className="border border-ink px-[34px] py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          SE ALLE PROJEKTER
        </Link>
      </div>

      {/* Google reviews */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mt-[72px]">
          <h2 className="om-riser m-0 mb-11 text-center font-serif text-[32px] font-normal text-ink md:text-[44px]">
            Hvad vores kunder siger om Studio Brinch
          </h2>
          <div className="reveal-grid hidden gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-4">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
}
