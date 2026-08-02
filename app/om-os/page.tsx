import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";

export const metadata = {
  title: "Om os — Studio Brinch",
  description:
    "Studio Brinch er et indretnings- og interiørdesign-studio i Kolding, ledet af Kimmie Brinch.",
};

const VALUES = [
  {
    title: "Personlighed",
    body: "Vi tager personlighed med i alt, vi gør. Vi tager os tid til at lære hver familie at kende og forstå jeres unikke behov og præferencer. Denne personlige tilgang gør, at vi designer hjem, der virkelig afspejler jeres livsstil, smag og tilgang til livet. Hver farve, tekstur og møbel skal fortælle en historie og skabe en personlig og indbydende atmosfære.",
  },
  {
    title: "Æstetik og funktionalitet",
    body: "I interiørdesign er harmonien mellem æstetik og funktionalitet afgørende. Et velindrettet rum skal være visuelt betagende, samtidig med at det opfylder sit tiltænkte formål effektivt. Hvert element, fra møbler til belysning, skal forbedre både skønhed og praktisk anvendelighed. Ved at blande form og funktion skaber vi miljøer, der ikke kun er inspirerende, men også komfortable og yderst funktionelle.",
  },
  {
    title: "Tillid",
    body: "Med tillid skaber vi tryghed i alle typer boligprojekter. Vi ved, at boligprojekter for mange er den største økonomiske post og kræver, at du i en periode investerer en masse tid. Derfor gør vi os særligt umage med at imødekomme dine boligdrømme, samtidig med at vi respekterer dit budget. Vi sørger for, at der træffes kvalitetsvalg til din indretning, og har et tæt samarbejde med dig og alle andre aktører involveret.",
  },
];

export default function OmOsPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="light" />

      {/* Full-bleed hero to the top edge, nav floats over it */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden bg-hairline">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/slots/om-hero.webp')" }}
          role="img"
          aria-label="Panorama: Kimmie i studiet ved reolen"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(20,18,14,0.5), transparent 55%), linear-gradient(180deg, rgba(20,18,14,0.35), transparent 30%)",
          }}
        />
        <div className="om-herotitle pointer-events-none absolute bottom-10 left-6 max-w-[900px] text-cream md:bottom-16 md:left-16">
          <div className="mb-3.5 font-sans text-[14px] tracking-[5px]">
            OM OS
          </div>
          <h1
            className="m-0 font-serif text-[30px] italic font-normal leading-[1.25] md:text-[46px]"
            style={{ textWrap: "pretty" }}
          >
            Studio Brinch er et indretnings- og interiørdesign-studio i
            Kolding, ledet af Kimmie Brinch.
          </h1>
        </div>
      </div>

      {/* Mission */}
      <div className="px-6 py-24 md:px-16 md:py-[120px]" data-reveal>
        <div className="mx-auto grid max-w-[1232px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_520px] lg:gap-[90px]">
          <div>
            <div className="mb-[26px] flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                VORES MISSION
              </div>
              <div className="h-px flex-1 bg-hairline-dark" />
            </div>
            <h2
              className="m-0 mb-10 font-serif text-[32px] font-medium leading-[1.25] md:text-[42px]"
              style={{ textWrap: "pretty" }}
            >
              At skabe et æstetisk og funktionelt hjem for dig og dine
              nærmeste.
            </h2>
            <div className="flex flex-col gap-[22px] text-[17px] font-light leading-[1.85] text-body">
              <p className="m-0" style={{ textWrap: "pretty" }}>
                Studio Brinch er grundlagt og ledet af indretningsarkitekten{" "}
                <strong className="font-medium text-ink">Kimmie Brinch</strong>{" "}
                og er et indretnings- og interiørdesign-studie dedikeret til at
                forvandle dit hus til et personligt hjem. Inspireret af
                balancen mellem æstetisk skønhed og praktisk funktionalitet
                mener vi, at ethvert hjem skal afspejle ejernes unikke behov og
                personlighed.
              </p>
              <p className="m-0" style={{ textWrap: "pretty" }}>
                Hos Studio Brinch sætter vi en ære i at designe og indrette
                rum, der passer til din livsstil. Om du er en familie, der
                elsker at lave mad og har brug for masser af bordplads, eller
                om du ofte har gæster og har brug for et større socialt område,
                designer vi med din livsstil i tankerne. Målet er at skabe
                hjem, der både er tidsløse og moderne, og som opfylder dine
                daglige behov.
              </p>
            </div>
          </div>
          <div className="om-zoomwrap relative aspect-[4/5] overflow-hidden bg-hairline">
            <div
              className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/assets/slots/om-koekken.webp')" }}
              role="img"
              aria-label="Detalje fra studiet eller et projekt"
            />
          </div>
        </div>
      </div>

      {/* Værdier */}
      <div className="bg-beige px-6 pt-24 pb-24 md:px-16 md:pt-[110px] md:pb-[120px]" data-reveal>
        <div className="reveal-grid mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-y-14 md:grid-cols-2 md:gap-x-[90px]">
          <div className="flex flex-col justify-end self-stretch">
            <div className="mb-[26px] flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                VÆRDIER
              </div>
              <div className="h-px w-16 bg-accent" />
            </div>
            <h2
              className="m-0 font-serif text-[40px] font-medium leading-[1.12] md:text-[56px]"
              style={{ textWrap: "balance" }}
            >
              Det, vi aldrig går på kompromis med
            </h2>
          </div>
          {VALUES.map((v) => (
            <div key={v.title}>
              <h3 className="m-0 mb-3.5 font-serif text-[32px] italic font-normal text-accent">
                {v.title}
              </h3>
              <p className="m-0 text-[16px] font-light leading-[1.8] text-body">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-beige px-6 pb-24 text-center md:px-16 md:pb-[120px]" data-reveal>
        <h2
          className="m-0 mb-9 font-serif text-[32px] font-normal leading-[1.3] md:text-[44px]"
          style={{ textWrap: "pretty" }}
        >
          Har du et projekt?
          <br />
          Udforsk vores services
        </h2>
        <Link
          href="/ydelser"
          className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          LÆS MERE
        </Link>
      </div>

      <Footer compact />
    </main>
  );
}
