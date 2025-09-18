"use client";
import { useEffect } from "react";
import "./fondoscroll.css";

export default function FondoScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const body = document.body;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-bg");
            if (color) body.style.backgroundColor = color;
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return null;
}