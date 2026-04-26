import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface-container-low py-20 md:py-32">
      <div className="section-line mx-auto mb-16 max-w-screen-xl reveal"></div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative reveal-left">
          <div className="aspect-[4/5] relative overflow-hidden group">
            <div className="absolute -inset-4 border border-outline-variant/30 -z-10"></div>
            <Image
              src="/product-henna.png"
              alt="Natural botanical ingredients used in Green Herbalz homemade skincare products"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-1000 origin-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-surface-container-highest/90 to-surface-container-highest/30"></div>
            <div className="p-8 md:p-12 h-full flex flex-col justify-end relative z-10">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-6">
                The Philosophy
              </span>
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-8 leading-tight italic">
                Every ingredient has a{" "}
                <span className="font-bold not-italic">story to tell.</span>
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light">
                We believe in the slow science of extraction. Our rituals are
                more than just skincare; they are moments of reconnection with
                the botanical world, curated for the modern spirit.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-12 md:space-y-16 reveal-right">
          {[
            {
              num: "01",
              title: "Conscious Sourcing",
              desc: "We partner directly with small-scale botanical farms that practice regenerative agriculture, ensuring potency and purity in every drop.",
            },
            {
              num: "02",
              title: "Modern Chemistry",
              desc: "Our lab bridges the gap between ancient herbal wisdom and peer-reviewed dermatological science for uncompromising results.",
            },
            {
              num: "03",
              title: "Sensory Alignment",
              desc: "Scent, texture, and absorption are architected to lower cortisol levels and provide a grounding olfactory experience.",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-6 md:gap-8 items-start">
              <span className="text-3xl md:text-4xl font-headline italic text-tertiary-fixed-dim">
                {item.num}.
              </span>
              <div>
                <h4 className="font-headline text-lg md:text-xl text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="pt-8 border-t border-outline-variant/30 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {[
              { icon: "eco", label: "100% Natural" },
              { icon: "cruelty_free", label: "Cruelty-Free" },
              { icon: "psychiatry", label: "Handcrafted" },
              { icon: "spa", label: "Sustainable" },
            ].map((item) => (
              <div
                key={item.icon}
                className="flex flex-col items-center text-center gap-3"
              >
                <span
                  className="material-symbols-outlined text-3xl text-tertiary-fixed-dim"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  {item.icon}
                </span>
                <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
