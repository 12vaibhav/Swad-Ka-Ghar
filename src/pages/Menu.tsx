import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Plus } from 'lucide-react';
import { MENU_ITEMS } from '@/mockData';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Sweets', 'Savouries', 'Mains', 'Biryani', 'Desserts'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeDietary, setActiveDietary] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesDietary = activeDietary === 'All' || item.dietary === activeDietary;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDietary && matchesSearch;
  });

  return (
    <div className="pt-20">
      <header className="relative min-h-[300px] lg:min-h-[400px] flex items-center mb-0 lg:mb-8 bg-stone-50 overflow-hidden py-6 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2 lg:mb-4">
                <div className="h-px w-8 bg-primary hidden lg:block"></div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] sm:text-[10px]">Culinary Heritage</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-3 lg:mb-6 tracking-tighter leading-[0.9]">
                Our <br className="hidden lg:block" />
                <span className="italic font-light text-primary">Menu</span>
              </h1>
              <div className="max-w-xl flex flex-col items-center lg:items-start">
                <p className="text-base sm:text-lg md:text-xl text-stone-600 font-lora italic leading-relaxed mb-4 lg:mb-6 border-l-0 lg:border-l-2 border-primary/30 pl-0 lg:pl-6">
                  "Mithai aur Khana, Ek Saath!" — A curated journey through the soulful flavors of Muzaffarnagar.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center justify-center lg:justify-start">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Items</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">100+ Dishes</span>
                  </div>
                  <div className="h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Authenticity</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">100% Organic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden shadow-2xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArjNa2ihDHVcG2BuSdk7w4ok1-IICeHkAD9FDdiRGHyoKW5N8WcbnUpBQIsAboPeX8YA4Sez7MUNMYJXwVVOpwKfqyZR6h5KQPMSU85GcvnXcra_o6nqo6-UJzt63Wj3_zAtgfVKPrGgOlFZan9Qwq6TSpvD6lLs9ECVT6mQjSgS8JCl3wlzWZagTwvl0CEpnFItLCCNOrm_ENsyTqOyImaPajnAsylJws2bZ6maAbg0J36o9LHmg8qlksbKCtkILT2JeQbvogx0w" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Flavors
        </div>
      </header>

      {/* Filter Bar */}
      <section className="sticky top-[64px] z-40 bg-white border-b border-stone-200 py-0">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 flex flex-col md:flex-row items-stretch justify-between">
          <div className="flex items-stretch self-stretch border-b md:border-b-0 border-stone-100">
            <button 
              onClick={() => setActiveDietary('All')}
              className={cn(
                "flex-1 md:flex-none px-4 sm:px-8 py-3 sm:py-4 border-r border-stone-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-300 flex items-center justify-center md:justify-start",
                activeDietary === 'All' ? "bg-primary text-white" : "text-stone-500 hover:bg-stone-50"
              )}
            >
              All
            </button>
            <button 
              onClick={() => setActiveDietary('Veg')}
              className={cn(
                "flex-1 md:flex-none px-4 sm:px-8 py-3 sm:py-4 border-r border-stone-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-300 flex items-center justify-center md:justify-start gap-1.5 sm:gap-2",
                activeDietary === 'Veg' ? "bg-secondary text-white" : "text-stone-500 hover:bg-stone-50"
              )}
            >
              <span className={cn("w-1.5 h-1.5", activeDietary === 'Veg' ? "bg-white" : "bg-secondary")}></span> Veg
            </button>
            <button 
              onClick={() => setActiveDietary('Non-Veg')}
              className={cn(
                "flex-1 md:flex-none px-4 sm:px-8 py-3 sm:py-4 border-r border-stone-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-300 flex items-center justify-center md:justify-start gap-1.5 sm:gap-2",
                activeDietary === 'Non-Veg' ? "bg-red-600 text-white" : "text-stone-500 hover:bg-stone-50"
              )}
            >
              <span className={cn("w-1.5 h-1.5", activeDietary === 'Non-Veg' ? "bg-white" : "bg-red-600")}></span> Non-Veg
            </button>
          </div>
          <div className="flex items-stretch gap-0 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 sm:px-6 py-3 sm:py-4 border-l border-stone-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap transition-all duration-300 flex items-center",
                  activeCategory === cat ? "bg-tertiary text-white" : "hover:bg-stone-50 text-stone-500"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3 border-l border-stone-100 pl-8 py-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Sort:</span>
            <select className="bg-transparent border-none text-[10px] font-bold tracking-[0.1em] focus:ring-0 cursor-pointer text-primary p-0 uppercase">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8 sm:mb-10 text-center"
        >
          <span className="text-primary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block text-xs sm:text-sm">Curated Selection</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">Main Menu</h2>
          <p className="font-lora text-base sm:text-xl text-on-surface-variant italic max-w-2xl mx-auto px-4 sm:px-0">Explore the diverse chapters of our culinary heritage.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-stone-200">
          {filteredItems.map((item) => (
            <motion.div 
              layout
              key={item.id} 
              className="flex flex-col group border-r border-b border-stone-200 p-0 bg-white"
            >
              <div className="relative aspect-square overflow-hidden border-b border-stone-100">
                <img 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" 
                  src={item.image} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 right-0 p-1.5 sm:p-3">
                  <div className="bg-white p-0.5 sm:p-1 border border-stone-200">
                    <div className={cn("w-2 h-2 sm:w-3 sm:h-3", item.dietary === 'Veg' ? 'bg-secondary' : 'bg-red-600')}></div>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1 sm:mb-2">
                  <h4 className="text-sm sm:text-xl mb-1 pr-1 sm:pr-2 leading-tight">{item.name}</h4>
                  {item.spicyLevel && (
                    <div className="flex shrink-0 mt-0.5 sm:mt-1">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <span key={i} className="text-[8px] sm:text-[10px] text-primary">🌶️</span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="font-lora text-[10px] sm:text-sm text-on-surface-variant mb-3 sm:mb-6 leading-relaxed italic line-clamp-2 sm:line-clamp-none">{item.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm sm:text-xl font-serif text-primary">₹{item.price}</span>
                  <button className="w-8 h-8 sm:w-12 sm:h-12 bg-stone-50 border border-stone-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
