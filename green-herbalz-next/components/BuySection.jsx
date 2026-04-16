"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";

const products = [
  {
    name: "Herbal-Henna cone",
    subtitle: "Premium Herbal Formula",
    price: "₹30",
    minOrder: 8,
    image: "/product-henna.png",
    video: "/henna-video.mp4",
  },
  {
    name: "Botanical Essence - lipbalm",
    subtitle: "Natural Extract",
    price: "₹30",
    minOrder: 8,
    image: "/product-lipbalm.png",
    video: "/lip-balm-video.mp4",
    customizable: true,
  },
  {
    name: "Herbal Infusion - lipstick",
    subtitle: "Traditional Remedy",
    price: "₹110",
    minOrder: 4,
    image: "/product-lipstick.png",
    video: "/lipstick-video.mp4",
    customizable: true,
  },
  {
    name: "Soap",
    subtitle: "Herbal Cleansing Bar",
    price: "₹60",
    minOrder: 4,
    isSlider: true,
    slides: ["/product-soap.png", "/red-wine.jpeg", "/char-coal.jpeg", "/milk.jpeg"],
    customizable: true,
  },
  {
    name: "Rosemary Oil",
    subtitle: "Pure Herbal Extract",
    price: "₹160",
    minOrder: 4,
    image: "/product-rosemary.jpeg",
    video: "/rosemary-oil-video.mp4",
  },
];

function ProductSlider({ slides }) {
  const [idx, setIdx] = useState(0);
  const sliderRef = useRef(null);
  const touchStart = useRef(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onTouchStart = (e) => { touchStart.current = e.changedTouches[0].screenX; };
    const onTouchEnd = (e) => {
      const dist = e.changedTouches[0].screenX - touchStart.current;
      if (Math.abs(dist) > 50) dist > 0 ? prev() : next();
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => { el.removeEventListener("touchstart", onTouchStart); el.removeEventListener("touchend", onTouchEnd); };
  }, [next, prev]);

  return (
    <div className="relative bg-surface-container-low aspect-[4/5] overflow-hidden rounded-lg group/slider">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 h-full w-full swipe-gallery"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <Image src={src} alt={`Soap variant ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute top-1/2 left-2 -translate-y-1/2 bg-surface/80 p-1.5 rounded-full shadow-md text-primary hover:bg-surface opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 flex items-center justify-center">
        <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>
      <button onClick={next} className="absolute top-1/2 right-2 -translate-y-1/2 bg-surface/80 p-1.5 rounded-full shadow-md text-primary hover:bg-surface opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 flex items-center justify-center">
        <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
    </div>
  );
}

function ProductCard({ product, stagger }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const sendToWhatsApp = useCallback(() => {
    const msg = `Hi! I want to buy:\n\nProduct: ${product.name}\nPrice: ${product.price}\nMinimum order: ${product.minOrder}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/9942738921?text=${encodeURIComponent(msg)}`, "_blank");
  }, [product]);

  const sendToInstagram = useCallback(() => {
    const msg = `Hi! I want to buy:\n\nProduct: ${product.name} - ${product.price}\nQuantity: ${quantity}\n\nPlease confirm availability.`;
    navigator.clipboard.writeText(msg).then(() => {
      alert("Order details copied to clipboard! Please paste them in the chat.");
      window.open("https://www.instagram.com/_green.herbalz_", "_blank");
    });
    setModalOpen(false);
  }, [product, quantity]);

  const customize = useCallback(() => {
    const msg = `Hi! I would like to customize my ${product.name} with specific ingredients. Please help me create my custom blend.`;
    navigator.clipboard.writeText(msg).then(() => {
      alert("Customization request copied to clipboard! Please paste it in the chat.");
      window.open("https://www.instagram.com/_green.herbalz_", "_blank");
    });
  }, [product.name]);

  return (
    <>
      <div className={`group reveal-scale stagger-${stagger}`}>
        {product.isSlider ? (
          <ProductSlider slides={product.slides} />
        ) : (
          <div className="relative bg-surface-container-low aspect-[4/5] overflow-hidden rounded-lg group">
            <Image
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0 z-10 group-hover:opacity-0 transition-opacity duration-300"
              src={product.image}
              fill
            />
            {product.video && (
              <video
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay loop muted playsInline preload="metadata"
              >
                <source src={product.video} type="video/mp4" />
              </video>
            )}
          </div>
        )}
        <div className="mt-4 md:mt-6 flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
            <div>
              <h3 className="font-headline text-base md:text-2xl text-on-surface leading-tight">{product.name}</h3>
              <p className="font-label text-[10px] md:text-xs text-outline mt-1 uppercase tracking-wider">{product.subtitle}</p>
            </div>
            <div className="text-left sm:text-right mt-1 sm:mt-0">
              <span className="font-body text-base md:text-lg font-semibold text-primary block">{product.price}</span>
              <p className="text-[10px] md:text-xs text-outline">Min: {product.minOrder}</p>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-2 md:py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs uppercase md:tracking-widest font-bold rounded-md hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5 md:gap-2"
          >
            <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="hidden md:inline">Contact &amp; Buy via Instagram</span>
            <span className="inline md:hidden">Instagram</span>
          </button>
          <button
            onClick={sendToWhatsApp}
            className="w-full py-2 md:py-3 bg-green-600 text-white font-label text-[10px] md:text-xs uppercase md:tracking-widest font-bold rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-1.5 md:gap-2"
          >
            <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="hidden md:inline">Buy via WhatsApp</span>
            <span className="inline md:hidden">WhatsApp</span>
          </button>
          {product.customizable && (
            <button
              onClick={customize}
              className="w-full py-2 md:py-3 bg-secondary text-on-secondary font-label text-[10px] md:text-xs uppercase md:tracking-widest font-bold rounded-md hover:bg-secondary-container transition-colors flex items-center justify-center gap-1.5 md:gap-2"
            >
              <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>edit</span>
              <span className="hidden md:inline">Customize Ingredients</span>
              <span className="inline md:hidden">Customize</span>
            </button>
          )}
        </div>
      </div>

      {/* Instagram Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center ig-modal" onClick={() => setModalOpen(false)}>
          <div className="ig-modal-content bg-white p-6 rounded-xl max-w-[90%] w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-headline text-xl text-primary mb-4">Order Details</h3>
            <p className="font-body text-sm text-outline mb-4">{product.name} ({product.price})</p>
            <div className="flex flex-col gap-4">
              <label className="font-label text-xs uppercase tracking-widest text-outline">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-outline-variant rounded-md px-4 py-3 font-body text-sm"
                placeholder="Enter quantity"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setModalOpen(false)} className="flex-1 py-3 border border-outline-variant font-label text-xs uppercase tracking-widest rounded-md">
                Cancel
              </button>
              <button onClick={sendToInstagram} className="flex-1 py-3 bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-bold rounded-md hover:bg-primary-container transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function BuySection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-screen-2xl mx-auto" id="buy">
      <div className="section-line mx-auto mb-16 reveal"></div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">Shop Now</span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic shimmer-text">Contact &amp; Buy via Instagram</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} stagger={i + 1} />
        ))}
      </div>
    </section>
  );
}
