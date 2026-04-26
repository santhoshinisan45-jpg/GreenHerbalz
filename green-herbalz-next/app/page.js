import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ScrollReveal from "@/components/ScrollReveal";
import GoogleTranslate from "@/components/GoogleTranslate";

// Lazy load below-fold components to reduce initial JS bundle
const ProductGrid = dynamic(() => import("@/components/ProductGrid"));
const SoapShowcase = dynamic(() => import("@/components/SoapShowcase"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const SoapCustomizer = dynamic(() => import("@/components/SoapCustomizer"));
const BuySection = dynamic(() => import("@/components/BuySection"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

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
