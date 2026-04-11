import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import AILabSection from "@/components/AILabSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <DepartmentsSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <AILabSection />
        <AboutSection />
        <ContactSection />

      </main>
      <Footer />
    </>
  );
}
