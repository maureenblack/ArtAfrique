export interface Artist {
  id: string;
  name: string;
  bio: string;
  country: string;
  profileImage?: string;
  email: string;
  phone?: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  artworks?: Artwork[];
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  artistId: string;
  price: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: 'cm' | 'inches';
  };
  yearCreated: number;
  imageUrl: string;
  additionalImages?: string[];
  category: string;
  status: 'available' | 'sold' | 'reserved';
  tags?: string[];
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'artist' | 'customer';
  profileImage?: string;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
}

export interface Order {
  id: string;
  userId: string;
  artworkId: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  amount: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
}
