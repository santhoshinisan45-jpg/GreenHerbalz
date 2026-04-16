"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          const offset = window.scrollY * 0.25;
          const video = sectionRef.current.querySelector("video");
          if (video) video.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] md:min-h-[921px] flex flex-col md:flex-row items-center overflow-hidden"
    >
      <div className="w-full md:w-1/2 p-8 md:p-20 z-10 reveal-left">
        <h1 className="font-headline text-5xl md:text-8xl leading-none text-primary italic -tracking-[0.04em] mb-8">
          Nature&apos;s <br />
          <span className="text-stroke not-italic font-bold">Deepest</span> <br />
          Secrets.
        </h1>
        <p className="max-w-md text-on-surface-variant text-base md:text-lg mb-12 font-light leading-relaxed">
          Every product is lovingly homemade in small batches — pure botanical
          science crafted by hand. No factories, no mass production. Just 100%
          homemade, high-potency plant skincare for the modern apothecary.
        </p>
        <button
          onClick={() =>
            document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
          }
          className="hero-gradient btn-magnetic px-8 md:px-10 py-5 text-on-primary font-label uppercase tracking-widest text-xs rounded-lg shadow-xl hover:opacity-90 transition-all flex items-center gap-4 group"
        >
          Explore the Collection
          <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
            arrow_right_alt
          </span>
        </button>
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-[921px] relative reveal-right">
        <div className="absolute -top-20 -left-20 w-full h-full bg-surface-container-low -z-10"></div>
        <video
          preload="auto"
          className="w-full h-full object-cover shadow-2xl rounded-sm"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/lipstick-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-10 right-4 md:right-10 bg-surface/80 backdrop-blur-md p-4 md:p-6 max-w-xs border border-outline-variant/10 hero-float-card">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold block mb-2">
            Featured Extract
          </span>
          <h3 className="font-headline text-lg md:text-xl text-primary italic">
            Wild Burgundy Orchid
          </h3>
          <p className="text-xs text-on-surface-variant mt-2">
            Sourced from the high altitudes of the Andes, this rare extract
            promotes cellular regeneration.
          </p>
        </div>
      </div>
    </section>
  );
}
