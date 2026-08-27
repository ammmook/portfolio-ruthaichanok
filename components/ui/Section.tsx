import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** The first section on the page has no divider above it. */
  withDivider?: boolean;
  className?: string;
}

/**
 * Standard page section: centred 1240px column, fluid vertical rhythm and the
 * hairline divider that separates every block in the original design.
 */
export function Section({ id, children, withDivider = true, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1240px] scroll-mt-20 px-6 py-[clamp(56px,8vw,110px)] ${
        withDivider ? "border-t border-line" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
