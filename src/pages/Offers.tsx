import React from 'react';
import { motion } from 'motion/react';
import { Timer, ArrowRight, Gift, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Sweets & Gift Boxes', 'Restaurant Combos', 'Festival Specials', 'Lunch/Dinner Deals', 'Bulk Orders'];

const OFFERS = [
  { 
    title: 'Heritage Motichoor Pack', 
    disc: '25% OFF', 
    price: 599, 
    oldPrice: 799, 
    time: '02:45:12', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD77gtjaY8o1QrGjcgJ8npQW7Nin5iJC0BLxB3roogmo8z9O9pU5DCikQCLB-VYZFPdgfLz9scM2ABLiz3AT3rd8OaebVLdkw9N-f3FV4rHNT43kAUiWXZxSssgHOMQltobzkXmSXbZivbgHYWZRw21u6B5v0Mj4_D6UJ5cii4SYxZiKoLumaU-5EZi8uS12-NOqlJ1vNFP8NiRhYi9S1Vwmr4phVsUC9r1b_7Ha0OYQMHtyKNHl3V_W5OaCU6_LV_TTdTmJxJZB8g',
    category: 'Sweets & Gift Boxes',
    dietary: 'Veg'
  },
  { 
    title: 'Evening Snackers Combo', 
    disc: '15% OFF', 
    price: 340, 
    oldPrice: 400, 
    time: '05:12:00', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10kmUXRAuiZS1-b1Q7XhwUTfM5IvKAHE2u4y45gqdHWQUPqSG4fcxGxWufVKu4m3wF5iP_xDiGMp5tinkFbnlVBJvXsRN3bg8xvT2qHlEPyS47mgJhIkUXABn4now5pu2ClvizCRxsMv-jcH5pyiGD6vC9IM8Wq3cHr9ZbchrAPfhzhTSug70wVr00-OhUdz8cQ8UkEU_tUiEoUxn3bABXyaHwWWMhTR5KMJxUuwGOQIJGe2LyDL4igJLgttWYmiDhMZUenxp40o',
    category: 'Restaurant Combos',
    dietary: 'Veg'
  },
  { 
    title: 'Premium Kaju Katli', 
    disc: '20% OFF', 
    price: 880, 
    oldPrice: 1100, 
    time: '01:22:45', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM89NMkbZRt-mWbhqqqsjghUuqFmdIBDsLL_-I0jCJZ-vPFrJMfILCwYor-FtVAOBmFZSL9JrJ_FNw4_hUYujzxpy-F4n8bf9vfDyQX5LP1dpFpiCjChehiaXX_psXepQunZr2FEk7OVniWLzf721xpXHCc_V1WKmBFIOp4xyrP7BFpQip8qF_KlU942f0weVPvjnsobzL0jh1w3715yVL2AbYELe8-GooAqr-6XfRmskInvbgdKwxpn8I-h-Fdzj8B-Z6h9jDI8',
    category: 'Sweets & Gift Boxes',
    dietary: 'Veg'
  },
  { 
    title: 'Maharaja Lunch Thali', 
    disc: '30% OFF', 
    price: 450, 
    oldPrice: 650, 
    time: '00:30:15', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABFUsMkimeZmkJ7Lanl4eSGbfM8NJQH-8-4UhSyFhLFhtasHqp8orDOaHeRtOVYSBKclKI5zA5z4vrpx5yjLZbcSm3p7xcpKfN2-5mwBewSpKINWjxQHFSHuuQmoTjOTNXIddXpJseDSKK1qdXpSTNJPAchi1oATfgj_EQErjJMaq1AywntVv_GGoU4dMuItau5EoXlpU2tNtj0Hwwbh48j79Y4-DaXJmSB-pD_Db7JqrFtPOviK1w-J4RyewiMOeqMjnqIckdg2g',
    category: 'Lunch/Dinner Deals',
    dietary: 'Veg'
  }
];

export default function Offers() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeDietary, setActiveDietary] = React.useState('All');

  const filteredOffers = OFFERS.filter(offer => {
    const matchesCategory = activeCategory === 'All' || offer.category === activeCategory;
    const matchesDietary = activeDietary === 'All' || offer.dietary === activeDietary;
    return matchesCategory && matchesDietary;
  });

  return (
    <div className="pt-20">
      <header className="relative min-h-[200px] lg:min-h-[400px] flex items-center mb-0 bg-stone-50 overflow-hidden py-4 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2 lg:mb-4">
                <div className="hidden lg:block h-px w-8 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] lg:tracking-[0.4em] uppercase text-[10px]">Limited Time Exclusives</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-2 lg:mb-6 tracking-tighter leading-[0.9]">
                Heritage <br className="hidden sm:block" />
                <span className="italic font-light text-primary">Savings</span>
              </h1>
              <div className="max-w-xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg md:text-xl text-stone-600 font-lora italic leading-relaxed mb-4 lg:mb-6 lg:border-l-2 lg:border-primary/30 lg:pl-6 px-4 lg:px-0">
                  Experience the soul of Muzaffarnagar with our curated festive deals. Authentic flavors, now at exceptional values.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-center justify-center lg:justify-start">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-0.5 lg:mb-1">Max Discount</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">Up to 30% OFF</span>
                  </div>
                  <div className="hidden sm:block h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-0.5 lg:mb-1">Validity</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">Limited Time</span>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCL_nIHQxHWOllOxJ-goHWonMBt5xMtkswzg2EFcobk93K_d9mycfDwZqmvKwOoMzmQORvmkHp-kZhK6d85G3RYz4a5nCcHgaPvh7W3G-UWW7jhYT9Qj5ClDSYFnBCfah7oftmXb3VSZAtEGFJX8G3qUPzzGPfsicrY7t0SzsP66_f08WyKZBBfmp8G45-vH335a5VaDjjAY4QPEP-GCc5UI9fYD1z8CPePBB6ZwSWtFARCdiURbVZxaZR0lEsCcv_Wv1MPcObqs" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Offers
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
              <option>Popularity</option>
              <option>Expiring Soon</option>
              <option>Discount: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4 text-center md:text-left"
        >
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">Live & Exclusive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-stone-900">Current Delights</h2>
            <p className="text-stone-500 italic mt-2 text-sm sm:text-base">Handpicked heritage flavors at exceptional values.</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-stone-400">
            <span>{filteredOffers.length} Offers Available</span>
          </div>
        </motion.div>

        {/* Featured Offer - Large Card */}
        {filteredOffers.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-12 group relative bg-stone-900 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[450px]"
          >
            <div className="w-full lg:w-3/5 relative overflow-hidden aspect-[21/9] sm:aspect-[16/9] lg:aspect-auto">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src={filteredOffers[0].img} 
                alt={filteredOffers[0].title} 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-3 left-3 lg:top-6 lg:left-6 bg-primary text-white font-black px-3 py-1 lg:px-6 lg:py-2 text-sm lg:text-lg shadow-xl">
                {filteredOffers[0].disc}
              </div>
            </div>
            <div className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-16 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 right-0 p-4 lg:p-8 opacity-10">
                <Zap size={60} className="text-primary lg:w-[120px] lg:h-[120px]" />
              </div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[8px] lg:text-[10px] mb-1 lg:mb-4">Featured Deal</span>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-serif mb-2 lg:mb-6 leading-tight">{filteredOffers[0].title}</h3>
              <div className="flex items-center gap-2 lg:gap-4 mb-4 lg:mb-8">
                <span className="text-2xl lg:text-4xl font-black text-primary">₹{filteredOffers[0].price}</span>
                <span className="text-stone-500 line-through text-sm lg:text-xl">₹{filteredOffers[0].oldPrice}</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 text-stone-400 text-[9px] lg:text-xs font-bold uppercase tracking-widest mb-4 lg:mb-10">
                <Timer size={12} className="text-primary lg:w-4 lg:h-4" />
                <span>Expires in {filteredOffers[0].time}</span>
              </div>
              <button className="w-full py-3 lg:py-5 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[9px] lg:text-xs hover:bg-primary-dark transition-all shadow-lg">
                Claim Featured Offer
              </button>
            </div>
          </motion.div>
        )}

        {/* Regular Offers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10">
          {filteredOffers.slice(1).map((offer, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="group flex flex-col bg-white border border-stone-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={offer.img} 
                  alt={offer.title} 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 bg-white/90 backdrop-blur-md text-stone-900 font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 text-[7px] sm:text-[9px] lg:text-[10px] uppercase tracking-widest shadow-sm">
                  {offer.disc}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-stone-900/80 backdrop-blur-sm p-1.5 sm:p-2 lg:p-3 text-center text-[7px] sm:text-[9px] lg:text-[10px] font-bold text-white flex items-center justify-center gap-1 sm:gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Timer size={10} className="text-primary sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Limited Time:</span> {offer.time}
                </div>
              </div>
              <div className="p-3 sm:p-5 lg:p-8 flex flex-col flex-1">
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1 lg:mb-2 line-clamp-1">{offer.category}</span>
                <h3 className="font-serif font-bold text-sm sm:text-xl lg:text-2xl text-stone-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-primary transition-colors line-clamp-2">{offer.title}</h3>
                <div className="mt-auto pt-3 sm:pt-4 lg:pt-6 border-t border-stone-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
                    <span className="text-stone-400 line-through text-[8px] sm:text-[9px] lg:text-[10px] font-bold">₹{offer.oldPrice}</span>
                    <span className="text-base sm:text-xl lg:text-2xl font-black text-primary">₹{offer.price}</span>
                  </div>
                  <button className="w-full sm:w-auto px-2 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 bg-stone-900 text-white text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors text-center">
                    Claim
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Midnight Craving Section - Immersive Design */}
      <section className="bg-[#0a0a0a] text-white py-10 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#F27D26_0%,transparent_70%)] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center text-center lg:text-left">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center gap-2 lg:gap-4 mb-3 lg:mb-6">
                  <div className="hidden lg:block h-[1px] w-12 bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[8px] lg:text-[10px]">Night Owl Special</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif italic mb-3 lg:mb-8 leading-[0.9]">Midnight <br className="hidden sm:block"/><span className="text-primary">Indulgence.</span></h2>
                <p className="text-stone-400 text-sm lg:text-xl mb-6 lg:mb-12 max-w-md font-light leading-relaxed italic px-2 lg:px-0">
                  "The city sleeps, but the cravings don't. Experience the warmth of our signature treats under the moonlight."
                </p>
                
                <div className="flex gap-3 lg:gap-6 mb-6 lg:mb-12 justify-center lg:justify-start">
                  {[
                    { val: '00', label: 'Hours' },
                    { val: '42', label: 'Minutes' },
                    { val: '18', label: 'Seconds' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-stone-900/50 backdrop-blur-md border border-white/10 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 flex items-center justify-center mb-1 lg:mb-2">
                        <span className="text-xl sm:text-2xl lg:text-4xl font-black text-white">{item.val}</span>
                      </div>
                      <span className="text-[7px] lg:text-[9px] uppercase tracking-widest text-stone-500 font-bold">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group relative px-6 py-3 lg:px-12 lg:py-5 bg-primary text-white font-bold text-[9px] lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.3em] overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">Unlock Midnight Deal</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
                </button>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0 px-6 sm:px-8 lg:px-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="absolute -inset-2 lg:-inset-4 border border-primary/20 translate-x-3 translate-y-3 lg:translate-x-8 lg:translate-y-8 -z-10"></div>
                <img 
                  className="w-full aspect-square lg:aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKipgEkB8B0TCDYMOsLkh0Bu6Hf2WZR0UB4MqtyO1NhQ5LozjsXM7nSc5U3rEZuIIxtQrF3btMWqA8J2Pyinr03l74Jo6LlbbqfBPRZCXwjIPM9EbTBrYxlk5-YvdRJ_tieZT17zQ9XywMbp1YcOOSCYaaO6ujzRdV_UEjLAN99FL4WziPW3j4RQ-joMqQwBv6FwSruHj_9rcRMjDgS4iRA60Lz9MGq4Emh6-OC93ubCVgeqYkBqmmwPLeQ3lAmv88vu_FYakGybE" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 -left-4 lg:bottom-10 lg:-left-10 bg-primary p-3 lg:p-8">
                  <p className="text-2xl lg:text-4xl font-serif italic text-white">50%</p>
                  <p className="text-[7px] lg:text-[9px] uppercase tracking-widest font-bold text-white/80">Off After 10 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
