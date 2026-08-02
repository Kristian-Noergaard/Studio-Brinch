"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "PORTFOLIO", href: "/projekter" },
  { label: "SERVICES", href: "/ydelser" },
  { label: "INSPIRATION", href: "/inspiration" },
  { label: "OM OS", href: "/om-os" },
  { label: "KONTAKT", href: "/kontakt" },
];

// Non-sticky transparent nav: floats over the hero and scrolls away.
// variant "light" = white logo / cream links (dark heroes);
// variant "dark"  = brown logo / dark links (light pages).
// mobileVariant overrides the color scheme below md (for pages whose
// mobile layout starts on a light background while desktop starts on an image).
export default function Header({
  variant = "light",
  mobileVariant,
}: {
  variant?: "light" | "dark";
  mobileVariant?: "light" | "dark";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mv = mobileVariant ?? variant;
  const light = variant === "light";
  const mobileLight = mv === "light";
  // text-current based coloring: mobile color below md, desktop color from md up
  const colorClasses = `${mobileLight ? "text-cream" : "text-ink"} ${
    light ? "md:text-cream" : "md:text-ink"
  }`;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 ${
        light ? "py-8 md:py-11" : "py-8 md:py-[30px]"
      }`}
    >
      <Link href="/" className="relative block h-4 md:h-[22px]">
        <img
          src={mobileLight ? "/assets/logo_white.png" : "/assets/logo_brown.png"}
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
        className={`md:hidden flex flex-col gap-[6px] p-2 ${colorClasses}`}
        aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="block w-6 h-px bg-current" />
        ))}
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 md:hidden flex flex-col items-center gap-8 py-12 bg-beige font-serif text-[19px] tracking-[1.5px]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-olive"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
