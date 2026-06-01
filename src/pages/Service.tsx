import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, Bell, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Service = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-zinc-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl" />

          <div className="w-20 h-20 bg-brand-dark/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Wrench className="text-brand-dark w-10 h-10" />
          </div>

          <span className="inline-block px-4 py-1.5 bg-brand-dark/10 text-brand-dark text-xs font-black uppercase tracking-wider rounded-full mb-6">
            Professional Services
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 leading-tight">
            Coming Soon
          </h1>
          
          <p className="text-zinc-500 mb-8 leading-relaxed max-w-md mx-auto text-sm md:text-base">
            We are curating Sri Lanka's finest team of certified inspectors, maintenance experts, and support staff to assist you. This feature will be live shortly!
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3 text-emerald-800 text-sm font-semibold max-w-sm mx-auto justify-center"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              You've subscribed! We'll notify you.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                required
                type="email"
                placeholder="Enter your email to get notified..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-5 py-3.5 bg-zinc-50 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 text-sm"
              />
              <button
                type="submit"
                className="bg-brand-dark hover:bg-brand-primary text-white font-bold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 text-sm shrink-0"
              >
                <Bell className="w-4 h-4" /> Notify Me
              </button>
            </form>
          )}

          <div className="border-t border-zinc-100 pt-8 flex justify-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-zinc-500 hover:text-brand-dark transition-colors font-bold text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

