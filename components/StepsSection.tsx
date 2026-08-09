import Link from "next/link";

const STEPS = [
  {
    n: "1",
    title: "Dialog & afklaring",
    body: "Fortæl om jeres behov og drømme, vi afklarer muligheder, budget og rammer.",
  },
  {
    n: "2",
    title: "Besøg & koncept",
    body: "Et koncentreret besøg i jeres hjem (ca. 4 timer), hvor vi analyserer rummene og kickstarter projektet.",
  },
  {
    n: "3",
    title: "Designplan & forslag",
    body: "Vi udarbejder en skræddersyet indretnings- og designplan med plantegning, møbler, materialer og anbefalinger.",
  },
  {
    n: "4",
    title: "Eksekvering & opfølgning",
    body: "I kan selv tage over, eller vi hjælper med bestillinger, koordinering og kommer forbi til et afsluttende besøg.",
  },
];

const BOX_BG = "rgba(253,252,249,0.45)";

export default function StepsSection() {
  return (
    <div className="bg-beige overflow-clip" data-sec="forloebet">
      {/* Mobile: dark photo band with hairline-divided numbered rows */}
      <div className="relative bg-olive md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/forloeb_1.webp')" }}
          role="img"
          aria-label="Forløbet: håndtegnet skitse"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(26,24,19,0.72)" }}
        />
        <div className="relative px-6 py-16 text-cream">
          <div className="mb-3 text-center font-sans text-[11px] tracking-[5px] text-rose">
            FORLØBET
          </div>
          <h2
            className="m-0 mb-8 text-center font-serif text-[29px] font-normal italic"
            style={{ textWrap: "pretty" }}
          >
            Fire trin fra dialog til opfølgning
          </h2>
          <div className="flex flex-col">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex gap-[18px] border-t border-cream/20 py-[18px]"
              >
                <div className="w-[34px] flex-none font-serif text-[22px] italic leading-[1.4] text-rose">
                  0{s.n}
                </div>
                <div>
                  <h3 className="m-0 mb-1 font-serif text-[20px] font-medium">
                    {s.title}
                  </h3>
                  <p
                    className="m-0 text-[15px] font-light leading-[1.6] text-cream/80"
                    style={{ textWrap: "pretty" }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center border-t border-cream/20 pt-7">
            <Link
              href="/kontakt"
              className="whitespace-nowrap border border-cream/85 px-8 py-[15px] font-sans text-[12px] tracking-[3px] text-cream transition-colors hover:bg-cream/15"
            >
              BOOK EN SAMTALE
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop/tablet: panorama with translucent step cards (unchanged) */}
      <div className="relative max-md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/slots/forloeb-panorama.webp')" }}
          role="img"
          aria-label="Forløbet: panoramabillede"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,18,14,0.35) 0%, transparent 50%)",
          }}
        />
        <div className="pointer-events-none relative grid grid-cols-1 items-stretch gap-10 px-6 py-14 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-[110px] lg:py-[72px]">
          <div className="flex flex-col">
            <div className="mb-3.5 flex items-center gap-[18px] max-md:justify-center">
              <div className="h-px w-16 bg-cream max-md:hidden" />
              <div className="font-sans text-[14px] tracking-[5px] text-cream">
                FORLØBET
              </div>
            </div>
            <h2
              className="m-0 max-w-[480px] font-serif text-[34px] font-medium leading-[1.15] text-cream max-md:self-center max-md:text-center md:text-[44px]"
              style={{ textWrap: "pretty" }}
            >
              Fire trin fra dialog til opfølgning
            </h2>
            <Link
              href="/kontakt"
              className="pointer-events-auto mt-auto hidden w-max whitespace-nowrap border border-cream bg-transparent px-[34px] py-4 font-sans text-[13px] tracking-[3px] text-cream transition-colors hover:bg-cream/15 lg:block"
            >
              BOOK EN SAMTALE
            </Link>
          </div>
          <div className="pointer-events-auto flex flex-col gap-4">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="step-card relative max-w-[578px] py-3.5 pl-[52px] pr-5 backdrop-blur-[5px]"
                style={{ background: BOX_BG }}
              >
                <div className="absolute left-4 top-3 font-serif text-[26px] italic leading-none text-accent">
                  {s.n}
                </div>
                <h3 className="m-0 mb-1 font-serif text-[23px] font-medium text-ink">
                  {s.title}
                </h3>
                <p
                  className="m-0 text-[18px] font-light leading-[1.6] text-olive"
                  style={{ textWrap: "pretty" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 w-max max-md:self-center whitespace-nowrap border border-cream bg-transparent px-[34px] py-4 font-sans text-[13px] tracking-[3px] text-cream transition-colors hover:bg-cream/15 lg:hidden"
            >
              BOOK EN SAMTALE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
