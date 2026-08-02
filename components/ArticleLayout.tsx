import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageEffects from "./PageEffects";

const BAND = "#5E3F36"; // article title-band brown

export type ArticleSection = {
  n: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  image?: { src: string; label: string };
};

export default function ArticleLayout({
  kicker,
  titleLead,
  titleRest,
  hero,
  heroLabel,
  intro,
  lead,
  sections,
}: {
  kicker: string;
  titleLead: string;
  titleRest: string;
  hero: string;
  heroLabel: string;
  intro: string;
  lead: string;
  sections: ArticleSection[];
}) {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="light" menuBg="band" />

      {/* Title band */}
      <div
        className="px-6 pt-36 pb-14 text-cream md:px-16 md:pt-[170px] md:pb-[60px]"
        style={{ background: BAND }}
      >
        <div className="om-herotitle mx-auto max-w-[1160px]">
          <div className="mb-[22px] font-sans text-[13px] tracking-[3px] text-cream/75">
            {kicker}
          </div>
          <h1
            className="m-0 max-w-[1000px] font-serif text-[34px] font-medium leading-[1.2] md:text-[54px]"
            style={{ textWrap: "pretty" }}
          >
            {titleLead}{" "}
            <span className="font-normal italic text-cream/85">
              {titleRest}
            </span>
          </h1>
        </div>
      </div>

      {/* Hero image splitting the band and the page */}
      <div
        className="px-6 md:px-16"
        style={{
          background: `linear-gradient(180deg, ${BAND} 0%, ${BAND} 55%, #F7F5EF 55%)`,
        }}
      >
        <div className="relative mx-auto aspect-[21/10] max-w-[1160px] overflow-hidden bg-hairline">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${hero}')` }}
            role="img"
            aria-label={heroLabel}
          />
        </div>
      </div>

      {/* Indledning */}
      <div className="px-6 pt-24 pb-7 md:px-16 md:pt-[110px]" data-reveal>
        <p
          className="mx-auto mb-16 max-w-[1000px] font-serif text-[28px] leading-[1.45] text-ink md:mb-[70px] md:text-[38px]"
          style={{ textWrap: "pretty" }}
        >
          {intro}
        </p>
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:gap-[90px]">
          <div className="hidden lg:block" />
          <p
            className="m-0 text-[17px] font-light leading-[1.9] text-body"
            style={{ textWrap: "pretty" }}
          >
            {lead}
          </p>
        </div>
      </div>

      {/* Numbered sections */}
      <div className="px-6 pt-10 pb-14 md:px-16">
        {sections.map((s) => (
          <div
            key={s.n}
            className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-11 border-t border-beige py-[52px] lg:grid-cols-[360px_1fr] lg:gap-[90px]"
            data-reveal
          >
            <div className="flex flex-col gap-7 lg:sticky lg:top-[120px]">
              <div className="font-serif text-[56px] leading-none text-hairline md:text-[72px]">
                {s.n}
              </div>
              {s.quote && (
                <div
                  className="font-serif text-[22px] italic leading-[1.55] text-accent md:text-[24px]"
                  style={{ textWrap: "pretty" }}
                >
                  {s.quote}
                </div>
              )}
            </div>
            <div>
              <h2
                className="m-0 mb-5 font-serif text-[28px] font-medium leading-[1.25] md:text-[34px]"
                style={{ textWrap: "pretty" }}
              >
                {s.title}
              </h2>
              {s.paragraphs.map((text, i) => (
                <p
                  key={text.slice(0, 24)}
                  className={`m-0 text-[17px] font-light leading-[1.9] text-body ${
                    i > 0 ? "mt-16" : ""
                  }`}
                  style={{ textWrap: "pretty" }}
                >
                  {text}
                </p>
              ))}
              {s.image && (
                <div className="relative mt-14 aspect-[4/3] overflow-hidden bg-hairline">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${s.image.src}')` }}
                    role="img"
                    aria-label={s.image.label}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-beige px-6 py-14 text-center md:px-16 md:py-[110px]" data-reveal>
        <h2 className="m-0 mb-9 font-serif text-[32px] font-normal leading-[1.3] md:text-[42px]">
          Har du et projekt, jeg kan hjælpe dig med?
        </h2>
        <Link
          href="/kontakt"
          className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          BOOK EN SAMTALE
        </Link>
        <div className="mt-7">
          <Link
            href="/inspiration"
            className="border-b border-ink pb-1 font-sans text-[13px] tracking-[3px] text-ink"
          >
            AL INSPIRATION
          </Link>
        </div>
      </div>

      <Footer compact />
    </main>
  );
}
