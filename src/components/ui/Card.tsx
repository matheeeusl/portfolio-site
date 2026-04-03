"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ElementType, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  index?: number;
  as?: ElementType;
}

export const Card = ({
  children,
  index = 0,
  className = "",
  as: Tag = "div",
  style,
  ...rest
}: CardProps) => {
  const { ref, className: revealClass, style: revealStyle } = useScrollReveal({
    delay: index * 100,
  });

  return (
    <Tag
      ref={ref}
      className={`rounded-xl border dark:bg-slate-900 ${revealClass} ${className}`}
      style={{ ...revealStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
