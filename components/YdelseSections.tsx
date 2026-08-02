import Link from "next/link";

export function YdelseHero({
  image,
  imageLabel,
  title,
  subtitle,
}: {
  image: string;
  imageLabel: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative h-[62vh] min-h-[480px] overflow-hidden bg-hairline">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={imageLabel}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,18,14,0.55), transparent 55%), linear-gradient(180deg, rgba(20,18,14,0.35), transparent 30%)",
        }}
      />
      <h1 className="om-herotitle pointer-events-none absolute inset-x-0 bottom-10 m-0 px-6 text-left font-serif text-[36px] font-normal leading-[1.2] text-cream md:bottom-14 md:px-10 md:text-center md:text-[clamp(24px,3vw,60px)] md:leading-[1.25] md:whitespace-nowrap">
        {title} <span className="hidden text-rose md:inline">|</span>{" "}
        <span className="mt-1.5 block text-[24px] italic md:mt-0 md:inline md:text-[1em]">
          {subtitle}
        </span>
      </h1>
    </div>
  );
}

export function YdelseIntro({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 pt-24 pb-10 md:px-16 md:pt-[120px]" data-reveal>
      <p
        className="mx-auto max-w-[1000px] font-serif text-[26px] leading-[1.45] text-ink md:text-[36px]"
        style={{ textWrap: "pretty" }}
      >
        {children}
      </p>
    </div>
  );
}

export function TripleSection({
  title,
  lead,
  items,
  ghost,
  grey = false,
  last = false,
}: {
  title: string;
  lead: string;
  items: { title: string; body: string }[];
  ghost?: string;
  grey?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden px-6 pt-16 md:px-16 md:pt-[70px] ${
        last ? "pb-[90px]" : "pb-16"
      } ${grey ? "bg-steps-grey" : ""}`}
      data-reveal
    >
      {ghost && (
        <div
          className="pointer-events-none absolute left-[70px] top-5 hidden select-none font-serif text-[460px] italic leading-[0.8] text-accent md:block"
          style={{ opacity: 0.08 }}
          aria-hidden
        >
          {ghost}
        </div>
      )}
      <div className="relative mx-auto max-w-[1100px]">
        <h2 className="m-0 py-2.5 font-serif text-[32px] font-medium leading-[1.05] md:text-[44px]">
          {ghost && (
            <span className="italic text-accent md:hidden">{ghost}. </span>
          )}
          {title}
        </h2>
        <p
          className="m-0 mb-7 max-w-[560px] text-[17px] font-light leading-[1.8] text-body"
          style={{ textWrap: "pretty" }}
        >
          {lead}
        </p>
        <div className="reveal-grid grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={
                i === 0
                  ? "pb-8 md:pb-0 md:pr-10"
                  : "border-t border-hairline-dark pt-8 md:border-t-0 md:border-l md:px-10 md:pt-0"
              }
            >
              <h3 className="m-0 mb-3 font-serif text-[26px] font-medium">
                {item.title}
              </h3>
              <p className="m-0 text-[16px] font-light leading-[1.8] text-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function YdelseCta({ price }: { price?: string }) {
  return (
    <div className="bg-beige px-6 py-14 text-center md:px-16 md:py-[120px]" data-reveal>
      <h2 className="m-0 mb-5 font-serif text-[32px] font-normal leading-[1.3] md:text-[44px]">
        Har du et projekt, jeg kan hjælpe dig med?
      </h2>
      {price && (
        <p className="m-0 mb-9 font-serif text-[20px] italic text-body">
          {price}
        </p>
      )}
      <Link
        href="/kontakt"
        className="inline-block border border-ink px-10 py-4 font-sans text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        BOOK EN SAMTALE
      </Link>
      <div className="mt-7">
        <Link
          href="/ydelser"
          className="border-b border-ink pb-1 font-sans text-[13px] tracking-[3px] text-ink"
        >
          ALLE YDELSER
        </Link>
      </div>
    </div>
  );
}
