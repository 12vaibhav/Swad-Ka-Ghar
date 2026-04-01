import React from 'react';
import { motion } from 'motion/react';
import { Search, Plus, ShoppingBag, Heart, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const BOX_SIZES = [
  { id: 'small', name: 'Small Box', capacity: '500g', varieties: 'Up to 4', price: 850, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcb5-aq9TofDPuzqmxjPqYDh-A9rl7GPLEwuEa7mK2VoTowEQf7cDhqINGMAy5EvEBBNyJeToqsrPxrIdT3ZvFKqdoiY54Q0D9YHp2Sv4DxMrXCezcsMVFXDdFEQH89LfqN6BFQio_c3ZIz9KD8lZ-tnVc1G3LCfpE5iPPq2x5T4MxZUdQ7sHJev0QTd5W_shO81q0EEIDlsIBzRlNYsOuuGecJT_YYF9aFYV41j7FSHgCOh2nTjFCXV_BBbOzUW_G2ArXT-8TUoE' },
  { id: 'medium', name: 'Medium Box', capacity: '1kg', varieties: 'Up to 8', price: 1600, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS4dCzKTzjlkAhN4VvR6fYUTN9F9YLx44oZEZZ6owk2tNJU6IqJ7cFleOoMXdRab7EeVt6pkp9HXWJ0-vYsHZGOK3q8OOetwNtCG1QOhYsUwR2ylp-kFO_D3QNAGgKFoUfW55ozpyTAaH7IC4eyVIVTyhrzNlLYz79oMDS95dM_w4QsH7g6HdPurQw0I0rcAr-6gTwNhIXOl56o8BXLT4VyZfGxWQLB1DZU-zDaPFsXRn_YQR4SLGxxfSocgwlbafLnyHtIHRTEsM', popular: true },
  { id: 'large', name: 'Large Box', capacity: '2kg', varieties: 'Unlimited', price: 3000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4VtvfkMVKRq_rJg-3fdmT3KR3zlLCUHqrf7b-eTbLx3-39kch4DtvGR6PFmxVtCjbdxgokUCtBw1OwYJHCjoni8N5ABisZ8cmO8bBKrUehUzC2pzzbCNctuvSvl27DhymldSWsVXMxIDx5qCCMwIV_1gTLVepGMl1jhfzR5oVgCCjMPSZlc6oWMRej0cKsMHtnftIH2iVjTZgbg-E5f05XraZdNMf1JuB3IKQO24SnW-Q-1KvFhfrtfTrIDETiC6Oo06oP0Iwm2w' }
];

const SWEETS = [
  { id: 's1', name: 'Motichoor Ladoo', desc: 'Soft pearl-sized gram flour balls fried in pure ghee.', price: 45, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYrQGcdguOefisMMKLG1NPiUBLpAAuFq7KOSVNa4QsGUWVq4x3picQsRRWsAgb6DTGXEZ9KDAi_FPSOqUPNO6BJSTz4qybjbaxvfEOwoEQ2lfnpPwShXz4KPwWZmXC0MkqCqvb97uh__Ym_yrwzI19uKfSfqAW80sPoN_g8JiAat8JcPybsyKhgXV8Ym-QGJguQ8202ZdktFltxR6fuqxH6nbsibSIItE4o6ldihFZFXhlb7HjsXtY3IBWeNopkAtFsRpXhq8FUmQ' },
  { id: 's2', name: 'Kaju Katli', desc: 'The classic cashew fudge with edible silver leaf.', price: 55, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkQ-yIK4jL4TWNU5Pe8PJnfuvzhwW9chxRkWcDkQSaqq-2lM9tyW3OxynQq8M-DQi9pQO2bPjguLmKdFpaWTpNY3Xi7R1Z8AXQXUPW9RDWUJU4HfjMX7jOkCTRrokcj1fzgv7EPg_NhEjDh0Nqk8_qGt-oNt3Ll2SYwwqje7DZDK-W03MAESzyfeLCGuKY5wdXRjy0vWg8HRG138VgTJ4J-ufMom2tnR8BExeRQT03F0-5qh2aWbhs3SzFPioC4-S_KJkPd2kboV0', bestseller: true },
  { id: 's3', name: 'Gulab Jamun', desc: 'Deep-fried milk solids in rose flavored syrup.', price: 40, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuIYXIcze6yC67PF7wN8tgjHKW1Fy6DLjfzGJmkaAWalVfwyiQlrTEdTCqIiLKg6aLDqcVd7BX0FdLnst_MnRuQIMAdrSgOwGTFVM9A2ebYkHffkuXq9gHaxTaUqv1wQaG-ZultBmh8gxWXLWcNyfYZMmSL5aWPLrhx-sV6jvy7SrZIgZwO2I53x2CQsnoLm2sX4k4ZiGLZxHJ3dPE9Ts_4_SLUZAkhTCTmE3mCi7l9IQJoe0bYjOsRUhCggmZs3wExem4kTuhiN0' },
  { id: 's4', name: 'Besan Ladoo', desc: 'Slow-roasted gram flour with ghee and cardamom.', price: 35, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmNwA8gqNkV-bFdaD_aFGCMdRrtkzEC-mOtTIsodGsDMfIyvSChTwb0tIv3PFq00cmjs_7an7QZ0uXLR3amOibLwnBSwOKyzAFmxP0JaFNLqrKObcgKjrsSu-TpqjxU6tV6_T_sAcAb9LKoGJvZu66QcAsydQA6plsFwBQoubPKHf2cDugjTwhiLrVZLuJ1TjAOl1cqwR1pIm6Sxo1WXGAiyVWD0h5P-g8dHm15h4bNS1Be4EPWeAV0fJNUVo79n_ZyW1jDN7VULE' },
  { id: 's5', name: 'Pista Roll', desc: 'Rich cashew shell filled with artisanal pistachio paste.', price: 65, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1h2UFhLR0gI3d_Uh1xTSfq4cBJVK0fZmlj6UuHT3qm0yeBSRJktf2N6CKXqQE-GaDPRhunHuCcRc9ILbEdeL_a4w3NFoBf4cP6Aj9JxuUYPQQmxMCupB9VtVPCqRTLPAXmbzeRV7AOkQ0z-hB6w3xOkHa3dcHXOCo2gpXZHx0RIcw4HeXNZN-CZ1ZWe5-t0De2XuC_U5lofLdGxZyT8Q1VjM59OTbQKxOENB3aV_dt8xzJJBxHh76glOwu0mz5M_zvioDefrST5w' },
  { id: 's6', name: 'Milk Cake', desc: 'Traditional grainy fudge made by slow-cooking milk.', price: 50, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9367__BLsoL8LGYjUojeLcbmyhjutA_SVikx424lFmTJZqstxIpuLjgNTpEVZKqtEAXb7NIaZqml3snwf1TFZgw6cB36-HkYCapweOF5GwAJdvTKFoV1n3Bp-ut8gO0n7VMMAOm_PMqJ5MnPu1YUli61t1HatPS6T3b_Tm3PS0QLjdMbpo-u0etW5AAV_Nr-XZclESkxL0vcASIVxAsN4ZDpT5h22rViQ_Ou7sLLgvnkEKITYiYoW33OyCSZOwzHOMmxrPsw8pNg' }
];

export default function GiftBuilder() {
  const [selectedBox, setSelectedBox] = React.useState(BOX_SIZES[1]);

  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-24 bg-stone-50/30">
      <header className="relative min-h-[300px] lg:min-h-[400px] flex items-center mb-8 lg:mb-16 bg-stone-50 overflow-hidden py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="h-px w-6 sm:w-8 bg-primary hidden lg:block"></div>
                <span className="text-primary font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px]">Artisanal Gifting</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-4 sm:mb-6 tracking-tighter leading-[0.9]">
                Design Your <br className="hidden sm:block" />
                <span className="italic font-light text-primary">Gift Box</span>
              </h1>
              <div className="max-w-xl flex flex-col items-center lg:items-start">
                <p className="text-base sm:text-lg md:text-xl text-stone-600 font-lora italic leading-relaxed mb-6 border-l-0 lg:border-l-2 border-primary/30 pl-0 lg:pl-6">
                  Curate a selection of our finest handcrafted sweets, wrapped in heritage and delivered with love.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center justify-center lg:justify-start">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Customization</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">Unlimited</span>
                  </div>
                  <div className="h-6 sm:h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Packaging</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">Premium Box</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden shadow-2xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWQZukNjgzjTPU_x3seKtIYdsZdr6TmCBtsQ9-Lm9tNgcoUTNE2a-tFMr_UX07TvGzs4bisddpJ2NXLhb30YdIDsKJxsOE0O8s0ezFvfUxze9veybHSD9n7VTz2iDsUTorx1SR1deWV_xMTmXRAzsynN10AFS8G9GJdDh56DDscyjf52l9LSqkRDKJM35KGNKIqDBaRX-3fw5pesmP-tS6DZ8Fmn4oEeDk5pc_jqMEk0vLpLq2zoM_ALKj68ZRQZxucC5SwnM9fqk" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Gifting
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-10 lg:space-y-16">
          {/* Step 1 */}
          <section>
            <div className="flex items-end gap-4 sm:gap-6 mb-6 sm:mb-8 border-b border-stone-200 pb-3 sm:pb-4">
              <span className="text-5xl sm:text-7xl font-serif text-stone-200 leading-none">01</span>
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-[9px] sm:text-[10px] block mb-1">The Foundation</span>
                <h2 className="text-2xl sm:text-4xl font-serif">Select Box Size</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {BOX_SIZES.map((box) => (
                <div 
                  key={box.id}
                  onClick={() => setSelectedBox(box)}
                  className={cn(
                    "group cursor-pointer p-4 sm:p-6 bg-stone-50 border-2 transition-all duration-300 relative flex sm:block items-center sm:items-start gap-4 sm:gap-0",
                    selectedBox.id === box.id ? "border-primary bg-white shadow-lg" : "border-transparent hover:border-primary/50"
                  )}
                >
                  {box.popular && (
                    <div className="absolute -top-2 sm:-top-3 right-0 sm:right-0 bg-primary text-white text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 uppercase tracking-widest font-bold z-10">Popular</div>
                  )}
                  <div className="h-20 w-20 sm:w-full sm:h-32 md:h-40 sm:mb-4 overflow-hidden bg-stone-200 shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={box.img} alt={box.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl mb-0.5 sm:mb-1">{box.name}</h3>
                    <p className="text-stone-500 text-xs sm:text-sm mb-1 sm:mb-4">{box.capacity} • {box.varieties}</p>
                    <span className="text-primary font-bold text-sm sm:text-base">₹{box.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 2 */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 border-b border-stone-200 pb-3 sm:pb-4">
              <div className="flex items-end gap-4 sm:gap-6">
                <span className="text-5xl sm:text-7xl font-serif text-stone-200 leading-none">02</span>
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-[9px] sm:text-[10px] block mb-1">The Selection</span>
                  <h2 className="text-2xl sm:text-4xl font-serif">Choose Your Sweets</h2>
                </div>
              </div>
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                <input className="w-full bg-white border border-stone-200 py-2.5 sm:py-3 pl-9 sm:pl-10 pr-4 focus:ring-1 focus:ring-primary text-xs sm:text-sm shadow-sm" placeholder="Search sweets..." type="text" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
              {SWEETS.map((sweet) => (
                <div key={sweet.id} className="group bg-white overflow-hidden border border-stone-200 transition-shadow hover:shadow-md flex flex-col">
                  <div className="h-28 sm:h-40 md:h-48 relative overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={sweet.img} alt={sweet.name} referrerPolicy="no-referrer" />
                    {sweet.bestseller && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                        <span className="bg-tertiary text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 font-bold uppercase">Bestseller</span>
                      </div>
                    )}
                  </div>
                  <div className="p-2 sm:p-4 flex flex-col flex-1">
                    <h4 className="font-serif text-sm sm:text-lg mb-0.5 sm:mb-1 line-clamp-1">{sweet.name}</h4>
                    <p className="text-stone-500 text-[9px] sm:text-xs mb-2 sm:mb-3 line-clamp-2 flex-1">{sweet.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-primary font-bold text-xs sm:text-sm">₹{sweet.price} <span className="text-[9px] sm:text-xs font-normal text-stone-400">/ pc</span></span>
                      <button className="bg-primary text-white p-1.5 sm:p-2 hover:bg-primary-dark transition-colors">
                        <Plus size={14} className="sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4 mt-4 lg:mt-0">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-5 sm:p-8 border border-stone-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-100">
                <div className="w-2/3 h-full bg-primary transition-all duration-700 ease-out"></div>
              </div>
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-tighter mb-0.5 sm:mb-1">Your Box</h3>
                  <p className="text-[8px] sm:text-[9px] text-stone-400 uppercase tracking-[0.2em] font-bold">Custom Curation</p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary uppercase tracking-widest border border-primary/20">65% Full</span>
              </div>
              <div className="aspect-[4/3] sm:aspect-square bg-stone-50 flex items-center justify-center border border-dashed border-stone-300 mb-4 sm:mb-6 p-3 sm:p-4 relative">
                <div className="absolute inset-0 border-[8px] sm:border-[16px] border-white/50 pointer-events-none"></div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full h-full">
                  <div className="bg-white overflow-hidden border border-stone-100">
                    <img className="w-full h-full object-cover" src={SWEETS[0].img} alt="item" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-white overflow-hidden border border-stone-100">
                    <img className="w-full h-full object-cover" src={SWEETS[1].img} alt="item" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-stone-100/50 flex items-center justify-center border border-dashed border-stone-200">
                    <Plus size={16} className="text-stone-300 sm:w-5 sm:h-5" />
                  </div>
                  <div className="bg-stone-100/50 flex items-center justify-center border border-dashed border-stone-200">
                    <Plus size={16} className="text-stone-300 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-stone-500">Motichoor Ladoo (x4)</span>
                  <span className="font-bold">₹180</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-stone-500">Kaju Katli (x6)</span>
                  <span className="font-bold">₹330</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-stone-500">{selectedBox.name}</span>
                  <span className="font-bold">₹{selectedBox.price}</span>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-4 space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">Total Weight</p>
                    <p className="text-base sm:text-lg font-serif">650g / {selectedBox.capacity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">Subtotal</p>
                    <p className="text-2xl sm:text-3xl font-serif text-primary">₹2,110</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-3 sm:py-4 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-all">
                    Add to Cart
                  </button>
                  <button className="p-3 sm:p-4 bg-stone-100 hover:bg-stone-200 transition-colors">
                    <Heart size={18} className="text-stone-600 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
