import type { CompanyData } from "@/types";

export const company: CompanyData = {
  name: "Global Equipments",
  phone: "08048962384",
  whatsapp: "918048962384",
  email: "info@globalequipments.net",
  address:
    "S-40, Sheetal Apartment, Mandideep Tehsil Goharganj, Ward No. 17, Raisen, Bhopal – 462046, MP",
  gst: "23AARFG4367K1ZY",
  geo: { lat: 23.1125670, lng: 77.5083410 },
  hours: "Monday – Sunday, 9:00 AM – 7:00 PM",
  stats: [
    { value: "Est. 2017", label: "Years of Trust" },
    { value: "36+", label: "Products" },
    { value: "Open 7 Days", label: "Mon – Sun" },
    { value: "MP Coverage", label: "Madhya Pradesh" },
  ],
};

export const testimonials = [
  {
    quote:
      "Global Equipments delivered our pallet trucks on time and the quality is excellent. Highly recommended for any warehouse setup.",
    author: "Rajesh Verma",
    company: "Verma Logistics, Bhopal",
  },
  {
    quote:
      "We purchased scissor lifts and storage racks from them. Great after-sales support and competitive pricing.",
    author: "Sunil Patel",
    company: "Patel Industries, Mandideep",
  },
  {
    quote:
      "Very professional team. The hydraulic drum lifters are sturdy and exactly as described. Will order again.",
    author: "Amit Sharma",
    company: "Sharma Warehousing, Bhopal",
  },
];
