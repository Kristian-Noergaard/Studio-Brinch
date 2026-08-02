import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  quote: string;
  paragraphs: string[];
  hero: string;
  gallery: string[];
  next: { slug: string; title: string };
};

// NOTE: quote + first paragraph are the design's placeholder copy (same on
// every page in the handoff) — swap for real per-project copy from the client.
const PLACEHOLDER_P1 =
  "Det første du ser, når du åbner hoveddøren i dette totalrenoverede 70’er-hus, er kigget direkte ind til det håndlavede egetræskøkken. For at tilføje dybde til de naturlige trætoner tilføjede jeg armaturer i rustfrit stål, en sort bordplade samt højskabe.";
const QUOTE =
  "”Et godt køkken er en perfekt balance mellem funktionalitet og stil”";

const PROJECTS: Project[] = [
  {
    slug: "koekken",
    title: "Køkken",
    subtitle: "Snedkerkøkken i eg",
    quote: QUOTE,
    paragraphs: [
      PLACEHOLDER_P1,
      "Over køkkenøen giver de dobbelte ovenlysvinduer et godt lysindfald, og det synlige spær med indbygget lys giver rummet karakter og charme.",
    ],
    hero: "/assets/slots/det-koekken-hero.webp",
    gallery: [1, 2, 3, 4, 5].map((n) => `/assets/slots/det-koekken-${n}.webp`),
    next: { slug: "sovevaerelse", title: "Soveværelse" },
  },
  {
    slug: "sovevaerelse",
    title: "Soveværelse",
    subtitle: "En afslappende oase",
    quote: QUOTE,
    paragraphs: [
      PLACEHOLDER_P1,
      "Badeværelset ligger i direkte forlængelse af soveværelset, så det er et sted, du ønsker at starte og afslutte din dag.",
    ],
    hero: "/assets/slots/det-sovevaerelse-hero.webp",
    gallery: [1, 2, 3].map((n) => `/assets/slots/det-sovevaerelse-${n}.webp`),
    next: { slug: "pigevaerelse", title: "Pigeværelse" },
  },
  {
    slug: "pigevaerelse",
    title: "Pigeværelse",
    subtitle: "Pastel og enkelhed",
    quote: QUOTE,
    paragraphs: [
      PLACEHOLDER_P1,
      "Trin fører op til sengen, og en indbygget reol er fyldt med nogle af hendes yndlingsbøger til godnatlæsning.",
    ],
    hero: "/assets/slots/det-pigevaerelse-hero.webp",
    gallery: [1, 2, 3].map((n) => `/assets/slots/det-pigevaerelse-${n}.webp`),
    next: { slug: "drengevaerelse", title: "Drengeværelse" },
  },
  {
    slug: "drengevaerelse",
    title: "Drengeværelse",
    subtitle: "Et rum til fodboldspilleren",
    quote: QUOTE,
    paragraphs: [
      PLACEHOLDER_P1,
      "Over den specialbyggede seng med skuffer hænger tre fodbolde, der fungerer som kunst og bringer personlighed og leg ind i rummet.",
    ],
    hero: "/assets/slots/det-drengevaerelse-hero.webp",
    gallery: [1, 2].map((n) => `/assets/slots/det-drengevaerelse-${n}.webp`),
    next: { slug: "stuen", title: "Stuen" },
  },
  {
    slug: "stuen",
    title: "Stuen",
    subtitle: "Samler familien",
    quote: QUOTE,
    paragraphs: [
      PLACEHOLDER_P1,
      "Kunstværket på væggen hjælper med at binde farvepaletten sammen.",
    ],
    hero: "/assets/slots/det-stuen-hero.webp",
    gallery: [1, 2].map((n) => `/assets/slots/det-stuen-${n}.webp`),
    next: { slug: "koekken", title: "Køkken" },
  },
];

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  return p
    ? {
        title: `${p.title} | ${p.subtitle} — Studio Brinch`,
        description: p.paragraphs[1],
      }
    : {};
}

function GalleryImage({ src, label }: { src: string; label: string }) {
  return (
    <div className="om-zoomwrap relative h-[400px] overflow-hidden bg-hairline md:h-[640px]">
      <div className="om-parallax absolute inset-x-0 -inset-y-10">
        <div
          className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${src}')` }}
          role="img"
          aria-label={label}
        />
      </div>
    </div>
  );
}

function CtaPanel({ centered = false }: { centered?: boolean }) {
  return (
    <div
      className={`flex min-h-[400px] flex-col justify-center p-10 md:min-h-[640px] md:p-16 ${
        centered
          ? "items-center bg-beige text-center"
          : "items-start bg-cream"
      }`}
    >
      <div className="mb-5 font-sans text-[14px] tracking-[5px] text-accent">
        NÆSTE PROJEKT?
      </div>
      <h2
        className="m-0 mb-8 max-w-[480px] font-serif text-[30px] font-normal leading-[1.3] text-ink md:text-[40px]"
        style={{ textWrap: "pretty" }}
      >
        Har du et projekt, jeg kan hjælpe dig med?
      </h2>
      <Link
        href="/kontakt"
        className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        BOOK EN SAMTALE
      </Link>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();

  const pairs: string[][] = [];
  for (let i = 0; i + 1 < p.gallery.length; i += 2)
    pairs.push([p.gallery[i], p.gallery[i + 1]]);
  const lastOdd = p.gallery.length % 2 === 1 ? p.gallery[p.gallery.length - 1] : null;

  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" />

      {/* Hero panorama with quote */}
      <div className="relative mt-[82px] h-[62vh] min-h-[480px] overflow-hidden bg-hairline">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${p.hero}')` }}
          role="img"
          aria-label={`${p.title}: projektets hovedfoto`}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,18,14,0.45), transparent 65%)",
          }}
        />
        <div className="om-herotitle pointer-events-none absolute bottom-10 left-6 max-w-[760px] text-cream md:bottom-16 md:left-16">
          <h1
            className="m-0 font-serif text-[30px] italic font-normal leading-[1.25] md:text-[46px]"
            style={{ textWrap: "pretty" }}
          >
            {p.quote}
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 pt-24 pb-20 md:px-16 md:pt-[120px] md:pb-[110px]" data-reveal data-sec="intro">
        <div className="mx-auto grid max-w-[1232px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_460px] lg:gap-20">
          <div>
            <div className="om-w1 mb-[22px] flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                PORTFOLIO
              </div>
              <div className="h-px w-16 bg-accent" />
            </div>
            <h2 className="m-0 mb-3.5 font-serif text-[44px] font-medium leading-[1.05] md:text-[64px]">
              <span className="om-w1">{p.title}</span>
            </h2>
            <div className="om-w2 font-serif text-[24px] italic text-body md:text-[28px]">
              {p.subtitle}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] pt-3.5 text-[17px] font-light leading-[1.8] text-body">
            {p.paragraphs.map((text) => (
              <p
                key={text.slice(0, 24)}
                className="om-v3 om-words-entry m-0"
                style={{ textWrap: "pretty" }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div data-reveal>
        {pairs.map((pair, i) => (
          <div
            key={pair[0]}
            className={`reveal-grid grid grid-cols-1 gap-2 md:grid-cols-2 ${
              i > 0 ? "mt-2" : ""
            }`}
          >
            <GalleryImage src={pair[0]} label={`${p.title} detalje`} />
            <GalleryImage src={pair[1]} label={`${p.title} detalje`} />
          </div>
        ))}
        {lastOdd ? (
          <div className="reveal-grid mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
            <GalleryImage src={lastOdd} label={`${p.title} detalje`} />
            <CtaPanel />
          </div>
        ) : (
          <div className="reveal-grid mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
            <CtaPanel centered />
            <div className="flex min-h-[400px] flex-col items-center justify-center bg-cream p-10 text-center md:min-h-[640px] md:p-16">
              <div className="mb-[18px] font-sans text-[14px] tracking-[5px] text-accent">
                NÆSTE PROJEKT
              </div>
              <Link href={`/projekter/${p.next.slug}`} className="text-ink">
                <h2 className="m-0 mb-8 font-serif text-[40px] font-medium leading-[1.1] md:text-[56px]">
                  {p.next.title}
                </h2>
              </Link>
              <div className="flex items-center gap-7">
                <Link
                  href="/projekter"
                  className="border-b border-ink pb-1 font-sans text-[13px] tracking-[3px] text-ink"
                >
                  ALLE PROJEKTER
                </Link>
                <Link
                  href={`/projekter/${p.next.slug}`}
                  className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  SE PROJEKT
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Næste projekt band (pages whose gallery ends with the CTA panel) */}
      {lastOdd && (
        <div className="bg-beige px-6 py-24 md:px-16 md:py-[120px]" data-reveal>
          <div className="mx-auto flex max-w-[1232px] flex-wrap items-end justify-between gap-12">
            <div>
              <div className="mb-[18px] font-sans text-[14px] tracking-[5px] text-accent">
                NÆSTE PROJEKT
              </div>
              <Link href={`/projekter/${p.next.slug}`} className="text-ink">
                <h2 className="m-0 font-serif text-[40px] font-medium leading-[1.1] md:text-[56px]">
                  {p.next.title}
                </h2>
              </Link>
            </div>
            <div className="flex items-center gap-7">
              <Link
                href="/projekter"
                className="border-b border-ink pb-1 font-sans text-[13px] tracking-[3px] text-ink"
              >
                ALLE PROJEKTER
              </Link>
              <Link
                href={`/projekter/${p.next.slug}`}
                className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                SE PROJEKT
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer compact />
    </main>
  );
}
