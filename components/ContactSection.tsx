import Overline from"./Overline";
import SocialIcons from"./SocialIcons";
import ContactForm from"./ContactForm";

export default function ContactSection() {
  return (
    <div
      id="kontakt"
      className="bg-beige px-6 py-24 md:px-16 md:py-[120px]"
      data-reveal
      data-sec="kontakt"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[70px] max-md:text-center">
          <Overline label="KONTAKT" className="mb-3.5 max-md:justify-center max-md:[&>div:first-child]:hidden" />
          <h2 className="m-0 mb-5 font-serif text-[34px] font-medium leading-[1.2] text-ink md:text-[46px]">
            Skal jeg hjælpe dig videre? Kontakt mig
          </h2>
          <p
            className="m-0 max-w-[680px] text-[21px] font-light leading-[1.7] text-body"
            style={{ textWrap:"pretty" }}
          >
            Vi starter med en{" "}
            <strong className="font-medium text-ink">uforpligtende snak</strong>
            , lytter til jeres ønsker og former et designforløb, der passer til
            jer. Processen er enkel, tryg og bygget på ærlig rådgivning og
            gennemsigtighed.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-[1fr_420px] lg:gap-[110px]">
          <ContactForm />
          <div className="flex flex-col border-l border-hairline-dark pl-8 md:pl-16">
            <div
              className="mb-4 h-[223px] w-[185px] overflow-hidden bg-hairline bg-cover bg-center bg-no-repeat"
              role="img"
              aria-label="Kimmie Brinch i studiet"
              style={{ backgroundImage:"url('/assets/kimmie_portraet.jpg')" }}
            />
            <h3 className="m-0 mb-1.5 font-serif text-[32px] font-medium text-ink">
              Kimmie Brinch
            </h3>
            <div className="mb-4 font-sans text-[15px] font-light tracking-[0.5px] text-body">
              Ejer &amp; Indehaver
            </div>
            <div className="mb-4 flex flex-col gap-4 font-sans text-[16px] font-light">
              <a
                href="tel:+4541866431"
                className="w-fit text-ink underline underline-offset-4 hover:text-accent"
              >
                +45 41 86 64 31
              </a>
              <a
                href="mailto:Kimmie@studio-brinch.dk"
                className="w-fit text-ink underline underline-offset-4 hover:text-accent"
              >
                Kimmie@studio-brinch.dk
              </a>
              <div className="text-body">CVR: 44717077</div>
            </div>
            <SocialIcons className="mb-4 text-ink [&_a:hover]:text-accent" />
            <a
              href="tel:+4541866431"
              className="mt-auto inline-block self-start border border-ink px-[30px] py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              SKAL JEG KONTAKTE DIG I STEDET?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
