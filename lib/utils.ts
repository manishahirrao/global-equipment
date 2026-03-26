import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(price: number | "quote", unit: "piece" | "project"): string {
  if (price === "quote") return "Get Latest Price";
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
  const unitLabel = unit === "piece" ? "Pc" : "Project";
  return `${formatted}/${unitLabel}`;
}

export interface WhatsAppFormData {
  productName?: string;
  name: string;
  phone: string;
  message: string;
}

export function buildWhatsAppLink(data: WhatsAppFormData): string {
  const text = [
    "Hi Jay Engineering,",
    `I am interested in: ${data.productName ?? "General Inquiry"}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Message: ${data.message}`,
  ].join("\n");
  return `https://wa.me/918048962384?text=${encodeURIComponent(text)}`;
}

export function buildMailtoLink(data: WhatsAppFormData): string {
  const subject = encodeURIComponent(
    `Inquiry: ${data.productName ?? "General Inquiry"} - Jay Engineering`
  );
  const body = encodeURIComponent(
    [
      `Hi Jay Engineering,`,
      `I am interested in: ${data.productName ?? "General Inquiry"}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Message: ${data.message}`,
    ].join("\n")
  );
  return `mailto:info@jayengineering.in?subject=${subject}&body=${body}`;
}
