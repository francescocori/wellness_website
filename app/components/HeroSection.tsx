"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    label: "Hot Stone",
    shape: "portrait",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    label: "Aromatherapy",
    shape: "landscape",
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    label: "Deep Tissue",
    shape: "square",
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    label: "Facial",
    shape: "portrait",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop",
  },
  // {
  //   id: 5,
  //   label: "Relaxation",
  //   shape: "landscape",
  //   src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=400&fit=crop",
  // },
];

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="12" cy="19" r="2.5" />
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="12" r="2.5" />
      <circle cx="7.05" cy="7.05" r="2.5" />
      <circle cx="16.95" cy="16.95" r="2.5" />
      <circle cx="7.05" cy="16.95" r="2.5" />
      <circle cx="16.95" cy="7.05" r="2.5" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-6 bg-cream">
      {/* Hero Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-brown leading-[1.1]">
          Your Body
          <br />
          <span className="italic text-olive">Deserves This</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 md:mt-8 font-sans text-base md:text-lg text-brown/70 max-w-md">
          Book your massage today and feel the change.
        </p>

        {/* CTA Button */}
        <button className="mt-8 md:mt-10 group inline-flex items-center gap-3 px-8 py-4 bg-brown text-cream-light font-sans text-sm font-medium tracking-wider uppercase rounded-pill border border-brown transition-all duration-300 hover:bg-brown-light hover:border-brown-light">
          Book Now
          <FlowerIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>

      {/* Circular Image Gallery */}
      <div className="w-full max-w-6xl mx-auto mt-12 md:mt-16 lg:mt-20 overflow-hidden">
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative flex-shrink-0 overflow-hidden transition-transform duration-500 hover:scale-105 ${
                image.shape === "portrait"
                  ? "w-36 h-44 md:w-44 md:h-56 lg:w-56 lg:h-72 rounded-full"
                  : image.shape === "landscape"
                    ? "w-44 h-36 md:w-56 md:h-44 lg:w-72 lg:h-56 rounded-full"
                    : "w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full"
              } ${index >= 3 ? "hidden sm:flex" : ""} ${
                index >= 4 ? "sm:hidden md:flex" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 280px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
