import Header from "@/components/Header";
import PageEffects from "@/components/PageEffects";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import StepsSection from "@/components/StepsSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <PageEffects />
      <Header />
      <Hero />
      <ProcessSection />
      <PortfolioSection />
      <StepsSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
