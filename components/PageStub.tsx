import Header from "./Header";
import Footer from "./Footer";
import Overline from "./Overline";

// Temporary placeholder for subpages until their designs exist
export default function PageStub({
  overline,
  title,
  children,
}: {
  overline: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="bg-cream text-ink">
      <Header solid />
      <div className="min-h-[60vh] px-6 pt-48 pb-28 md:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Overline label={overline} className="mb-3.5" />
          <h1 className="m-0 mb-6 font-serif text-[38px] font-medium leading-[1.2] text-ink md:text-[52px]">
            {title}
          </h1>
          <p className="m-0 max-w-[680px] font-serif text-[21px] italic text-body">
            Denne side er under udarbejdelse.
          </p>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
