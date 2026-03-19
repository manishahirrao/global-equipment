"use client";

import { useState } from "react";
import { buildWhatsAppLink, buildMailtoLink } from "@/lib/utils";
import { categories } from "@/data/categories";

interface InquiryFormProps {
  productName?: string;
  showProductDropdown?: boolean;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function InquiryForm({
  productName,
  showProductDropdown = false,
}: InquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    productInterest: productName ?? "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const link = buildWhatsAppLink({
      productName: form.productInterest || productName,
      name: form.name,
      phone: form.phone,
      message: form.message,
    });
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-sm border border-[#E2E2DC] bg-white px-3 py-2.5 text-sm text-[#1C1C1C] placeholder-[#6B7280] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="inq-name" className="block text-xs font-semibold uppercase tracking-wide text-[#1A1A2E] mb-1">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="inq-name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
          placeholder="Your full name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "inq-name-error" : undefined}
        />
        {errors.name && (
          <p id="inq-name-error" role="alert" className="mt-1 text-xs text-[#E84040]">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="inq-phone" className="block text-xs font-semibold uppercase tracking-wide text-[#1A1A2E] mb-1">
          Phone <span aria-hidden="true">*</span>
        </label>
        <input
          id="inq-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
          placeholder="Your phone number"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "inq-phone-error" : undefined}
        />
        {errors.phone && (
          <p id="inq-phone-error" role="alert" className="mt-1 text-xs text-[#E84040]">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="inq-email" className="block text-xs font-semibold uppercase tracking-wide text-[#1A1A2E] mb-1">
          Email
        </label>
        <input
          id="inq-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      {/* Product Interest dropdown */}
      {showProductDropdown && (
        <div>
          <label htmlFor="inq-product" className="block text-xs font-semibold uppercase tracking-wide text-[#1A1A2E] mb-1">
            Product Interest
          </label>
          <select
            id="inq-product"
            value={form.productInterest}
            onChange={(e) => setForm({ ...form, productInterest: e.target.value })}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="inq-message" className="block text-xs font-semibold uppercase tracking-wide text-[#1A1A2E] mb-1">
          Message
        </label>
        <textarea
          id="inq-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass}
          placeholder="Tell us about your requirement..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#F5A623] text-[#1A1A2E] font-bold uppercase tracking-wider py-3 text-sm hover:bg-[#e09510] transition-colors duration-200 rounded-none"
      >
        Send via WhatsApp
      </button>

      <p className="text-center text-xs text-[#6B7280]">
        Can&apos;t use WhatsApp?{" "}
        <a
          href={buildMailtoLink({
            productName: form.productInterest || productName,
            name: form.name || "Visitor",
            phone: form.phone || "N/A",
            message: form.message || "Please contact me.",
          })}
          className="text-[#1A1A2E] underline hover:text-[#F5A623]"
        >
          Send via Email
        </a>
      </p>
    </form>
  );
}
