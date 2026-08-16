import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import {
  YdelseHero,
  TripleSection,
  YdelseCta,
} from "@/components/YdelseSections";

export const metadata = {
  title: "Indretning og Design Service | Studio Brinch",
  description:
    "Opfriskning eller renovering af et eller flere rum, skræddersyet indretning og design.",
};

export default function YdelseIndretningPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" menuBg="beige" />
      <YdelseHero
        image="/assets/slots/ydi-hero.webp"
        imageLabel="Panorama: plantegning og kaffekop"
        title="Indretning og design"
        tagline="opfriskning eller renovering af et eller flere rum"
        body="Vores Indretning og Design Service er skræddersyet til at give nyt liv til dine rum, uanset om du ønsker at renovere eller blot opfriske et eller flere rum."
        bodyExtra="Vi forstår, at hvert rum har unikt potentiale og personlighed. Vores tilgang er samarbejdsorienteret, hvilket sikrer, at din smag og dine behov er i centrum af designprocessen. Fra indledende konsultation til de sidste detaljer håndterer vi hver eneste del med omhyggelighed og kreativitet."
        fillScreen
      />
      <TripleSection
        dark
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
      <div className="px-6 pt-16 pb-[90px] md:px-16 md:pt-[70px] md:pb-[90px]" data-reveal>
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
          <div className="relative aspect-square lg:aspect-[4/5]">
            <div className="om-zoomwrap absolute left-0 top-0 h-[70%] w-[68%] overflow-hidden bg-hairline shadow-[0_12px_28px_rgba(42,40,34,0.18)]">
              <div
                className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/slots/ydi-special-1.webp')" }}
                role="img"
                aria-label="Foto: indbygget køkkenreol i eg"
              />
            </div>
            <div className="om-zoomwrap absolute bottom-0 right-0 z-10 h-[62%] w-[58%] overflow-hidden bg-hairline shadow-[0_14px_32px_rgba(42,40,34,0.28)]">
              <div
                className="om-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/slots/ydi-special-2.webp')" }}
                role="img"
                aria-label="Foto: håndtegnet skitse af skabsløsning"
              />
            </div>
          </div>
          <div>
            <div className="mb-[18px] flex items-center gap-[18px]">
              <div className="font-sans text-[14px] tracking-[5px] text-accent">
                SPECIAL LØSNINGER OG INDBYGGEDE MØBLER
              </div>
            </div>
            <h2
              className="m-0 mb-5 font-serif text-[32px] font-medium leading-[1.2] md:text-[38px]"
              style={{ textWrap: "pretty" }}
            >
              En unik løsning, tilpasset og optimeret til dit rum
            </h2>
            <p
              className="m-0 mb-2 text-[19px] font-light leading-[1.75] text-body md:text-[21px]"
              style={{ textWrap: "pretty" }}
            >
              Ønsker du en unik løsning, der er tilpasset og optimeret til dit
              rum, tilbyder Studio Brinch at tegne den løsning, du har behov
              for. Et eksempel kan være din garderobe, børneværelse, reol
              eller anden type af opbevaring.
            </p>
            <div className="flex flex-col">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-t border-hairline-dark py-5 first:mt-3"
                >
                  <h3 className="m-0 mb-1.5 font-serif text-[22px] font-medium">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[17px] font-light leading-[1.75] text-body">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <YdelseCta />
      <Footer compact />
    </main>
  );
}
