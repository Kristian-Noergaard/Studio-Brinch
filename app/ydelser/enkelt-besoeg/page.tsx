import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import { YdelseHero, YdelseCta } from "@/components/YdelseSections";

export const metadata = {
  title: "Et enkelt besøg | Studio Brinch",
  description:
    "En fire timers konsultation i dit hjem, sparring om farver, materialer, renovering og indretning.",
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
      <Header variant="dark" menuBg="beige" />
      <YdelseHero
        image="/assets/slots/yde-hero.webp"
        imageLabel="Panorama: lys stue"
        title="Et enkelt besøg"
        tagline="fire timers sparring i dit hjem"
        body="Med et enkelt besøg tilbyder jeg en fire timers konsultation i dit hjem. Her kan du få sparring om alt, hvad du har brug for designmæssig hjælp til."
      />
      <div className="bg-cream px-6 py-16 md:px-16 md:py-[110px]" data-reveal>
        <div className="mx-auto max-w-[1180px]">
          <h2 className="m-0 py-2.5 font-serif text-[32px] font-medium leading-[1.05] md:text-[44px]">
            Eksempler på emner til et enkelt besøg
          </h2>
          <p
            className="m-0 mb-10 max-w-[560px] text-[21px] font-light leading-[1.8] text-body md:mb-14"
            style={{ textWrap: "pretty" }}
          >
            Fire timer rækker længere, end man tror. Her er nogle af de emner,
            et besøg ofte handler om.
          </p>
          <div className="reveal-grid grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3 md:gap-y-12">
            {TOPICS.map((t) => (
              <div key={t.title} className="border-t border-hairline-dark pt-6">
                <h3 className="m-0 mb-2.5 font-serif text-[24px] font-medium">
                  {t.title}
                </h3>
                <p className="m-0 text-[16px] font-light leading-[1.75] text-body">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <YdelseCta price="Prisen for et enkelt besøg er 5.000 kr." />
      <Footer compact />
    </main>
  );
}
