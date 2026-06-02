import React, { useState } from 'react';
import { HelpCircle, Book, MessageSquare, Shield, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I buy an item on Let's Deal?",
      answer: "Browse our marketplace, select any item you like (Mobile Phones, Electronics, Vehicles, or Motorcycles), and click 'Call' or 'Chat' to connect with the seller's representatives. We'll guide you through the viewing, inspection, and safe delivery/pickup process."
    },
    {
      question: "Is the pricing transparent?",
      answer: "Yes, all prices listed are straight and inclusive of all applicable local charges. There are absolutely no hidden fees."
    },
    {
      question: "Is payment secure?",
      answer: "We ensure safe dealings. All premium or verified transactions have secure payment protections on delivery, bringing peace of mind to both parties."
    },
    {
      question: "What is 'Fulfilled by FD'?",
      answer: "Items with this badge are stored, inspected for genuine specifications, and packaged or delivered directly via FD courier partners for absolute guarantee."
    }
  ];

  return (
    <div className="pt-20 pb-24 md:pt-32 md:pb-20 min-h-screen bg-zinc-50 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
        {/* Header section with back button */}
        <div className="text-center mb-6 md:mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-brand-dark transition-colors font-bold text-xs mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">Help Center</h1>
          <p className="text-zinc-500 text-xs md:text-sm mt-1">Everything you need to know about using FIX DEAL.</p>
        </div>

        {/* Categories Block - Micro responsive grid */}
        <div className="grid grid-cols-3 gap-2.5 md:gap-6 mb-6 md:mb-10">
          {[
            { icon: Book, title: 'Guides', desc: 'Buying tips' },
            { icon: MessageSquare, title: 'Support', desc: '24/7 help' },
            { icon: Shield, title: 'Safety', desc: 'Secure info' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-zinc-100 text-center flex flex-col items-center justify-center">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-1.5 md:mb-4">
                <item.icon className="text-brand-dark w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-[11px] md:text-base text-zinc-800 leading-tight">{item.title}</h3>
              <p className="hidden xs:block text-[9px] md:text-xs text-zinc-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs section - Mobile Accordion Style designed for one-view layout */}
        <div className="bg-white rounded-2xl md:rounded-[40px] p-4 md:p-10 shadow-sm border border-zinc-100">
          <h2 className="text-sm md:text-2xl font-black mb-4 md:mb-8 flex items-center gap-2 text-zinc-900">
            <HelpCircle className="text-brand-dark w-4 md:w-6 h-4 md:h-6" /> Frequently Asked Questions
          </h2>
          <div className="space-y-2 md:space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-zinc-100 last:border-0 pb-2 last:pb-0">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center text-left py-2 font-bold text-xs md:text-base text-zinc-800 hover:text-brand-dark transition-colors gap-3"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />}
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
                        <p className="text-[11px] md:text-sm text-zinc-650 leading-relaxed pt-1.5 pb-2 md:pb-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
