import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown, Play, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MENU_ITEMS, TESTIMONIALS } from '@/mockData';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row overflow-hidden border-b border-stone-200 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-primary)]/[0.04] to-[var(--color-secondary)]/[0.08] relative lg:pt-12">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        <div className="contents lg:flex w-full lg:w-[45%] flex-col justify-center relative z-10">
          <div className="order-1 lg:order-none w-full px-6 sm:px-8 md:px-16 lg:px-24 pt-20 lg:pt-0 pb-2 lg:pb-0 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-4 flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="w-8 h-[1px] bg-primary/50 hidden lg:block"></div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">FOUNDED IN MUZAFFARNAGAR</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif tracking-tighter text-stone-900 leading-[0.9] mb-20 lg:mb-6 max-w-[14ch] mx-auto lg:mx-0 drop-shadow-sm">
                A Symphony of <span className="text-primary">Spices & Soul.</span>
              </h1>
            </motion.div>
          </div>

          <div className="order-3 lg:order-none w-full px-6 sm:px-8 md:px-16 lg:px-24 pt-2 lg:pt-0 pb-8 lg:pb-0 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="font-lora text-lg md:text-xl leading-relaxed text-stone-600 mb-6 lg:mb-10 italic max-w-lg border-l-0 lg:border-l-2 border-[#984016]/30 pl-0 lg:pl-6 mx-auto lg:mx-0">
                "We don't just cook; we weave ancestral whispers into every grain of flour, every drop of ghee."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 items-center"
            >
              <Link to="/menu" className="relative overflow-hidden group bg-primary text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_8px_30px_rgba(217,54,17,0.3)] hover:shadow-[0_8px_30px_rgba(217,54,17,0.5)] hover:-translate-y-1">
                <span className="relative z-10">EXPLORE OUR LEGACY</span>
                <div className="absolute inset-0 h-full w-full bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              <Link to="/about" className="group flex items-center gap-3 font-sans font-bold uppercase tracking-widest text-xs text-primary hover:text-stone-900 transition-colors px-6 py-3.5 rounded-full border border-primary/30 hover:border-stone-900 bg-transparent">
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
                </div>
                READ OUR STORY
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="order-2 lg:order-none w-full lg:w-[55%] px-4 pt-2 pb-6 sm:p-8 lg:p-12 h-auto sm:h-[600px] lg:h-auto min-h-[350px] sm:min-h-[600px] lg:min-h-[calc(100vh-80px)] flex items-center justify-center z-10 relative">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-x-[60%] w-[120%] h-[120%] bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>

          <div className="relative w-full max-w-[700px] lg:max-w-[620px] aspect-square">
            {/* Main Large Circle with Persistent Rotation */}
            <div className="absolute inset-0 rounded-full border border-primary/20 p-2 sm:p-4 lg:p-4 lg:-translate-x-24 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                <div className="absolute inset-0 rounded-full border border-black/5 z-20 pointer-events-none"></div>
                <motion.img 
                  alt="Indian Food" 
                  className="w-full h-full object-cover" 
                  initial={{ scale: 1.1 }}
                  animate={{ 
                    rotate: [0, -30, 0, 30, 0],
                    scale: 1.1
                  }}
                  transition={{ 
                    rotate: {
                      duration: 60, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                  src="/Assets/hero_image.jpg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.4 }
              }}
              className="absolute bottom-[-2%] sm:bottom-[5%] md:bottom-[10%] left-1/2 sm:left-[2%] md:left-[5%] -translate-x-1/2 sm:translate-x-0 lg:-translate-x-24 z-30 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 md:pl-3 md:pr-4 md:py-3 flex items-center gap-3 md:gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] w-[220px] sm:w-auto sm:min-w-[240px] border border-white origin-bottom sm:origin-bottom-left transition-transform duration-500"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCMzlBHvZ6G_PVUjm-d3Z5pmwH1wGPAPAGfkBAhSqRWKpcrL75rp3wgv9zKt6J1xI4h1M3BBjEXQpFPxyC3FJUfWlKyRZjRSxx3afs5UVmBFOUIZmrJ__nKBDlzNC7rxUw4uG_gKKHGbbHSXxhZ7i-XGasmmIlYXH1HJGEAAIQoWvfNdVScohLxiap4UfdwYzda9Xvadq2bAVYZ-jli2IneA-uwaNv66EeMr_SBLrzYm9M8j4B1iTaYcZ9DK09V_xKR0-dh0OfjMY" 
                alt="Chef Ranveer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-inner"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <p className="font-bold text-stone-900 text-sm tracking-tight">Chef Ranveer</p>
                <p className="text-stone-500 text-[10px] sm:text-xs mt-0.5">Culinary Director</p>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40 cursor-pointer hover:scale-110 hover:bg-stone-900 transition-all duration-300">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </div>
            </motion.div>

            {/* Small Circles (Row on Mobile, Stack on Desktop) */}
            <div className="absolute top-0 sm:top-1/2 left-1/2 sm:left-auto right-auto sm:right-0 -translate-x-1/2 -translate-y-16 sm:translate-x-0 sm:-translate-y-1/2 w-[90%] sm:w-auto h-auto sm:h-[85%] flex flex-row sm:flex-col justify-between z-20">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-32 lg:h-32 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white lg:bg-transparent lg:shadow-none p-[2px] sm:p-1 lg:p-2 lg:border lg:border-primary/20 hover:-translate-y-2 sm:hover:translate-y-0 sm:hover:-translate-x-2 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <div className="hidden lg:block absolute inset-0 rounded-full border border-black/5 z-20 pointer-events-none"></div>
                  <motion.img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc0oiYsXNUIBT8O-r4wBGCV8b14j5lYATCyK5sC2fv9noqIdOKmapKW2MFrRbS1qwyBNzCmDEcHHTRz6bPASccdJ34yESmPK6u6vpBBgZt8G1_3phzYtG1-WVdSPbzgofHaYEZgFijML72x-h53LS0_p4j2aLVyfDTjihJnkWmsYNuwlARAJ5fhZ6Jbo0Cur5kSdHOMbg2Yc_KKvcjFTa15PFQMx8ltpELBR3sTeg8BnSomJTH3t8NWDi2LJcNG0Ko7SrKZEmjpKI" 
                    className="w-full h-full rounded-full lg:rounded-none object-cover"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ 
                      duration: 60, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-32 lg:h-32 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white lg:bg-transparent lg:shadow-none p-[2px] sm:p-1 lg:p-2 lg:border lg:border-primary/20 hover:-translate-y-2 sm:hover:translate-y-0 sm:hover:-translate-x-2 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <div className="hidden lg:block absolute inset-0 rounded-full border border-black/5 z-20 pointer-events-none"></div>
                  <motion.img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsrq-B-riEhN5qOnEPchF0hQNOYrriC745ZwF5-5uUKUUkJRH87znVvbaRbOabPXYvt87zVR2Q3INJGX2mIYhBFQBshrWyiueDeW6Ii0a3nw3jdaFTywN2TkVG5sfTOP4pEvfwlX3HtGwmtrznVz-UKxanatWLApf5DSOSfQazJYnFeftS4vdEgN0_99om5nFfXAtxOsh1gFIwdY7-LPwbuTazHy6yPfXnII5tTx1EfFdY6g4G2HOZQnX0dW8PVxzf99bnD439IPI" 
                    className="w-full h-full rounded-full lg:rounded-none object-cover"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ 
                      duration: 60, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-32 lg:h-32 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white lg:bg-transparent lg:shadow-none p-[2px] sm:p-1 lg:p-2 lg:border lg:border-primary/20 hover:-translate-y-2 sm:hover:translate-y-0 sm:hover:-translate-x-2 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <div className="hidden lg:block absolute inset-0 rounded-full border border-black/5 z-20 pointer-events-none"></div>
                  <motion.img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCMzlBHvZ6G_PVUjm-d3Z5pmwH1wGPAPAGfkBAhSqRWKpcrL75rp3wgv9zKt6J1xI4h1M3BBjEXQpFPxyC3FJUfWlKyRZjRSxx3afs5UVmBFOUIZmrJ__nKBDlzNC7rxUw4uG_gKKHGbbHSXxhZ7i-XGasmmIlYXH1HJGEAAIQoWvfNdVScohLxiap4UfdwYzda9Xvadq2bAVYZ-jli2IneA-uwaNv66EeMr_SBLrzYm9M8j4B1iTaYcZ9DK09V_xKR0-dh0OfjMY" 
                    className="w-full h-full rounded-full lg:rounded-none object-cover"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ 
                      duration: 60, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.6
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Categories */}
      <section className="pt-8 pb-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block text-[10px]">Curated Collections</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-6 font-serif tracking-tighter text-stone-900">Signature Menu</h2>
            <p className="font-lora text-sm md:text-xl text-stone-600 italic max-w-2xl mx-auto border-b border-primary/20 pb-4 md:pb-8">Explore the diverse chapters of our culinary heritage.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {([
              { title: 'Heritage Sweets', desc: 'Time-honored confections crafted with pure desi ghee and saffron.', img: '/Assets/SignatureMenu/heritage-sweet.jpeg' },
              { title: 'Artisanal Savouries', desc: 'Crispy, spiced delights that celebrate the vibrant street flavors of India.', img: '/Assets/SignatureMenu/artisanal-savouries.jpg' },
              { title: 'The Main Hearth', desc: 'Hearty, slow-cooked meals that bring the warmth of our family kitchen.', img: '/Assets/SignatureMenu/the-main-heart.jpeg' },
              { title: 'Soulful Sips', desc: 'Refreshing traditional drinks, from Masala Chai to cooling Lassi.', img: '/Assets/SignatureMenu/soulful-sips.jpg' }
            ] as const).map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-3 md:mb-4 relative">
                  <img alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.img} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <h3 className="text-base md:text-2xl mb-1 md:mb-2 font-serif text-stone-900">{cat.title}</h3>
                <p className="hidden md:block font-lora text-stone-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{cat.desc}</p>
                <Link to="/menu" className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-primary border-b border-primary/30 pb-0.5 md:pb-1 hover:border-primary transition-all">Explore</Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 text-center">
            <Link to="/menu" className="inline-block bg-secondary text-white px-8 py-3 md:px-12 md:py-5 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] hover:bg-primary transition-colors duration-500 shadow-xl">Explore Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Today's Specials */}
      <section className="pt-8 pb-4 md:py-16 overflow-hidden border-b border-stone-200 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block text-[10px]">Chef's Selection</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tighter text-stone-900">Today's Specials</h2>
          </motion.div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-stone-200 transition-colors text-stone-600"
            >
              <ArrowRight className="rotate-180 w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-stone-200 transition-colors text-stone-600"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div 
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col auto-cols-max md:flex gap-4 md:gap-8 px-6 md:px-12 overflow-x-auto hide-scrollbar pb-6 md:pb-10 snap-x snap-mandatory"
        >
          {MENU_ITEMS.filter(item => item.isSpecial).map((item, i) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-[42vw] sm:w-80 md:w-[calc(25%-1.5rem)] shrink-0 md:aspect-square bg-white shadow-sm border border-stone-200 group hover:shadow-xl transition-shadow duration-500 snap-center flex flex-col"
            >
              <div className="relative h-28 sm:h-40 md:h-1/2 overflow-hidden shrink-0">
                <img alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} referrerPolicy="no-referrer" />
                <span className={cn(
                  "absolute top-2 left-2 md:top-4 md:left-4 text-white text-[8px] md:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 md:px-2 md:py-1 flex items-center gap-1",
                  item.dietary === 'Veg' ? 'bg-green-600' : 'bg-red-600'
                )}>
                  <span className="w-1 h-1 md:w-2 md:h-2 rounded-none bg-white"></span> {item.dietary}
                </span>
              </div>
              <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-xl md:text-xl mb-1 sm:mb-2 md:mb-2 font-serif text-stone-900 truncate md:whitespace-normal">{item.name}</h3>
                <p className="font-lora text-[10px] sm:text-xs md:text-sm text-stone-600 mb-2 sm:mb-4 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-3 flex-grow">{item.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 sm:pt-3 md:pt-4 border-t border-stone-100 mt-auto gap-2 sm:gap-0">
                  <span className="text-sm sm:text-lg md:text-xl font-serif text-primary">₹{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full sm:w-auto bg-secondary text-white px-2 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-12 md:py-16 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 relative px-4 md:px-0"
            >
              <div className="absolute -top-4 -left-0 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border border-primary/30 -z-10"></div>
              <img 
                alt="Chef Ranveer Sharma" 
                className="w-full aspect-square md:aspect-[4/5] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEQpnyM315oy69_CuI9VSDfCNOa90gS2cR7erw1SZPmmmXBA5f2JEIztnkWfQjmii_DX9HAqY7kY4SqcHkk5tUaX13uX-Ov9MSYDS7D02ahdwMIvtOXJLixbA_-9v2IhTuY01pSU8R63lG2OPh3rJgCgRrybkZYKz1FuZIMkwe4Cpp60ub6CfMY0XZTdBzee1W5t7jTcaOelFbtQtRMalo3iPgTV_8ET5CUfOA8Y1RqgY6nORIlDtV1iBUo5Yt2-DCxu8ZO2Mggk"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 bg-primary p-4 md:p-8 text-center"
              >
                <p className="text-2xl md:text-4xl font-serif italic text-white font-bold">30+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-white">Years of Mastery</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 mt-4 md:mt-0"
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block text-[9px] md:text-[10px]">The Custodian of Flavor</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 font-serif tracking-tighter">Chef Ranveer Sharma</h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-lora text-sm md:text-xl text-stone-400 italic mb-6 md:mb-8 leading-relaxed border-l-2 border-primary/30 pl-4 md:pl-6"
              >
                "Flavor is a memory we revisit every time we eat. My mission is to ensure that memory is as pure as the ingredients I pick every morning."
              </motion.p>
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <p className="hidden md:block text-stone-300 leading-relaxed font-light">Having trained under the last royal khansamas of Awadh, Chef Ranveer brings a lost art of 'Dum' cooking and spice blending to Muzaffarnagar. He believes in the 'Swad' that only patience and a slow flame can produce.</p>
                <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                  {['Nawabi Gosht', 'Shahi Tukda', 'Dal-e-Khaas'].map((tag, idx) => (
                    <motion.span 
                      key={tag} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (idx * 0.1) }}
                      className="border border-white/20 px-3 py-1.5 md:px-4 md:py-2 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-stone-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <button className="border-b border-primary pb-1 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] hover:text-primary transition-colors">Read The Full Profile</button>
            </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block text-[10px]">Words from our Guests</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif tracking-tighter text-stone-900">Customer Love</h2>
          </motion.div>
          <div className="relative flex overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
            <motion.div 
              animate={{ x: [0, "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-4 md:gap-8 lg:gap-12 py-6 md:py-10"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={`${t.id}-${i}`} className={cn(
                  "flex-none w-[75vw] sm:w-80 md:w-96 bg-surface p-6 sm:p-8 md:p-10 lg:p-12 relative border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group",
                  i % 3 === 1 ? "bg-white shadow-xl z-10" : "bg-stone-50/50"
                )}>
                  <div className="flex gap-1 text-primary mb-4 md:mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} size={10} className="md:w-3 md:h-3" fill="currentColor" />)}
                  </div>
                  <p className="font-lora text-sm md:text-base text-stone-700 italic mb-6 md:mb-10 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-stone-100">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-stone-200 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img alt={t.name} className="w-full h-full object-cover" src={t.avatar} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-stone-900">{t.name}</h5>
                      <p className="text-[7px] md:text-[8px] text-stone-400 uppercase tracking-wider mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-6xl font-serif text-stone-900 pointer-events-none group-hover:opacity-10 transition-opacity">“</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - The Art of Gathering */}
      <section className="py-10 md:py-16 bg-surface-muted text-stone-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                <div className="h-[1px] w-6 md:w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Exclusivity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-3 md:mb-10 leading-[1.1] md:leading-[0.9] font-serif italic">The Art of <br/>Gathering.</h2>
              <p className="font-lora text-sm sm:text-base md:text-xl lg:text-2xl text-stone-600 italic mb-6 md:mb-12 leading-relaxed max-w-xl">
                Reserve a sanctuary for your celebrations. From intimate candlelit dinners to grand family reunions, we craft every moment with the same care as our ancestral spices.
              </p>
              
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                <div className="relative pl-8 border-l border-stone-300">
                  <span className="absolute -left-3 top-0 text-[10px] font-bold text-primary bg-surface-muted px-1">01</span>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Personalized Service</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Dedicated hosts to ensure your evening flows with effortless grace.</p>
                </div>
                <div className="relative pl-8 border-l border-stone-300">
                  <span className="absolute -left-3 top-0 text-[10px] font-bold text-primary bg-surface-muted px-1">02</span>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Chef's Table</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Option for custom menus curated by Chef Ranveer for your special guests.</p>
                </div>
              </div>
              
              {/* Mobile-only simple reservation button */}
              <div className="mt-6 md:hidden">
                <Link to="/reservations" className="group relative block w-full bg-secondary text-white py-4 overflow-hidden text-center shadow-xl">
                  <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-[10px] transition-colors group-hover:text-primary">
                    Book a Table
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-10"></div>
                </Link>
              </div>
            </motion.div>

            <div className="hidden md:block w-full lg:w-1/2">
              <div className="bg-white p-6 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-stone-100 relative mt-4 lg:mt-0">
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border-t border-r border-primary/20 pointer-events-none"></div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 border-b border-l border-primary/20 pointer-events-none"></div>
                
                <h3 className="text-2xl md:text-3xl mb-6 md:mb-10 font-serif italic text-center">Secure Your Sanctuary</h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400">Number of Guests</label>
                      <div className="relative group">
                        <select className="w-full bg-transparent border-b border-stone-200 py-3 md:py-4 pr-10 text-base md:text-lg font-serif italic text-stone-700 focus:border-primary transition-colors outline-none cursor-pointer appearance-none hover:border-stone-300">
                          <option>02 Guests</option>
                          <option>04 Guests</option>
                          <option>06 Guests</option>
                          <option>08+ Guests</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-hover:text-primary transition-colors pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400">Nature of Occasion</label>
                      <div className="relative group">
                        <select className="w-full bg-transparent border-b border-stone-200 py-3 md:py-4 pr-10 text-base md:text-lg font-serif italic text-stone-700 focus:border-primary transition-colors outline-none cursor-pointer appearance-none hover:border-stone-300">
                          <option>Intimate Dining</option>
                          <option>Family Celebration</option>
                          <option>Corporate Soirée</option>
                          <option>Festive Reunion</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-hover:text-primary transition-colors pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <Link to="/reservations" className="group relative block w-full bg-secondary text-white py-4 md:py-6 overflow-hidden text-center">
                      <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] transition-colors group-hover:text-primary">
                        Request a Reservation
                      </span>
                      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-10"></div>
                    </Link>
                    <p className="mt-4 md:mt-6 text-[9px] text-center text-stone-400 uppercase tracking-[0.2em] font-medium">
                      Our concierge will contact you shortly to finalize details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
