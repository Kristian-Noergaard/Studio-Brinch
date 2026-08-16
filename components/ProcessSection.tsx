import Link from"next/link";
import MobileCarousel from"./MobileCarousel";

const CARD_SHADOW ="0 2px 20px rgba(42,40,34,0.06)";

function Card({
  image,
  title,
  body,
  shortBody,
  ctaLabel,
  ctaHref,
}: {
  image: React.ReactNode;
  title: string;
  body: string;
  /** Condensed copy shown on mobile instead of the full body */
  shortBody?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden bg-offwhite max-md:rounded-xl"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="relative">{image}</div>
      <div
        className="flex flex-1 flex-col gap-3.5 px-9 pt-9 pb-10 text-center max-md:px-6 max-md:pt-7 max-md:pb-8 md:bg-[#DDD8CC78]"
      >
        <h3 className="m-0 min-h-[34px] font-serif text-[26px] font-medium text-ink max-md:text-[22px] max-md:min-h-0">
          {title}
        </h3>
        <p
          className={`m-0 text-[19px] font-light leading-[1.75] text-body max-md:text-[16px] max-md:leading-[1.7] ${
            shortBody ?"max-md:hidden" :""
          }`}
          style={{ textWrap:"pretty" }}
        >
          {body}
        </p>
        {shortBody && (
          <p
            className="m-0 text-[16px] font-light leading-[1.7] text-body md:hidden"
            style={{ textWrap:"pretty" }}
          >
            {shortBody}
          </p>
        )}
        <Link
          href={ctaHref}
          className="mt-auto self-center pt-[22px] text-[19px] font-medium text-accent underline underline-offset-[5px] hover:text-ink max-md:pt-2 max-md:text-[17px]"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <div
      className="bg-beige px-6 py-24 md:px-16 md:py-[120px]"
      data-reveal
      data-sec="proces"
    >
      <div className="mx-auto mb-14 grid max-w-[1320px] grid-cols-1 items-center justify-center gap-8 max-md:mb-9 max-md:gap-5 lg:grid-cols-[auto_auto] lg:gap-12">
        <div className="text-left max-md:text-center">
          {/* Mobile-only eyebrow above the heading; desktop keeps it in the right column */}
          <div className="mb-3.5 flex items-center justify-center gap-3.5 md:hidden">
            <div className="h-px w-10 bg-accent" />
            <div className="font-sans text-[12px] tracking-[4px] text-accent">
              VORES PROCES
            </div>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2
            className="m-0 max-w-[640px] font-serif text-[30px] font-medium leading-[1.15] text-ink max-md:text-[29px] max-md:leading-[1.2] max-md:mx-auto md:text-[50px]"
            style={{ textWrap:"pretty" }}
          >
            <span className="">Et samarbejde i øjenhøjde</span>
            <br className="max-md:hidden" />
            <span className="md:hidden">, </span>
            <span className="">fra idé til færdigt hjem</span>
          </h2>
        </div>
        <div className="max-w-[480px] max-md:mx-auto lg:justify-self-start">
          <div className="mb-3.5 flex items-center gap-[18px] max-md:hidden">
            <div className="font-sans text-[14px] tracking-[5px] text-accent">
              VORES PROCES
            </div>
            <div className="h-px flex-1 bg-accent max-md:hidden" />
          </div>
          <p
            className="m-0 text-left text-[22px] font-light leading-[1.7] text-body max-md:text-center max-md:text-[17px]"
            style={{ textWrap:"pretty" }}
          >
            Vi starter med en{" "}
            <strong className="font-medium text-ink">
              uforpligtende snak
            </strong>
            , lytter til jeres ønsker og former et designforløb, der passer til
            jer.{" "}
            <span className="max-md:hidden">
              Processen er enkel, tryg og bygget på ærlig rådgivning og
              gennemsigtighed.
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1320px]">
        <MobileCarousel slideClassName="w-[80%]" desktopClassName="md:gap-7 lg:grid-cols-3">
        <Card
          image={
            <div
              className="h-[200px] bg-beige bg-cover bg-no-repeat md:h-[280px]"
              style={{
                backgroundImage:"url('/assets/om_studio.webp')",
                backgroundPosition:"62% 30%",
              }}
              role="img"
              aria-label="Samarbejde med Studio Brinch"
            />
          }
          title="Samarbejde med Studio Brinch"
          body="Et samarbejde med os sikrer et æstetisk flot og funktionelt hjem med tidløse og langtidsholdbare løsninger. Med de rigtige materiale- og designvalg får du et hjem hvor stemningen i hvert rum gør at du og dine nærmeste bare har lyst til at opholde dig i dit hjem, samtidig med at det fungerer i hverdagen."
          shortBody="Et samarbejde med os sikrer et æstetisk flot og funktionelt hjem med tidløse og langtidsholdbare løsninger."
          ctaLabel="Om os"
          ctaHref="/om-os"
        />
        <Card
          image={
            <div
              className="h-[200px] bg-beige bg-cover bg-no-repeat md:h-[280px]"
              style={{
                backgroundImage:"url('/assets/box_koekken.webp')",
                backgroundPosition:"center 45%",
              }}
              role="img"
              aria-label="Inspiration til din indretning"
            />
          }
          title="Inspiration til din indretning"
          body="Hos Studio Brinch inspirerer vi gennem hele processen lige fra din plantegning til alle efterfølgende designvalg af materialer, farver, møbler og indretning. Med et sammenhængende design koncept skabes et unikt oplæg til dit hjem, hvor hvert rum tager udgangspunkt i din stilart, livsstil og behov."
          shortBody="Vi inspirerer gennem hele processen – fra plantegning til designvalg af materialer, farver, møbler og indretning."
          ctaLabel="Portfolio"
          ctaHref="/projekter"
        />
        <Card
          image={
            <div
              className="h-[200px] bg-beige bg-cover bg-no-repeat md:h-[280px]"
              style={{
                backgroundImage:"url('/assets/box_stue.webp')",
                backgroundPosition:"center 45%",
              }}
              role="img"
              aria-label="Projektstyring fra start til slut"
            />
          }
          title="Projektstyring fra start til slut"
          body="Hvad end du står overfor nybyg, renovering, ombygning, tilbygning eller indflytning, så kan Studio Brinch komme med den inspiration der gør dit hjem unikt og vi kan hjælpe lige fra opstarten til implementeringen af dit boligprojekt."
          shortBody="Nybyg, renovering, ombygning eller indflytning – vi hjælper fra opstarten til implementeringen af dit boligprojekt."
          ctaLabel="Services"
          ctaHref="/ydelser"
        />
        </MobileCarousel>
      </div>
      {/* Desktop-only closer; the mobile design ends the section at the dots */}
      <div className="mx-auto -mb-[30px] mt-[60px] flex max-w-[1240px] flex-col items-center text-center max-md:hidden">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-3 text-[21px] font-medium text-accent hover:text-olive"
        >
          Start med en uforpligtende snak <span className="text-[22px]">→</span>
        </Link>
        <p className="m-0 mt-3 font-serif text-[21px] italic text-body">
          Ingen forpligtelser – bare en samtale om jeres drømme og muligheder.
        </p>
      </div>
    </div>
  );
}
