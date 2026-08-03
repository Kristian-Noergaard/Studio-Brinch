"use client";

import { Children, useRef, useState } from "react";

// Mobile-only horizontal snap carousel: below md the children become
// side-scrollable cards (next card peeks in from the right, indicator bars
// below — no arrows); from md up it renders the usual reveal grid untouched.
export default function MobileCarousel({
  children,
  desktopClassName = "",
  slideClassName = "w-[84%]",
  dark = false,
}: {
  children: React.ReactNode;
  desktopClassName?: string;
  slideClassName?: string;
  dark?: boolean;
}) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slideStep = (el: HTMLDivElement) =>
    el.children.length > 1
      ? (el.children[1] as HTMLElement).offsetLeft -
        (el.children[0] as HTMLElement).offsetLeft
      : 0;

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = slideStep(el);
    if (step <= 0) return;
    setActive(
      Math.max(0, Math.min(slides.length - 1, Math.round(el.scrollLeft / step)))
    );
  };

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: slideStep(el) * i, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className={`sb-carousel reveal-grid no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 md:mx-0 md:grid md:grid-cols-1 md:snap-none md:overflow-visible md:px-0 ${desktopClassName}`}
      >
        {slides.map((child, i) => (
          <div
            key={i}
            className={`flex flex-none snap-start flex-col *:flex-1 md:w-auto ${slideClassName}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="mt-7 flex justify-center gap-1.5 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Gå til kort ${i + 1}`}
            aria-current={i === active}
            onClick={() => scrollTo(i)}
            className="p-1.5"
          >
            <span
              className={`block h-0.5 w-8 transition-colors duration-300 ${
                i === active
                  ? dark
                    ? "bg-cream"
                    : "bg-accent"
                  : dark
                  ? "bg-cream/30"
                  : "bg-accent/25"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
