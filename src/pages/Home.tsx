import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ShoppingBag, 
  DollarSign, 
  Key, 
  Wrench,
  Car,
  Search,
  Star
} from 'lucide-react';
import { SERVICES, BRANDS, CAR_LISTINGS } from '../constants';
import { CarCard } from '../components/CarCard';
import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedAds } from '../services/db';
import { AdListing } from '../types';
import { SEO } from '../components/SEO';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-brand-dark">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-primary/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Sri Lanka's #1 Marketplace
          </div>
          <h1 className="font-display text-3xl sm:text-6xl md:text-8xl font-black leading-[1.1] md:leading-[0.9] mb-4 sm:mb-8 text-white tracking-tighter">
            THE FUTURE OF <span className="text-zinc-500 italic">TRADING</span>
          </h1>
          <p className="text-sm sm:text-xl text-zinc-400 mb-6 sm:mb-10 max-w-lg leading-relaxed font-light">
            The most sophisticated marketplace in Sri Lanka. Explore, buy, and sell with absolute precision.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-10">
            <Link to="/buy" className="bg-white text-brand-dark px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 text-sm sm:text-base hover:bg-zinc-100 transition-all shadow-xl shadow-white/10 active:scale-95">
              Explore Deals <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link to="/sell" className="bg-transparent border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-white/10 transition-all active:scale-95">
              Sell Your Items
            </Link>
          </div>

          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-zinc-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition-all backdrop-blur-md"
              placeholder="Search for premium items..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/buy?q=${(e.target as HTMLInputElement).value}`);
                }
              }}
            />
          </div>
          
          <div className="mt-6 sm:mt-12 flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-left text-xs sm:text-sm">
              <p className="font-bold text-white">10k+ Happy Users</p>
              <p className="text-zinc-400">Trusted across Sri Lanka</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Car"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl z-20 max-w-[200px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-brand-dark/10 p-2 rounded-lg">
                <CheckCircle2 className="text-brand-dark w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-brand-dark">Verified Deals</span>
            </div>
            <p className="text-xs text-zinc-500">All items undergo verified condition inspections.</p>
          </div>
          <div className="absolute -top-6 -right-6 bg-white text-brand-dark p-6 rounded-3xl shadow-xl z-20">
            <p className="text-3xl font-black">24/7</p>
            <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Brands = () => {
  return (
    <section className="py-8 md:py-16 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-12">
        <p className="text-center text-[10px] sm:text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">
          Trusted by all major manufacturers
        </p>
      </div>
      <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span 
            key={i} 
            className="text-2xl sm:text-4xl font-display font-black text-zinc-200 hover:text-brand-dark transition-colors cursor-default"
          >
            {brand}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

const CarListings = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isInteracting) return;

    const interval = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      
      if (el.scrollLeft >= maxScroll - 15) {
        // Wrap around smoothly to the start
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Retrieve width of the first visible child card + gap (16px)
        const firstChild = el.firstElementChild as HTMLElement;
        const scrollAmount = firstChild ? firstChild.clientWidth + 16 : 280;
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4000); // Shift every 4 seconds dynamically

    return () => clearInterval(interval);
  }, [isInteracting]);

  // Temporarily pause auto-scroll during touch / mouse interactions
  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    // Wait for 5 seconds of absolute quiet before resuming auto-scroller
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8 md:mb-16">
          <div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-2 sm:mb-4">Curated Selection</p>
            <h2 className="font-display text-2xl md:text-4xl font-black tracking-tight">Trending Items</h2>
          </div>
          <Link to="/buy" className="hidden md:flex items-center gap-2 text-zinc-400 text-sm font-bold hover:text-brand-dark transition-colors group">
            Slide to see more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar scroll-smooth"
        >
          {CAR_LISTINGS.slice(0, 4).map((car) => (
            <div key={car.id} className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] snap-start">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-12 md:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-2 md:mb-4">Our Ecosystem</p>
          <h2 className="font-display text-2xl md:text-4xl font-black tracking-tight">Premium Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Buy - Large Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 sm:row-span-2 group relative bg-zinc-900 rounded-2xl md:rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[240px] sm:min-h-[400px]"
          >
            <img 
              src={SERVICES[0].image} 
              alt={SERVICES[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center mb-4 md:mb-6">
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-brand-dark" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">{SERVICES[0].title}</h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xs">
                {SERVICES[0].description}
              </p>
              <Link to="/buy" className="inline-flex items-center gap-1.5 md:gap-2 bg-white text-brand-dark px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold text-xs md:text-base hover:gap-3 transition-all">
                Explore Deals <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Sell - Medium Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="sm:col-span-2 group relative bg-brand-dark rounded-2xl md:rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[180px] sm:min-h-[250px]"
          >
            <div className="absolute inset-0 bg-brand-primary/20" />
            <div className="relative p-6 md:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-6 border border-white/20">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{SERVICES[1].title}</h3>
                <p className="text-zinc-300 text-xs md:text-sm max-w-xs">{SERVICES[1].description}</p>
              </div>
              <Link to="/sell" className="mt-4 md:mt-6 inline-flex items-center gap-1.5 md:gap-2 text-white font-bold text-xs md:text-base hover:gap-3 transition-all">
                Get Evaluation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Rent & Service - Small Bento Cards */}
          {[SERVICES[2], SERVICES[3]].map((service, i) => {
            const Icon = i === 0 ? Key : Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group relative bg-zinc-50 rounded-2xl md:rounded-[40px] p-6 md:p-8 hover:shadow-xl transition-all duration-500 border border-zinc-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-dark transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-dark group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4 md:mb-6">{service.description}</p>
                <Link to={`/${service.id}`} className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold text-brand-dark hover:gap-3 transition-all">
                  Book Now <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-12 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1562141961-b5d185666060?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-lg" 
                alt="Car Detail"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-lg" 
                alt="Car Interior"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-lg" 
                alt="Supercar"
                referrerPolicy="no-referrer"
              />
              <div className="bg-brand-dark rounded-3xl p-8 text-white">
                <p className="text-4xl font-black mb-2">15+</p>
                <p className="text-sm font-medium opacity-80">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 md:mb-8 leading-tight">
            Revolutionizing the marketplace in Sri Lanka
          </h2>
          <div className="space-y-4 md:space-y-6 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              FIX DEAL stands true to its name. Buy, sell, rent or even service your items at the convenience of a few taps! Whether you're buying, selling, or renting, a quick, fair, and transparent process is a given.
            </p>
            <p className="hidden sm:block">
              Our vast range of listings extend across all categories – Vehicles, Electronics, Property, and many more.
            </p>
          </div>
          <div className="mt-6 md:mt-10 grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-black text-zinc-900 mb-1">10k+</p>
              <p className="text-xs md:text-sm text-zinc-500">Deals Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-zinc-900 mb-1">98%</p>
              <p className="text-xs md:text-sm text-zinc-500">Satisfaction Rate</p>
            </div>
          </div>
          <button className="mt-8 bg-zinc-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all active:scale-95">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

const FeaturedAds = () => {
  const [ads, setAds] = useState<AdListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      const featured = await getFeaturedAds(6);
      setAds(featured);
      setLoading(false);
    };
    fetchAds();
  }, []);

  if (loading || ads.length === 0) return null;

  return (
    <section className="py-12 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-[10px] font-bold uppercase tracking-widest mb-3 border border-brand-dark/10">
              <Star className="w-3 h-3 fill-current text-brand-dark" /> Premium Listings
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Featured Deals</h2>
          </div>
          <Link to="/buy" className="text-brand-dark font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {ads.map((ad) => (
            <Link key={ad.id} to={`/ad/${ad.id}`} className="min-w-[280px] sm:min-w-0 snap-start flex-shrink-0 group">
              <div className="card-soft overflow-hidden flex flex-col h-full bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={ad.images[0]} alt={ad.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-brand-dark/90 backdrop-blur-md text-white rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-current text-brand-accent" /> Featured
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-base sm:text-xl font-bold mb-1.5 group-hover:text-brand-dark transition-colors line-clamp-1">{ad.title}</h3>
                  <p className="text-zinc-400 text-[10px] sm:text-xs font-medium mb-4">{ad.location}</p>
                  <p className="text-base sm:text-2xl font-black text-brand-dark mt-auto">LKR {ad.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Brands />
      <FeaturedAds />
      <CarListings />
      <Services />
      <About />
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white font-display text-2xl md:text-5xl font-bold mb-4 md:mb-8">
            Ready to find your next deal?
          </h2>
          <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Join thousands of satisfied users in Sri Lanka and start trading today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand-dark px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:shadow-2xl transition-all active:scale-95">
              App Store
            </button>
            <button className="bg-zinc-900 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:shadow-2xl transition-all active:scale-95">
              Google Play
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
