"use client";

import { useState, useEffect } from "react";

const navLinks = {
  left: [
    { label: "Treatments", href: "#treatments" },
    { label: "Pricing", href: "#pricing" },
  ],
  right: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center">
            {/* Left Links */}
            <ul className="flex items-center gap-8">
              {navLinks.left.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-medium tracking-wide text-brown hover:text-olive transition-colors duration-300"
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>

            {/* Center Logo */}
            <a
              href="#"
              className="mx-12 lg:mx-16 font-serif text-2xl lg:text-3xl font-medium tracking-wider text-brown"
            >
              OPALYA.
            </a>

            {/* Right Links */}
            <ul className="flex items-center gap-8">
              {navLinks.right.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-medium tracking-wide text-brown hover:text-olive transition-colors duration-300"
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-serif text-xl font-medium tracking-wider text-brown"
            >
              OPALYA.
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-brown text-cream-light transition-transform duration-300 hover:scale-105"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-brown/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-cream shadow-xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Navigation Links */}
            <ul className="flex flex-col gap-2">
              {[...navLinks.left, ...navLinks.right].map((link, index) => (
                <li
                  key={link.label}
                  className={`transform transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 font-serif text-3xl font-light text-brown hover:text-olive transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              className={`mt-auto transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            >
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-brown text-cream-light font-sans text-sm font-medium tracking-wider text-center uppercase rounded-pill transition-all duration-300 hover:bg-brown-light"
              >
                Book Now
              </a>
            </div>

            {/* Contact Info */}
            <div
              className={`mt-8 pt-8 border-t border-brown/10 transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "375ms" : "0ms" }}
            >
              <p className="font-sans text-sm text-muted">
                165 N Front St, Columbus, OH
              </p>
              <p className="font-sans text-sm text-muted mt-1">
                Mon-Sat: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
