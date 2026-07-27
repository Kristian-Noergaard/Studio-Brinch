import Link from "next/link";
import SocialIcons, { SOCIAL_LINKS } from "./SocialIcons";

// Static stand-ins until a real Instagram feed is wired up
const INSTA_TILES = [
  "/assets/box_koekken.png",
  "/assets/step_sofa.png",
  "/assets/proces_bad1.png",
  "/assets/step_island.png",
  "/assets/proces_sovevaerelse.png",
  "/assets/box_stue.png",
];

const SERVICE_LINKS = [
  { label: "Om Studio Brinch", href: "/om-os" },
  { label: "Services", href: "/ydelser" },
  { label: "Privatlivspolitik", href: "/privatlivspolitik" },
  { label: "Hjem", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-brown px-6 pt-24 pb-16 md:px-16 md:pt-[110px] md:pb-[70px]">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="m-0 mb-16 font-serif text-[34px] font-normal leading-[1.35] text-cream md:text-[46px]">
          Follow
          <br />
          <a
            href={SOCIAL_LINKS.Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-rose"
          >
            @studiobrinch
          </a>
        </h2>
        <div className="mx-auto mb-24 grid max-w-[1180px] grid-cols-3 gap-3 md:mb-[130px] md:grid-cols-6 md:gap-[22px]">
          {INSTA_TILES.map((src, i) => (
            <a
              key={src}
              href={SOCIAL_LINKS.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram-opslag ${i + 1}`}
              className="block aspect-square overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-[60px]">
          <div>
            <img
              src="/assets/logo_white.png"
              alt="Studio Brinch"
              className="mt-2 mb-10 block h-5"
            />
            <SocialIcons className="text-cream [&_a:hover]:text-rose" />
          </div>
          <div>
            <h3 className="m-0 mb-[34px] font-serif text-[28px] font-medium text-cream">
              Kundeservice
            </h3>
            <div className="flex flex-col gap-4 text-[16px] font-light">
              {SERVICE_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="w-fit text-cream underline underline-offset-4 hover:text-rose"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-[34px] font-serif text-[28px] font-medium text-cream">
              Kontakt
            </h3>
            <div className="flex flex-col gap-3.5 text-[16px] font-light">
              <a
                href="mailto:Kimmie@studio-brinch.dk"
                className="w-fit text-cream underline underline-offset-4 hover:text-rose"
              >
                Kimmie@studio-brinch.dk
              </a>
              <a
                href="tel:+4541866431"
                className="w-fit text-cream underline underline-offset-4 hover:text-rose"
              >
                +45 41 86 64 31
              </a>
              <div className="text-cream">CVR: 44717077</div>
              <div className="mt-[22px] text-cream/65">
                © 2026 Studio Brinch
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
