export const ARTWORK_CATEGORIES: readonly string[] = [
  'Paintings',
  'Sculptures',
  'Photography',
  'Digital Art',
  'Mixed Media',
  'Traditional Art',
  'Contemporary Art',
  'Textile Art',
  'Ceramics',
  'Printmaking',
  'Installation Art',
] as const;

export const AFRICAN_COUNTRIES: readonly string[] = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'Ethiopia',
  'Senegal',
  'Uganda',
  'Tanzania',
  'Egypt',
  'Morocco',
  'Cameroon',
  'Rwanda',
  'Zimbabwe',
  'Zambia',
  'Angola',
  'Mali',
  'Ivory Coast',
  'Democratic Republic of the Congo',
] as const;

export const PAGE_SIZES: readonly number[] = [12, 24, 48, 96] as const;

export const ART_MEDIUMS: readonly string[] = [
  'Oil Paint',
  'Acrylic Paint',
  'Watercolor',
  'Wood',
  'Bronze',
  'Stone',
  'Clay',
  'Digital',
  'Mixed Media',
  'Textile',
  'Glass',
  'Metal',
] as const;

export const CURRENCY = {
  symbol: '$',
  code: 'USD',
  name: 'US Dollar',
};

export const IMAGE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedFormats: ['image/jpeg', 'image/png', 'image/webp'],
  dimensions: {
    min: { width: 800, height: 800 },
    max: { width: 4096, height: 4096 },
  },
};

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  artists: '/artists',
  artworks: '/artworks',
  orders: '/orders',
  users: '/users',
} as const;
