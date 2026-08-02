"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "./SocialIcons";

const NAV_LINKS = [
  { label: "PORTFOLIO", href: "/projekter" },
  { label: "SERVICES", href: "/ydelser" },
  { label: "INSPIRATION", href: "/inspiration" },
  { label: "OM OS", href: "/om-os" },
  { label: "KONTAKT", href: "/kontakt" },
];

type Variant = "light" | "dark";
// Open-menu panel color: matches the surface the logo sits on.
// "dark" = over-photo pages, "cream"/"beige" = light pages, "band" = article brown.
type MenuBg = "dark" | "cream" | "beige" | "band";

const MENU_BG_CLASS: Record<MenuBg, string> = {
  dark: "bg-olive",
  cream: "bg-cream",
  beige: "bg-beige",
  band: "",
};

// Non-sticky transparent nav: floats over the hero and scrolls away.
// variant "light" = white logo / cream links (dark heroes);
// variant "dark"  = brown logo / dark links (light pages).
// mobileVariant overrides the color scheme below md.
export default function Header({
  variant = "light",
  mobileVariant,
  menuBg,
}: {
  variant?: Variant;
  mobileVariant?: Variant;
  menuBg?: MenuBg;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mv = mobileVariant ?? variant;
  const light = variant === "light";
  const mobileLight = mv === "light";
  const bg: MenuBg = menuBg ?? (mobileLight ? "dark" : "cream");
  const menuDark = bg === "dark" || bg === "band";
  const colorClasses = `${mobileLight ? "text-cream" : "text-ink"} ${
    light ? "md:text-cream" : "md:text-ink"
  }`;
  const burgerClasses = menuOpen
    ? menuDark
      ? "text-cream"
      : "text-ink"
    : colorClasses;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 ${
        light ? "py-8 md:py-11" : "py-8 md:py-[30px]"
      }`}
    >
      <Link href="/" className="relative z-10 block h-4 md:h-[22px]">
        <img
          src={
            (menuOpen ? menuDark : mobileLight)
              ? "/assets/logo_white.png"
              : "/assets/logo_brown.png"
          }
          alt="Studio Brinch"
          className="block h-4 md:hidden"
        />
        <img
          src={light ? "/assets/logo_white.png" : "/assets/logo_brown.png"}
          alt="Studio Brinch"
          className="hidden h-[22px] md:block"
        />
      </Link>

      <nav
        className={`hidden md:flex gap-10 font-serif text-[19px] tracking-[1.5px] ${colorClasses}`}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`text-current transition-opacity hover:opacity-70 ${
              isActive(l.href) ? "border-b border-current pb-1" : ""
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`md:hidden relative z-10 flex flex-col gap-[6px] p-2 ${burgerClasses}`}
        aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="block w-6 h-px bg-current" />
        ))}
      </button>

      {menuOpen && (
        <div
          className={`fixed inset-0 flex flex-col md:hidden ${MENU_BG_CLASS[bg]}`}
          style={bg === "band" ? { background: "#5E3F36" } : undefined}
        >
          <nav
            className={`flex flex-1 flex-col items-center justify-center gap-9 font-serif text-[21px] tracking-[1.5px] ${
              menuDark ? "text-cream" : "text-ink"
            }`}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-current ${
                  isActive(l.href) ? "border-b border-current pb-1" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 pb-10">
            <SocialIcons
              className={
                menuDark
                  ? "text-cream [&_a:hover]:text-rose"
                  : "text-ink [&_a:hover]:text-accent"
              }
            />
          </div>
        </div>
      )}
    </header>
  );
}
