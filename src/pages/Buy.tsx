import React, { useState } from 'react';
import { CarCard } from '../components/CarCard';
import { Search, SlidersHorizontal, Layers, Tablet, Tv, Car, Bike, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { BRANDS, CAR_LISTINGS } from '../constants';

const CATEGORIES = [
  { id: 'Mobile Phone', label: 'Mobile Phones', icon: Tablet },
  { id: 'Electronics', label: 'Electronics', icon: Tv },
  { id: 'Vehicle', label: 'Vehicles', icon: Car },
  { id: 'Motorcycle', label: 'Motorcycles', icon: Bike }
];

export const Buy = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCars = CAR_LISTINGS.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand ? car.brand.toLowerCase() === selectedBrand.toLowerCase() : true;
    const matchesCategory = selectedCategory ? car.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="pt-20 pb-24 lg:pt-32 lg:pb-20 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Creative Top Hero Widget - Optimized for Mobile */}
        <div className="block lg:hidden mb-5 bg-[#1c1625] p-5 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-brand-dark/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl" />
          
          <div className="relative z-10 flex flex-col gap-1.5">
            <span className="self-start inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[8.5px] font-black uppercase tracking-widest rounded-full">
              <Sparkles className="w-2.5 h-2.5 animate-pulse" /> SRI LANKA'S HOTTEST COMMERCE
            </span>
            <h1 className="text-xl font-black tracking-tight leading-tight">Find Your Next Big Deal</h1>
            <p className="text-white/60 text-[11px] leading-relaxed max-w-xs">
              Sleek mobile devices, premium vehicles, top-tier audio gear, & motorcycles at transparent prices.
            </p>
            
            {/* Live Stats Pill Badge inside the main mobile card view */}
            <div className="flex items-center gap-3.5 mt-2.5 pt-2.5 border-t border-white/5 text-[9px] text-white/50 font-bold">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{CAR_LISTINGS.length} Listings Live</span>
              </div>
              <div className="opacity-20">•</div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100% Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-dark/10 text-brand-dark text-[10px] font-black tracking-widest uppercase rounded-full">
              <Sparkles className="w-3 h-3" /> Premier Island-Wide Trading
            </span>
          </div>
          <h1 className="font-display text-4xl font-black text-zinc-900 tracking-tight leading-none mb-3">Explore Our Marketplace</h1>
          <p className="text-zinc-500 text-sm max-w-2xl">Find mobile phones, electronics, premium vehicles, and performance motorcycles from completely verified sellers in Sri Lanka.</p>
        </div>

        {/* Sticky Search & Filter Container */}
        <div className="sticky top-12 lg:top-20 z-30 -mx-4 px-4 lg:-mx-6 lg:px-6 py-3.5 lg:py-6 bg-zinc-50/90 backdrop-blur-xl mb-6 lg:mb-12 border-b border-zinc-200/50">
          <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-4 max-w-7xl mx-auto">
            <div className="relative flex-grow group">
              <Search className="absolute left-3.5 lg:left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4 lg:w-5 lg:h-5 group-focus-within:text-brand-dark transition-colors" />
              <input 
                type="text" 
                placeholder="Search by brand, model or category..." 
                className="w-full pl-10 lg:pl-14 pr-4 lg:pr-6 py-2.5 lg:py-5 bg-white rounded-xl lg:rounded-3xl border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark/20 transition-all text-xs lg:text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex lg:hidden items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl font-bold text-xs hover:bg-zinc-50 transition-all shadow-sm active:scale-95">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
            </button>
            <button className="hidden lg:flex items-center justify-center gap-3 px-8 py-5 bg-white border border-zinc-200 rounded-3xl font-bold hover:bg-zinc-50 transition-all shadow-sm active:scale-95 text-base">
              <SlidersHorizontal className="w-5 h-5" /> Filters
            </button>
          </div>

          {/* Quick Hot Searches Tags on Mobile */}
          <div className="lg:hidden flex items-center gap-2 mt-2 px-1 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider shrink-0 flex items-center gap-0.5">
              <Flame className="w-3 h-3 text-red-500 fill-current" /> Hot:
            </span>
            {['iPhone 15', 'Prado', 'Sony', 'PS5', 'R1'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={`text-[9.5px] px-2.5 py-1 rounded-full font-bold transition-all shrink-0 border ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                    : 'bg-white text-zinc-600 border-zinc-200/70 hover:border-zinc-300'
                }`}
              >
                {tag}
              </button>
            ))}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-[9px] hover:underline text-red-505 font-black uppercase shrink-0 px-1"
              >
                Reset
              </button>
            )}
          </div>

          {/* Creative Category Switcher Grid on Mobile (Bento Style) */}
          <div className="lg:hidden mt-3.5">
            <div className="grid grid-cols-5 gap-1.5 bg-white p-1 rounded-xl border border-zinc-100 shadow-sm">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex flex-col items-center justify-center py-2.5 px-0.5 rounded-lg transition-all duration-300 ${
                  !selectedCategory 
                    ? 'bg-[#1f1926] text-white shadow-md shadow-brand-dark/15' 
                    : 'text-zinc-500 hover:bg-zinc-50'
                }`}
              >
                <div className="w-7 h-7 rounded-md flex items-center justify-center bg-zinc-100/5 mb-1">
                  <Layers className={`w-4 h-4 ${!selectedCategory ? 'text-white' : 'text-zinc-650'}`} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-wider">All</span>
              </button>
              {CATEGORIES.map(category => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex flex-col items-center justify-center py-2.5 px-0.5 rounded-lg transition-all duration-300 min-w-0 ${
                      isSelected 
                        ? 'bg-[#1f1926] text-white shadow-md shadow-brand-dark/15' 
                        : 'text-zinc-500 hover:bg-zinc-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center mb-1 transition-all ${
                      isSelected ? 'bg-white/10' : 'bg-zinc-50'
                    }`}>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-zinc-600'}`} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-wider truncate max-w-full">
                      {category.id === 'Mobile Phone' ? 'Mobile' : category.id === 'Electronics' ? 'Electro' : category.id === 'Vehicle' ? 'Car' : 'Bike'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories Quick Filter Row (Desktop Only) */}
          <div className="hidden lg:block max-w-7xl mx-auto mt-6 border-b border-zinc-100 pb-4">
            <div className="flex gap-2 min-w-full overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${!selectedCategory ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' : 'bg-white text-zinc-600 border border-zinc-200/60 hover:bg-zinc-50'}`}
              >
                <Layers className="w-3.5 h-3.5" />
                All Categories
              </button>
              {CATEGORIES.map(category => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${isSelected ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' : 'bg-white text-zinc-600 border border-zinc-200/60 hover:bg-zinc-50'}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Brand Quick Filters - Micro Mobile Optimization & Premium Slate Badges */}
          <div className="max-w-7xl mx-auto mt-3 lg:mt-4">
            <div className="flex gap-1.5 lg:gap-3 overflow-x-auto py-1 no-scrollbar">
              <button 
                onClick={() => setSelectedBrand(null)}
                className={`px-3 py-1.5 lg:px-8 lg:py-2.5 rounded-lg lg:rounded-xl text-[9px] lg:text-xs font-black whitespace-nowrap transition-all uppercase tracking-wider ${
                  !selectedBrand 
                    ? 'bg-[#1f1926] text-white border border-[#1f1926] shadow-sm' 
                    : 'bg-white text-zinc-400 border border-zinc-200/60 hover:border-zinc-300'
                }`}
              >
                All Brands
              </button>
              {BRANDS.map(brand => (
                <button 
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1.5 lg:px-8 lg:py-2.5 rounded-lg lg:rounded-xl text-[9px] lg:text-xs font-black whitespace-nowrap transition-all uppercase tracking-wider ${
                    selectedBrand === brand 
                      ? 'bg-[#1f1926] text-white border border-[#1f1926] shadow-sm' 
                      : 'bg-white text-zinc-400 border border-zinc-200/60 hover:border-zinc-300'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Display for Products */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 lg:py-32 bg-white rounded-2xl lg:rounded-[40px] border border-dashed border-zinc-200 px-4">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <Search className="text-zinc-300 w-7 h-7 lg:w-10 lg:h-10" />
            </div>
            <h3 className="text-base lg:text-xl font-bold text-zinc-900 mb-1 lg:mb-2 text-center">No items found</h3>
            <p className="text-zinc-500 text-xs lg:text-sm mb-6 lg:mb-8 text-center">Try adjusting your category, brand or search parameters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedBrand(null); setSelectedCategory(null); }}
              className="px-5 py-2.5 lg:px-6 lg:py-3 bg-brand-dark text-white rounded-xl lg:rounded-2xl font-bold text-xs lg:text-base hover:bg-brand-primary transition-all shadow-md active:scale-95"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
