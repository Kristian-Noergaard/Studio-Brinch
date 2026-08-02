import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import {
  YdelseHero,
  YdelseIntro,
  TripleSection,
  YdelseCta,
} from "@/components/YdelseSections";

export const metadata = {
  title: "Indretning og Design Service — Studio Brinch",
  description:
    "Opfriskning eller renovering af et eller flere rum — skræddersyet indretning og design.",
};

export default function YdelseIndretningPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="light" />
      <YdelseHero
        image="/assets/slots/ydi-hero.webp"
        imageLabel="Panorama: plantegning og kaffekop"
        title="Indretning og Design Service"
        subtitle="Opfriskning eller renovering af et eller flere rum"
      />
      <YdelseIntro>
        Vores Indretning og Design Service er skræddersyet til at give nyt liv
        til dine rum, uanset om du ønsker at renovere eller blot opfriske et
        eller flere rum.
      </YdelseIntro>
      <div className="px-6 pb-10 pt-4 md:px-16" data-reveal>
        <div className="mx-auto max-w-[1000px]">
          <h2 className="m-0 mb-6 font-serif text-[30px] font-medium md:text-[38px]">
            Vores tilgang
          </h2>
          <p
            className="m-0 text-[17px] font-light leading-[1.85] text-body"
            style={{ textWrap: "pretty" }}
          >
            Vi forstår, at hvert rum har unikt potentiale og personlighed.
            Vores tilgang er samarbejdsorienteret, hvilket sikrer, at din smag
            og dine behov er i centrum af designprocessen. Fra indledende
            konsultation til de sidste detaljer håndterer vi hver eneste del med
            omhyggelighed og kreativitet.
          </p>
        </div>
      </div>
      <TripleSection
        title="Renovering af køkken, bad og bryggers"
        lead="Vores designfilosofi bygger på en kombination af tidløs elegance og god kvalitet. Vi vælger omhyggeligt materialer, der kan modstå daglig brug og samtidig bevare deres skønhed over tid. Uanset om det er et klassisk køkken, et badeværelse der emmer af ro, eller et praktisk bryggers, sikrer vi, at hvert element er designet til at holde."
        items={[
          {
            title: "Køkken indretning",
            body: "Skal du renovere et køkken, skabe et køkkenalrum eller på anden måde opfriske dit eksisterende køkken, kan vi hjælpe dig. Hos Studio Brinch specialiserer vi os i køkkenindretning, hvor vi skaber skræddersyede løsninger, der er æstetisk smukke, optimerer pladsen og fremhæver din personlige stil.",
          },
          {
            title: "Badeværelse indretning",
            body: "Vi forvandler dit badeværelse til en oase af ro, velvære og funktionalitet. Vi kombinerer praktiske løsninger med elegant design for at skabe rum, der både er funktionelt og æstetisk tiltalende, så dit badeværelse bliver en harmonisk del af dit hjem.",
          },
          {
            title: "Bryggers indretning",
            body: "Vi skaber praktiske og stilfulde bryggersløsninger, der gør hverdagen lettere. Vi fokuserer på effektiv udnyttelse af pladsen og integrerer smarte opbevaringsløsninger. Med vores sans for æstetik og funktionalitet bliver dit bryggers både funktionelt og indbydende.",
          },
        ]}
      />
      <TripleSection
        grey
        last
        title="Special løsninger og indbyggede møbler"
        lead="Ønsker du en unik løsning, der er tilpasset og optimeret til dit rum, tilbyder Studio Brinch at tegne den løsning, du har behov for. Et eksempel kan være din garderobe, børneværelse, reol eller anden type af opbevaring."
        items={[
          {
            title: "Snedkermøbler",
            body: "Skab den luksuriøse løsning med et indbygget møbel i kvalitetsmaterialer. Vi tegner og specificerer, hvordan det unikke møbel bedst indtager rummet, og giver tegningerne videre til snedkeren, som producerer og monterer.",
          },
          {
            title: "Møbel-hacks",
            body: "Ved gode møbel-hacks får du et smukt og funktionelt møbel, der med de rigtige tilpasninger passer perfekt ind i dit hjem. Vi identificerer prisvenlige møbler, tegner og designer.",
          },
          {
            title: "Selvbyg",
            body: "Er du selv håndværker eller en god gør-det-selv, kan vi tegne møblet, der passer perfekt til dit rum. Du får kompetent sparring omkring design, materialer og farver.",
          },
        ]}
      />
      <YdelseCta />
      <Footer compact />
    </main>
  );
}
