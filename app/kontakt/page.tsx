import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import SocialIcons from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt — Studio Brinch",
  description:
    "Har du et projekt, en idé eller står du over for den helt store renovering? Tag fat i Studio Brinch og få en uforpligtende snak.",
};

export default function KontaktPage() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header variant="dark" menuBg="beige" />

      <div className="bg-beige px-6 pt-36 pb-16 md:px-16 md:pt-[170px] md:pb-20">
        <div className="om-herotitle mx-auto max-w-[1232px]">
          <div className="mb-[18px] font-sans text-[14px] tracking-[5px] text-accent">
            KONTAKT
          </div>
          <h1
            className="m-0 max-w-[980px] font-serif text-[32px] font-normal leading-[1.3] md:text-[48px]"
            style={{ textWrap: "pretty" }}
          >
            Har du et projekt, en idé eller står du over for den helt store
            renovering, så tag endelig fat i os og få en uforpligtende snak.
          </h1>
        </div>
      </div>

      <div className="px-6 pt-24 pb-24 md:px-16 md:pt-[110px] md:pb-[120px]" data-reveal>
        <div className="mx-auto max-w-[1232px]">
          <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-[1fr_420px] lg:gap-[110px]">
            <ContactForm heading="Tag kontakt" requiredFields />
            <div className="flex flex-col border-l border-hairline-dark pl-8 md:pl-16">
              <div
                className="mb-4 h-[223px] w-[185px] overflow-hidden bg-hairline bg-cover bg-center bg-no-repeat"
                role="img"
                aria-label="Kimmie Brinch i studiet"
                style={{ backgroundImage: "url('/assets/kimmie_portraet.jpg')" }}
              />
              <h3 className="m-0 mb-1.5 font-serif text-[32px] font-medium text-ink">
                Kimmie Brinch
              </h3>
              <div className="mb-4 font-serif text-[19px] italic text-body">
                Ejer &amp; Indretningsdesigner
              </div>
              <div className="mb-4 flex flex-col gap-4 text-[16px] font-light">
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
              <div className="mt-auto text-[16px] font-light leading-[1.7] text-body">
                Vi holder til i Kolding og arbejder primært i Trekantområdet og
                det øvrige Jylland. Online rådgivning er også en mulighed.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer compact />
    </main>
  );
}
