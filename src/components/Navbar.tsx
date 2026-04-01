import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Gifts', path: '/gifts' },
  { name: 'Offers', path: '/offers' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b flex items-center',
        scrolled
          ? 'bg-background/90 backdrop-blur-md h-16 border-outline-variant/20'
          : 'bg-transparent h-20 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold font-serif italic text-primary tracking-tighter shrink-0"
        >
          Swad Ka Ghar
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-primary py-2 border-b-2',
                location.pathname === link.path 
                  ? 'text-primary border-primary' 
                  : 'text-stone-500 border-transparent hover:border-stone-200'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
          <Link to="/account?tab=liked" className="relative p-2.5 text-primary hover:scale-110 transition-all duration-300 rounded-full hover:bg-stone-50">
            <Heart size={18} />
          </Link>
          <Link to="/cart" className="relative p-2.5 text-primary hover:scale-110 transition-all duration-300 rounded-full hover:bg-stone-50">
            <ShoppingBag size={18} />
            <span className="absolute top-1.5 right-1.5 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
              3
            </span>
          </Link>
          <Link to="/account" className="hidden md:flex p-2.5 text-primary hover:scale-110 transition-all duration-300 rounded-full hover:bg-stone-50">
            <User size={18} />
          </Link>
          <button
            className="lg:hidden p-2.5 text-primary hover:bg-stone-50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant/20 py-8 px-6 flex flex-col space-y-6 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg uppercase tracking-widest font-bold transition-colors',
                  location.pathname === link.path ? 'text-primary' : 'text-on-background/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-center">
               <button className="bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest text-xs">
                 Order Now
               </button>
               <Link to="/account" onClick={() => setIsOpen(false)} className="text-primary font-bold uppercase tracking-widest text-xs border border-primary px-8 py-3 text-center">
                 Account
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
