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
      <main className="pt-16 md:pt-20" role="main">
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Green Herbalz — 100% Homemade Botanical Skincare" />
          <meta itemProp="description" content="Discover premium homemade herbal skincare by Green Herbalz. Handcrafted botanical soaps, lip balms, lipsticks, henna cones, and rosemary oil." />
          <meta itemProp="dateModified" content="2026-04-26" />
          <meta itemProp="author" content="Green Herbalz" />
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
        </article>
      </main>
      <Footer />
    </>
  );
}
