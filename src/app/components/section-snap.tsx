"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("h-dvh snap-start", className)}
        {...props}>
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
export default SectionWrapper;
