import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";

export const metadata = {
  title: "Services — Studio Brinch",
  description:
    "Tre måder at samarbejde på — fra et enkelt besøg til total interiør design service ved renovering og nybyg.",
};

function ServiceImage({
  href,
  image,
  label,
}: {
  href: string;
  image: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="om-zoomwrap relative block min-h-[320px] overflow-hidden bg-hairline md:min-h-[620px]"
    >
      <div className="om-parallax absolute inset-x-0 -inset-y-10">
        <div
          className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={label}
        />
      </div>
    </Link>
  );
}

function ServiceText({
  title,
  subtitle,
  body,
  price,
  href,
  beige = false,
}: {
  title: string;
  subtitle: string;
  body: string;
  price?: string;
  href: string;
  beige?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-center px-8 py-14 md:px-[72px] md:py-20 ${
        beige ? "bg-beige" : "bg-offwhite"
      }`}
      style={beige ? undefined : { boxShadow: "0 2px 20px rgba(42,40,34,0.06)" }}
    >
      <h2
        className="m-0 mb-2 font-serif text-[30px] font-medium leading-[1.15] md:text-[40px]"
        style={{ textWrap: "pretty" }}
      >
        {title}
      </h2>
      <div className="mb-[26px] font-serif text-[21px] italic text-body">
        {subtitle}
      </div>
      <p
        className={`m-0 text-[17px] font-light leading-[1.8] text-body ${
          price ? "mb-[18px]" : "mb-9"
        }`}
        style={{ textWrap: "pretty" }}
      >
        {body}
      </p>
      {price && (
        <p className="m-0 mb-9 font-serif text-[19px] italic text-ink">
          {price}
        </p>
      )}
      <Link
        href={href}
        className="self-start border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        LÆS MERE
      </Link>
    </div>
  );
}

export default function YdelserPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" />
      <div className="mt-[82px]">
        <img
          src="/assets/hero_services.jpg"
          alt="Studio Brinch er specialiseret i renovering, ombygning og nybyg"
          className="block w-full"
        />
      </div>

      <div className="px-6 pt-24 pb-16 md:px-16 md:pt-[120px] md:pb-[90px]" data-reveal data-sec="proces">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center justify-center gap-8 lg:grid-cols-[auto_auto] lg:gap-12">
          <div className="text-left">
            <h2
              className="m-0 max-w-[640px] font-serif text-[36px] font-medium leading-[1.15] text-ink md:text-[50px]"
              style={{ textWrap: "pretty" }}
            >
              <span className="om-w1">Tre måder at samarbejde på,</span>
              <br />
              <span className="om-w2">fra sparring til totalløsning</span>
            </h2>
          </div>
          <div className="max-w-[480px] lg:justify-self-start">
            <div className="om-w2 mb-3.5 flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                VORES YDELSER
              </div>
              <div className="h-px flex-1 bg-accent" />
            </div>
            <p
              className="om-v3 om-words m-0 text-left text-[18px] font-light leading-[1.7] text-body"
              style={{ textWrap: "pretty" }}
            >
              Uanset projektets størrelse er tilgangen den samme:{" "}
              <strong className="font-medium text-ink">ærlig rådgivning</strong>
              , gennemsigtighed og et hjem, der passer til jeres hverdag.
            </p>
          </div>
        </div>
      </div>

      <div className="px-0 pb-24 md:px-16 md:pb-[120px]" data-reveal>
        <div className="reveal-grid mx-auto grid max-w-[1320px] grid-cols-1 items-stretch md:grid-cols-2">
          <ServiceImage
            href="/ydelser/total"
            image="/assets/slots/yd-1.webp"
            label="Skitsearbejde med farveprøver"
          />
          <ServiceText
            title="Total Interiør Design Service"
            subtitle="Total renovering, nybyg og tilbygning"
            body="Står du overfor en total renovering eller skal til at bygge nyt hus, er Studio Brinch klar til at håndtere dine boligdrømme. En fuld service-indretning af hele dit hjem, hvor vi indgår som tæt samarbejdspartner i dit boligprojekt, skræddersyet til jeres behov og præferencer."
            price="Da hvert projekt er skræddersyet, er prisen projektbaseret."
            href="/ydelser/total"
          />
          <ServiceText
            title="Indretning og Design Service"
            subtitle="Opfriskning eller renovering af et eller flere rum"
            body="Skræddersyet til at give nyt liv til dine rum, uanset om du ønsker at renovere eller blot opfriske et eller flere rum. Tilgangen er samarbejdsorienteret, så din smag og dine behov er i centrum, og fra indledende konsultation til de sidste detaljer håndterer vi hver eneste del med omhyggelighed og kreativitet."
            href="/ydelser/indretning"
            beige
          />
          <ServiceImage
            href="/ydelser/indretning"
            image="/assets/slots/yd-2.webp"
            label="Plantegning og kaffekop"
          />
          <ServiceImage
            href="/ydelser/enkelt-besoeg"
            image="/assets/slots/yd-3.webp"
            label="Stue med lyse møbler"
          />
          <ServiceText
            title="Et enkelt besøg"
            subtitle="Sparring"
            body="En fire timers konsultation i dit hjem, hvor vi kan snakke om alt, hvad du har brug for designmæssig hjælp til. Det kan være en sammenhængende farvepalette i hjemmet, hjælp til materialevalg, sparring til større eller mindre renovering, køkkenindretning med mere."
            price="Prisen for et enkelt besøg er 5.000 kr."
            href="/ydelser/enkelt-besoeg"
          />
        </div>
      </div>

      <div className="bg-beige px-6 py-24 text-center md:px-16 md:py-[120px]" data-reveal>
        <h2 className="m-0 mb-9 font-serif text-[32px] font-normal leading-[1.3] md:text-[44px]">
          Har du et projekt, jeg kan hjælpe dig med?
        </h2>
        <Link
          href="/kontakt"
          className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          BOOK EN SAMTALE
        </Link>
      </div>

      <Footer compact />
    </main>
  );
}
