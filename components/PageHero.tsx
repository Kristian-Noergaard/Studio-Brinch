// Centered cream page hero used on listing pages (Projekter, Ydelser, …)
export default function PageHero({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-cream px-6 pt-40 pb-20 text-center md:px-16 md:pt-[206px] md:pb-[118px]">
      <div className="om-herotitle">
        <div className="mb-[30px] font-sans text-[14px] tracking-[5px] text-accent">
          {kicker}
        </div>
        <h1
          className="mx-auto mb-11 max-w-[820px] font-serif text-[44px] italic font-normal leading-[1.12] text-ink md:text-[74px]"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
