"use client";

import { useEffect } from "react";

// Mounts once per page. The reveal/write-on system is CSS scroll-driven
// (animation-timeline: view() in globals.css); this component adds:
// 1. word-by-word scrubbed write-on for paragraphs marked .om-words
// 2. an IntersectionObserver fallback cascade when view() is unsupported
// 3. damped parallax drift on .om-parallax image layers
export default function PageEffects() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsView =
      window.CSS && CSS.supports && CSS.supports("animation-timeline: view()");

    if (supportsView && !reduced) {
      // Word-by-word scrubbed write-on (reading order across wrapped lines)
      document.querySelectorAll<HTMLElement>("p.om-words").forEach((p) => {
        p.classList.remove("om-v3", "om-words");
        const wrapWords = (node: Node) => {
          if (node.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (node.textContent ?? "").split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(part));
                return;
              }
              const s = document.createElement("span");
              s.textContent = part;
              s.className = "om-word";
              frag.appendChild(s);
            });
            node.parentNode?.replaceChild(frag, node);
          } else if (node.nodeType === 1) {
            [...node.childNodes].forEach(wrapWords);
          }
        };
        [...p.childNodes].forEach(wrapWords);
        const words = p.querySelectorAll<HTMLElement>(".om-word");
        const n = words.length,
          start = 30,
          span = 36;
        words.forEach((w, i) => {
          const a = start + (span * i) / n;
          const b = Math.min(start + span, a + (span / n) * 2.5);
          w.style.cssText =
            "display:inline-block; animation:om-write 1s linear both; animation-timeline:view(); animation-range:cover " +
            a.toFixed(2) +
            "% cover " +
            b.toFixed(2) +
            "%;";
        });
      });

      // Detail-page variant: per-paragraph offset, entry-based ranges
      document
        .querySelectorAll<HTMLElement>("p.om-words-entry")
        .forEach((p, pi) => {
          p.classList.remove("om-v3", "om-words-entry");
          const wrapWords = (node: Node) => {
            if (node.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (node.textContent ?? "").split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                  frag.appendChild(document.createTextNode(part));
                  return;
                }
                const s = document.createElement("span");
                s.textContent = part;
                s.className = "om-word";
                frag.appendChild(s);
              });
              node.parentNode?.replaceChild(frag, node);
            } else if (node.nodeType === 1) {
              [...node.childNodes].forEach(wrapWords);
            }
          };
          [...p.childNodes].forEach(wrapWords);
          const words = p.querySelectorAll<HTMLElement>(".om-word");
          const n = words.length,
            start = 25 + pi * 30,
            span = 28;
          words.forEach((w, i) => {
            const a = start + (span * i) / n;
            const b = Math.min(start + span, a + (span / n) * 2.5);
            w.style.cssText =
              "display:inline-block; animation:om-write 1s linear both; animation-timeline:view(); animation-range:entry " +
              a.toFixed(2) +
              "% entry " +
              Math.min(b, 99).toFixed(2) +
              "%;";
          });
        });
    }

    let fxIo: IntersectionObserver | undefined;
    if (!supportsView && !reduced) {
      // Fallback: two-way cascade on grid items and step cards
      const items: [Element, number][] = [];
      document
        .querySelectorAll("[data-reveal] .reveal-grid")
        .forEach((grid) => {
          if (grid.closest("form")) return;
          [...grid.children].forEach((el, i) => items.push([el, i]));
        });
      document
        .querySelectorAll(".step-card")
        .forEach((el, i) => items.push([el, i]));
      for (const [el, i] of items) {
        el.classList.add("om-fx");
        (el as HTMLElement).style.transitionDelay =
          Math.min(i, 4) * 0.12 + "s";
      }
      fxIo = new IntersectionObserver(
        (entries) => {
          for (const e of entries)
            e.target.classList.toggle("om-vis", e.isIntersecting);
        },
        { rootMargin: "0px 0px -22% 0px" }
      );
      items.forEach(([el]) => fxIo!.observe(el));
    }

    let raf = 0;
    if (!reduced) {
      const els = [...document.querySelectorAll<HTMLElement>(".om-parallax")].map(
        (el) => ({ el, cur: 0 })
      );
      const tick = () => {
        const vh = window.innerHeight;
        for (const p of els) {
          const parent = p.el.parentElement;
          if (!parent) continue;
          const r = parent.getBoundingClientRect();
          if (r.bottom < -100 || r.top > vh + 100) continue;
          const target = (r.top + r.height / 2 - vh / 2) * 0.07;
          p.cur += (target - p.cur) * 0.12;
          p.el.style.translate = `0 ${p.cur.toFixed(2)}px`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      fxIo?.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
