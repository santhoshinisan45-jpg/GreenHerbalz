export default function Testimonials() {
  const testimonials = [
    {
      text: "I've been using the Kuppameni soap for 3 months now and my skin has never felt this soft. You can really feel the difference with homemade products — no chemicals, just pure nature. Absolutely love it!",
      name: "Priya Lakshmi",
      location: "Thiruvarur, Tamil Nadu",
      initial: "P",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
    },
    {
      text: "The herbal henna cone gave me the most beautiful, natural color. It's so smooth to apply and you can tell it's made with real care. My friends all want to know where I got it from!",
      name: "Deepika Rajan",
      location: "Chennai, Tamil Nadu",
      initial: "D",
      bgClass: "bg-secondary/10",
      textClass: "text-secondary",
    },
    {
      text: "I ordered the lip balm and lipstick together. The packaging was so premium I couldn't believe it was homemade! The lip balm keeps my lips moisturized all day. Best herbal products I've ever tried.",
      name: "Santhiya Meena",
      location: "Kumbakonam, Tamil Nadu",
      initial: "S",
      bgClass: "bg-tertiary-fixed-dim/20",
      textClass: "text-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-line mx-auto mb-20 reveal"></div>
        <div className="text-center mb-20 reveal">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">
            What Our Customers Say
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic shimmer-text">
            Loved by Many
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-surface p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 reveal-scale stagger-${i + 1} group`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined text-amber-400 text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bgClass} flex items-center justify-center`}>
                  <span className={`${t.textClass} font-headline text-lg`}>{t.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">{t.name}</h4>
                  <p className="text-on-surface-variant text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
