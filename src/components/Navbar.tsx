import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-emerald-600 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-6 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <Heart className="h-8 w-8 fill-white" />
          <span>Dr. Sarah Miller</span>
        </div>
        <div className="flex gap-8 font-medium">
          <a href="#services" className="hover:text-emerald-200 transition">Services</a>
          <a href="#about" className="hover:text-emerald-200 transition">About</a>
          <a href="#testimonials" className="hover:text-emerald-200 transition">Testimonials</a>
          <a href="#contact" className="hover:text-emerald-200 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}