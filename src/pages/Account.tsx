import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { User, ShoppingBag, Heart, MapPin, LogOut, Package, ChevronRight, Edit2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const PROFILE_DATA = {
  name: 'Vaibhav Dhiman',
  email: 'vaibhav.dhiman1221@gmail.com',
  phone: '+91 98765 43210',
  memberSince: 'March 2024',
};

const ORDER_HISTORY = [
  {
    id: 'ORD-2026-0401',
    date: 'April 1, 2026',
    total: '₹1,250',
    status: 'Delivered',
    items: ['Kesar Peda (500g)', 'Motichoor Ladoo (1kg)'],
  },
  {
    id: 'ORD-2026-0315',
    date: 'March 15, 2026',
    total: '₹850',
    status: 'Delivered',
    items: ['Rasgulla (1kg)'],
  },
  {
    id: 'ORD-2026-0228',
    date: 'February 28, 2026',
    total: '₹2,100',
    status: 'Delivered',
    items: ['Premium Assorted Mithai Box', 'Kaju Katli (500g)'],
  },
];

const LIKED_ITEMS = [
  {
    id: 1,
    name: 'Kesar Peda',
    price: '₹600/kg',
    image: 'https://images.unsplash.com/photo-1605197132819-b7540a8c0840?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Motichoor Ladoo',
    price: '₹500/kg',
    image: 'https://images.unsplash.com/photo-1599598425947-3300262939fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Kaju Katli',
    price: '₹1000/kg',
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&q=80&w=800',
  },
];

const SAVED_ADDRESSES = [
  {
    id: 1,
    type: 'Home',
    address: '124 Heritage Lane, Civil Lines',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Office',
    address: 'Tech Park, Tower B, 5th Floor',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302022',
    isDefault: false,
  },
];

const TABS = [
  { id: 'profile', label: 'Profile Details', icon: User },
  { id: 'orders', label: 'Order History', icon: ShoppingBag },
  { id: 'liked', label: 'Liked Items', icon: Heart },
  { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
];

export default function Account() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'profile');

  useEffect(() => {
    if (tabParam && TABS.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  return (
    <div className="pt-16 pb-10 md:pt-20 md:pb-16 bg-stone-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        
        <div className="mb-6 lg:mb-12">
          <h1 className="text-2xl md:text-5xl font-serif text-stone-900 mb-1 md:mb-2">My Account</h1>
          <p className="text-sm md:text-base text-stone-500 font-lora italic">Welcome back, {PROFILE_DATA.name.split(' ')[0]}!</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-stone-100 shadow-sm rounded-none overflow-hidden sticky top-20 md:top-28">
              <div className="p-4 md:p-6 border-b border-stone-100 bg-stone-50/50 flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary font-serif text-lg md:text-xl font-bold">
                    {PROFILE_DATA.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs md:text-sm">{PROFILE_DATA.name}</h3>
                  <p className="text-[9px] md:text-[10px] text-stone-500 uppercase tracking-wider mt-0.5">Member</p>
                </div>
              </div>
              <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible hide-scrollbar">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={cn(
                        "flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold tracking-wide transition-colors whitespace-nowrap lg:whitespace-normal border-b lg:border-b-0 lg:border-l-2",
                        isActive 
                          ? "text-primary border-primary bg-primary/5" 
                          : "text-stone-500 border-transparent hover:bg-stone-50 hover:text-stone-900"
                      )}
                    >
                      <Icon className={cn("w-4 h-4 md:w-[18px] md:h-[18px]", isActive ? "text-primary" : "text-stone-400")} />
                      {tab.label}
                      <ChevronRight size={16} className={cn("ml-auto hidden lg:block transition-transform", isActive ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2")} />
                    </button>
                  );
                })}
              </nav>
              <div className="p-3 md:p-4 border-t border-stone-100">
                <button className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 w-full text-xs md:text-sm font-bold tracking-wide text-red-600 hover:bg-red-50 transition-colors rounded-none">
                  <LogOut className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-stone-100 shadow-sm p-4 md:p-6 lg:p-10 min-h-[400px] md:min-h-[500px]"
              >
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3 md:pb-4">
                      <h2 className="text-xl md:text-2xl font-serif text-stone-900">Profile Details</h2>
                      <button className="text-primary hover:text-primary-dark flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                        <Edit2 size={14} /> Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest">Full Name</label>
                        <p className="text-sm md:text-base text-stone-900 font-medium">{PROFILE_DATA.name}</p>
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest">Email Address</label>
                        <p className="text-sm md:text-base text-stone-900 font-medium">{PROFILE_DATA.email}</p>
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest">Phone Number</label>
                        <p className="text-sm md:text-base text-stone-900 font-medium">{PROFILE_DATA.phone}</p>
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest">Member Since</label>
                        <p className="text-sm md:text-base text-stone-900 font-medium">{PROFILE_DATA.memberSince}</p>
                      </div>
                    </div>
                    <div className="pt-6 md:pt-8 border-t border-stone-100">
                      <h3 className="text-base md:text-lg font-serif text-stone-900 mb-3 md:mb-4">Password & Security</h3>
                      <button className="px-4 py-2 md:px-6 md:py-3 border border-stone-200 text-stone-600 text-xs md:text-sm font-bold hover:bg-stone-50 transition-colors">
                        Change Password
                      </button>
                    </div>
                  </div>
                )}

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                  <div className="space-y-4 md:space-y-6">
                    <div className="border-b border-stone-100 pb-3 md:pb-4 mb-4 md:mb-6">
                      <h2 className="text-xl md:text-2xl font-serif text-stone-900">Order History</h2>
                    </div>
                    {ORDER_HISTORY.length > 0 ? (
                      <div className="space-y-3 md:space-y-4">
                        {ORDER_HISTORY.map((order) => (
                          <div key={order.id} className="border border-stone-100 p-3 md:p-4 lg:p-6 hover:border-primary/30 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-stone-50">
                              <div>
                                <div className="flex items-center gap-2 md:gap-3 mb-1">
                                  <span className="text-sm md:text-base font-bold text-stone-900">{order.id}</span>
                                  <span className="px-1.5 py-0.5 md:px-2 bg-green-50 text-green-700 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                    {order.status}
                                  </span>
                                </div>
                                <p className="text-[10px] md:text-xs text-stone-500">{order.date}</p>
                              </div>
                              <div className="text-left sm:text-right flex flex-row sm:flex-col justify-between items-center sm:items-end">
                                <p className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0 sm:mb-0.5">Total Amount</p>
                                <p className="font-serif text-base md:text-lg text-primary">{order.total}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3">
                              <Package className="w-4 h-4 md:w-4 md:h-4 text-stone-400 mt-0.5 shrink-0" />
                              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                                {order.items.join(', ')}
                              </p>
                            </div>
                            <div className="mt-3 pt-3 md:mt-4 md:pt-4 flex gap-3">
                              <button className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider hover:underline">View Details</button>
                              <span className="text-stone-300">•</span>
                              <button className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider hover:text-stone-900">Reorder</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 mx-auto text-stone-200 mb-4" />
                        <p className="text-sm md:text-base text-stone-500 font-lora italic">You haven't placed any orders yet.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Liked Items Tab */}
                {activeTab === 'liked' && (
                  <div className="space-y-4 md:space-y-6">
                    <div className="border-b border-stone-100 pb-3 md:pb-4 mb-4 md:mb-6">
                      <h2 className="text-xl md:text-2xl font-serif text-stone-900">Liked Items</h2>
                    </div>
                    {LIKED_ITEMS.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                        {LIKED_ITEMS.map((item) => (
                          <div key={item.id} className="group border border-stone-100 overflow-hidden hover:shadow-lg transition-all flex flex-col">
                            <div className="aspect-[4/3] overflow-hidden relative">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <button className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                                <Heart className="w-3 h-3 md:w-3.5 md:h-3.5 fill-primary" />
                              </button>
                            </div>
                            <div className="p-3 md:p-4 flex flex-col flex-grow">
                              <h3 className="font-serif font-bold text-stone-900 text-sm md:text-base mb-0.5 md:mb-1 truncate">{item.name}</h3>
                              <p className="text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">{item.price}</p>
                              <button className="mt-auto w-full py-1.5 md:py-2 border border-primary text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-stone-200 mb-4" />
                        <p className="text-sm md:text-base text-stone-500 font-lora italic">You haven't liked any items yet.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Addresses Tab */}
                {activeTab === 'addresses' && (
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3 md:pb-4 mb-4 md:mb-6">
                      <h2 className="text-xl md:text-2xl font-serif text-stone-900">Saved Addresses</h2>
                      <button className="text-primary hover:text-primary-dark flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                        <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" /> Add New
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {SAVED_ADDRESSES.map((address) => (
                        <div key={address.id} className="border border-stone-100 p-4 md:p-5 relative hover:border-primary/30 transition-colors">
                          {address.isDefault && (
                            <span className="absolute top-0 right-0 bg-primary text-white text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 md:px-2 md:py-1">
                              Default
                            </span>
                          )}
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <MapPin className="w-4 h-4 md:w-4 md:h-4 text-stone-400" />
                            <h3 className="text-sm md:text-base font-bold text-stone-900">{address.type}</h3>
                          </div>
                          <div className="text-xs md:text-sm text-stone-600 leading-relaxed mb-4 md:mb-6 space-y-0.5 md:space-y-1">
                            <p>{address.address}</p>
                            <p>{address.city}, {address.state}</p>
                            <p>{address.pincode}</p>
                          </div>
                          <div className="flex gap-3 md:gap-4 border-t border-stone-50 pt-3 md:pt-4">
                            <button className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider hover:text-primary">Edit</button>
                            <button className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider hover:text-red-600">Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
