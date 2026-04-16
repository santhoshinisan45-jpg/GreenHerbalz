"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = useCallback(() => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#buy" },
    { label: "About", href: "#about" },
    { label: "Have Questions?", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        id="mainNav"
        translate="no"
        className={`main-nav notranslate fixed top-0 w-full z-50 bg-white dark:bg-stone-950 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 py-4 border-b border-stone-200/60 dark:border-stone-800 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/brand-logo.png"
            alt="Green Herbalz Logo"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
          <span className="text-xl md:text-2xl font-headline uppercase tracking-widest text-stone-900 dark:text-red-100">
            Green Herbalz
          </span>
        </div>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="nav-link text-stone-700 dark:text-red-100 font-medium hover:text-primary transition-colors duration-300 font-body text-sm uppercase tracking-wider"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-link text-pink-600 dark:text-pink-300 font-medium hover:text-pink-800 transition-colors duration-300 font-body text-sm uppercase tracking-wider"
            href="https://www.instagram.com/_green.herbalz_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="nav-link text-red-600 dark:text-red-300 font-medium hover:text-red-800 transition-colors duration-300 font-body text-sm uppercase tracking-wider"
            href="https://youtube.com/@greenherbalz"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <span
            onClick={toggleDark}
            className="material-symbols-outlined text-stone-600 hover:text-primary dark:text-yellow-400 dark:hover:text-yellow-300 text-2xl cursor-pointer transition-colors flex items-center"
          >
            {isDark ? "light_mode" : "dark_mode"}
          </span>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(prev => !prev)}
              className="flex items-center gap-1 text-stone-600 hover:text-primary dark:text-red-300 dark:hover:text-red-100 transition-colors cursor-pointer"
              aria-label="Change language"
            >
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
            <div
              className={`absolute right-0 top-full mt-2 bg-white dark:bg-stone-900 rounded-lg shadow-xl border border-stone-200 dark:border-stone-700 p-3 min-w-[180px] z-[999] transition-all duration-200 origin-top-right ${
                langOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-2 font-body">Translate</p>
              <div id="google_translate_element"></div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/_green.herbalz_"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
          >
            <span className="material-symbols-outlined text-pink-500 dark:text-pink-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              photo_camera
            </span>
          </a>
          <button
            onClick={openMobileMenu}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 touch-manipulation"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-primary rounded-full transition-all"></span>
            <span className="w-6 h-0.5 bg-primary rounded-full transition-all"></span>
            <span className="w-4 h-0.5 bg-primary rounded-full transition-all"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div translate="no" className={`mobile-menu-overlay notranslate ${mobileMenuOpen ? "active" : ""}`}>
        <button onClick={closeMobileMenu} className="mobile-menu-close">
          <span className="material-symbols-outlined text-primary">close</span>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="mobile-menu-link"
            href={link.href}
            onClick={closeMobileMenu}
          >
            {link.label === "Have Questions?" ? "Questions" : link.label}
          </a>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}
      <nav translate="no" className="mobile-nav notranslate">
        <a href="#" className="mobile-nav-item active">
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="mobile-nav-label">Home</span>
        </a>
        <a href="#buy" className="mobile-nav-item">
          <span className="material-symbols-outlined text-2xl">storefront</span>
          <span className="mobile-nav-label">Shop</span>
        </a>
        <a
          href="https://www.instagram.com/_green.herbalz_"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav-item"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="mobile-nav-label">Contact</span>
        </a>
        <a href="#contact" className="mobile-nav-item">
          <span className="material-symbols-outlined text-2xl">location_on</span>
          <span className="mobile-nav-label">Visit</span>
        </a>
      </nav>
    </>
  );
}
