import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
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
                <span className="text-primary font-bold tracking-[0.2em] lg:tracking-[0.4em] uppercase text-[8px] lg:text-[10px]">Connect With Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-4 lg:mb-6 tracking-tighter leading-[0.9]">
                Get in <br/>
                <span className="italic font-light text-primary">Touch</span>
              </h1>
              <div className="max-w-xl">
                <p className="text-base md:text-xl text-stone-600 font-lora italic leading-relaxed mb-6 border-l-2 border-primary/30 pl-4 lg:pl-6">
                  We’d love to hear from you! Call, Visit or Message us to share the joy of authentic flavors.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center">
                  <div className="flex flex-col">
                    <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Response Time</span>
                    <span className="text-lg lg:text-xl font-serif text-primary">Under 2 Hours</span>
                  </div>
                  <div className="h-6 lg:h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col">
                    <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Availability</span>
                    <span className="text-lg lg:text-xl font-serif text-primary">7 Days a Week</span>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLoFnsJH0u-Y451kjKj5mzuD-rdsegQGQxhZL_cQUZF9-QHXGIadJ_47d7KyudMzxWC8XHpSTsfa_ARLY_pZPFEWA6v9sl5yqqLZON0RyFOEiS51TojpSNxwPlOGf6LFekr0KfMOzt7IfiOP8h3RekkLOSqP02C8_jW6iA-Coi7oz8au62EtRBv0wjBGHA3zTjjUvS6U15e-jtp4cO29McIhDm50gt3EhmG8OHwoNWvoq2t02RkZNkXGhJb8Lg5Pb_cIJaODikc-U" 
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
          Connect
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 mt-0 lg:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-5 relative rounded-none overflow-hidden shadow-2xl bg-white border border-stone-100 min-h-[auto] lg:min-h-[600px]">
            <div className="absolute inset-0">
              <img 
                className="w-full h-full object-cover opacity-10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDVwIi5uX4e2OlY5LtL7JTfRaiAG8Wopc7dZFOd1GImBIdB4OvyyiaL8YgKcNBo_1iSmT9hr3IkSy94VJXLXPb0zMiQeJGsmLSR3Pka_oSQnsGGAAkdBtp4UVAw63LrqTtxAkSyB44VOmATz2wpWuwXPNE4CGD7Y9VZcpXjiSEbYvRoY2Oqlgo9O0C-JpuHYPfTN9ehdAcDTZv9oBfisUhKobY2r72es8wE671CeYM8bOpNS3gIeKhR78W3NSZOVk5qXwspv9UhMY" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative h-full p-6 md:p-8 lg:p-12 flex flex-col justify-between space-y-8 lg:space-y-12">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-[10px] lg:text-xs mb-2 lg:mb-4 block">Visit Swad Ka Ghar</span>
                <h2 className="font-serif text-2xl lg:text-3xl mb-6 lg:mb-8">Contact Information</h2>
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-none flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base lg:text-lg mb-1">Talk to Us</h4>
                      <p className="text-stone-500 text-sm lg:text-base">+91 98765 43210</p>
                      <p className="text-stone-500 text-sm lg:text-base">hello@swadkaghar.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-tertiary/10 rounded-none flex items-center justify-center shrink-0">
                      <MapPin className="text-tertiary w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-base lg:text-lg mb-1">Visit Us</h4>
                      <p className="text-stone-500 text-sm lg:text-base leading-relaxed mb-4">
                        124 Heritage Lane, Civil Lines, Jaipur<br/>
                        Rajasthan - 302001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-secondary/10 rounded-none flex items-center justify-center shrink-0">
                      <Clock className="text-secondary w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-base lg:text-lg mb-2">Opening Hours</h4>
                      <div className="max-w-xs space-y-2 text-xs lg:text-sm">
                        <div className="flex justify-between border-b border-stone-100 pb-1">
                          <span className="text-stone-500">Mon - Thu</span>
                          <span className="font-semibold">10 AM - 10 PM</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-100 pb-1">
                          <span className="text-stone-500">Fri - Sat</span>
                          <span className="font-semibold">10 AM - 11 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Sunday</span>
                          <span className="font-bold text-primary">09 AM - 11 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 lg:pt-8 border-t border-stone-100 flex flex-wrap gap-2 sm:gap-4">
                <button className="flex-1 sm:flex-none px-4 py-2 sm:px-6 sm:py-2 bg-secondary text-white rounded-none font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" /> WhatsApp
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 sm:px-6 sm:py-2 border border-primary text-primary rounded-none font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition-colors text-center">
                  Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-stone-50 p-6 md:p-8 lg:p-12 rounded-none shadow-sm border border-stone-100">
            <div className="mb-6 lg:mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] lg:text-xs block mb-1 lg:mb-2">Online Inquiry</span>
              <h2 className="font-serif text-3xl lg:text-4xl mb-3 lg:mb-4">Send Us a Message</h2>
              <p className="text-stone-500 text-sm lg:text-base">Have a specific request or feedback? Our team usually responds within 2 hours during business hours.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase ml-1 tracking-wider">Full Name</label>
                <input className="w-full bg-white border-stone-200 rounded-none px-4 py-3 lg:px-6 lg:py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm lg:text-base" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase ml-1 tracking-wider">Phone Number</label>
                <input className="w-full bg-white border-stone-200 rounded-none px-4 py-3 lg:px-6 lg:py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm lg:text-base" placeholder="+91 00000 00000" type="tel" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase ml-1 tracking-wider">Email Address</label>
                <input className="w-full bg-white border-stone-200 rounded-none px-4 py-3 lg:px-6 lg:py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm lg:text-base" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase ml-1 tracking-wider">Subject</label>
                <select className="w-full bg-white border-stone-200 rounded-none px-4 py-3 lg:px-6 lg:py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none text-sm lg:text-base">
                  <option>Table Booking</option>
                  <option>Catering Inquiry</option>
                  <option>Feedback</option>
                  <option>Custom Order</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase ml-1 tracking-wider">Your Message</label>
                <textarea className="w-full bg-white border-stone-200 rounded-none px-4 py-3 lg:px-6 lg:py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm lg:text-base" placeholder="Tell us how we can help you..." rows={5}></textarea>
              </div>
              <div className="md:col-span-2 pt-2 lg:pt-4">
                <button className="w-full md:w-max px-8 py-4 lg:px-12 lg:py-5 bg-primary text-white rounded-none font-bold text-base lg:text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 lg:gap-3" type="submit">
                  <Send size={18} className="lg:w-5 lg:h-5" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
