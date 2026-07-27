"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  "/assets/kimmie_04.jpg",
  "/assets/kimmie_05.jpg",
  "/assets/kimmie_06.jpg",
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
    <div className="relative h-screen min-h-[700px] overflow-hidden bg-olive">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out"
            style={{ backgroundImage: `url("${src}")`, opacity: i === idx ? 1 : 0 }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,14,0.35) 0%, rgba(20,18,14,0.05) 35%, rgba(20,18,14,0.30) 100%)",
        }}
      />
      <div className="absolute left-0 right-0 bottom-24 flex flex-col items-center gap-7 px-6 text-center text-cream">
        <div className="-mb-3.5 text-[13px] md:text-[15px] tracking-[5px]">
          INDRETNINGSARKITEKTUR &amp; INTERIØRDESIGN
        </div>
        <h1
          className="m-0 max-w-[1000px] font-serif italic font-normal text-[36px] md:text-[58px] leading-[1.2]"
          style={{ textWrap: "pretty" }}
        >
          Indretningsarkitekt og interiør design med speciale i renovering og
          nybyg
        </h1>
        <Link
          href="/projekter"
          className="border border-cream/70 px-10 py-4 text-[14px] tracking-[3px] text-cream transition-colors hover:bg-cream/15 hover:text-white"
        >
          SE VORES PROJEKTER
        </Link>
      </div>
      <div className="absolute bottom-9 left-0 right-0 flex justify-center gap-2.5">
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
