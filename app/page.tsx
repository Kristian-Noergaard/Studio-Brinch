import Header from "@/components/Header";
import PageEffects from "@/components/PageEffects";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import StepsSection from "@/components/StepsSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// DOM order = desktop order. On mobile the page becomes a flex column and
// the order-* wrappers tell the story proof-first:
// hero → portfolio → services → reviews → proces → forløbet → faq → kontakt.
export default function Home() {
  return (
    <main className="bg-cream text-ink max-md:flex max-md:flex-col">
      <PageEffects />
      <Header />
      <div className="max-md:order-1">
        <Hero />
      </div>
      <div className="max-md:order-5">
        <ProcessSection />
      </div>
      <div className="max-md:order-2">
        <PortfolioSection />
      </div>
      <div className="max-md:order-4">
        <ReviewsSection />
      </div>
      <div className="max-md:order-6">
        <StepsSection />
      </div>
      <div className="max-md:order-3">
        <ServicesSection />
      </div>
      <div className="max-md:order-7">
        <FaqSection />
      </div>
      <div className="max-md:order-8">
        <ContactSection />
      </div>
      <div className="max-md:order-9">
        <Footer />
      </div>
    </main>
  );
}
