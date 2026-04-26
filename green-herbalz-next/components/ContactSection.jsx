export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary" aria-label="Contact Green Herbalz">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="reveal-left">
          <span className="font-label text-xs uppercase tracking-[0.4em] text-tertiary-fixed-dim font-bold mb-6 block">
            Connect
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-primary italic mb-4">
            Visit Our Practice.
          </h2>
          <p className="text-on-primary-container text-sm font-light leading-relaxed mb-10 max-w-lg">
            Experience our full collection in person. Our botanical studio is
            open for private consultations by appointment. During your visit,
            explore our ingredient library and create your custom formulation
            with our artisans.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">
                location_on
              </span>
              <div>
                <h4 className="text-on-primary font-bold text-sm">Studio Address</h4>
                <a 
                  href="https://maps.app.goo.gl/2G6SdZhYVuHzhK6E9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-on-primary-container text-xs font-light mt-1 group block hover:text-white transition-colors"
                >
                  Green Herbalz, Koradacheri, Thiruvarur,
                  <br />
                  Tamil Nadu 610 106
                  <span className="block mt-1 text-[10px] uppercase font-bold text-tertiary-fixed-dim group-hover:text-tertiary-fixed transition-colors flex items-center gap-1">
                    Get Directions <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">
                call
              </span>
              <div>
                <h4 className="text-on-primary font-bold text-sm">Contact</h4>
                <p className="text-on-primary-container text-xs font-light mt-1">
                  +91 99427 38921
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">
                schedule
              </span>
              <div>
                <h4 className="text-on-primary font-bold text-sm">Hours</h4>
                <p className="text-on-primary-container text-xs font-light mt-1">
                  Mon – Sat: 9AM – 6PM | Sun: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal-right">
          <div className="bg-primary-container/30 backdrop-blur-sm p-8 md:p-12 border border-on-primary/10 rounded-2xl">
            <h3 className="font-headline text-2xl text-on-primary italic mb-8">
              Personal Concierge
            </h3>
            <p className="text-on-primary-container text-sm font-light mb-8 leading-relaxed">
              Contact us directly for personalized skincare consultations,
              custom formulations, and exclusive offers. Our botanical experts
              are ready to guide you.
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/9942738921?text=Hi! I'm interested in Green Herbalz products. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Green Herbalz on WhatsApp"
                className="w-full py-4 bg-green-600 text-white font-label text-xs uppercase tracking-widest font-bold rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-3 btn-magnetic"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                Chat on WhatsApp
              </a>
              <a
                href="https://www.instagram.com/_green.herbalz_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Green Herbalz on Instagram"
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-label text-xs uppercase tracking-widest font-bold rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-3 btn-magnetic"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  photo_camera
                </span>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
