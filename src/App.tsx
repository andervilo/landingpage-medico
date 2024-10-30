import React from 'react';
import { Clock, Phone, MapPin, Calendar, Star, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1535185384036-28bbc8035f28?auto=format&fit=crop&q=80"
            alt="Happy child with doctor"
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-600/75">
          <Navbar />
          <div className="container mx-auto px-6 mt-32">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Caring for Your Children Like They're Our Own
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Specialized pediatric care with over 15 years of experience. 
                Providing comprehensive healthcare for children from newborns to adolescents.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition flex items-center gap-2">
                  Book Appointment <Calendar className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extended Hours</h3>
              <p className="text-gray-600">
                Available for your children when they need us most, including weekends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-gray-600">
                Regular check-ups and vaccinations to keep your children healthy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Phone className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Emergency phone consultations available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Dr. Sarah with patient"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Experienced Pediatric Care You Can Trust
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in pediatric care, Dr. Sarah Miller has dedicated her career to ensuring children receive the best possible medical attention in a warm and welcoming environment.
              </p>
              <ul className="space-y-4">
                {[
                  'Board Certified in Pediatrics',
                  'Fellow of the American Academy of Pediatrics',
                  'Specialized in Developmental Pediatrics',
                  'Trusted by over 1000 families'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Parents Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Dr. Miller is amazing with kids. She always knows exactly how to make my daughter feel comfortable during visits.",
                author: "Emma Thompson",
                role: "Mother of 2"
              },
              {
                text: "The best pediatrician we've ever had. The office is child-friendly and the staff is incredibly caring.",
                author: "Michael Rodriguez",
                role: "Father of 3"
              },
              {
                text: "We're so grateful to have found such a knowledgeable and compassionate doctor for our children.",
                author: "Sarah Chen",
                role: "Mother of 1"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Schedule an appointment or ask any questions you might have.
                  We're here to help your family stay healthy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    <span>123 Healthcare Ave, Medical Center, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6" />
                    <span>Mon-Fri: 8am-6pm, Sat: 9am-2pm</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl">
                <button className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                  Schedule an Appointment <ArrowRight className="h-5 w-5" />
                </button>
                <p className="text-center text-gray-600 mt-4">
                  Or call us at (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 fill-white" />
              <span className="text-xl font-semibold">Dr. Sarah Miller</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dr. Sarah Miller Pediatrics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;