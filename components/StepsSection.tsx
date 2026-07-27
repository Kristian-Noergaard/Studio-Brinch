import Link from "next/link";
import Overline from "./Overline";

const STEPS = [
  {
    n: "01",
    title: "Dialog & afklaring",
    body: "Fortæl om jeres behov og drømme — vi afklarer muligheder, budget og rammer.",
  },
  {
    n: "02",
    title: "Besøg & koncept",
    body: "Et koncentreret besøg i jeres hjem (ca. 4 timer), hvor vi analyserer rummene og kickstarter projektet.",
  },
  {
    n: "03",
    title: "Designplan & forslag",
    body: "Vi udarbejder en skræddersyet indretnings- og designplan med plantegning, møbler, materialer og anbefalinger.",
  },
  {
    n: "04",
    title: "Eksekvering & opfølgning",
    body: "I kan selv tage over — eller vi hjælper med bestillinger, koordinering og kommer forbi til et afsluttende besøg.",
  },
];

const PHOTOS = {
  left: [
    { src: "/assets/proces_sofa.png", alt: "Karrygul sofa mod mørk væg" },
    { src: "/assets/proces_bad1.png", alt: "Badeværelse med egetræsvask" },
  ],
  right: [
    { src: "/assets/proces_sovevaerelse.png", alt: "Soveværelse i rolige toner" },
    { src: "/assets/proces_bad2.png", alt: "Badeværelse i lyse toner" },
  ],
};

export default function StepsSection() {
  return (
    <div className="overflow-hidden bg-beige px-6 pt-24 pb-28 md:px-16 md:pt-[130px] md:pb-[140px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-[110px]">
        <div>
          <Overline label="FORLØBET" className="mb-3.5" />
          <h2
            className="m-0 max-w-[480px] font-serif text-[34px] font-medium leading-[1.2] text-ink md:text-[44px]"
            style={{ textWrap: "pretty" }}
          >
            Fire trin — fra dialog til opfølgning
          </h2>
          <div className="mt-14 flex flex-col gap-[54px]">
            {STEPS.map((s) => (
              <div key={s.n} className="relative pl-[90px] md:pl-[118px]">
                {/* Ghost numeral intentionally overlaps behind the text */}
                <div
                  className="absolute left-0 top-[-26px] font-serif text-[74px] italic leading-none md:text-[94px]"
                  style={{ color: "rgba(111,66,52,0.22)" }}
                >
                  {s.n}
                </div>
                <h3 className="m-0 mb-2 font-serif text-[27px] font-medium text-ink">
                  {s.title}
                </h3>
                <p
                  className="m-0 max-w-[400px] text-[16px] font-light leading-[1.7] text-body"
                  style={{ textWrap: "pretty" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
            <Link
              href="/kontakt"
              className="mt-1.5 w-max whitespace-nowrap border border-ink px-[34px] py-4 text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              BOOK EN SAMTALE
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start gap-0">
          <div className="mt-[90px]">
            {PHOTOS.left.map((p) => (
              <div
                key={p.src}
                className="aspect-[4/5] overflow-hidden bg-hairline bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${p.src}')` }}
                role="img"
                aria-label={p.alt}
              />
            ))}
          </div>
          <div>
            {PHOTOS.right.map((p) => (
              <div
                key={p.src}
                className="aspect-[4/5] overflow-hidden bg-hairline bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${p.src}')` }}
                role="img"
                aria-label={p.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
