import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Minus, Plus, X, CheckCircle2, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const INITIAL_CART = [
  {
    id: 1,
    name: 'Kesar Peda',
    variant: '500g',
    price: 600,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1605197132819-b7540a8c0840?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Motichoor Ladoo',
    variant: '1kg',
    price: 500,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1599598425947-3300262939fa?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Cart() {
  const [step, setStep] = useState(1); // 1: Cart, 2: Info, 3: Review, 4: Success
  const [cart, setCart] = useState(INITIAL_CART);
  
  // Form State
  const [formData, setFormData] = useState({
    email: 'vaibhav.dhiman1221@gmail.com',
    firstName: 'Vaibhav',
    lastName: 'Dhiman',
    address: '124 Heritage Lane, Civil Lines',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    phone: '+91 98765 43210',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 100;
  const total = subtotal + shipping;

  const steps = [
    { num: 1, title: 'Cart' },
    { num: 2, title: 'Information' },
    { num: 3, title: 'Review' },
  ];

  if (step === 4) {
    return (
      <div className="pt-32 pb-24 bg-stone-50/30 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 max-w-lg w-full text-center border border-stone-100 shadow-sm"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-serif text-stone-900 mb-4">Order Confirmed</h1>
          <p className="text-stone-500 font-lora italic mb-8">
            Thank you for your order, {formData.firstName}. We'll send a confirmation email to {formData.email} shortly.
          </p>
          <div className="p-6 bg-stone-50 border border-stone-100 mb-8 text-left">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Order Number</p>
            <p className="font-mono text-stone-900 font-medium">#ORD-{Math.floor(Math.random() * 1000000)}</p>
          </div>
          <Link 
            to="/"
            className="inline-block bg-primary text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10 md:pt-24 md:pb-16 bg-stone-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stepper */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-stone-200 -z-10"></div>
            {steps.map((s, i) => {
              const isActive = step >= s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="flex flex-col items-center bg-stone-50/30 px-2 md:px-4">
                  <div className={cn(
                    "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-colors duration-300",
                    isActive ? "bg-primary text-white" : "bg-white border border-stone-200 text-stone-400"
                  )}>
                    {isActive && !isCurrent ? <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" /> : s.num}
                  </div>
                  <span className={cn(
                    "mt-2 md:mt-3 text-[8px] md:text-[10px] uppercase tracking-widest font-bold transition-colors duration-300",
                    isCurrent ? "text-primary" : (isActive ? "text-stone-900" : "text-stone-400")
                  )}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16">
          
          {/* Main Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* STEP 1: CART */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4 md:mb-8">Your Cart</h2>
                    {cart.length === 0 ? (
                      <div className="text-center py-12 md:py-16 bg-white border border-stone-100">
                        <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 mx-auto text-stone-200 mb-4" />
                        <p className="text-sm md:text-base text-stone-500 font-lora italic mb-6">Your cart is currently empty.</p>
                        <Link to="/offers" className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm hover:underline">
                          Browse Sweets
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4 md:space-y-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4 md:gap-6 bg-white p-3 md:p-4 border border-stone-100 relative group">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="absolute top-2 right-2 md:top-4 md:right-4 text-stone-300 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-stone-100">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-0.5 md:py-1">
                              <div className="pr-6 md:pr-8">
                                <h3 className="font-serif text-base md:text-lg text-stone-900 leading-tight mb-0.5 md:mb-0">{item.name}</h3>
                                <p className="text-stone-500 text-xs md:text-sm">{item.variant}</p>
                              </div>
                              <div className="flex items-center justify-between mt-2 md:mt-4">
                                <div className="flex items-center border border-stone-200 h-8 md:h-10">
                                  <button 
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="px-2 md:px-3 h-full text-stone-500 hover:text-primary transition-colors flex items-center justify-center"
                                  >
                                    <Minus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                  </button>
                                  <span className="w-6 md:w-10 text-center text-xs md:text-sm font-medium text-stone-900">
                                    {item.quantity}
                                  </span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="px-2 md:px-3 h-full text-stone-500 hover:text-primary transition-colors flex items-center justify-center"
                                  >
                                    <Plus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                  </button>
                                </div>
                                <p className="font-medium text-stone-900 text-sm md:text-base">₹{item.price * item.quantity}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 2: INFORMATION */}
                {step === 2 && (
                  <div className="bg-white p-4 md:p-6 lg:p-10 border border-stone-100">
                    <h2 className="text-xl md:text-2xl font-serif text-stone-900 mb-4 md:mb-6">Contact Information</h2>
                    <div className="mb-6 md:mb-8">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <h2 className="text-xl md:text-2xl font-serif text-stone-900 mb-4 md:mb-6">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                      />
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                      />
                      <input 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400 md:col-span-2"
                      />
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                      />
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <input 
                          type="text" 
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State" 
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                        />
                        <input 
                          type="text" 
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="PIN Code" 
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                        />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number" 
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400 md:col-span-2"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: REVIEW */}
                {step === 3 && (
                  <div className="space-y-6 md:space-y-8">
                    <div className="bg-white border border-stone-100 p-4 md:p-6">
                      <h2 className="text-lg md:text-xl font-serif text-stone-900 mb-3 md:mb-4">Shipping Details</h2>
                      <div className="space-y-2 md:space-y-3 text-stone-600 text-xs md:text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between py-2 md:py-3 border-b border-stone-100 gap-1 sm:gap-0">
                          <span className="text-stone-400">Contact</span>
                          <span className="font-medium text-stone-900 break-all sm:break-normal">{formData.email}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-2 md:py-3 border-b border-stone-100 gap-1 sm:gap-0">
                          <span className="text-stone-400">Ship to</span>
                          <span className="font-medium text-stone-900 sm:text-right max-w-full md:max-w-md">
                            {formData.address}, {formData.city}, {formData.state} {formData.pincode}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-2 md:py-3 gap-1 sm:gap-0">
                          <span className="text-stone-400">Method</span>
                          <span className="font-medium text-stone-900">Standard Delivery (2-3 Days)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-stone-100 p-4 md:p-6">
                      <h2 className="text-lg md:text-xl font-serif text-stone-900 mb-2 md:mb-4">Payment Method</h2>
                      <p className="text-stone-500 text-xs md:text-sm mb-4 md:mb-6">All transactions are secure and encrypted.</p>
                      
                      <div className="space-y-3 md:space-y-4">
                        <label className={cn(
                          "flex items-center p-3 md:p-4 border cursor-pointer transition-colors",
                          paymentMethod === 'card' ? "border-primary bg-primary/5" : "border-stone-200 hover:border-stone-300"
                        )}>
                          <input 
                            type="radio" 
                            name="payment" 
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary focus:ring-primary border-stone-300"
                          />
                          <div className="ml-3 md:ml-4 flex-1 flex items-center justify-between">
                            <span className="font-medium text-stone-900 text-sm md:text-base">Credit / Debit Card</span>
                            <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-stone-400" />
                          </div>
                        </label>
                        
                        <label className={cn(
                          "flex items-center p-3 md:p-4 border cursor-pointer transition-colors",
                          paymentMethod === 'upi' ? "border-primary bg-primary/5" : "border-stone-200 hover:border-stone-300"
                        )}>
                          <input 
                            type="radio" 
                            name="payment" 
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary focus:ring-primary border-stone-300"
                          />
                          <div className="ml-3 md:ml-4 flex-1 flex items-center justify-between">
                            <span className="font-medium text-stone-900 text-sm md:text-base">UPI (GPay, PhonePe, Paytm)</span>
                            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-stone-400" />
                          </div>
                        </label>

                        <label className={cn(
                          "flex items-center p-3 md:p-4 border cursor-pointer transition-colors",
                          paymentMethod === 'cod' ? "border-primary bg-primary/5" : "border-stone-200 hover:border-stone-300"
                        )}>
                          <input 
                            type="radio" 
                            name="payment" 
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary focus:ring-primary border-stone-300"
                          />
                          <div className="ml-3 md:ml-4 flex-1 flex items-center justify-between">
                            <span className="font-medium text-stone-900 text-sm md:text-base">Cash on Delivery</span>
                            <Truck className="w-4 h-4 md:w-5 md:h-5 text-stone-400" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white border border-stone-100 p-5 md:p-6 lg:p-8 sticky top-20 md:top-28">
              <h2 className="text-lg md:text-xl font-serif text-stone-900 mb-4 md:mb-6">Order Summary</h2>
              
              {/* Mini Cart Items (Only show in Step 2 & 3) */}
              {step > 1 && (
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-stone-100">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-100 relative shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-4 h-4 md:w-5 md:h-5 bg-stone-500 text-white text-[8px] md:text-[10px] font-bold flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs md:text-sm font-medium text-stone-900 truncate">{item.name}</h4>
                        <p className="text-[10px] md:text-xs text-stone-500">{item.variant}</p>
                      </div>
                      <p className="text-xs md:text-sm font-medium text-stone-900 shrink-0">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3 md:space-y-4 text-xs md:text-sm mb-4 md:mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className="font-medium text-stone-900">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-stone-200 mb-6 md:mb-8">
                <span className="text-base md:text-lg font-serif text-stone-900">Total</span>
                <div className="text-right">
                  <span className="text-[10px] md:text-xs text-stone-400 mr-1.5 md:mr-2">INR</span>
                  <span className="text-xl md:text-2xl font-serif text-primary">₹{total}</span>
                </div>
              </div>

              {step === 1 && (
                <button 
                  onClick={() => setStep(2)}
                  disabled={cart.length === 0}
                  className="w-full bg-primary text-white py-3 md:py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>
              )}

              {step === 2 && (
                <div className="space-y-3 md:space-y-4">
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full bg-primary text-white py-3 md:py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary-dark transition-colors"
                  >
                    Continue to Review
                  </button>
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full py-3 md:py-4 text-stone-500 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-stone-900 transition-colors"
                  >
                    Return to Cart
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3 md:space-y-4">
                  <button 
                    onClick={() => setStep(4)}
                    className="w-full bg-primary text-white py-3 md:py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary-dark transition-colors"
                  >
                    Place Order
                  </button>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-3 md:py-4 text-stone-500 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-stone-900 transition-colors"
                  >
                    Return to Information
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
