"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/effects/WaveDivider";

const projectStats = [
  { label: "Scope", value: "400 linear feet" },
  { label: "Material", value: "Marine-grade stainless" },
  { label: "Build time", value: "6-week build" },
];

export default function SignatureProject() {
  useReducedMotion(); // referenced in child Reveal components

  const leftContent = (
    <Reveal animation="clip-reveal">
      <div className="relative" style={{ aspectRatio: "4/3" }}>
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80"
          alt="Custom iron gate — Thunder Bay Waterfront Railing project"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          style={{ objectFit: "cover" }}
          className="img-elevated"
        />
        {/* Hard edge accent border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-8px",
            left: "-8px",
            width: "60%",
            height: "4px",
            background: "var(--clr-accent)",
          }}
        />
      </div>
    </Reveal>
  );

  const rightContent = (
    <Reveal animation="clip-reveal" delay={0.15}>
      <div className="flex flex-col gap-6">
        <span className="badge-label">Featured Project</span>

        <h2
          className="type-section anvil-stamp"
          style={{ color: "var(--clr-text-primary)" }}
        >
          Thunder Bay Waterfront Railing
        </h2>

        <p
          className="type-body-lg"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          A commissioned railing system spanning the waterfront promenade — built
          to withstand Northwestern Ontario winters and Lake Superior&apos;s
          corrosive shoreline air. Every weld hand-finished. Every post set in
          anchor bolts. Built to last a generation.
        </p>

        {/* Stats */}
        <div
          style={{
            borderTop: "2px solid var(--clr-surface-3)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {projectStats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--clr-surface-3)",
                paddingBottom: "0.5rem",
              }}
            >
              <span
                className="type-small"
                style={{
                  color: "var(--clr-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </span>
              <span
                className="type-card"
                style={{ color: "var(--clr-accent)" }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );

  return (
    <>
      {/* Spark-trail divider above this section */}
      <WaveDivider
        color="var(--clr-accent)"
        variant="sharp"
        height={48}
      />

      <SectionAsymmetricSplit
        left={leftContent}
        right={rightContent}
        ratio="8-4"
        className="section-bg-gradient section-spacious"
      />
    </>
  );
}
