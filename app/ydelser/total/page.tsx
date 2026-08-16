import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import {
  YdelseHero,
  TripleSection,
  YdelseCta,
} from "@/components/YdelseSections";

export const metadata = {
  title: "Total Interiør Design Service | Studio Brinch",
  description:
    "Total renovering, nybyg og tilbygning, fuld service-indretning af hele dit hjem.",
};

export default function YdelseTotalPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" menuBg="beige" />
      <YdelseHero
        image="/assets/slots/ydt-hero.webp"
        imageLabel="Panorama: skitsearbejde med farveprøver"
        title="Total interiør design"
        tagline="nybyg, total renovering og tilbygning"
        body="Med total interiør design service skaber vi sammen dit drømmehjem, hvad enten det drejer sig om nybyg, total renovering eller tilbygning."
        bodyExtra="Står du overfor en total renovering eller skal til at bygge et nyt hus, skal du igennem en længere proces, hvor der løbende skal træffes utrolig mange valg om, hvordan dit nye hjem skal designes og fungere. Det er her, Studio Brinch kan skabe en merværdi til din drømmebolig og give dig ro i maven gennem implementeringen. Vi guider, inspirerer og projektstyrer gennem de utroligt mange valg omkring indretning, materialer, farver og inventar. Studio Brinch sikrer et sammenhængende hjem, hvor din personlige stil og hverdagens behov er i fokus."
      />
      <TripleSection
        ghost="1"
        title="Opstart"
        lead="Den første fase er vigtig for at fastlægge den stilistiske retning for dit boligprojekt og skabe den røde tråd for dit hjem."
        items={[
          {
            title: "Indledende konsultation",
            body: "Hvert projekt starter med et besøg i dit hjem for at forstå dine drømme og snakke om, hvilke behov og ønsker du har til et hjem.",
          },
          {
            title: "Moodboard",
            body: "Jeg laver et moodboard, der er det visuelle udgangspunkt for projektet. Det indeholder et udvalg af billeder, en farvepalette, abstrakt inspiration og en materialeretning.",
          },
          {
            title: "Præsentation og revision",
            body: "Jeg præsenterer moodboardet og vil gerne have din feedback, så jeg kan lave de ændringer, der er nødvendige for at sikre, at det passer perfekt til din vision.",
          },
        ]}
      />
      <TripleSection
        ghost="2"
        grey
        title="Design udvikling"
        lead="I denne fase bevæger vi os fra det abstrakte til konkrete valg omkring farvekoder, materialer, møbler mv."
        items={[
          {
            title: "Designboard",
            body: "Jeg laver et designboard for hvert rum med præcise detaljer som farvekoder, gulve, klinker, inventar, tapeter og materialevalg. Hvert rum får dermed en klar plan, og vi sikrer et sammenhængende udtryk gennem hele huset.",
          },
          {
            title: "Special løsninger",
            body: "Jeg designer selv snedkerløsninger og interiør for at skabe et unikt design, der passer bedst til jeres behov. Jeg tror på, at skræddersyede løsninger giver et hus personlighed og en ekstra wow-factor.",
          },
          {
            title: "Præsentation og revision",
            body: "Jeg præsenterer designboardet og finjusterer det ud fra din feedback, så vi sikrer, at hver detalje lever op til dine forventninger.",
          },
        ]}
      />
      <TripleSection
        ghost="3"
        last
        title="Implementering"
        lead="I den sidste fase bringer vi designet til live og sørger for, at hvert element udføres til perfektion. Vi koordinerer alle designmæssige aspekter og sikrer dermed en mere stressfri proces."
        items={[
          {
            title: "Byggeriet",
            body: "Når vi kommer til byggefasen, har jeg flere samarbejdspartnere, men der er også mulighed for at vælge egen entreprenør. Uanset hvad, vil jeg være med i byggeprocessen, som det passer dig.",
          },
          {
            title: "Projektledelse",
            body: "Igennem denne fase holder jeg styr på, at alt går som planlagt, og sørger for at koordinere alle aspekter af implementeringen og sikrer dermed en mere stressfri proces.",
          },
          {
            title: "Finish",
            body: "Finishen er en lige så stor del af projektet som selve igangsættelsen, beslutningerne og håndværket. Derfor kan jeg være med hele vejen og hjælpe med at vælge de små detaljer som fugemassen på badeværelset.",
          },
        ]}
      />
      <YdelseCta price="Da hvert projekt er skræddersyet til kunden, er prisen projektbaseret." />
      <Footer compact />
    </main>
  );
}
