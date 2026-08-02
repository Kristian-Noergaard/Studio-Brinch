"use client";

import { useRef, useState } from "react";
import { REVIEWS, ReviewCard } from "./ReviewCard";

// Mobile-only: one review at a time with prev/next arrows (+ swipe)
export default function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx((i) => (i + 1) % REVIEWS.length);

  return (
    <div className="grid grid-cols-[36px_1fr_36px] items-center gap-2 sm:hidden">
      <button
        onClick={prev}
        aria-label="Forrige anmeldelse"
        className="flex h-9 w-9 cursor-pointer items-center justify-center border border-ink bg-transparent font-serif text-[18px] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        ←
      </button>
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
        <ReviewCard review={REVIEWS[idx]} />
      </div>
      <button
        onClick={next}
        aria-label="Næste anmeldelse"
        className="flex h-9 w-9 cursor-pointer items-center justify-center border border-ink bg-transparent font-serif text-[18px] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        →
      </button>
    </div>
  );
}
