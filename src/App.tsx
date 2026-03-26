/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Zap, 
  Droplets, 
  Paintbrush, 
  CheckCircle2, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Hammer,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './logo.png';
import background from './background.jpg';
import renovations from './Full Apartment Renovations.jpg';

const WHATSAPP_NUMBER = "+35679337286";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Renovations', href: '#renovations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 relative z-[110]">
            <img src={logo} alt="Henry Handyman Logo" className="h-8 sm:h-10 w-auto" referrerPolicy="no-referrer" />
            <span className={`text-lg sm:text-xl font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-brand-slate' : 'text-white'}`}>
              HENRY <span className="text-brand-yellow">HANDYMAN</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-brand-yellow ${isScrolled ? 'text-brand-slate' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-slate px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-3 -mr-2 relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-brand-slate" />
            ) : (
              <Menu className={isScrolled ? 'text-brand-slate' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-bold text-brand-slate hover:text-brand-yellow transition-colors py-2 border-b border-slate-100"
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-brand-yellow text-brand-slate px-6 py-5 rounded-2xl font-bold text-xl flex justify-center items-center gap-3 shadow-xl shadow-yellow-600/20"
                onClick={handleNavLinkClick}
              >
                <MessageCircle size={28} />
                Message on WhatsApp
              </a>
            </div>
            
            <div className="mt-auto pb-12 text-center">
              <p className="text-slate-400 font-medium mb-4">Malta's Trusted Handyman</p>
              <div className="flex justify-center gap-4 text-brand-slate">
                <Phone size={20} />
                <span className="font-bold">+356 79337286</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const heroImage = background;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Handyman tools and workspace" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/95 via-brand-slate/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Premium Quality at Your Doorstep
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Trusted Home Specialist in <span className="text-brand-yellow">Malta.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            From minor repairs to full apartment renovations. Henry Handyman brings expertise to every corner of your home. Professional. Reliable. Local.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-slate px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-yellow-600/30"
            >
              <MessageCircle size={24} />
              WhatsApp Me
            </a>
            <a 
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              View Services
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats or Badges */}
      <div className="absolute bottom-10 left-0 w-full hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 text-white/60">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-yellow" />
              <span className="font-medium">Guaranteed Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-yellow" />
              <span className="font-medium">Turnkey Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-yellow" />
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedService = () => {
  const renovationImage = renovations;

  return (
    <section id="renovations" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={renovationImage} 
                alt="Modern apartment renovation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-yellow text-brand-slate p-8 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm font-medium opacity-80">Stress-Free Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">The Star Service</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-slate mb-6 leading-tight">
              Full Apartment Renovations – Turnkey Solutions.
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              We handle everything from A to Z. Whether you've just bought a shell apartment or want to breathe new life into your current home, Henry Handyman ensures a stress-free experience. We manage the plumbing, electrical, tiling, and finishing touches so you don't have to.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Project management from start to finish",
                "Expert plumbing & electrical installations",
                "High-quality tiling & flooring",
                "Custom interior decorating & painting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-slate font-medium">
                  <div className="bg-yellow-50 p-1 rounded-full">
                    <CheckCircle2 className="text-brand-yellow w-5 h-5" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-slate text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const categories = [
    {
      title: "General & Furniture",
      icon: <Wrench className="w-8 h-8" />,
      services: ["Furniture assembly", "Home maintenance", "General repairs"]
    },
    {
      title: "Electrical & AC",
      icon: <Zap className="w-8 h-8" />,
      services: ["Small electrical tasks", "Fan installation/repair", "AC cleaning & filter replacement", "Diagnostics"]
    },
    {
      title: "Plumbing & Roofing",
      icon: <Droplets className="w-8 h-8" />,
      services: ["Plumbing fixture installation", "Water fixture repair", "Roof repair", "Waterproofing"]
    },
    {
      title: "Painting & Decorating",
      icon: <Paintbrush className="w-8 h-8" />,
      services: ["Interior & Exterior painting", "Interior decorating"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-slate mb-6">Comprehensive Home Services</h3>
          <p className="text-base sm:text-lg text-gray-600">
            No job is too small or too big. We bring professional tools and years of experience to every task.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-yellow-50 text-brand-yellow w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-slate transition-colors">
                  {React.cloneElement(cat.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h4 className="text-xl font-bold text-brand-slate mb-4">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.services.map((service, sIdx) => (
                    <li key={sIdx} className="text-gray-500 flex items-start gap-2 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Mark Zammit",
      text: "Henry is incredibly punctual and professional. He fixed our AC and did some general repairs. Clean work and very fair pricing. Highly recommended in Malta!",
      rating: 5
    },
    {
      name: "Sarah Borg",
      text: "We used Henry for our apartment renovation in Sliema. He handled everything from plumbing to painting. Stress-free and high quality. A true specialist.",
      rating: 5
    },
    {
      name: "David Attard",
      text: "Excellent furniture assembly and electrical work. Very efficient and polite. It's hard to find such reliable handymen these days. 5 stars!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-slate text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">Social Proof</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">What Our Clients in Malta Say</h3>
          <div className="flex justify-center items-center gap-2 text-brand-yellow">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            <span className="ml-2 text-white font-bold text-xl">5.0 on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-lg text-gray-300 italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-yellow text-brand-slate rounded-full flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <span className="font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://maps.app.goo.gl/ZZdZQCA1yFrc74w9A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-yellow font-bold hover:underline flex items-center justify-center gap-2"
          >
            View all reviews on Google Maps
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-slate mb-6">Ready to fix your home? Message us today!</h3>
            <p className="text-base sm:text-lg text-gray-600">We provide professional handyman services all over Malta. Reach out for a free consultation.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100">
              <div className="bg-yellow-100 p-4 rounded-2xl text-brand-yellow w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">Call or WhatsApp</p>
              <p className="text-xl font-bold text-brand-slate">+356 79337286</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100">
              <div className="bg-yellow-100 p-4 rounded-2xl text-brand-yellow w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
              <p className="text-xl font-bold text-brand-slate">email@henryhandyman-mt.com</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100">
              <div className="bg-yellow-100 p-4 rounded-2xl text-brand-yellow w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">Service Area</p>
              <p className="text-xl font-bold text-brand-slate">All over Malta</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-slate px-6 py-4 sm:px-12 sm:py-6 rounded-2xl font-bold text-xl sm:text-2xl hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-600/20 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Henry Handyman Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold tracking-tight">
              HENRY <span className="text-brand-yellow">HANDYMAN</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-gray-400 text-sm font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#renovations" className="hover:text-white transition-colors">Renovations</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Henry Handyman Malta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Henry
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-slate selection:bg-brand-yellow/30">
      <Navbar />
      <main>
        <Hero />
        <FeaturedService />
        <ServicesGrid />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
