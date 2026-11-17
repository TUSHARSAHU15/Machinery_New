export interface MachineCategory {
  slug: string;
  name: string;
  short: string;
  image: string;
  subcategories?: string[];
}

export interface Machine {
  slug: string;
  name: string;
  model: string;
  category: string;
  condition: 'New' | 'Used';
  available: boolean;
  capacity: string;
  capacityValue: number;
  price: number | null;
  power: string;
  dimensions: string;
  description: string;
  images: string[];
  specs: [string, string][];
  support: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company?: string;
  location: string;
  quote: string;
  rating: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  about: string;
  establishedYear: string;
  natureOfBusiness: string;
  contactPerson: string;
  contactDesignation: string;
  phone: string;
  phones: string[];
  whatsapp: string;
  whatsappSecondary: string;
  email: string;
  address: string;
  mapsUrl: string;
  hours: string;
  facebook: string;
}
