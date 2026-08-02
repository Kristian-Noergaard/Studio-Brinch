"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDES = [
  "/assets/kimmie_04.jpg",
  "/assets/kimmie_05.jpg",
  "/assets/kimmie_06.jpg",
];

const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % SLIDES.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(t);
  }, []);

  // Heading block fades and drifts up as the page scrolls
  useEffect(() => {
    const onScroll = () => {
      const el = fadeRef.current;
      if (!el) return;
      const p = Math.min(window.scrollY / (window.innerHeight * 0.7), 1);
      el.style.opacity = (1 - p * 0.95).toFixed(3);
      el.style.translate = `0 ${(-p * 40).toFixed(1)}px`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            "linear-gradient(90deg, rgba(20,18,14,0.55) 0%, rgba(20,18,14,0.15) 55%, rgba(20,18,14,0.05) 100%), linear-gradient(180deg, rgba(20,18,14,0.25), transparent 30%), linear-gradient(0deg, rgba(20,18,14,0.55), transparent 45%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute left-6 right-6 bottom-44 flex max-w-[820px] flex-col items-start gap-[30px] text-left text-cream md:left-16 md:right-auto md:bottom-24"
      >
        <div className="-mb-3.5 font-sans text-[13px] md:text-[14px] tracking-[5px]">
          INDRETNINGSARKITEKTUR &amp; INTERIØRDESIGN
        </div>
        <h1
          className="m-0 font-serif italic font-normal text-[34px] md:text-[48px] leading-[1.15]"
          style={{ textWrap: "pretty" }}
        >
          Indretningsarkitekt og interiør design med speciale i renovering og
          nybyg
        </h1>
      </div>
      <Link
        href="/projekter"
        className="absolute left-6 bottom-24 md:left-auto md:right-16 md:bottom-24 border border-cream px-10 py-4 font-sans text-[14px] tracking-[3px] text-cream transition-colors hover:bg-cream/15"
      >
        SE VORES PROJEKTER
      </Link>
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
