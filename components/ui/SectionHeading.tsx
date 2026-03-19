import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] mb-2",
            light ? "text-[#F5A623]" : "text-[#F5A623]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-black uppercase leading-none",
          "text-4xl md:text-5xl",
          light ? "text-white" : "text-[#1A1A2E]"
        )}
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            "mt-3 text-base max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-gray-300" : "text-[#6B7280]"
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
