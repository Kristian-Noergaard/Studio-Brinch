import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Portfolio — Studio Brinch",
  description:
    "Fem udvalgte projekter fra Studio Brinch — rum, der er skabt til at blive levet i.",
};

function ProjectTile({
  href,
  image,
  title,
  subtitle,
  wide = false,
  heightClassName,
  className,
}: {
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  wide?: boolean;
  heightClassName?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`om-zoomwrap relative block overflow-hidden bg-hairline text-cream ${heightClassName ?? ""} ${className ?? ""}`}
      style={heightClassName ? undefined : { height: wide ? 560 : 600 }}
    >
      <div className="absolute inset-0">
        <div
          className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={subtitle ? `${title}, ${subtitle}` : title}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(0deg, rgba(20,18,14,0.55), transparent 50%)",
        }}
      />
      <div
        className={`pointer-events-none absolute ${
          wide ? "left-6 bottom-12 md:left-16" : "left-6 bottom-11 md:left-12"
        }`}
      >
        <h3
          className={`m-0 mb-1 font-serif font-medium ${
            wide ? "text-[30px] md:text-[38px]" : "text-[26px] md:text-[32px]"
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <div
            className={`font-serif italic ${
              wide ? "text-[21px] md:text-[21px]" : "text-[22px] md:text-[22px]"
            }`}
          >
            {subtitle}
          </div>
        )}
      </div>
      <div
        className={`pointer-events-none absolute border-b border-cream pb-1 font-sans text-[13px] tracking-[3px] ${
          wide
            ? "right-6 bottom-14 md:right-16"
            : "right-6 bottom-[52px] md:right-12"
        }`}
      >
        SE PROJEKT
      </div>
    </Link>
  );
}

export default function ProjekterPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" />
      <PageHero kicker="PORTFOLIO  ·  FEM UDVALGTE PROJEKTER" title="Rum, der er skabt til at blive levet i">
        <p
          className="mx-auto max-w-[540px] text-[21px] font-light leading-[1.7] text-body"
          style={{ textWrap: "pretty" }}
        >
          Hvert projekt begynder med{" "}
          <strong className="font-medium text-ink">
            menneskene, der bor der
          </strong>
          . Se, hvordan vi har oversat hverdagens behov til rolige, holdbare
          rum.
        </p>
      </PageHero>
      <div className="bg-cream" data-reveal>
        <ProjectTile
          href="/projekter/koekken"
          image="/assets/slots/proj-b-1.webp"
          title="Køkken"
          subtitle="Snedkerkøkken i eg"
          wide
        />
        {/* One grid for all rows: DOM order is the desktop layout (10-col rows
            of 5+5 / 6+4 / 5+5); max-md:order-* gives the mobile sequence */}
        <div className="reveal-grid mt-2 grid grid-cols-1 gap-x-2 md:grid-cols-10">
          <ProjectTile
            href="/projekter/sovevaerelse"
            image="/assets/slots/proj-b-2.webp"
            title="Soveværelse"
            subtitle="En afslappende oase"
            className="max-md:order-2 max-md:mt-2 md:col-span-5"
          />
          <ProjectTile
            href="/projekter/pigevaerelse"
            image="/assets/slots/proj-b-3.webp"
            title="Pigeværelse"
            subtitle="Pastel og enkelhed"
            className="max-md:order-3 max-md:mt-2 md:col-span-5"
          />
          <ProjectTile
            href="/projekter/stuen"
            image="/assets/slots/proj-b-4.webp"
            title="Stuen"
            subtitle="Samler familien"
            wide
            heightClassName="h-[560px]"
            className="max-md:order-1 md:col-span-6 md:mt-2"
          />
          <ProjectTile
            href="/projekter/sovevaerelse"
            image="/assets/portfolio_badevaerelse.jpg"
            title="Badeværelse"
            heightClassName="h-[600px] md:h-[560px]"
            className="max-md:order-5 max-md:mt-2 md:col-span-4 md:mt-2"
          />
          <div className="max-md:order-4 max-md:mt-2 md:col-span-5 md:pt-2">
            <ProjectTile
              href="/projekter/drengevaerelse"
              image="/assets/slots/proj-b-5.webp"
              title="Drengeværelse"
              subtitle="Et rum til fodboldspilleren"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-beige p-10 text-center max-md:order-6 md:col-span-5 md:-ml-2 md:p-16">
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
