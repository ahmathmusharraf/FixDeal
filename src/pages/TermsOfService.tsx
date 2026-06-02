import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const TermsOfService = () => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Let's Deal, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "2. Use of Services",
      content: "You must be at least 18 years old and have the legal capacity to enter into a contract to use our services. You are responsible for maintaining the confidentiality of your account information. You agree not to use our services for any illegal or unauthorized purpose, or to violate any laws in your jurisdiction."
    },
    {
      title: "3. Listings and Transactions",
      content: "Let's Deal provides a platform for buying, selling, and renting cars. We do not guarantee the accuracy of any listings or the quality of any vehicles. Users are responsible for verifying the condition and details of any vehicle before entering into a transaction. Let's Deal is not a party to transactions between users unless explicitly stated."
    },
    {
      title: "4. Fees and Payments",
      content: "Let's Deal may charge fees for certain services, such as listing a car or booking a service appointment. All fees are non-refundable unless otherwise stated."
    },
    {
      title: "5. Limitation of Liability & Changes",
      content: "Let's Deal is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. We reserve the right to modify these Terms of Service at any time. Your continued use of our services constitutes acceptance of the new terms."
    }
  ];

  return (
    <div className="pt-20 pb-24 md:pt-32 md:pb-20 min-h-screen bg-zinc-50 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-4 md:px-6 w-full">
        {/* Back Button and Header */}
        <div className="text-center mb-6 md:mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-brand-dark transition-colors font-bold text-xs mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          
          <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-dark/5 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <ShieldCheck className="text-brand-dark w-5 md:w-8 h-5 md:h-8" />
          </div>

          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 text-[10px] md:text-sm mt-1">Last updated: March 4, 2026</p>
        </div>

        {/* Accordion List for Mobile One-View layout */}
        <div className="bg-white rounded-2xl md:rounded-[40px] p-4 md:p-10 shadow-sm border border-zinc-100">
          <div className="space-y-2 md:space-y-4">
            {sections.map((section, idx) => {
              const isOpen = openSection === idx;
              return (
                <div key={idx} className="border-b border-zinc-100 last:border-0 pb-2 last:pb-0">
                  <button
                    onClick={() => setOpenSection(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2.5 md:py-4 font-black text-xs md:text-lg text-zinc-800 hover:text-brand-dark transition-colors gap-3"
                  >
                    <span>{section.title}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-450 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-450 shrink-0" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[11px] md:text-sm text-zinc-600 leading-relaxed pt-1 pb-3 md:pb-6">
                          {section.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-6 text-[10px] text-zinc-400">
          By utilizing FIX DEAL services, you unconditionally pledge to comply with these guidelines.
        </div>
      </div>
    </div>
  );
};
