import type { ReactNode } from "react";

interface TagPillProps {
  children: ReactNode;
  size?: "sm" | "xs";
  className?: string;
}

/** Small outlined monospace pill used for technology tags. */
export function TagPill({ children, size = "sm", className = "" }: TagPillProps) {
  const sizeClasses = size === "sm" ? "px-2.5 py-[5px] text-[10.5px]" : "px-2 py-1 text-[10px]";
  return (
    <span
      className={`rounded-full border border-line font-mono text-muted ${sizeClasses} ${className}`}
    >
      {children}
    </span>
  );
}
