"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import SectionZigzag from "@/components/layouts/SectionZigzag";
import Reveal from "@/components/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";
import WaveDivider from "@/components/effects/WaveDivider";
import TracePath from "@/components/effects/TracePath";

const steps = [
  {
    number: "01",
    name: "Consultation",
    description:
      "Tell us what you need. We visit the site, take measurements, and talk through your vision. No obligation — just a straight conversation about what&apos;s possible.",
    image: {
      src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&q=80",
      alt: "Metal workshop consultation",
    },
  },
  {
    number: "02",
    name: "Design",
    description:
      "We draft detailed plans and material specs. You approve before any metal gets cut. Changes at this stage cost nothing — changes after fabrication cost a lot.",
    image: {
      src: "https://images.unsplash.com/photo-1530124566582-a45a7c2ec4da?w=800&h=600&fit=crop&q=80",
      alt: "Wrought iron detail — design reference",
    },
  },
  {
    number: "03",
    name: "Fabrication",
    description:
      "Your piece takes shape in our Thunder Bay workshop. We send progress updates at key milestones. Every weld is checked. Every joint is tight.",
    image: {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80",
      alt: "Welding sparks in fabrication shop",
    },
  },
  {
    number: "04",
    name: "Installation",
    description:
      "We deliver and install on-site. Every weld inspected. Every joint tested. We don't leave until it&apos;s right — and we back our work with a written warranty.",
    image: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80",
      alt: "Installed custom iron gate",
    },
  },
];

export default function Process() {
  useReducedMotion();

  const zigzagItems = steps.map((step, i) => ({
    visual: (
      <Reveal animation="blur-sharpen" delay={0.1}>
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          <Image
            src={step.image.src}
            alt={step.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            className="img-elevated"
          />
          {/* Step number overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              fontFamily: "var(--font-heading)",
              fontSize: "4rem",
              fontWeight: 700,
              lineHeight: 1,
              color: "color-mix(in oklch, var(--clr-accent) 20%, transparent)",
              pointerEvents: "none",
            }}
          >
            {step.number}
          </div>
        </div>
      </Reveal>
    ),
    content: (
      <Reveal animation="blur-sharpen" delay={0.2}>
        <div className="flex flex-col gap-4">
          <span className="badge-label">{step.number}</span>
          <h3
            className="type-card anvil-stamp"
            style={{ color: "var(--clr-text-primary)" }}
          >
            {step.name}
          </h3>
          <p
            className="type-body"
            style={{ color: "var(--clr-text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />
        </div>
      </Reveal>
    ),
  }));

  return (
    <>
      {/* Spark-trail divider above process */}
      <WaveDivider
        color="var(--clr-accent)"
        variant="sharp"
        height={48}
        flip
      />

      <section className="section-bg-deep section-standard relative">
        {/* Section heading */}
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1rem 2.5rem",
          }}
          className="sm:px-6 lg:px-8"
        >
          <Reveal animation="blur-sharpen">
            <h2
              className="type-section anvil-stamp"
              style={{ color: "var(--clr-text-primary)" }}
            >
              How We Work
            </h2>
          </Reveal>
        </div>

        {/* TracePath — vertical SVG connector on desktop */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "50%",
            top: "8rem",
            bottom: "4rem",
            width: "40px",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          <TracePath
            color="var(--clr-accent)"
            path="M20,0 C20,100 20,200 20,300 C20,400 20,500 20,600"
            strokeWidth={2}
            height={600}
            width={40}
          />
        </div>

        {/* Zigzag steps */}
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1rem",
          }}
          className="sm:px-6 lg:px-8"
        >
          <StaggerGroup pattern="cascade" staggerDelay={0.06}>
            <div className="flex flex-col gap-12 lg:gap-16">
              {zigzagItems.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <StaggerItem key={i} pattern="cascade">
                    <div
                      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                        isEven ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      <div className="w-full lg:w-1/2">{item.visual}</div>
                      <div className="w-full lg:w-1/2">{item.content}</div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
