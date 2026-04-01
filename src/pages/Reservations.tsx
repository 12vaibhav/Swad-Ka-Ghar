import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Reservations() {
  // --- State Management ---
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 10, 1)); // Default to Nov 1, 2024 as in the design
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10, 1));
  const [guestCount, setGuestCount] = useState<number | string>(1);
  const [selectedTime, setSelectedTime] = useState('01:45 PM');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    specialRequest: 'None'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobileCalendarOpen, setIsMobileCalendarOpen] = useState(false);
  const [mobileStep, setMobileStep] = useState(1);
  const [validationError, setValidationError] = useState('');

  // --- Calendar Logic ---
  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    
    // Adjust firstDay to start from Monday (0: Mon, 6: Sun)
    // JS getDay() is 0: Sun, 1: Mon...
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const prevMonthDays = new Date(year, month, 0).getDate();
    const calendarDays = [];

    // Previous month padding
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      calendarDays.push({ day: prevMonthDays - i, currentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= days; i++) {
      calendarDays.push({ day: i, currentMonth: true });
    }

    return calendarDays;
  }, [currentMonth]);

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  const handleDateSelect = (day: number) => {
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    setIsMobileCalendarOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReviewClick = () => {
    if (!formData.fullName || !formData.phone || !formData.email) {
      setValidationError('Please fill in all required contact details.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    setValidationError('');
    setMobileStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email) {
      setValidationError('Please fill in all required contact details.');
      if (window.innerWidth < 1024) {
        setMobileStep(2);
      }
      return;
    }
    
    setValidationError('');
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setMobileStep(1);
      setFormData({ fullName: '', phone: '', email: '', specialRequest: 'None' });
    }, 1500);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  };

  const monthYearLabel = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="pt-20">
      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white max-w-md w-full p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <button 
                onClick={() => setIsSuccess(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={40} />
                </div>
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Reservation Confirmed!</h2>
              <p className="text-stone-500 font-lora italic mb-8">
                Thank you, {formData.fullName || 'Guest'}. Your table for {guestCount} is reserved for {formatDate(selectedDate)} at {selectedTime}.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-stone-50 border border-stone-100 text-xs font-bold tracking-widest uppercase text-stone-400">
                  Confirmation ID: #SG-{Math.floor(Math.random() * 1000000)}
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="w-full bg-stone-900 text-white font-bold py-4 text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Editorial Split Layout */}
      <header className="relative min-h-[300px] lg:min-h-[400px] flex items-center mb-2 lg:mb-8 bg-stone-50 overflow-hidden pt-4 lg:pt-12 pb-8 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-1 lg:mb-4">
                <div className="h-px w-8 bg-primary hidden lg:block"></div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] sm:text-[10px]">Fine Dining Experience</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-900 mb-2 lg:mb-6 tracking-tighter leading-[0.9]">
                Book Your <br className="hidden lg:block" />
                <span className="italic font-light text-primary">Table</span>
              </h1>
              <div className="max-w-xl flex flex-col items-center lg:items-start">
                <p className="text-base sm:text-lg md:text-xl text-stone-600 font-lora italic leading-relaxed mb-3 lg:mb-6 border-l-0 lg:border-l-2 border-primary/30 pl-0 lg:pl-6">
                  "Swaad aur Mehmaan-nawazi" — Secure your spot for an unforgettable journey through the soulful flavors of Muzaffarnagar.
                </p>
                <div className="flex gap-4 sm:gap-8 items-center justify-center lg:justify-start">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Lunch</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">12:30 - 03:30</span>
                  </div>
                  <div className="h-8 w-px bg-stone-200"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Dinner</span>
                    <span className="text-lg sm:text-xl font-serif text-primary">07:00 - 11:00</span>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgQennzbWzB-CoiMCXW-SDRabZH31ocDJr80Gg5eaOcoqU9lsvJHbD3kyfOg6UcTf7Vw33I1G5T0tErhxKN6yVUJ-TkyTViwhYozW6EyRFkGzxwsoxaxFj86NfaAaNFpdGTZ8h3wYI9EHZY9_c_P348UE9xKwFrtLdE0DQb7S9Oluz7rWzFt2xX5_7MJxSiDW-HQwEoG_QlR58TM09W5Csb97bRgZ2Vud6XS9LwPKFS6uUw6MREB-RTLRS7NUlSPp65T5NcZT_HKY" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-serif text-stone-200/30 select-none pointer-events-none italic font-light hidden lg:block">
          Reserve
        </div>
      </header>

      {/* Reservation Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 lg:-mt-24 relative z-20 mb-12 lg:mb-24">
        <form onSubmit={handleSubmit}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Side - Form */}
            <div className="lg:col-span-7 p-4 sm:p-10 lg:p-16 border-r border-stone-100">
              {/* Step 1: Dining Details */}
              <div className={cn(mobileStep !== 1 && "hidden lg:block")}>
                <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-primary font-black text-[9px] sm:text-xs uppercase tracking-widest">Step 01</span>
                  <div className="h-[1px] flex-1 bg-stone-100"></div>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-1 sm:mb-4">Dining Details</h2>
                <p className="font-lora text-stone-500 italic text-xs sm:text-lg">Select your preferred date, time, and guest count.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-10 mb-6 lg:mb-10">
                {/* Date Selection */}
                <div className="md:col-span-7 space-y-3 sm:space-y-6">
                  <label className="hidden md:block text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Select Date</label>
                  
                  {/* Mobile Toggle Button */}
                  <button 
                    type="button"
                    onClick={() => setIsMobileCalendarOpen(!isMobileCalendarOpen)}
                    className="md:hidden w-full flex items-center justify-between bg-stone-50 border border-stone-100 py-2 px-3 text-left"
                  >
                    <div>
                      <span className="block text-[8px] uppercase tracking-[0.3em] font-bold text-stone-400">Select Date</span>
                      <span className="font-serif text-sm text-stone-900">{formatDate(selectedDate)}</span>
                    </div>
                    <ChevronDown className={cn("text-primary transition-transform", isMobileCalendarOpen && "rotate-180")} size={14} />
                  </button>

                  <div className={cn(
                    "bg-stone-50/50 p-3 sm:p-6 border border-stone-100 relative",
                    !isMobileCalendarOpen ? "hidden md:block" : "block"
                  )}>
                    <div className="absolute -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 border-t border-l border-primary"></div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="font-serif italic text-base sm:text-lg text-stone-900">{monthYearLabel}</span>
                      <div className="flex gap-2 sm:gap-4">
                        <button type="button" onClick={prevMonth} className="p-1 sm:p-2 hover:bg-white transition-colors rounded-full"><ChevronLeft size={16} className="text-primary sm:w-[18px] sm:h-[18px]" /></button>
                        <button type="button" onClick={nextMonth} className="p-1 sm:p-2 hover:bg-white transition-colors rounded-full"><ChevronRight size={16} className="text-primary sm:w-[18px] sm:h-[18px]" /></button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[8px] sm:text-[9px] mb-2 sm:mb-3 text-stone-400 font-bold uppercase tracking-widest">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {daysInMonth.map((d, i) => (
                        <button 
                          key={i}
                          type="button"
                          disabled={!d.currentMonth}
                          onClick={() => d.currentMonth && handleDateSelect(d.day)}
                          className={cn(
                            "h-7 sm:h-9 flex items-center justify-center text-xs sm:text-sm transition-all",
                            !d.currentMonth && "text-stone-200 cursor-default",
                            d.currentMonth && selectedDate.getDate() === d.day && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear()
                              ? "bg-primary text-white font-bold shadow-lg shadow-primary/20"
                              : d.currentMonth && "text-stone-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-100"
                          )}
                        >
                          {d.day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Guest Selection */}
                <div className="md:col-span-5 space-y-3 sm:space-y-6">
                  <label className="block text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Number of Guests</label>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5, 6, 8, '12+'].map((n, i) => (
                      <button 
                        key={i} 
                        type="button"
                        onClick={() => setGuestCount(n)}
                        className={cn(
                          "h-8 sm:h-auto sm:aspect-square flex items-center justify-center text-xs sm:text-sm transition-all duration-300 border",
                          guestCount === n 
                            ? "bg-stone-900 text-white border-stone-900 font-bold shadow-xl" 
                            : "bg-white text-stone-500 border-stone-100 hover:border-primary hover:text-primary"
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <div className="pt-1 sm:pt-4">
                    <p className="text-[8px] sm:text-[10px] text-stone-400 italic leading-relaxed">
                      For parties larger than 12, please contact our events team directly for personalized arrangements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-6 lg:mb-10">
                <label className="block text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-3 sm:mb-6">Preferred Time</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-[9px] sm:text-xs font-bold text-stone-900 uppercase tracking-widest">Lunch</span>
                      <div className="h-[1px] flex-1 bg-stone-100"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                      {['12:30 PM', '01:00 PM', '01:45 PM', '02:30 PM'].map(t => (
                        <button 
                          key={t} 
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={cn(
                            "py-2 sm:py-4 border text-[9px] sm:text-xs font-bold tracking-widest transition-all",
                            selectedTime === t 
                              ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                              : "bg-white text-stone-500 border-stone-100 hover:border-secondary hover:text-secondary"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-[9px] sm:text-xs font-bold text-stone-900 uppercase tracking-widest">Dinner</span>
                      <div className="h-[1px] flex-1 bg-stone-100"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                      {['07:00 PM', '08:30 PM', '09:15 PM', '10:00 PM'].map(t => (
                        <button 
                          key={t} 
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={cn(
                            "py-2 sm:py-4 border text-[9px] sm:text-xs font-bold tracking-widest transition-all",
                            selectedTime === t 
                              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                              : "bg-white text-stone-500 border-stone-100 hover:border-primary hover:text-primary"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Next Button for Step 1 */}
              <button
                type="button"
                onClick={() => setMobileStep(2)}
                className="lg:hidden w-full bg-stone-900 text-white font-bold py-4 text-xs uppercase tracking-[0.2em] mt-8"
              >
                Next: Contact Details
              </button>
            </div>

            {/* Step 2: Contact Info */}
            <div className={cn(mobileStep !== 2 && "hidden lg:block", "lg:mt-16")}>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 mb-2 sm:mb-4">
                  <span className="text-primary font-black text-[10px] sm:text-xs uppercase tracking-widest">Step 02</span>
                  <div className="h-[1px] flex-1 bg-stone-100"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-6 sm:mb-8">Contact Information</h2>
                
                {validationError && (
                  <div className="bg-red-50 text-red-600 p-4 border border-red-100 text-xs font-bold uppercase tracking-widest mb-6">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-12">
                  <div className="relative group">
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-stone-200 py-3 sm:py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm font-medium placeholder:text-stone-300" 
                      placeholder="FULL NAME" 
                      type="text" 
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm font-medium placeholder:text-stone-300" 
                      placeholder="PHONE NUMBER" 
                      type="tel" 
                    />
                  </div>
                  <div className="relative group md:col-span-2">
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-primary focus:ring-0 outline-none transition-all text-sm font-medium placeholder:text-stone-300" 
                      placeholder="EMAIL ADDRESS" 
                      type="email" 
                    />
                  </div>
                  <div className="relative group md:col-span-2">
                    <select 
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-primary focus:ring-0 outline-none transition-all text-xs font-bold tracking-widest uppercase appearance-none cursor-pointer"
                    >
                      <option value="None">Special Request (None)</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary Dinner">Anniversary Dinner</option>
                      <option value="Business Meeting">Business Meeting</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Mobile Nav Buttons for Step 2 */}
              <div className="lg:hidden flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setMobileStep(1)}
                  className="flex-1 border border-stone-200 text-stone-600 font-bold py-4 text-xs uppercase tracking-[0.2em]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleReviewClick}
                  className="flex-1 bg-stone-900 text-white font-bold py-4 text-xs uppercase tracking-[0.2em]"
                >
                  Review
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className={cn("lg:col-span-5 bg-stone-900 p-6 sm:p-10 lg:p-16 text-white flex flex-col relative overflow-hidden", mobileStep !== 3 && "hidden lg:flex")}>
              <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-5 pointer-events-none hidden sm:block">
                <Calendar size={200} className="text-white sm:w-[300px] sm:h-[300px]" />
              </div>
              
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-12">
                  <div className="h-[1px] w-6 sm:w-8 bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] sm:text-[10px]">Your Invitation</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-4xl italic mb-6 sm:mb-16">Reservation <br className="hidden sm:block"/>Summary</h3>
                
                {validationError && (
                  <div className="bg-red-500/10 text-red-400 p-4 border border-red-500/20 text-xs font-bold uppercase tracking-widest mb-6">
                    {validationError}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-12">
                  <div className="flex items-start gap-3 sm:gap-6 group">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors shrink-0">
                      <Calendar className="text-primary w-3 h-3 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mb-0.5 sm:mb-2">Selected Date</p>
                      <p className="text-base sm:text-2xl font-serif">{formatDate(selectedDate)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-6 group">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors shrink-0">
                      <Clock className="text-primary w-3 h-3 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mb-0.5 sm:mb-2">Preferred Time</p>
                      <p className="text-base sm:text-2xl font-serif">{selectedTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-6 group">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors shrink-0">
                      <Users className="text-primary w-3 h-3 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mb-0.5 sm:mb-2">Guest Count</p>
                      <p className="text-base sm:text-2xl font-serif">{guestCount} {guestCount === 1 ? 'Person' : 'People'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-20 p-4 sm:p-8 bg-white/5 border-l-2 border-primary relative min-h-[60px] sm:min-h-[100px]">
                  <p className="text-[10px] sm:text-sm italic text-stone-400 leading-relaxed">
                    {formData.specialRequest === 'None' 
                      ? '"No special requests. Looking forward to a wonderful dining experience."' 
                      : `"${formData.specialRequest} - We'll make sure to prepare something special for your visit."`}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-20 relative z-10">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-primary text-white font-bold py-4 sm:py-6 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] overflow-hidden transition-transform active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10">{isSubmitting ? 'Processing...' : 'Confirm Reservation'}</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileStep(2)}
                  className="lg:hidden w-full border border-white/20 text-white font-bold py-4 mt-4 text-[10px] sm:text-sm uppercase tracking-[0.2em]"
                >
                  Back to Details
                </button>
                <div className="mt-4 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center">
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                  <p className="text-white/20 text-[7px] sm:text-[9px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold whitespace-nowrap">Instant SMS Confirmation</p>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </form>
      </section>
    </div>
  );
}

