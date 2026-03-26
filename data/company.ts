import type { CompanyData } from "@/types";

export const company: CompanyData = {
  name: "Jay Engineering",
  legalName: "Shree Engineering",
  phone: "07383560676",
  whatsapp: "917383560676",
  email: "info@jayengineering.in",
  address:
    "Shop No. 03, Near Panjabi Baag, New Ashoka Garden, Ashoka Garden, Bhopal – 462023, Madhya Pradesh",
  gst: "23ICBPK2892H1ZI",
  geo: { lat: 23.2599, lng: 77.4126 },
  hours: "Monday – Sunday, 9:00 AM – 9:00 PM",
  stats: [
    { value: "Est. 2014", label: "Years of Trust" },
    { value: "36+", label: "Products" },
    { value: "Open 7 Days", label: "Mon – Sun" },
    { value: "MP Coverage", label: "Madhya Pradesh" },
  ],
};

export const testimonials = [
  {
    quote:
      "Jay Engineering delivered our pallet trucks on time and the quality is excellent. Highly recommended for any warehouse setup.",
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
