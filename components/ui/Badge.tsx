import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "amber" | "dark";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#1A1A2E] text-white",
    amber: "bg-[#F5A623] text-[#1A1A2E]",
    dark: "bg-[#0D0D1A] text-[#F5A623]",
  };
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
