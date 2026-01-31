const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "An absolutely transformative experience. From the moment I walked in, I felt the stress melt away. The hot stone massage was pure bliss—I've never felt so relaxed.",
    name: "Sarah Mitchell",
    title: "Regular Client",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The therapists here are true professionals. My chronic back pain has significantly improved after just a few sessions. I can't recommend OPALYA enough.",
    name: "James Chen",
    title: "Wellness Member",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "This place is my sanctuary. The atmosphere, the attention to detail, the personalized care—everything exceeds expectations. Worth every penny.",
    name: "Emma Rodriguez",
    title: "Monthly Subscriber",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium tracking-widest uppercase text-olive">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brown">
            What Our Clients Say
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-brown/60 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from those who have
            experienced the OPALYA difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative bg-cream-light p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-olive/10 pointer-events-none">
                <QuoteIcon className="w-12 h-12" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-olive" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <p className="font-sans text-base text-brown/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-brown/10">
                <p className="font-serif text-lg font-medium text-brown">
                  {testimonial.name}
                </p>
                <p className="mt-1 font-sans text-sm text-brown/50">
                  {testimonial.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}
