"use client";
import { useEffect, useRef } from "react";

/**
 * Attach a ref to any container element.
 * When it enters the viewport, the class "visible" is added to all
 * child elements that carry the "reveal" class.
 * Stagger delays are controlled via "reveal-delay-N" classes (already in globals.css).
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((child) => child.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
