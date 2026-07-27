"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "PROJEKTER", href: "/projekter" },
  { label: "YDELSER", href: "/ydelser" },
  { label: "OM OS", href: "/om-os" },
  { label: "KONTAKT", href: "/kontakt" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const frosted = scrolled || menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-400"
      style={{
        paddingTop: frosted ? 24 : 44,
        paddingBottom: frosted ? 24 : 44,
        background: frosted ? "rgba(247,245,239,0.45)" : "transparent",
        backdropFilter: frosted ? "blur(14px)" : "none",
        WebkitBackdropFilter: frosted ? "blur(14px)" : "none",
      }}
    >
      <Link href="/" className="relative block h-[22px]">
        {/* Two stacked logos crossfade white→brown on scroll */}
        <img
          src="/assets/logo_white.png"
          alt="Studio Brinch"
          className="block h-[22px] transition-opacity duration-400"
          style={{ opacity: frosted ? 0 : 1 }}
        />
        <img
          src="/assets/logo_brown.png"
          alt=""
          className="absolute top-0 left-0 block h-[22px] transition-opacity duration-400"
          style={{ opacity: frosted ? 1 : 0 }}
        />
      </Link>

      <nav className="hidden md:flex gap-11 text-[14px] tracking-[3px]">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="transition-colors duration-400 hover:opacity-70"
            style={{ color: frosted ? "#3A382F" : "#F7F5EF" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[6px] p-2"
        aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-6 h-px transition-colors duration-400"
            style={{ background: frosted ? "#3A382F" : "#F7F5EF" }}
          />
        ))}
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 md:hidden flex flex-col items-center gap-8 py-12 bg-cream/95 backdrop-blur-md text-[14px] tracking-[3px]">
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
