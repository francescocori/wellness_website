const benefits = [
  {
    id: 1,
    icon: <YogaIcon />,
    title: "Stress Relief",
    description:
      "Melt away tension and anxiety with our therapeutic techniques designed to calm your mind and body.",
  },
  {
    id: 2,
    icon: <MassageIcon />,
    title: "Pain Management",
    description:
      "Target chronic pain and muscle tension with specialized treatments that promote lasting relief.",
  },
  {
    id: 3,
    icon: <SleepIcon />,
    title: "Better Sleep",
    description:
      "Improve your sleep quality naturally through relaxation therapies that prepare your body for rest.",
  },
  {
    id: 4,
    icon: <StarIcon />,
    title: "Expert Therapists",
    description:
      "Our certified professionals bring years of experience and personalized care to every session.",
  },
  {
    id: 5,
    icon: <LeafIcon />,
    title: "Natural Products",
    description:
      "We use only organic, sustainably sourced oils and products that are gentle on your skin.",
  },
  {
    id: 6,
    icon: <HeartIcon />,
    title: "Holistic Wellness",
    description:
      "Experience treatments that nurture your complete well-being—body, mind, and spirit.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium tracking-widest uppercase text-olive">
            Benefits
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brown">
            Why Choose Us
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-brown/60 max-w-2xl mx-auto">
            Experience the difference that dedicated care and expertise can make
            in your wellness journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="group p-8 bg-cream-light rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-cream text-olive transition-colors duration-300 group-hover:bg-olive/10">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-light text-brown">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-sans text-sm md:text-base text-brown/60 leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function YogaIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0l-4 8m4-8l4 8M6 12h12" />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 4.5c0 1.657-1.007 3-2.25 3S5.25 6.157 5.25 4.5 6.257 1.5 7.5 1.5s2.25 1.343 2.25 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function SleepIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-4.03-9-9 0-4.97 8-12 9-12s9 7.03 9 12c0 4.97-4.03 9-9 9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11m0 0c-2 0-4-1-4-3m4 3c2 0 4-1 4-3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}
