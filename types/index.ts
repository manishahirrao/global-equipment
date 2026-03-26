export type CategorySlug =
  | "hand-pallet-truck"
  | "industrial-storage-racks"
  | "hydraulic-scissor-lift"
  | "material-handling-equipments"
  | "hydraulic-drum-lifter"
  | "goods-lift"
  | "office-furniture"
  | "nylon-wheel";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number | "quote";
  priceUnit: "piece" | "project";
  specs: Record<string, string>;
  description?: string;
  images: string[];
  badge?: string;
  inStock: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CompanyData {
  name: string;
  legalName?: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  gst: string;
  geo: { lat: number; lng: number };
  hours: string;
  stats: Stat[];
}
