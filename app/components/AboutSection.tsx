import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Shows first on mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop"
                alt="Serene spa sanctuary interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-olive/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cream/40 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="font-sans text-sm font-medium tracking-widest uppercase text-olive">
              Welcome
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brown leading-tight">
              About Our
              <br />
              <span className="italic text-olive">Sanctuary</span>
            </h2>

            <div className="mt-8 space-y-6">
              <p className="font-sans text-base md:text-lg text-brown/70 leading-relaxed">
                Nestled in the heart of the city, OPALYA offers a tranquil escape
                from the demands of everyday life. Our sanctuary was founded on the
                belief that true wellness comes from nurturing both body and mind in
                an environment of complete serenity.
              </p>

              <p className="font-sans text-base md:text-lg text-brown/70 leading-relaxed">
                Every detail of our space has been thoughtfully curated—from the
                warm, earth-toned interiors to the subtle aromatherapy that greets
                you at the door. Our team of certified therapists brings years of
                expertise and a genuine passion for healing touch.
              </p>

              <p className="font-sans text-base md:text-lg text-brown/70 leading-relaxed">
                We invite you to disconnect from the outside world and reconnect
                with yourself. At OPALYA, your journey to relaxation begins the
                moment you step through our doors.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-10 border-t border-brown/10 grid grid-cols-3 gap-6">
              <div>
                <span className="font-serif text-3xl md:text-4xl font-light text-brown">
                  10+
                </span>
                <p className="mt-1 font-sans text-sm text-brown/60">
                  Years of Experience
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl font-light text-brown">
                  15k
                </span>
                <p className="mt-1 font-sans text-sm text-brown/60">
                  Happy Clients
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl font-light text-brown">
                  8
                </span>
                <p className="mt-1 font-sans text-sm text-brown/60">
                  Expert Therapists
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wider text-brown group">
              <span className="uppercase">Learn More About Us</span>
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
