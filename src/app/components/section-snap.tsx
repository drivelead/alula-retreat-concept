"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function SectionWrapper({
  children,
  className,
  ...props
}: Props) {
  return (
    <section className={cn(`h-dvh snap-start`, className)} {...props}>
      {children}
    </section>
  );
}
