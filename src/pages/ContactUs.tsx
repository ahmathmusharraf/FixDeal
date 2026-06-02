import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20 h-[calc(100vh-65px)] md:min-h-screen bg-zinc-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-sm w-full bg-white p-6 md:p-12 rounded-[28px] md:rounded-[40px] shadow-xl border border-zinc-100 text-center"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8 border border-emerald-100">
            <CheckCircle2 className="text-emerald-600 w-7 h-7 md:w-10 md:h-10" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-zinc-900 mb-2">Message Sent!</h2>
          <p className="text-zinc-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
            Thank you for reaching out. Our team will get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-[#1f1926] text-white py-3 rounded-xl font-bold hover:bg-brand-primary transition-all active:scale-95 text-xs uppercase tracking-wider"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24 md:pt-32 md:pb-20 min-h-screen bg-zinc-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-6 md:gap-20 items-start">
        {/* Left column / Top on mobile */}
        <div>
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-brand-dark transition-colors font-bold text-xs mb-3 md:mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 md:mb-6 text-zinc-900">
            Get in <span className="text-brand-dark">touch</span>
          </h1>
          <p className="text-xs md:text-lg text-zinc-500 mb-4 md:mb-10 max-w-lg">
            Have a question or need assistance? Our team is here to help you with any inquiries you may have.
          </p>

          {/* Optimized compact touch contact rows */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5 md:gap-6 mb-6 lg:mb-0">
            <a 
              href="tel:+971502316225"
              className="bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-zinc-100 flex flex-col md:flex-row items-center gap-2 md:gap-4 hover:border-brand-dark/20 transition-all cursor-pointer"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-brand-dark w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-center md:text-left overflow-hidden w-full">
                <p className="text-[9px] md:text-xs text-zinc-400 font-extrabold uppercase tracking-wider">Phone</p>
                <p className="font-extrabold text-zinc-805 text-[10px] md:text-sm truncate">+971 50 2</p>
              </div>
            </a>

            <a 
              href="mailto:info@letsdeal.ae"
              className="bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-zinc-100 flex flex-col md:flex-row items-center gap-2 md:gap-4 hover:border-brand-dark/20 transition-all cursor-pointer"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-brand-dark w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-center md:text-left overflow-hidden w-full">
                <p className="text-[9px] md:text-xs text-zinc-400 font-extrabold uppercase tracking-wider">Email</p>
                <p className="font-extrabold text-zinc-805 text-[10px] md:text-sm truncate">info@letsdeal</p>
              </div>
            </a>

            <div 
              className="bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-zinc-100 flex flex-col md:flex-row items-center gap-2 md:gap-4 hover:border-brand-dark/20 transition-all"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-brand-dark w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-center md:text-left overflow-hidden w-full">
                <p className="text-[9px] md:text-xs text-zinc-400 font-extrabold uppercase tracking-wider">Location</p>
                <p className="font-extrabold text-zinc-805 text-[10px] md:text-sm truncate">Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column Form Card - Super optimized for mobile "one view" */}
        <div className="bg-white p-4 md:p-10 rounded-2xl md:rounded-[40px] shadow-lg border border-zinc-150/60">
          <h2 className="text-sm md:text-2xl font-black mb-3 md:mb-8 text-zinc-900">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">First Name</label>
                <input required type="text" placeholder="John" className="w-full px-3.5 py-2 md:px-4 md:py-3 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Last Name</label>
                <input required type="text" placeholder="Doe" className="w-full px-3.5 py-2 md:px-4 md:py-3 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full px-3.5 py-2 md:px-4 md:py-3 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Message</label>
              <textarea required rows={3} placeholder="How can we help you?" className="w-full px-3.5 py-2 md:px-4 md:py-3 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1f1926] text-white py-2.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-1.5 hover:bg-brand-primary active:scale-95 transition-all shadow-md text-xs uppercase tracking-wider">
              <Send className="w-3.5 h-3.5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
