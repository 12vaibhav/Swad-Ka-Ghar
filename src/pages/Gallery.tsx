import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '@/mockData';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Sweets', 'Mains', 'Biryani', 'Savouries', 'Events', 'Kitchen'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeDietary, setActiveDietary] = React.useState('All');

  const filteredImages = GALLERY_IMAGES.filter(img => {
    const matchesCategory = activeCategory === 'All' || img.category === activeCategory;
    const matchesDietary = activeDietary === 'All' || img.dietary === activeDietary;
    return matchesCategory && matchesDietary;
  });

  return (
    <div className="pt-20">
      <header className="relative min-h-[300px] lg:min-h-[400px] flex items-center mb-0 bg-stone-50 overflow-hidden py-6 lg:py-12">
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
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] sm:text-[10px]">Visual Journey</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-3 lg:mb-6 tracking-tighter leading-[0.9]">
                Our <br className="hidden lg:block" />
                <span className="italic font-light text-primary">Gallery</span>
              </h1>
              <div className="max-w-xl flex flex-col items-center lg:items-start">
                <p className="text-base sm:text-lg md:text-xl text-stone-600 font-lora italic leading-relaxed mb-4 lg:mb-6 border-l-0 lg:border-l-2 border-primary/30 pl-0 lg:pl-6">
                  Sweet Moments • Delicious Memories • Warm Experiences. A glimpse into our soulful world.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center justify-center lg:justify-start">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Captures</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">50+ Moments</span>
                  </div>
                  <div className="h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Quality</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">High Definition</span>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpw8gif-3KfbXwwZKYsdGAwr926CDlZE7rTJVVZ-xvI2ie7cl1kjPVxWkU7ssyQ90o-yEZR1eqPN4iJqk9TFamMNKKIL9qZKaGsRbc4L0Vs3WldvNWrp-hgyY2dHIwJC7Ej_mYh7PFiRTMDuGpNrmtY-I0UiSuEu4Nbu-7bDB__k_XH_OC8op7XYOirlNIzR9EPIuoJ1YzQATcCJXoBbVpLxjiqaIksLB6Tdkl1-KGtgmKEyrrpLFOkQQQN6E611qrG-6jo9Kxu_8" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Visuals
        </div>
      </header>

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
              <option>Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-2 sm:px-6 py-4 sm:py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {filteredImages.map((img, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={img.id}
              className={cn(
                "group relative overflow-hidden aspect-[4/5] cursor-pointer",
                i % 4 === 0 ? "md:col-span-2 md:aspect-video" : ""
              )}
            >
              <img 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={img.url} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6 lg:p-8">
                <span className="text-primary font-bold uppercase tracking-widest text-[8px] sm:text-xs mb-0.5 sm:mb-2">{img.category}</span>
                <h3 className="text-white text-sm sm:text-xl lg:text-2xl font-serif font-bold leading-tight">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
