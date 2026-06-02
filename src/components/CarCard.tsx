import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ShieldCheck, Heart, Eye, X, Calendar, Gauge, MapPin } from 'lucide-react';
import { CarListing } from '../constants';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: CarListing;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(car.id));
  }, [car.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== car.id);
    } else {
      newFavorites = [...favorites, car.id];
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="card-soft flex flex-col h-full group"
      >
        <div className="relative aspect-[16/10] overflow-hidden block">
          <Link to={`/car/${car.id}`} className="w-full h-full">
            <img 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </Link>
          <button 
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10 ${isFavorite ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-black/40 text-white hover:bg-black/60'}`}
          >
            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowQuickView(true); }}
            className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#1f1926]/90 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-primary transition-all z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg shadow-black/20"
          >
            <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Quick View
          </button>
        </div>
        <div className="p-3 sm:p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <Link to={`/car/${car.id}`} className="hover:text-brand-dark transition-colors">
              <h3 className="font-display font-bold text-sm sm:text-lg leading-tight line-clamp-1">
                {car.brand} {car.model}
              </h3>
            </Link>
            <img 
              src={car.logo} 
              alt={car.brand} 
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-zinc-400 text-[10px] sm:text-xs font-medium mb-2 sm:mb-3 line-clamp-1">{car.spec}</p>
          
          <div className="flex gap-2 sm:gap-4 text-zinc-500 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {car.year}
            </span>
            <span className="flex items-center gap-1">
              {car.category === 'Mobile Phone' ? (
                <>
                  <Gauge className="w-3 h-3" /> {car.mileage}% Battery
                </>
              ) : car.category === 'Electronics' ? (
                <>
                  <Gauge className="w-3 h-3" /> {car.mileage}% Condition
                </>
              ) : (
                <>
                  <Gauge className="w-3 h-3" /> {car.mileage.toLocaleString()} KM
                </>
              )}
            </span>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-1.5 sm:gap-2">
              <p className="text-xs min-[380px]:text-sm sm:text-2xl font-black text-brand-dark shrink-0">
                LKR {car.price.toLocaleString()}
              </p>
              {car.fulfilledByFD && (
                <div className="inline-flex items-center gap-0.5 sm:gap-1 text-[7.5px] sm:text-[10px] font-bold text-brand-dark uppercase tracking-wider bg-brand-dark/5 px-1.5 py-0.5 sm:py-1 rounded border border-brand-dark/10 self-start sm:self-auto">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500" />
                  <span className="whitespace-nowrap">FD Verified</span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <a 
                href={`tel:+971502316225`}
                className="bg-brand-dark text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-brand-primary transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" /> CALL
              </a>
              <button 
                onClick={() => window.open('https://wa.me/971502316225', '_blank')}
                className="bg-brand-dark text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-brand-primary transition-colors"
              >
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" /> CHAT
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuickView(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm md:max-w-2xl bg-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setShowQuickView(false)}
                className="absolute top-3 right-3 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center z-20 hover:bg-white border border-zinc-200 shadow-sm transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-zinc-600" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="relative h-44 md:h-auto overflow-hidden bg-zinc-100">
                  <img 
                    src={car.image} 
                    alt={car.model} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Price overlay on mobile */}
                  <div className="absolute bottom-3 left-3 md:hidden bg-[#1f1926]/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-white font-black text-xs">
                    LKR {car.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-5 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h2 className="text-base md:text-2xl font-black text-zinc-900 leading-snug">{car.brand} {car.model}</h2>
                        <p className="text-zinc-500 font-bold text-[10px] md:text-sm mt-0.5">{car.trim} • {car.spec}</p>
                      </div>
                      <img src={car.logo} alt={car.brand} className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0" referrerPolicy="no-referrer" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                        <p className="text-[8px] md:text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide mb-0.5">Year</p>
                        <p className="font-extrabold text-zinc-850 text-xs md:text-sm">{car.year}</p>
                      </div>
                      <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                        <p className="text-[8px] md:text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide mb-0.5">
                          {car.category === 'Mobile Phone' ? 'Battery' : car.category === 'Electronics' ? 'Condition' : 'Mileage'}
                        </p>
                        <p className="font-extrabold text-zinc-850 text-xs md:text-sm">
                          {car.category === 'Mobile Phone' ? `${car.mileage}% Health` : car.category === 'Electronics' ? `${car.mileage}% Cond.` : `${car.mileage.toLocaleString()} KM`}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Only Price */}
                    <div className="hidden md:block mb-6">
                      <p className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wide mb-1">Price</p>
                      <p className="text-3xl font-black text-[#1f1926]">LKR {car.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-2 md:mt-0">
                    <Link 
                      to={`/car/${car.id}`}
                      className="w-full bg-[#1f1926] hover:bg-brand-primary active:scale-95 text-white py-2.5 md:py-3.5 rounded-xl font-bold text-center block text-xs md:text-sm shadow-md transition-all uppercase tracking-wider"
                      onClick={() => setShowQuickView(false)}
                    >
                      View Full Details
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href="tel:+971502316225"
                        className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 py-2 rounded-xl font-bold text-[10px] md:text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <Phone className="w-3.5 h-3.5 fill-current text-zinc-500" /> Call
                      </a>
                      <button 
                        onClick={() => window.open('https://wa.me/971502316225', '_blank')}
                        className="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 py-2 rounded-xl font-bold text-[10px] md:text-xs flex items-center justify-center gap-1.5 transition-all border border-emerald-150"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600" /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
