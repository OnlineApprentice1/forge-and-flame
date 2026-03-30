"use client";

import { Hammer, Building2, Sparkles, Wrench, Shield } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import SectionBentoGrid from "@/components/layouts/SectionBentoGrid";
import Reveal from "@/components/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

const services = [
  {
    id: "fabrication",
    icon: Hammer,
    name: "Custom Metal Fabrication",
    description:
      "Railings, gates, furniture, art pieces. Every piece built to your exact specifications — nothing prefab, nothing off the shelf.",
    featured: true,
  },
  {
    id: "structural",
    icon: Building2,
    name: "Structural Welding",
    description:
      "Beams, columns, reinforcements for commercial and residential builds.",
    featured: false,
  },
  {
    id: "ornamental",
    icon: Sparkles,
    name: "Ornamental Ironwork",
    description:
      "Decorative railings, garden features, custom signage. Artistry meets function.",
    featured: false,
  },
  {
    id: "mobile",
    icon: Wrench,
    name: "Mobile Welding",
    description:
      "On-site service across Northwestern Ontario. We come to you.",
    featured: false,
  },
  {
    id: "repairs",
    icon: Shield,
    name: "Repairs & Restoration",
    description:
      "Heritage metalwork, equipment repair, re-welding. We fix what others walk away from.",
    featured: false,
  },
];

export default function Services() {
  useReducedMotion(); // consumed in child Reveal/StaggerGroup

  const [featured, ...standard] = services;
  const FeaturedIcon = featured.icon;

  return (
    <section className="section-bg-gradient section-standard">
      {/* Section header — outside the bento grid */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1rem 2.5rem",
        }}
        className="sm:px-6 lg:px-8"
      >
        <Reveal animation="slide-left">
          <h2
            className="type-section anvil-stamp"
            style={{ color: "var(--clr-text-primary)" }}
          >
            What We Build
          </h2>
        </Reveal>
      </div>

      {/* Bento grid — wraps grid but NOT the section padding */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1rem",
        }}
        className="sm:px-6 lg:px-8"
      >
        <StaggerGroup pattern="cascade" staggerDelay={0.06}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
            style={{ gridAutoRows: "minmax(180px, auto)" }}
          >
            {/* Featured card — spans 2 columns */}
            <StaggerItem pattern="cascade" className="md:col-span-2">
              <div className="card-featured molten-edge h-full flex flex-col gap-5">
                {/* Icon container */}
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "color-mix(in oklch, var(--clr-primary) 15%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FeaturedIcon
                    size={24}
                    style={{ color: "var(--clr-accent)" }}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="type-card"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  {featured.name}
                </h3>

                <p
                  className="type-body"
                  style={{
                    color: "var(--clr-text-secondary)",
                    flex: 1,
                  }}
                >
                  {featured.description}
                </p>

                {/* Accent line */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "2px",
                    width: "4rem",
                    background: "var(--clr-accent)",
                    marginTop: "auto",
                  }}
                />
              </div>
            </StaggerItem>

            {/* Standard cards */}
            {standard.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id} pattern="cascade">
                  <div className="card-standard h-full flex flex-col gap-4">
                    {/* Icon container */}
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background: "color-mix(in oklch, var(--clr-primary) 15%, transparent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        size={22}
                        style={{ color: "var(--clr-accent)" }}
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      className="type-card"
                      style={{ color: "var(--clr-text-primary)" }}
                    >
                      {service.name}
                    </h3>

                    <p
                      className="type-body"
                      style={{ color: "var(--clr-text-secondary)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
