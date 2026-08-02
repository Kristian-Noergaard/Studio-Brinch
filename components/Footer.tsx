import Link from "next/link";
import SocialIcons, { SOCIAL_LINKS } from "./SocialIcons";

// The design bundle's insta1-6.webp are empty-slot placeholder graphics —
// use real project photos as stand-ins until actual Instagram posts are wired
const INSTA_TILES = [
  "/assets/box_koekken.png",
  "/assets/step_sofa.png",
  "/assets/proces_bad1.png",
  "/assets/step_island.png",
  "/assets/proces_sovevaerelse.png",
  "/assets/box_stue.png",
];

const MENU_LINKS = [
  { label: "Hjem", href: "/" },
  { label: "Portfolio", href: "/projekter" },
  { label: "Services", href: "/ydelser" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
];

const SERVICE_LINKS = [
  { label: "Om Studio Brinch", href: "/om-os" },
  { label: "Services", href: "/ydelser" },
  { label: "Privatlivspolitik", href: "/privatlivspolitik" },
  { label: "Handelsbetingelser", href: "#" },
  { label: "Hjem", href: "/" },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="w-fit text-cream underline underline-offset-4 hover:text-rose"
    >
      {label}
    </Link>
  );
}

export default function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer
      className={`bg-brown px-6 pb-16 md:px-16 md:pb-[70px] ${
        compact ? "pt-20 md:pt-[90px]" : "pt-24 md:pt-[110px]"
      }`}
    >
      <div className="mx-auto max-w-[1320px]">
        {!compact && (
          <>
        <h2 className="m-0 mb-16 font-serif text-[34px] font-normal leading-[1.35] text-cream md:ml-[70px] md:text-[46px]">
          <span className="om-w1">Follow</span>
          <br />
          <span className="om-w2">
            <a
              href={SOCIAL_LINKS.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-rose"
            >
              @studiobrinch
            </a>
          </span>
        </h2>
        <div className="reveal-grid mx-auto mb-24 grid max-w-[1180px] grid-cols-3 gap-3 md:mb-[130px] md:grid-cols-6 md:gap-[22px]">
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
          </>
        )}
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-14 md:flex-row md:justify-between md:gap-[60px]">
          <div>
            <img
              src="/assets/logo_white.png"
              alt="Studio Brinch"
              className="mt-2 mb-10 block h-5"
            />
            <SocialIcons className="text-cream [&_a:hover]:text-rose" />
          </div>
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-14 md:flex md:w-auto md:gap-[90px]">
            <div className="order-1">
              <h3 className="m-0 mb-5 font-serif text-[28px] font-medium text-cream">
                Menu
              </h3>
              <div className="flex flex-col gap-4 text-[16px] font-light">
                {MENU_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </div>
            </div>
            <div className="order-3 md:order-none">
              <h3 className="m-0 mb-5 font-serif text-[28px] font-medium text-cream">
                Kundeservice
              </h3>
              <div className="flex flex-col gap-4 text-[16px] font-light">
                {SERVICE_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </div>
            </div>
            <div className="order-2 min-w-0 md:order-none">
              <h3 className="m-0 mb-5 font-serif text-[28px] font-medium text-cream">
                Kontakt
              </h3>
              <div className="flex flex-col gap-3.5 text-[16px] font-light">
                <a
                  href="mailto:Kimmie@studio-brinch.dk"
                  className="w-fit break-all text-cream underline underline-offset-4 hover:text-rose"
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
      </div>
    </footer>
  );
}
