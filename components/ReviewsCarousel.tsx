"use client";

import { useRef, useState } from "react";
import { REVIEWS } from "./ReviewCard";

// Mobile-only: one review at a time — stars, italic quote, then a caption
// row (name in caps, counter + prev/next arrows). Swipe also works.
export default function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx((i) => (i + 1) % REVIEWS.length);
  const r = REVIEWS[idx];

  return (
    <div className="sm:hidden">
      <div
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (dx > 40) prev();
          else if (dx < -40) next();
        }}
      >
        <div className="mb-4 text-[18px] tracking-[3px] text-star">★★★★★</div>
        <p
          className="m-0 font-serif text-[18px] font-light italic leading-[1.65] text-ink"
          style={{ textWrap: "pretty" }}
        >
          “{r.text}”
        </p>
        <a
          href="https://www.google.com/search?q=Studio+Brinch+Kolding+anmeldelser"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-block w-fit text-[16px] font-medium text-accent underline underline-offset-4"
        >
          Læs mere
        </a>
      </div>
      <div className="mt-[18px] flex items-baseline justify-between gap-4 border-t border-hairline pt-3.5">
        <div className="flex-1 font-sans text-[12px] tracking-[2px] text-ink">
          {r.name.toUpperCase()}
        </div>
        <div className="flex flex-none items-baseline gap-3.5 font-sans text-[13px] text-body">
          <span className="whitespace-nowrap">
            {idx + 1} / {REVIEWS.length}
          </span>
          <button
            onClick={prev}
            aria-label="Forrige anmeldelse"
            className="cursor-pointer bg-transparent px-1.5 py-1 text-[16px] text-current"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Næste anmeldelse"
            className="cursor-pointer bg-transparent px-1.5 py-1 text-[16px] text-current"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
