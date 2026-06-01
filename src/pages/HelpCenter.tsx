import React from 'react';
import { HelpCircle, Book, MessageSquare, Shield } from 'lucide-react';

export const HelpCenter = () => {
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
    <div className="pt-32 pb-20 min-h-screen bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-zinc-500">Everything you need to know about using Let's Deal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Book, title: 'Guides', desc: 'Step-by-step buying guides' },
            { icon: MessageSquare, title: 'Support', desc: '24/7 customer assistance' },
            { icon: Shield, title: 'Safety', desc: 'Verified transaction info' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-brand-dark w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-zinc-100">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <HelpCircle className="text-brand-dark" /> Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
