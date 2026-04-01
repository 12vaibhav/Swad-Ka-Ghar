export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sweets' | 'Savouries' | 'Mains' | 'Biryani' | 'Desserts';
  dietary: 'Veg' | 'Non-Veg';
  image: string;
  isSpecial?: boolean;
  isBestseller?: boolean;
  spicyLevel?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  dietary: 'Veg' | 'Non-Veg';
}
