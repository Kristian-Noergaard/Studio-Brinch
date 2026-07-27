import Link from "next/link";
import Overline from "./Overline";
import BeforeAfterSlider from "./BeforeAfterSlider";

const CARD_SHADOW = "0 2px 20px rgba(42,40,34,0.06)";

function Card({
  image,
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  image: React.ReactNode;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[14px] bg-offwhite"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="relative">{image}</div>
      <div className="flex flex-1 flex-col gap-3.5 px-9 pt-9 pb-10 text-center">
        <h3 className="m-0 min-h-[34px] font-serif text-[26px] font-medium text-ink">
          {title}
        </h3>
        <p
          className="m-0 text-[15px] font-light leading-[1.75] text-body"
          style={{ textWrap: "pretty" }}
        >
          {body}
        </p>
        <Link
          href={ctaHref}
          className="mt-auto self-center pt-[22px] text-[15px] font-medium text-accent underline underline-offset-[5px] hover:text-ink"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <div className="bg-beige px-6 py-24 md:px-16 md:py-[120px]">
      <div className="mx-auto mb-12 flex max-w-[1240px] flex-col items-center text-center">
        <Overline label="VORES PROCES" centered className="mb-3.5" />
        <h2
          className="m-0 mb-[26px] max-w-[640px] font-serif text-[36px] font-medium leading-[1.15] text-ink md:text-[50px]"
          style={{ textWrap: "pretty" }}
        >
          Et samarbejde i øjenhøjde
          <br />— fra idé til færdigt hjem
        </h2>
        <p
          className="m-0 mb-10 max-w-[760px] text-[18px] font-light leading-[1.7] text-body"
          style={{ textWrap: "pretty" }}
        >
          Vi starter med en{" "}
          <strong className="font-medium text-ink">uforpligtende snak</strong>,
          lytter til jeres ønsker og former et designforløb, der passer til jer.
          Processen er enkel, tryg og bygget på ærlig rådgivning og
          gennemsigtighed.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-7 lg:grid-cols-3">
        <Card
          image={
            <div
              className="h-[280px] rounded-t-[14px] bg-beige bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/om_studio.webp')",
                backgroundPosition: "62% 30%",
              }}
              role="img"
              aria-label="Samarbejde med Studio Brinch"
            />
          }
          title="Samarbejde med Studio Brinch"
          body="Et samarbejde med os sikrer et æstetisk flot og funktionelt hjem med tidløse og langtidsholdbare løsninger. Med de rigtige materiale- og designvalg får du et hjem hvor stemningen i hvert rum gør at du og dine nærmeste bare har lyst til at opholde dig i dit hjem, samtidig med at det fungerer i hverdagen."
          ctaLabel="Om os"
          ctaHref="/om-os"
        />
        <Card
          image={
            <div
              className="h-[280px] rounded-t-[14px] bg-beige bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/box_koekken.png')",
                backgroundPosition: "center 45%",
              }}
              role="img"
              aria-label="Inspiration til din indretning"
            />
          }
          title="Inspiration til din indretning"
          body="Hos Studio Brinch inspirerer vi gennem hele processen lige fra din plantegning til alle efterfølgende designvalg af materialer, farver, møbler og indretning. Med et sammenhængende design koncept skabes et unikt oplæg til dit hjem, hvor hvert rum tager udgangspunkt i din stilart, livsstil og behov."
          ctaLabel="Inspiration"
          ctaHref="/projekter"
        />
        <Card
          image={
            <BeforeAfterSlider
              before="/assets/box_stue_empty.png"
              after="/assets/box_stue.png"
              label="Før og efter — projektstyring fra start til slut"
            />
          }
          title="Projektstyring fra start til slut"
          body="Hvad end du står overfor nybyg, renovering, ombygning, tilbygning eller indflytning, så kan Studio Brinch komme med den inspiration der gør dit hjem unikt og vi kan hjælpe lige fra opstarten til implementeringen af dit boligprojekt."
          ctaLabel="Kontakt os"
          ctaHref="/kontakt"
        />
      </div>
      <div className="mx-auto mt-20 flex max-w-[1240px] flex-col items-center text-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-3 text-[17px] font-medium text-accent hover:text-olive"
        >
          Start med en uforpligtende snak <span className="text-[20px]">→</span>
        </Link>
        <p className="m-0 mt-3 font-serif text-[19px] italic text-body">
          Ingen forpligtelser – bare en samtale om jeres drømme og muligheder.
        </p>
      </div>
    </div>
  );
}
