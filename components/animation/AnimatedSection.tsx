"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(ref.current, { autoAlpha: 0, y: 40 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 82%" }
    });
  }, { scope: ref });
  return <section ref={ref} className={`section ${className}`}>{children}</section>;
}
