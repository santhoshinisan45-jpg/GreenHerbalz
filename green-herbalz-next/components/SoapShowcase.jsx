"use client";
import { useEffect, useRef, useState } from "react";

function LazyVideo({ src, className, ...props }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload="none"
      {...props}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
}

export default function SoapShowcase() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pb-20 md:pb-32" aria-label="Soap Making Process">
      <div className="relative w-full h-[400px] md:h-[800px] rounded-2xl overflow-hidden reveal-scale shadow-2xl group">
        <LazyVideo
          src="/soap-video.mp4"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 md:p-16">
          <span className="font-label text-xs uppercase tracking-[0.4em] text-tertiary-fixed-dim font-bold mb-4 block reveal-left">
            The Process
          </span>
          <h2
            className="font-headline text-3xl md:text-6xl text-on-primary italic mb-6 reveal-left"
            style={{ transitionDelay: "0.1s" }}
          >
            Artisan Soap Making
          </h2>
          <p
            className="text-on-primary-container max-w-xl font-light leading-relaxed text-sm md:text-base reveal-left"
            style={{ transitionDelay: "0.2s" }}
          >
            Watch the slow, deliberate process behind our botanical soaps. From
            cold-pressed oils to hand-poured molds, every bar is a testament to
            our commitment to pure, homemade skincare.
          </p>
        </div>
      </div>
    </section>
  );
}
