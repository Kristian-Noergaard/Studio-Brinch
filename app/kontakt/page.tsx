import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = { title: "Kontakt — Studio Brinch" };

export default function KontaktPage() {
  return (
    <main className="bg-cream text-ink">
      <Header solid />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
