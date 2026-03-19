import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#F5A623] text-[#1A1A2E] hover:bg-[#e09510] font-semibold",
  secondary:
    "bg-[#1A1A2E] text-white hover:bg-[#2D3142] font-semibold",
  ghost:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1A1A2E] font-semibold",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5d] font-semibold",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
  type = "button",
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase tracking-wider rounded-none transition-colors duration-200 cursor-pointer";
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
