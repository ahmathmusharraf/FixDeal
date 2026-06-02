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
      <div className="pt-40 pb-20 min-h-screen bg-zinc-50 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed">
            Our evaluation team will review your item details and uploaded photos and contact you within 24 hours with a fair market offer.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setImages([]);
            }}
            className="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all active:scale-95"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 sm:pt-32 sm:pb-20 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
        <div className="text-center lg:text-left">
          <span className="inline-block px-3 py-1 bg-brand-dark/10 text-brand-dark text-[10px] font-black uppercase tracking-wider rounded-full mb-3">
            Quick Selling
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-6">
            Sell your items for the <span className="text-brand-dark">best price</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-650 mb-6 lg:mb-12 max-w-xl mx-auto lg:mx-0">
            Get a quick, fair, and transparent evaluation. We handle all the representation and guide you to a hassle-free transaction.
          </p>

          <div className="hidden sm:space-y-6 sm:block">
            {[
              { icon: DollarSign, title: 'Best Market Price', desc: 'We offer competitive prices based on real-time market data.' },
              { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Verified transactions and secure payment on delivery.' },
              { icon: Clock, title: 'Quick Process', desc: 'Get an offer within 24 hours and sell your items in days.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-left">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <item.icon className="text-brand-dark w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] md:rounded-[40px] shadow-md border border-zinc-100">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-zinc-900">Item Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-700">Category</label>
                <div className="relative">
                  <select 
                    required 
                    defaultValue=""
                    className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 cursor-pointer appearance-none text-zinc-700 text-sm"
                  >
                    <option value="" disabled hidden>Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="motorcycle">motorcycle</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95a1 1 0 0 1-1.414 0L3.768 8.12a1 1 0 1 1 1.414-1.415L9 10.586l3.818-3.88a1 1 0 1 1 1.414 1.415l-5.118 4.83Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-700">Item Name</label>
                <input required type="text" placeholder="e.g. iPhone 15 Pro" className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 text-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-700">Year</label>
                <input required type="number" placeholder="2022" className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 text-sm" />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-700">Mileage (KM)</label>
                <input required type="number" placeholder="45000" className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 text-sm" />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold text-zinc-700">Upload Photos</label>
                <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">{images.length}/5 photos</span>
              </div>

              {/* Hidden file input */}
              <input
                type="input" // Using as a file input trigger natively
                style={{ display: 'none' }}
              />
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
                  className="border-2 border-dashed border-zinc-200 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center hover:border-brand-dark/50 hover:bg-zinc-50/50 transition-all cursor-pointer group"
                >
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 mx-auto mb-2 sm:mb-4 group-hover:text-brand-dark transition-colors" />
                  <p className="text-xs sm:text-sm font-semibold text-zinc-700">Click to upload or drag & drop</p>
                  <p className="text-[10px] sm:text-xs text-zinc-450 mt-0.5">Upload up to 5 photos</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-2">
                    {images.map((img, idx) => (
                      <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 group bg-zinc-100">
                        <img 
                          src={img.url} 
                          alt={`Uploaded ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(img.id, img.url)}
                          className="absolute top-0.5 right-0.5 p-1 bg-black/60 hover:bg-red-650 text-white rounded-full scale-75 sm:scale-100 transition-colors"
                          title="Remove photo"
                        >
                          <X className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    ))}

                    {images.length < 5 && (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-zinc-200 hover:border-brand-dark hover:bg-zinc-50/50 rounded-lg flex flex-col items-center justify-center cursor-pointer aspect-square p-1 group transition-all"
                      >
                        <Upload className="w-4 h-4 text-zinc-400 group-hover:text-brand-dark transition-colors" />
                        <span className="text-[8px] sm:text-[10px] font-bold text-zinc-650 text-center mt-0.5">Add</span>
                      </div>
                    )}
                  </div>

                  {images.length === 5 && (
                    <p className="text-[10.5px] sm:text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Photos approved ready
                    </p>
                  )}
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-brand-dark text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm hover:bg-brand-primary transition-all active:scale-95 shadow-lg shadow-brand-dark/10">
              Submit for Evaluation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
