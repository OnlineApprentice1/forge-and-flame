"use client";

import { useReducedMotion } from "framer-motion";
import SectionOffsetGrid from "@/components/layouts/SectionOffsetGrid";
import Reveal from "@/components/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

const testimonials = [
  {
    quote:
      "Marcus and his crew built a custom railing for our lakefront property. The craftsmanship is outstanding — every joint is perfect, every curve intentional. Two years in and it still looks brand new.",
    client: "Sarah K.",
    type: "Residential",
  },
  {
    quote:
      "We needed emergency structural welding on a mining access bridge. Forge & Flame had a crew on-site within 24 hours. Professional, fast, and the work exceeded our engineer's specs.",
    client: "James T.",
    type: "Industrial",
  },
  {
    quote:
      "The ornamental gate they built for our restaurant entrance has become a landmark. People photograph it. It\u2019s art that also happens to be a gate.",
    client: "Mei L.",
    type: "Commercial",
  },
];

const decoration = (
  <div
    className="flex flex-col gap-8 items-start"
    style={{ position: "relative" }}
  >
    {/* Giant decorative quote mark */}
    <div
      aria-hidden="true"
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "12rem",
        lineHeight: 0.8,
        color: "color-mix(in oklch, var(--clr-primary) 18%, transparent)",
        userSelect: "none",
      }}
    >
      &ldquo;
    </div>

    <Reveal animation="fade-up">
      <h2
        className="type-section anvil-stamp"
        style={{ color: "var(--clr-text-primary)" }}
      >
        What Clients Say
      </h2>
    </Reveal>

    <p
      className="type-body"
      style={{ color: "var(--clr-text-muted)" }}
    >
      From lakefront homes to industrial sites — Thunder Bay and Northwestern
      Ontario trusts Forge &amp; Flame.
    </p>
  </div>
);

export default function Testimonials() {
  useReducedMotion();

  return (
    <section className="section-bg-texture section-standard relative">
      {/* Ensure section-bg-texture pseudo-element is covered by content */}
      <div className="relative z-10">
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
          }}
          className="sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-start">
            {/* Left — testimonial cards */}
            <div className="lg:order-1">
              <StaggerGroup pattern="pop" staggerDelay={0.08}>
                <div className="flex flex-col gap-6">
                  {testimonials.map((t, i) => (
                    <StaggerItem key={i} pattern="pop">
                      <Reveal animation="rotate-in" delay={i * 0.06}>
                        <div className="card-standard flex flex-col gap-4">
                          <p
                            className="type-body"
                            style={{
                              color: "var(--clr-text-secondary)",
                              fontStyle: "italic",
                            }}
                          >
                            &ldquo;{t.quote}&rdquo;
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              borderTop: "1px solid var(--clr-surface-3)",
                              paddingTop: "0.75rem",
                            }}
                          >
                            <span
                              className="type-small"
                              style={{
                                color: "var(--clr-text-primary)",
                                fontWeight: 600,
                              }}
                            >
                              — {t.client}
                            </span>
                            <span className="badge-label">{t.type}</span>
                          </div>
                        </div>
                      </Reveal>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerGroup>
            </div>

            {/* Right — decoration (hidden on mobile) */}
            <div className="hidden lg:flex lg:order-2 items-start justify-start">
              {decoration}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
