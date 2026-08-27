"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "md" | "sm";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent font-semibold text-bg hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-line text-text hover:border-accent hover:-translate-y-0.5",
  ghost: "text-muted hover:text-text",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "px-6 py-3.5 text-[15px]",
  sm: "px-5 py-3 text-[14.5px]",
};

const BASE_CLASSES =
  "inline-flex items-center gap-2.5 rounded-full transition-[transform,filter,border-color,color] duration-250 ease-out";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  /** Set for cross-origin links; adds target/rel automatically. */
  external?: boolean;
  download?: string;
  onClick?: () => void;
  type?: never;
}

interface ActionButtonProps extends CommonProps {
  href?: never;
  onClick: () => void;
  ariaLabel?: string;
  type?: "button";
}

/**
 * One button style used for links and actions alike, so padding, radius and
 * hover motion stay identical everywhere.
 */
export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, download, onClick } = props;
    if (external || download || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          onClick={onClick}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, ariaLabel } = props as ActionButtonProps;
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
