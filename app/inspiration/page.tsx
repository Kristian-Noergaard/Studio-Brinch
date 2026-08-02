import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";

export const metadata = {
  title: "Inspiration — Studio Brinch",
  description:
    "Guides og inspiration fra studiet, til et hjem med ro, varme og karakter.",
};

const ARTICLES = [
  {
    href: "/inspiration/indretning-af-koekken",
    image: "/assets/slots/insp-koekken.webp",
    imageLabel: "Snedkerkøkken, artikelfoto",
    kicker: "GUIDE  ·  16. SEPTEMBER 2024",
    title:
      "Indretning af køkken: Sådan får du et køkken, hvor form og funktion mødes",
    teaser:
      "Ti nedslag i alt det, der afgør, om et køkken bliver hjemmets hjerte: behov, layout, opbevaring, lys, materialer og de personlige detaljer.",
    imageRight: false,
  },
  {
    href: "/inspiration/efteraarshygge",
    image: "/assets/slots/insp-hygge.webp",
    imageLabel: "Efterårsstue, artikelfoto",
    kicker: "INSPIRATION  ·  16. SEPTEMBER 2024",
    title:
      "Efterårshygge: Indretningstips til en varm og hyggelig efterårsstemning",
    teaser:
      "Varme farver, bløde tekstiler, lag og levende lys: fire greb, der forvandler boligen til et varmt tilflugtssted, når dagene bliver kortere.",
    imageRight: true,
  },
];

export default function InspirationPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" />

      <div className="bg-beige px-6 pt-36 pb-16 md:px-16 md:pt-[170px] md:pb-20">
        <div className="om-herotitle mx-auto max-w-[1232px]">
          <div className="mb-[18px] font-sans text-[14px] tracking-[5px] text-accent">
            INSPIRATION
          </div>
          <h1
            className="m-0 max-w-[900px] font-serif text-[34px] font-normal leading-[1.25] md:text-[52px]"
            style={{ textWrap: "pretty" }}
          >
            Guides og inspiration fra studiet, til et hjem med ro, varme og
            karakter.
          </h1>
        </div>
      </div>

      <div className="px-6 pt-24 pb-10 md:px-16 md:pt-[110px]" data-reveal>
        {ARTICLES.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className={`om-zoomwrap mx-auto mb-24 grid max-w-[1232px] grid-cols-1 items-center gap-10 text-ink md:mb-[110px] md:gap-20 ${
              a.imageRight
                ? "lg:grid-cols-[5fr_7fr]"
                : "lg:grid-cols-[7fr_5fr]"
            }`}
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden bg-hairline ${
                a.imageRight ? "lg:order-2" : ""
              }`}
            >
              <div
                className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${a.image}')` }}
                role="img"
                aria-label={a.imageLabel}
              />
            </div>
            <div className={a.imageRight ? "lg:order-1" : ""}>
              <div className="mb-6 font-sans text-[13px] tracking-[3px] text-accent">
                {a.kicker}
              </div>
              <h2
                className="m-0 mb-[18px] font-serif text-[30px] font-medium leading-[1.2] md:text-[40px]"
                style={{ textWrap: "pretty" }}
              >
                {a.title}
              </h2>
              <p
                className="m-0 mb-[30px] text-[17px] font-light leading-[1.8] text-body"
                style={{ textWrap: "pretty" }}
              >
                {a.teaser}
              </p>
              <div className="w-fit border-b border-ink pb-1 font-sans text-[13px] tracking-[3px]">
                LÆS ARTIKLEN&nbsp; →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer compact />
    </main>
  );
}
