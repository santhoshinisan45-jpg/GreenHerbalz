export default function ProductGrid() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="section-line mx-auto mb-20 reveal"></div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">
            Product Spotlight
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary italic shimmer-text">
            Homemade Essentials
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-on-surface-variant text-sm font-light">
            Every product is homemade with care — crafted by hand using pure
            botanicals for results you can trust.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Large Feature */}
        <div className="md:col-span-7 group relative overflow-hidden bg-surface-container-low p-6 md:p-12 reveal-scale stagger-1">
          <div className="absolute top-6 md:top-12 left-6 md:left-12 z-10">
            <h3 className="font-headline text-2xl md:text-3xl text-primary mb-2">
              Velvet Cleansing Balm
            </h3>
            <p className="text-secondary font-label text-xs uppercase tracking-widest mb-6">
              Step 01: Purify
            </p>
          </div>
          <video
            preload="auto"
            className="w-full h-72 md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/lip-balm-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Small Grid */}
        <div className="md:col-span-5 flex flex-col gap-8 md:gap-12">
          <div className="bg-surface-container p-6 md:p-8 group reveal-scale stagger-2">
            <div className="relative overflow-hidden mb-8">
              <video
                preload="auto"
                className="w-full h-60 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/henna-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-xl md:text-2xl text-primary">
                  Henna Ritual Set
                </h3>
                <p className="text-on-surface-variant text-sm mt-1">
                  Limited edition botanical extract
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 md:p-12 flex flex-col justify-center items-center text-center reveal-scale stagger-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-6">
              local_florist
            </span>
            <h4 className="text-on-primary font-headline text-xl md:text-2xl italic mb-4">
              The Complete Discovery Kit
            </h4>
            <p className="text-on-primary-container text-xs font-light mb-8 max-w-[200px]">
              Experience all five rituals in travel-ready apothecary vessels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
