"use client";

import { useEffect } from "react";

// Mounts once per page. One-shot fade reveal matching the studio's live
// Squarespace site (fade / 1.5s / ease): section blocks, grid items, step
// cards and FAQ items still below the viewport get .om-fx (opacity 0);
// the first time they scroll into view .om-vis fades them in. Nothing
// reverses or re-plays on the way back up, and content already on screen
// at load stays static.
export default function PageEffects() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const targets = new Set<Element>();
    document.querySelectorAll("[data-reveal]").forEach((sec) => {
      for (const el of sec.children) targets.add(el);
    });
    const isMobile = matchMedia("(max-width: 767px)").matches;
    document.querySelectorAll(".reveal-grid").forEach((grid) => {
      if (grid.closest("form")) return;
      // mobile carousels scroll horizontally — the track animates as a
      // whole, not the cards inside it
      if (isMobile && grid.classList.contains("sb-carousel")) return;
      for (const el of grid.children) targets.add(el);
    });
    document
      .querySelectorAll(".step-card, .faq-item")
      .forEach((el) => targets.add(el));

    // Proces/services cards and forløbet steps keep the original staggered
    // fade-and-rise cascade (one-shot); everything else is a plain fade.
    // The card grids also trigger later — well into the viewport — so the
    // cascade clearly happens in front of you.
    const rise = new Set<Element>();
    const late = new Set<Element>();
    document
      .querySelectorAll(
        '[data-sec="proces"] .reveal-grid, [data-sec="services"] .reveal-grid'
      )
      .forEach((grid) => {
        if (isMobile && grid.classList.contains("sb-carousel")) {
          rise.add(grid);
          late.add(grid);
          targets.add(grid);
          return;
        }
        [...grid.children].forEach((el, i) => {
          rise.add(el);
          late.add(el);
          (el as HTMLElement).style.setProperty(
            "--fxd",
            Math.min(i, 4) * 0.15 + "s"
          );
        });
      });
    document.querySelectorAll(".step-card").forEach((el) => {
      rise.add(el);
      const siblings = [...(el.parentElement?.children ?? [])].filter((s) =>
        s.classList.contains("step-card")
      );
      (el as HTMLElement).style.setProperty(
        "--fxd",
        Math.min(siblings.indexOf(el), 4) * 0.15 + "s"
      );
    });

    // Content already on screen at load stays static; the rest fades in on
    // first scroll into view. Content too close to the page bottom to ever
    // clear the trigger line fades as soon as it appears instead.
    const vh = window.innerHeight;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
    const normal: Element[] = [];
    const lateOnes: Element[] = [];
    const nearBottom: Element[] = [];
    for (const el of targets) {
      if (el.closest("form")) continue;
      const top = el.getBoundingClientRect().top;
      if (top < vh) continue;
      el.classList.add(rise.has(el) ? "om-fx-rise" : "om-fx");
      const topAtMaxScroll = top + window.scrollY - maxScroll;
      if (topAtMaxScroll >= vh * 0.65) nearBottom.push(el);
      else if (late.has(el)) lateOnes.push(el);
      else normal.push(el);
    }
    const onEnter: IntersectionObserverCallback = (entries, io) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("om-vis");
        io.unobserve(e.target);
      }
    };
    const io = new IntersectionObserver(onEnter, {
      rootMargin: "0px 0px -15% 0px",
    });
    const ioLate = new IntersectionObserver(onEnter, {
      rootMargin: "0px 0px -32% 0px",
    });
    const ioBottom = new IntersectionObserver(onEnter, { rootMargin: "0px" });
    normal.forEach((el) => io.observe(el));
    lateOnes.forEach((el) => ioLate.observe(el));
    nearBottom.forEach((el) => ioBottom.observe(el));

    return () => {
      io.disconnect();
      ioLate.disconnect();
      ioBottom.disconnect();
    };
  }, []);

  return null;
}
