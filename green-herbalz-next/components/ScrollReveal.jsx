"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .section-line"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
