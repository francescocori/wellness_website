import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=600&fit=crop",
    alt: "Spa treatment room with candles",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop",
    alt: "Relaxation lounge area",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=600&fit=crop",
    alt: "Massage therapy room",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=600&fit=crop",
    alt: "Aromatherapy setup",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop",
    alt: "Hot stone treatment",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
    alt: "Serene spa atmosphere",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium tracking-widest uppercase text-olive">
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brown">
            Our Space
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-brown/60 max-w-2xl mx-auto">
            Step into our sanctuary of calm. Every corner is designed to
            transport you to a place of peace and tranquility.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://instagram.com/opalya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <InstagramIcon className="w-6 h-6 text-brown transition-colors duration-300 group-hover:text-olive" />
            <span className="font-sans text-base md:text-lg text-brown transition-colors duration-300 group-hover:text-olive">
              Follow us{" "}
              <span className="font-medium">@opalya</span>
            </span>
            <ArrowIcon className="w-4 h-4 text-brown transition-all duration-300 group-hover:text-olive group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
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
