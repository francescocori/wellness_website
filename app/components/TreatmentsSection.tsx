import Image from "next/image";

const treatments = [
  {
    id: 1,
    name: "Swedish Massage",
    description:
      "A gentle, relaxing massage using long strokes to ease tension and improve circulation throughout your body.",
    duration: "60 min",
    price: "$120",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Deep Tissue Therapy",
    description:
      "Targeted pressure on deep muscle layers to release chronic tension and knots for lasting relief.",
    duration: "75 min",
    price: "$150",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Hot Stone Massage",
    description:
      "Heated basalt stones placed on key points to melt away stress and deeply relax tired muscles.",
    duration: "90 min",
    price: "$180",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Aromatherapy",
    description:
      "Essential oils combined with gentle massage techniques to restore balance and elevate your mood.",
    duration: "60 min",
    price: "$135",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
  },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium tracking-widest uppercase text-olive">
            Services
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brown">
            Our Treatments
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-brown/60 max-w-2xl mx-auto">
            Discover our curated selection of therapeutic treatments designed to
            rejuvenate your body and restore your inner peace.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment) => (
            <article
              key={treatment.id}
              className="group bg-cream-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-light text-brown group-hover:text-olive transition-colors duration-300">
                  {treatment.name}
                </h3>

                {/* Description */}
                <p className="mt-3 font-sans text-sm md:text-base text-brown/60 leading-relaxed">
                  {treatment.description}
                </p>

                {/* Footer: Duration & Price */}
                <div className="mt-6 pt-6 border-t border-brown/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-olive" />
                    <span className="font-sans text-sm text-brown/70">
                      {treatment.duration}
                    </span>
                  </div>
                  <span className="font-serif text-2xl font-medium text-brown">
                    {treatment.price}
                  </span>
                </div>

                {/* Book Button */}
                <button className="mt-6 w-full py-3 bg-brown text-cream-light font-sans text-sm font-medium tracking-wider uppercase rounded-pill transition-all duration-300 hover:bg-brown-light">
                  Book Treatment
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
