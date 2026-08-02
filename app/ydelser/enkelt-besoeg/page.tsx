import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import {
  YdelseHero,
  YdelseIntro,
  YdelseCta,
} from "@/components/YdelseSections";

export const metadata = {
  title: "Et enkelt besøg — Studio Brinch",
  description:
    "En fire timers konsultation i dit hjem — sparring om farver, materialer, renovering og indretning.",
};

const TOPICS = [
  {
    title: "Farvevalg",
    body: "Skabe en sammenhængende farvepalette gennem dit hjem, hvor jeg kigger på rummets anvendelse, husets arkitektur, din stil og den stemning, du ønsker at skabe.",
  },
  {
    title: "Materialevalg",
    body: "At vælge materialer til for eksempel dit køkken handler om at finde den perfekte balance mellem æstetik og funktionalitet. Hver overflade og hvert element skal ikke kun se smukt ud, men også modstå daglig brug.",
  },
  {
    title: "Renovering",
    body: "Få sparring omkring renovering og sikre, at detaljerne er tænkt igennem, og at der er sammenhæng i valgene. På fire timer kommer vi omkring dit boligprojekt og får snakket om udfordringer og valg, du står overfor.",
  },
  {
    title: "Indretning af køkken",
    body: "Står du overfor en større renovering af dit køkken, kan vi på en konsultation gennemgå indretning af køkken, forstå dine behov, snakke layout og arbejdsgange, opbevaring og sikre, at dit køkken afspejler dine behov.",
  },
  {
    title: "Moodboard",
    body: "Et moodboard kan hjælpe dig med at finde en klar visuel retning for din indretning og kan hjælpe dig med at kommunikere med f.eks. entreprenøren om din vision for indretningen.",
  },
  {
    title: "Indretning",
    body: "Mangler du inspiration til, hvordan du med få virkemidler kan lave store forandringer i din indretning? På fire timer kan vi lave en plan for, hvordan du kan opfriske og skabe nyt liv i din indretning.",
  },
];

export default function YdelseEnkeltBesoegPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" />
      <YdelseHero
        image="/assets/slots/yde-hero.webp"
        imageLabel="Panorama: lys stue"
        title="Et enkelt besøg"
        subtitle="Sparring"
      />
      <YdelseIntro>
        Med et enkelt besøg tilbyder jeg en fire timers konsultation i dit
        hjem. Her kan du få sparring om alt, hvad du har brug for designmæssig
        hjælp til.
      </YdelseIntro>
      <div className="relative overflow-hidden px-6 pb-16 pt-2.5 md:px-16" data-reveal>
        <div className="mx-auto max-w-[1000px]">
          <h2 className="m-0 py-2.5 font-serif text-[32px] font-medium leading-[1.05] md:text-[44px]">
            På emner til et enkelt besøg
          </h2>
          <p
            className="m-0 mb-7 max-w-[560px] text-[17px] font-light leading-[1.8] text-body"
            style={{ textWrap: "pretty" }}
          >
            Fire timer rækker længere, end man tror. Her er nogle af de emner,
            et besøg ofte handler om.
          </p>
        </div>
        <div className="mx-auto mt-3 max-w-[1000px]">
          {TOPICS.map((t, i) => (
            <div
              key={t.title}
              className={`grid grid-cols-1 items-baseline gap-3 py-[30px] md:grid-cols-[340px_1fr] md:gap-10 ${
                i > 0 ? "border-t border-hairline-dark" : ""
              }`}
            >
              <h3 className="m-0 font-serif text-[26px] font-medium">
                {t.title}
              </h3>
              <p className="m-0 text-[16px] font-light leading-[1.8] text-body">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <YdelseCta price="Prisen for et enkelt besøg er 5.000 kr." />
      <Footer compact />
    </main>
  );
}
