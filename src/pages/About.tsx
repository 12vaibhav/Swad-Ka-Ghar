import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, History, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const JOURNEY = [
  { year: '2008', title: 'The First Flame', desc: 'Founded in Muzaffarnagar as a small family shop with only three signature sweets.' },
  { year: '2012', title: 'The Golden Ghee', desc: 'Perfecting our signature recipes and standardizing our commitment to pure organic ingredients.' },
  { year: '2015', title: 'Beyond Borders', desc: 'Recognition as a regional landmark and the opening of our first expansion center.' },
  { year: '2019', title: 'The Modern Gallery', desc: 'Complete redesign of our flagship space to blend heritage with modern architectural elegance.' },
  { year: '2024', title: 'Crafting the Future', desc: 'Taking our heritage digital, allowing the world to taste the magic of Muzaffarnagar.' }
];

const TEAM = [
  { name: 'Harish Gupta', role: 'Founder', desc: 'The visionary who started it all with a single pan of halwa in 2008.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApqXAknzIX8awwXgpOSMbFDwyx_JI5cQ7uX37hyPRAVPL_Cbe1upRwa1EIoY_HJVbRSNyR-vy_y5FJEXoYVUcmmpSTciXfwbEjYqAspbRsmgdKTLlsorkUcAh7NeBnIYpWJxucyIt4BJH6cKLlw4SqffNB5bf95BEQnKpmUW5avMWXXbNmtv4mXJflrVR_ek6MaW_GSr1Fs98ut1OBRz2zZFhJ6iUNFnMx02v70wvgsk77y5VMcrnIpCrgYQUV9rz7XReJcoQ68Fs' },
  { name: 'Chef Rajesh', role: 'Head Chef', desc: 'A master of regional spices with 20 years of culinary experience.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZgxcQX_iY5UgN1jrfMbQyA8sz45RLRw2eqV5wkLJt2pRCEdA3BWujXMjs7iGaF49NMlDbMrgiD_ZIoJbcEDTpXduaqJtjD-J0YEgIWZVa6gYm9E89Su1I0r_Onf1Q34AVygkzWxydToQeLpK9E0_laMQE0-CgtU7buJJNVr4H8hbhJ8vEuDPvdmven4TW2eYWR7ZIS5Lt03mBATMlnSsx8YkfV2ZuLrpAHGl8QtXe4ZgUNBymc8cAyh7PRYGsS-4TlllSa1qreU' },
  { name: 'Master Omkar', role: 'Sweet Maker', desc: 'Specializes in slow-cooked kheer and signature silver-leafed sweets.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbgyNcjFNRitmv50PhHP_5nZfEhFcjza8OgmdHYqmi36iv63QsEdPGITWiHJh7fNd4KOPlNA6lwVN9gdxSZZLBiSilEwwr-5Y0qZLtp_qAcNp88iJXeVzkcMo5IYPfH0_1ySIdg3ryC0ZAdO-H5V-jORj3YqE1o5lqL6qsCpFJpL9fCOWvU7i_0G3eJH-J2MpQLeKU33-OyfbxQDxnVY65Pxna9IiNRnUvhQ8umyBFz_55ItDN77L6oktDcwX2ZgfWFwYMS6IG4D0' },
  { name: 'Neha Gupta', role: 'Guest Experience', desc: 'Ensuring every visitor feels the warmth of our family home.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPQCr12gOrW51YNHB_T_d2bsrwuoCNVPSeDOXs2oisDXlm-uc_e3Gu83JNtXsk1zgbyZRjE993HBxkYcsaKfK-GZjcVhch_tSU8EzPjkIPPTrLhmlTC6WXH3SdwLl5ZA9bSjXm1HYxUozayIj_cDfceCZoxyNW5nSJTc9MDOCjRksH0HK58oZSe9SRhpyIba2zlY-dwjgSaEUnxvuQk-f7Lsxj6Um4-PylZo5CCP0H9F7HvG5NEx4gsJEwJtib3pNa0POrTlu8mWk' }
];

export default function About() {
  return (
    <div className="pt-20 pb-16 bg-stone-50/30">
      <header className="relative min-h-[300px] lg:min-h-[400px] flex items-center mb-8 bg-stone-50 overflow-hidden py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="h-px w-6 lg:w-8 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] lg:tracking-[0.4em] uppercase text-[8px] lg:text-[10px]">Since 2008 • Muzaffarnagar</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-4 lg:mb-6 tracking-tighter leading-[0.9]">
                A Journey of <br/>
                <span className="italic font-light text-primary">Taste & Tradition</span>
              </h1>
              <div className="max-w-xl">
                <p className="text-base md:text-xl text-stone-600 font-lora italic leading-relaxed mb-6 border-l-2 border-primary/30 pl-4 lg:pl-6">
                  Celebrating the rich heritage of Indian culinary arts through generations of artisanal craftsmanship.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center">
                  <div className="flex flex-col">
                    <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Legacy</span>
                    <span className="text-lg lg:text-xl font-serif text-primary">15+ Years</span>
                  </div>
                  <div className="h-6 lg:h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col">
                    <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Recipes</span>
                    <span className="text-lg lg:text-xl font-serif text-primary">50+ Secret</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square sm:aspect-[4/3] overflow-hidden shadow-2xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsL5s9-hMH58PBR_C_VSI6Bkh0Uj5pAPI4mKKrnH-vZ2_ouKM7vJenkGaFjhXowX5qvzFAK8XnBKfzCI49PI6n0rdkA8pH4SvlmLcde3Lc9oL0JZC5KlkptHiiUr_xm0RXAmZXKsxHpLe7S4mnSuFKOunZxgncv7AsKqEmf6l_vsFPqhq7bQRTbYtk2VJKLpnjlF8_2op1vQwk_zngzM0RvEIAgGRf0xKcGAWLZJQuK48EibkbHy6169-9FPKthsBK88bdlSsDzG4" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[8px] lg:border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        {/* Background text accent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Heritage
        </div>
      </header>

      <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white shadow-sm mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square sm:aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL-N6rDxxsJGKG7N8zwEhYhXaE_xiZp2rqaTApu9v6KnR45v8xuD9ObSzNX0JD1SaYXH0ClrrPjLEeXNTID4jfJ3x5nixVCfvGdOgZna3nDk_xF64abXLYdXE_8DIQuR4MACoRfdkp17XDnSpcxTIoKFhGkGs5a0fb_rKR1NEd9Bxaqi3yGNN4DXtkzKoK2eP14P9MPwHHp-DkKTqYpdyZYXOISAALUkRwUCS32z0j8S10jnDAQNwlldwAVbx326IvIpxjSpRqvEQ" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] lg:border-[20px] border-white/10 pointer-events-none"></div>
            </div>
            <div className="static mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 bg-primary text-white p-6 lg:p-8 rounded-none shadow-2xl w-full lg:max-w-[260px]">
              <p className="font-serif italic text-base lg:text-lg leading-relaxed">"The secret ingredient was always love and a spoonful of pure desi ghee."</p>
            </div>
          </div>
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] lg:tracking-[0.4em] uppercase mb-2 lg:mb-4 block text-[9px] lg:text-[10px]">The Beginning</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-none mb-3 lg:mb-4">Our Story</h2>
              <div className="h-1 w-16 lg:w-20 bg-primary/20"></div>
            </div>
            <div className="space-y-4 lg:space-y-6 font-lora text-base lg:text-xl text-stone-600 italic leading-relaxed">
              <p>Established in the heart of Muzaffarnagar, Swad Ka Ghar began as a humble kitchen with a single purpose: to preserve the authentic, unadulterated flavors of our ancestors. Our recipes haven't changed in fifty years, passed down through whispers and hands-on guidance from grandmother to grandchild.</p>
              <p>We believe that luxury lies in purity. That's why we source our milk from local farms daily and continue to use traditional copper vats to slow-cook our sweets. Every piece of Mithai is a testament to the patient art of Indian confectionary.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-stone-100/50 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end gap-4 lg:gap-6 mb-8 border-b border-stone-200 pb-4">
            <span className="text-5xl lg:text-7xl font-serif text-stone-200 leading-none">01</span>
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-[9px] lg:text-[10px] block mb-1">The Timeline</span>
              <h2 className="text-3xl lg:text-4xl font-serif">Our Journey</h2>
            </div>
          </div>
          <div className="relative space-y-8 lg:space-y-12">
            <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 h-full w-px bg-stone-200"></div>
            {JOURNEY.map((item, i) => (
              <div key={i} className={cn(
                "flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 relative pl-8 md:pl-0",
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                <div className="absolute left-1.5 md:static md:hidden w-3 h-3 bg-primary z-10 ring-4 ring-stone-100 rounded-full mt-2"></div>
                <div className={cn("md:w-1/2", i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right")}>
                  <span className="text-primary font-bold text-xl lg:text-2xl font-serif mb-1 lg:mb-2 block">{item.year}</span>
                  <h3 className="font-serif text-lg lg:text-xl font-bold mb-2 lg:mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-stone-500 text-xs lg:text-sm leading-relaxed max-w-sm md:ml-auto md:mr-auto md:ml-0 md:mr-0">{item.desc}</p>
                </div>
                <div className="w-3 h-3 bg-primary z-10 relative hidden md:block ring-8 ring-stone-100 rounded-full"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-end gap-4 lg:gap-6 mb-8 border-b border-stone-200 pb-4">
          <span className="text-5xl lg:text-7xl font-serif text-stone-200 leading-none">02</span>
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-[9px] lg:text-[10px] block mb-1">The Artisans</span>
            <h2 className="text-3xl lg:text-4xl font-serif">The Hands Behind the Flavors</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="group bg-white p-4 lg:p-6 border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden mb-4 lg:mb-6 relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={member.img} alt={member.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-serif text-lg lg:text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-primary text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 lg:mb-4">{member.role}</p>
              <p className="text-stone-500 text-[11px] lg:text-xs leading-relaxed italic border-l border-stone-200 pl-3 lg:pl-4">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 lg:py-10 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { icon: Leaf, title: 'Pure Ingredients', desc: 'Sourced daily from local farms.' },
              { icon: ShieldCheck, title: 'No Preservatives', desc: 'Pure, clean, honest food.' },
              { icon: History, title: 'Family Recipes', desc: 'Passed down through generations.' },
              { icon: Heart, title: 'Warm Hospitality', desc: 'Treating every guest like family.' },
              { icon: Sparkles, title: 'Fresh Daily', desc: 'Prepared fresh every morning.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="text-primary group-hover:text-white transition-colors w-5 h-5 lg:w-7 lg:h-7" />
                </div>
                <h5 className="font-serif font-bold text-xs lg:text-sm mb-1 lg:mb-2 tracking-wide uppercase">{item.title}</h5>
                <p className="text-[9px] lg:text-[10px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
