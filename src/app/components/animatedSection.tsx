"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  ...props
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = sectionRef.current?.querySelectorAll(".anim");

      gsap.from(elements as gsap.TweenTarget, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
