"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";

export default function CTA() {
  useReducedMotion(); // no animation used — intentional stillness

  const background = (
    <div className="absolute inset-0 section-bg-deep grain-overlay">
      {/* Gradient mesh overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in oklch, var(--clr-primary) 18%, transparent) 0%, transparent 65%)",
        }}
      />
      {/* Hard diagonal accent lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(105deg, color-mix(in oklch, var(--clr-accent) 4%, transparent) 0px, color-mix(in oklch, var(--clr-accent) 4%, transparent) 1px, transparent 1px, transparent 60px)",
        }}
      />
    </div>
  );

  return (
    <SectionFullBleed
      background={background}
      contentPosition="center"
      minHeight="min-h-[50vh]"
      className="section-spacious"
    >
      <div
        className="flex flex-col items-center gap-6 text-center"
        style={{ maxWidth: "48rem", margin: "0 auto" }}
      >
        {/* Accent divider line above heading */}
        <div
          aria-hidden="true"
          style={{
            width: "4rem",
            height: "4px",
            background: "var(--clr-accent)",
          }}
        />

        <h2
          className="type-section"
          style={{ color: "var(--clr-text-primary)" }}
        >
          Ready to Build Something That Lasts?
        </h2>

        <p
          className="type-body-lg"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          From custom railings to structural steel — tell us what you need.
          We&apos;ve been building for Northern Ontario for 25 years.
        </p>

        {/* Phone — large, prominent, clickable */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="type-section"
          style={{
            color: "var(--clr-accent)",
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          {siteConfig.phone}
        </a>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-profile">
            Request a Quote
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-profile-ghost">
            Call (807) 555-0173
          </a>
        </div>
      </div>
    </SectionFullBleed>
  );
}
