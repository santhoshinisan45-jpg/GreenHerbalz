"use client";
import { useCallback } from "react";

const faqs = [
  {
    q: "Are all your products really homemade?",
    a: "Yes, 100%! Every single product is handcrafted at home in small batches. We never use factory production. Each item is made with personal care using pure, natural botanical ingredients sourced locally.",
  },
  {
    q: "Are these products safe for sensitive skin?",
    a: "Absolutely. Our products are made with natural herbs and botanicals without harsh chemicals, parabens, or synthetic fragrances. However, if you have specific allergies, please message us on Instagram and we'll guide you to the right product.",
  },
  {
    q: "How do I place an order?",
    a: 'Simply click the "Contact & Buy via Instagram" button on any product. Your order details will be copied to your clipboard — just paste it in our Instagram DM and hit send. We\'ll confirm your order and arrange delivery!',
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, we deliver pan-India! Shipping charges may vary based on your location. For local orders in Thiruvarur, we also offer free pickup. Contact us on Instagram for delivery details and timelines.",
  },
  {
    q: "Can I customize the soaps with my own ingredients?",
    a: 'Yes! Use our Soap Customizer to choose your preferred shape, weight, and main ingredient. You can even type in your own custom ingredient. Once you\'re happy, hit "Apply & Order" and it\'ll send your custom order to our Instagram.',
  },
  {
    q: "What is the shelf life of your products?",
    a: "Since our products are 100% natural and preservative-free, they have a shelf life of 3-6 months depending on the product. We always make fresh batches so you receive the freshest product possible. Store in a cool, dry place for best results.",
  },
];

export default function FaqSection() {
  const toggleFaq = useCallback((e) => {
    const btn = e.currentTarget;
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    document.querySelectorAll(".faq-answer").forEach((a) => { a.style.maxHeight = "0px"; });
    document.querySelectorAll(".faq-icon").forEach((i) => { i.style.transform = "rotate(0deg)"; });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  }, []);

  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="section-line mx-auto mb-20 reveal"></div>
        <div className="text-center mb-20 reveal">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">
            Have Questions?
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic shimmer-text">
            Frequently Asked
          </h2>
        </div>
        <div className="space-y-4 reveal">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item border border-outline-variant/30 rounded-xl overflow-hidden">
              <button
                onClick={toggleFaq}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-surface-container-low transition-colors"
              >
                <span className="font-bold text-on-surface text-sm pr-4">{faq.q}</span>
                <span className="material-symbols-outlined text-primary faq-icon transition-transform duration-300">
                  expand_more
                </span>
              </button>
              <div className="faq-answer" style={{ maxHeight: 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <p className="px-5 md:px-6 pb-6 text-on-surface-variant text-sm leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
