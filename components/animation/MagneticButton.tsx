"use client";

import Link from "next/link";
import { MouseEvent, ReactNode, useRef } from "react";

export function MagneticButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  return <Link ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`button button--${variant}`} href={href}>{children}</Link>;
}
