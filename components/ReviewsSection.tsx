import { REVIEWS, ReviewCard } from "./ReviewCard";
import ReviewsCarousel from "./ReviewsCarousel";

// Extracted from PortfolioSection so the mobile homepage can order it
// independently; desktop renders in the same spot as before.
export default function ReviewsSection() {
  return (
    <div className="pb-24 max-sm:bg-[#EFEBE1] max-sm:pb-16 md:pb-[120px]" data-reveal>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="pt-16 md:pt-[72px]">
          <h2 className="m-0 mb-11 text-center font-serif text-[32px] font-normal text-ink max-sm:hidden md:text-[44px]">
            Hvad vores kunder siger om Studio Brinch
          </h2>
          {/* Mobile: shorter left-aligned italic heading per the mobile design */}
          <h2 className="m-0 mb-8 font-serif text-[27px] font-normal italic leading-[1.35] text-ink sm:hidden">
            Hvad vores kunder siger
          </h2>
          <div className="reveal-grid hidden gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-4">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
}
