"use client";

import { useReducedMotion } from "framer-motion";
import SectionEditorial from "@/components/layouts/SectionEditorial";
import Reveal from "@/components/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

const materials = [
  {
    name: "Mild Steel",
    description:
      "The workhorse. Structural frames, brackets, heavy-duty repairs.",
  },
  {
    name: "Stainless Steel",
    description:
      "Corrosion-resistant. Food-grade, marine, architectural applications.",
  },
  {
    name: "Aluminum",
    description:
      "Lightweight and versatile. Railings, decorative panels, signage.",
  },
  {
    name: "Wrought Iron",
    description:
      "The classic. Gates, fences, ornamental pieces that age beautifully.",
  },
];

export default function Materials() {
  useReducedMotion();

  return (
    <SectionEditorial align="left" className="section-bg-texture section-compact">
      {/* Section heading */}
      <Reveal animation="fade-up">
        <h2
          className="type-section anvil-stamp"
          style={{ color: "var(--clr-text-primary)" }}
        >
          Materials We Master
        </h2>
      </Reveal>

      {/* Intro paragraph */}
      <Reveal animation="fade-up" delay={0.1}>
        <p
          className="type-body-lg"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          We work with the metals that Northern Ontario demands — materials
          chosen for strength, durability, and beauty in harsh conditions. Every
          piece we build is specified to outlast the climate.
        </p>
      </Reveal>

      {/* 2x2 grid of compact material cards */}
      <StaggerGroup pattern="fan" staggerDelay={0.08} className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {materials.map((material) => (
            <StaggerItem key={material.name} pattern="fan">
              <div className="card-compact relative" style={{ zIndex: 1 }}>
                <h3
                  className="type-card"
                  style={{ color: "var(--clr-accent)" }}
                >
                  {material.name}
                </h3>
                <p
                  className="type-body"
                  style={{
                    color: "var(--clr-text-secondary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {material.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerGroup>
    </SectionEditorial>
  );
}
