import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TreatmentsSection from "./components/TreatmentsSection";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - No animation, visible on load */}
        <HeroSection />

        {/* Treatments Section */}
        <AnimatedSection>
          <TreatmentsSection />
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <BenefitsSection />
        </AnimatedSection>

        {/* Gallery Section */}
        <AnimatedSection>
          <GallerySection />
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
