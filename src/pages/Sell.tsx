import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Upload, DollarSign, ShieldCheck, Clock, X } from 'lucide-react';

export const Sell = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [images, setImages] = useState<{ id: string; url: string; file: File }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      // Clean up object URLs to prevent memory leaks
      images.forEach(img => URL.revokeObjectURL(img.url));
    };
  }, [images]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files) as File[];
      const remainingSlots = 5 - images.length;
      const filesToProcess = selectedFiles.slice(0, remainingSlots);

      const newImages = filesToProcess.map(file => ({
        id: Math.random().toString(36).substring(2, 9),
        url: URL.createObjectURL(file),
        file
      }));

      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (id: string, url: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    URL.revokeObjectURL(url);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (images.length >= 5) return;

    if (e.dataTransfer.files) {
      const allFiles = Array.from(e.dataTransfer.files) as File[];
      const droppedFiles = allFiles.filter(file => file.type.startsWith('image/'));
      const remainingSlots = 5 - images.length;
      const filesToProcess = droppedFiles.slice(0, remainingSlots);

      const newImages = filesToProcess.map(file => ({
        id: Math.random().toString(36).substring(2, 9),
        url: URL.createObjectURL(file),
        file
      }));

      setImages(prev => [...prev, ...newImages]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 pb-20 h-[calc(100vh-65px)] md:min-h-screen bg-zinc-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-sm w-full bg-white p-6 md:p-12 rounded-[28px] md:rounded-[40px] shadow-xl border border-zinc-100 text-center"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8 border border-emerald-100">
            <CheckCircle2 className="text-emerald-600 w-7 h-7 md:w-10 md:h-10" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-zinc-900 mb-2">Request Received!</h2>
          <p className="text-zinc-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
            Our evaluation team will review your item details and uploaded photos and contact you within 24 hours with a fair market offer.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setImages([]);
            }}
            className="w-full bg-[#1f1926] text-white py-3 rounded-xl font-bold hover:bg-brand-primary transition-all active:scale-95 text-xs uppercase tracking-wider"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24 md:pt-32 md:pb-20 min-h-screen bg-zinc-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-4 lg:gap-20 items-stretch">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <span className="inline-block self-center lg:self-start px-2.5 py-0.5 bg-brand-dark/10 text-brand-dark text-[10px] font-black uppercase tracking-wider rounded-full mb-2">
            Quick Selling
          </span>
          <h1 className="font-display text-xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-2 sm:mb-6 text-zinc-900">
            Sell your items for the <span className="text-brand-dark">best price</span>
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-zinc-500 mb-4 sm:mb-6 lg:mb-12 max-w-xl mx-auto lg:mx-0">
            Get a quick, fair, and transparent evaluation. We handle all representation and guide you to a hassle-free transaction.
          </p>

          <div className="hidden lg:space-y-6 lg:block">
            {[
              { icon: DollarSign, title: 'Best Market Price', desc: 'We offer competitive prices based on real-time market data.' },
              { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Verified transactions and secure payment on delivery.' },
              { icon: Clock, title: 'Quick Process', desc: 'Get an offer within 24 hours and sell your items in days.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-left font-sans">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-zinc-100">
                  <item.icon className="text-brand-dark w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-zinc-800 mb-0.5">{item.title}</h3>
                  <p className="text-zinc-405 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 md:p-10 rounded-2xl md:rounded-[40px] shadow-lg border border-zinc-150/60 flex flex-col justify-center">
          <h2 className="text-sm md:text-2xl font-black mb-3 md:mb-8 text-zinc-900">Item Details</h2>
          <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-6">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Category</label>
                <div className="relative">
                  <select 
                    required 
                    defaultValue=""
                    className="w-full px-3.5 py-2 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-250 focus:outline-none cursor-pointer appearance-none text-zinc-700 text-xs md:text-sm"
                  >
                    <option value="" disabled hidden>Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="motorcycle">Motorcycle</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-500">
                    <svg className="fill-current h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95a1 1 0 0 1-1.414 0L3.768 8.12a1 1 0 1 1 1.414-1.415L9 10.586l3.818-3.88a1 1 0 1 1 1.414 1.415l-5.118 4.83Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Item Name</label>
                <input required type="text" placeholder="iPhone 15 Pro" className="w-full px-3.5 py-2 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Year</label>
                <input required type="number" placeholder="2022" className="w-full px-3.5 py-2 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Mileage (KM)</label>
                <input required type="number" placeholder="45000" className="w-full px-3.5 py-2 bg-zinc-50 rounded-lg md:rounded-xl border border-zinc-200 focus:outline-none text-xs md:text-sm" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center mb-0.5">
                <label className="text-[10px] md:text-sm font-extrabold text-zinc-500 uppercase tracking-wider">Upload Photos</label>
                <span className="text-[9px] md:text-xs text-zinc-400 font-bold">{images.length}/5 photos</span>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
              />

              {images.length === 0 ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-zinc-200 rounded-xl p-3 md:p-8 text-center hover:border-brand-dark/50 hover:bg-zinc-50/50 transition-all cursor-pointer group"
                >
                  <Upload className="w-5 h-5 md:w-8 md:h-8 text-zinc-400 mx-auto mb-1 md:mb-3 group-hover:text-brand-dark transition-colors shrink-0" />
                  <p className="text-[11px] md:text-sm font-bold text-zinc-700">Click to upload files</p>
                  <p className="text-[9px] md:text-xs text-zinc-400 mt-0.5">Drag & drop up to 5 photos</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-5 gap-1.5">
                    {images.map((img, idx) => (
                      <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 group bg-zinc-100 shrink-0">
                        <img 
                          src={img.url} 
                          alt={`Uploaded ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(img.id, img.url)}
                          className="absolute top-0.5 right-0.5 p-0.5 bg-black/60 hover:bg-red-650 text-white rounded-full transition-colors scale-90"
                          title="Remove photo"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    ))}

                    {images.length < 5 && (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-zinc-200 hover:border-brand-dark hover:bg-zinc-50/50 rounded-lg flex flex-col items-center justify-center cursor-pointer aspect-square p-0.5 group transition-all shrink-0"
                      >
                        <Upload className="w-3.5 h-3.5 text-zinc-400 group-hover:text-brand-dark transition-colors" />
                        <span className="text-[8px] font-black text-zinc-550 text-center mt-0.5">Add</span>
                      </div>
                    )}
                  </div>

                  {images.length === 5 && (
                    <p className="text-[9px] md:text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Photos approved ready
                    </p>
                  )}
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-[#1f1926] text-white py-2.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-1.5 hover:bg-brand-primary active:scale-95 transition-all shadow-md text-xs uppercase tracking-wider">
              Submit for Evaluation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
