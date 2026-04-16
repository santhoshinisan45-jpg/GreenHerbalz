import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductGrid from "@/components/ProductGrid";
import SoapShowcase from "@/components/SoapShowcase";
import AboutSection from "@/components/AboutSection";
import SoapCustomizer from "@/components/SoapCustomizer";
import BuySection from "@/components/BuySection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoogleTranslate from "@/components/GoogleTranslate";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <GoogleTranslate />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <MarqueeBanner />
        <ProductGrid />
        <SoapShowcase />
        <AboutSection />
        <SoapCustomizer />
        <BuySection />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
