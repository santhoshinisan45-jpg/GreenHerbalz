export default function MarqueeBanner() {
  const items = [
    "100% HOMEMADE PRODUCTS",
    "CRAFTED BY HAND",
    "NO FACTORY PRODUCTION",
    "SMALL-BATCH BOTANICAL",
  ];
  // Double the items for seamless infinite loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-primary py-4 overflow-hidden border-y border-primary-container">
      <div className="marquee-track">
        <div className="marquee-scroll">
          {repeated.map((text, i) => (
            <span key={i} className="marquee-item">
              <span className="text-on-primary uppercase tracking-[0.4em] text-sm px-6 whitespace-nowrap">
                {text}
              </span>
              <span className="text-tertiary-fixed-dim text-2xl opacity-50 px-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
