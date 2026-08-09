"use client";

import { useState } from "react";

export default function BeforeAfterSlider({
  before,
  after,
  label,
  className = "h-[200px] md:h-[280px]",
}: {
  before: string;
  after: string;
  label: string;
  className?: string;
}) {
  const [pct, setPct] = useState(17);

  const onMove = (clientX: number, el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    setPct(Math.max(0, Math.min(100, Math.round(((clientX - r.left) / r.width) * 100))));
  };

  return (
    <div
      className={`relative overflow-hidden cursor-col-resize ${className}`}
      role="img"
      aria-label={label}
      onMouseMove={(e) => onMove(e.clientX, e.currentTarget)}
      onTouchMove={(e) => onMove(e.touches[0].clientX, e.currentTarget)}
    >
      <div
        className="absolute inset-0 bg-beige bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${before}")`, backgroundPosition: "center 55%" }}
      />
      <div
        className="absolute inset-0 bg-beige bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${after}")`,
          backgroundPosition: "center 55%",
          clipPath: `inset(0 ${100 - pct}% 0 0)`,
        }}
      />
      <div
        className="absolute top-0 bottom-0 w-[5px] -translate-x-[2.5px]"
        style={{
          left: `${pct}%`,
          background: "rgba(253,252,249,0.95)",
          boxShadow: "0 0 6px rgba(0,0,0,0.25)",
        }}
      />
      <div
        className="absolute top-3.5 left-1/2 -translate-x-1/2 rounded-[3px] px-3 py-1 font-sans text-[11px] tracking-[2px] text-ink"
        style={{ background: "rgba(253,252,249,0.85)" }}
      >
        {pct < 50 ? "FØR" : "EFTER"}
      </div>
    </div>
  );
}
