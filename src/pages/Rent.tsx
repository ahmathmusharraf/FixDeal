import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Key, Bell, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Rent = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="pt-20 pb-20 md:pt-32 md:pb-20 h-[calc(100vh-65px)] md:min-h-screen bg-zinc-50 flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-5 sm:p-12 rounded-[28px] sm:rounded-[40px] shadow-xl border border-zinc-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl" />

          <div className="w-12 h-12 sm:w-20 sm:h-20 bg-brand-dark/5 rounded-xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8">
            <Key className="text-brand-dark w-6 h-6 sm:w-10 sm:h-10" />
          </div>

          <span className="inline-block px-2.5 py-0.5 sm:py-1 bg-brand-dark/10 text-brand-dark text-[9px] sm:text-xs font-black uppercase tracking-wider rounded-full mb-3 sm:mb-6">
            Rentals Feature
          </span>

          <h1 className="font-display text-xl sm:text-5xl font-extrabold text-zinc-900 mb-2 sm:mb-4 leading-tight">
            Coming Soon
          </h1>
          
          <p className="text-zinc-550 mb-5 sm:mb-8 leading-relaxed max-w-sm mx-auto text-[11px] sm:text-sm">
            We are working hard to bring Sri Lanka's premium and most trusted renting network for Vehicles, High-End Electronics, and Motorcycles. Stay tuned!
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-50 border border-emerald-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 text-emerald-850 text-xs sm:text-sm font-bold max-w-sm mx-auto justify-center"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              You've subscribed! We'll notify you.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 max-w-sm mx-auto mb-6 sm:mb-8">
              <input
                required
                type="email"
                placeholder="Enter email to get notified..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3.5 bg-zinc-50 rounded-xl sm:rounded-2xl border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-brand-dark/20 text-xs sm:text-sm text-center"
              />
              <button
                type="submit"
                className="w-full bg-[#1f1926] hover:bg-brand-primary text-white font-extrabold px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 transition-all active:scale-95 text-xs uppercase tracking-wider shrink-0 shadow-md shadow-black/10"
              >
                <Bell className="w-3.5 h-3.5" /> Notify Me
              </button>
            </form>
          )}

          <div className="border-t border-zinc-100 pt-5 sm:pt-8 flex justify-center">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 text-zinc-500 hover:text-brand-dark transition-colors font-bold text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Go Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

