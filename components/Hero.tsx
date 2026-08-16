"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  "/assets/kimmie_04.webp",
  "/assets/kimmie_05.webp",
  "/assets/kimmie_06.webp",
];

// Mobile shows its own portrait-format slides (same count so the shared
// index/indicators stay in sync)
const MOBILE_SLIDES = [
  "/assets/hero_mobil_1.webp",
  "/assets/hero_mobil_2.webp",
  "/assets/hero_mobil_3.jpg",
];

const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % SLIDES.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-svh min-h-[620px] overflow-hidden bg-olive md:h-screen md:min-h-[700px]">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 hidden bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out md:block"
            style={{ backgroundImage: `url("${src}")`, opacity: i === idx ? 1 : 0 }}
          />
        ))}
        {MOBILE_SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out md:hidden"
            style={{ backgroundImage: `url("${src}")`, opacity: i === idx ? 1 : 0 }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,18,14,0.55) 0%, rgba(20,18,14,0.15) 55%, rgba(20,18,14,0.05) 100%), linear-gradient(180deg, rgba(20,18,14,0.25), transparent 30%), linear-gradient(0deg, rgba(20,18,14,0.55), transparent 45%)",
        }}
      />
      <div className="absolute left-6 right-6 bottom-[72px] flex max-w-[820px] flex-col items-start gap-[30px] max-md:gap-[22px] text-left text-cream md:left-16 md:right-auto md:bottom-24">
        <div
          className="om-loadfade -mb-3.5 max-md:mb-0 font-sans text-[12px] tracking-[4px] md:text-[14px] md:tracking-[5px]"
          style={{ "--fxd": "0.1s" } as React.CSSProperties}
        >
          INDRETNINGSARKITEKTUR &amp; INTERIØRDESIGN
        </div>
        <h1
          className="om-loadfade m-0 font-serif italic font-normal text-[34px] leading-[1.3] md:text-[48px] md:leading-[1.15]"
          style={{ textWrap: "pretty", "--fxd": "0.3s" } as React.CSSProperties}
        >
          Indretningsarkitekt og interiør design med speciale i renovering og
          nybyg
        </h1>
        <Link
          href="/projekter"
          className="om-loadfade border border-cream/75 px-[30px] py-3.5 font-sans text-[12px] tracking-[3px] text-cream transition-colors hover:bg-cream/15 md:hidden"
          style={{ "--fxd": "0.55s" } as React.CSSProperties}
        >
          SE VORES PROJEKTER
        </Link>
      </div>
      <Link
        href="/projekter"
        className="om-loadfade absolute right-16 bottom-24 hidden border border-cream px-10 py-4 font-sans text-[14px] tracking-[3px] text-cream transition-colors hover:bg-cream/15 md:block"
        style={{ "--fxd": "0.55s" } as React.CSSProperties}
      >
        SE VORES PROJEKTER
      </Link>
      <div
        className="om-loadfade absolute bottom-7 left-0 right-0 flex justify-center gap-2.5 md:bottom-9"
        style={{ "--fxd": "0.75s" } as React.CSSProperties}
      >
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className="h-0.5 w-8 transition-colors duration-600"
            style={{
              background: i === idx ? "#F7F5EF" : "rgba(247,245,239,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
