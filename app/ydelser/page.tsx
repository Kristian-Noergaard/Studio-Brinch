import Link from"next/link";
import Header from"@/components/Header";
import Footer from"@/components/Footer";
import MobileCarousel from"@/components/MobileCarousel";
import PageEffects from"@/components/PageEffects";

export const metadata = {
  title:"Services — Studio Brinch",
  description:
"Tre måder at samarbejde på — fra et enkelt besøg til total interiør design service ved renovering og nybyg.",
};

function ServiceImage({
  href,
  image,
  label,
  className ="",
}: {
  href: string;
  image: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`om-zoomwrap relative block overflow-hidden bg-hairline ${className}`}
    >
      <div className="absolute inset-0">
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
  compact = false,
  className,
}: {
  title: string;
  subtitle: string;
  body: string;
  price?: string;
  href: string;
  beige?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center ${
        compact ?"px-5 py-6" :"px-8 py-14 md:px-[72px] md:py-20"
      } ${beige ?"bg-beige" :"bg-offwhite"} ${className ??""}`}
      style={beige ? undefined : { boxShadow:"0 2px 20px rgba(42,40,34,0.06)" }}
    >
      <h2
        className={`m-0 mb-1.5 font-serif font-medium leading-[1.15] ${
          compact ?"text-[23px]" :"text-[30px] md:text-[40px]"
        }`}
        style={{ textWrap:"pretty" }}
      >
        {title}
      </h2>
      <div
        className={`font-serif italic text-body ${
          compact ?"mb-3.5 text-[21px]" :"mb-[26px] text-[21px]"
        }`}
      >
        {subtitle}
      </div>
      <p
        className={`m-0 font-light text-body ${
          compact
            ? `text-[18px] leading-[1.55] ${price ?"mb-3" :"mb-5"}`
            : `text-[21px] leading-[1.8] ${price ?"mb-[18px]" :"mb-9"}`
        }`}
        style={{ textWrap:"pretty" }}
      >
        {body}
      </p>
      {price && (
        <p
          className={`m-0 font-serif italic text-ink ${
            compact ?"mb-5 text-[19px]" :"mb-9 text-[21px]"
          }`}
        >
          {price}
        </p>
      )}
      <Link
        href={href}
        className={`self-start border border-ink font-sans tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream ${
          compact ?"px-7 py-2.5 text-[12px]" :"px-10 py-4 text-[13px]"
        }`}
      >
        LÆS MERE
      </Link>
    </div>
  );
}

const SERVICES = [
  {
    title:"Et enkelt besøg",
    subtitle:"Sparring",
    body:"En fire timers konsultation i dit hjem, hvor vi kan snakke om alt, hvad du har brug for designmæssig hjælp til. Det kan være en sammenhængende farvepalette i hjemmet, hjælp til materialevalg, sparring til større eller mindre renovering, køkkenindretning med mere.",
    price:"Prisen for et enkelt besøg er 5.000 kr.",
    href:"/ydelser/enkelt-besoeg",
    image:"/assets/slots/yd-3.webp",
    label:"Stue med lyse møbler",
    beige: false,
  },
  {
    title:"Indretning og Design Service",
    subtitle:"Opfriskning eller renovering af et eller flere rum",
    body:"Skræddersyet til at give nyt liv til dine rum, uanset om du ønsker at renovere eller blot opfriske et eller flere rum. Tilgangen er samarbejdsorienteret, så din smag og dine behov er i centrum, og fra indledende konsultation til de sidste detaljer håndterer vi hver eneste del med omhyggelighed og kreativitet.",
    price: undefined,
    href:"/ydelser/indretning",
    image:"/assets/slots/yd-2.webp",
    label:"Plantegning og kaffekop",
    beige: true,
  },
  {
    title:"Total Interiør Design Service",
    subtitle:"Total renovering, nybyg og tilbygning",
    body:"Står du overfor en total renovering eller skal til at bygge nyt hus, er Studio Brinch klar til at håndtere dine boligdrømme. En fuld service-indretning af hele dit hjem, hvor vi indgår som tæt samarbejdspartner i dit boligprojekt, skræddersyet til jeres behov og præferencer.",
    price:"Da hvert projekt er skræddersyet, er prisen projektbaseret.",
    href:"/ydelser/total",
    image:"/assets/slots/yd-1.webp",
    label:"Skitsearbejde med farveprøver",
    beige: false,
  },
];

export default function YdelserPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="light" />
      {/* Mobile: original hero photo, cropped to its right side so the
          baked-in heading stays out of frame; the heading is real text on top */}
      <div className="relative block aspect-square overflow-hidden md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:"url('/assets/hero_services.jpg')",
            backgroundPosition:"right center",
          }}
          role="img"
          aria-label="Skitsearbejde i studiet"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
"linear-gradient(180deg, rgba(20,18,14,0.35), transparent 30%), linear-gradient(0deg, rgba(20,18,14,0.6), transparent 65%), linear-gradient(90deg, rgba(20,18,14,0.65), transparent 45%)",
          }}
        />
        <h1
          className="om-herotitle absolute bottom-7 left-6 right-6 m-0 text-center font-serif text-[26px] font-normal leading-[1.3] text-cream"
          style={{ textWrap:"pretty" }}
        >
          Studio Brinch er specialiseret i renovering, ombygning og nybyg. Om
          det drejer sig om at forvandle et helt hus eller forfriske et enkelt
          værelse.
        </h1>
      </div>
      <div className="relative hidden md:block">
        <img
          src="/assets/hero_services.jpg"
          alt="Studio Brinch er specialiseret i renovering, ombygning og nybyg"
          className="block w-full"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
"linear-gradient(180deg, rgba(20,18,14,0.35), transparent 30%)",
          }}
        />
      </div>

      <div className="px-6 pt-24 pb-16 md:px-16 md:pt-[120px] md:pb-[90px]" data-reveal data-sec="proces">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center justify-center gap-8 max-md:gap-5 lg:grid-cols-[auto_auto] lg:gap-12">
          <div className="text-left">
            {/* Mobile-only eyebrow above the heading; desktop keeps it in the right column */}
            <div className="mb-3.5 flex items-center gap-[18px] md:hidden">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                VORES YDELSER
              </div>
              <div className="h-px flex-1 bg-accent" />
            </div>
            <h2
              className="m-0 max-w-[640px] font-serif text-[30px] font-medium leading-[1.15] text-ink md:text-[50px]"
              style={{ textWrap:"pretty" }}
            >
              <span className="">Tre måder at samarbejde på,</span>
              <br />
              <span className="">fra sparring til totalløsning</span>
            </h2>
          </div>
          <div className="max-w-[480px] lg:justify-self-start">
            <div className="mb-3.5 flex items-center gap-[18px] max-md:hidden">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                VORES YDELSER
              </div>
              <div className="h-px flex-1 bg-accent max-md:hidden" />
            </div>
            <p
              className="m-0 text-left text-[22px] font-light leading-[1.7] text-body max-md:text-[19px]"
              style={{ textWrap:"pretty" }}
            >
              Uanset projektets størrelse er tilgangen den samme:{" "}
              <strong className="font-medium text-ink">ærlig rådgivning</strong>
              , gennemsigtighed og et hjem, der passer til jeres hverdag.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-16 md:px-16 md:pb-[120px]" data-reveal>
        {/* Mobile: one swipeable image+text card per service */}
        <div className="md:hidden">
          <MobileCarousel slideClassName="w-[92%]">
            {SERVICES.map((s) => (
              <div key={s.href} className="flex flex-col">
                <ServiceImage
                  href={s.href}
                  image={s.image}
                  label={s.label}
                  className="h-[200px] flex-none"
                />
                <ServiceText
                  title={s.title}
                  subtitle={s.subtitle}
                  body={s.body}
                  price={s.price}
                  href={s.href}
                  beige={s.beige}
                  compact
                  className="flex-1"
                />
              </div>
            ))}
          </MobileCarousel>
        </div>
        {/* Desktop: alternating image/text pairs */}
        <div className="reveal-grid mx-auto hidden max-w-[1320px] grid-cols-1 items-stretch md:grid md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const image = (
              <ServiceImage
                key={`${s.href}-img`}
                href={s.href}
                image={s.image}
                label={s.label}
                className="min-h-[620px]"
              />
            );
            const text = (
              <ServiceText
                key={`${s.href}-txt`}
                title={s.title}
                subtitle={s.subtitle}
                body={s.body}
                price={s.price}
                href={s.href}
                beige={s.beige}
              />
            );
            return i % 2 === 1 ? [text, image] : [image, text];
          })}
        </div>
      </div>

      <div className="bg-beige px-6 py-14 text-center md:px-16 md:py-[120px]" data-reveal>
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
