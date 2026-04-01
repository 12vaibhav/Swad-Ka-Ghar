import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-muted pt-10 pb-6 md:pt-20 md:pb-10 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-12 mb-8 md:mb-16">
        <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4 md:space-y-6">
          <Link to="/" className="text-2xl md:text-3xl font-bold font-serif italic text-primary tracking-tighter">
            Swad Ka Ghar
          </Link>
          <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-xs">
            Authentic Indian culinary heritage, reimagined for the contemporary palate. Every bite is a story of tradition, spices, and soul.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
              <Facebook className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
              <Twitter className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-8 text-on-background">Quick Links</h4>
          <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-on-surface-variant">
            <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/reservations" className="hover:text-primary transition-colors">Reservations</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-8 text-on-background">Support</h4>
          <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-8 text-on-background">Visit Us</h4>
          <ul className="space-y-3 md:space-y-6 text-xs md:text-sm text-on-surface-variant">
            <li className="flex items-start gap-2 md:gap-3">
              <MapPin className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary shrink-0" />
              <span>124 Heritage Lane, Civil Lines, Jaipur, Rajasthan - 302001</span>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <Phone className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <Mail className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary shrink-0" />
              <span>hello@swadkaghar.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold text-center md:text-left">
        <p>© 2024 Swad Ka Ghar. Crafted with Heritage.</p>
        <div className="flex items-center gap-2 text-primary">
          <MapPin size={12} />
          <span>New Delhi, India</span>
        </div>
      </div>
    </footer>
  );
}
