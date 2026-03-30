import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hammer, Wrench, Sparkles, Flame, Building, ArrowRight } from "lucide-react";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import SectionZigzag from "@/components/layouts/SectionZigzag";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom metal fabrication, structural welding, ornamental ironwork, mobile welding, and repairs in Thunder Bay, Ontario.",
};

const services = [
  {
    id: "custom-fabrication",
    icon: Hammer,
    label: "Custom Metal Fabrication",
    layout: "split" as const,
    reverse: false,
    image: {
      src: "https://images.unsplash.com/photo-1530124566582-a45a7c2ec4da?w=800&h=600&fit=crop&q=80",
      alt: "Wrought iron detail — custom metal fabrication",
    },
    description: [
      "Every fabrication project starts with a conversation. We sit down with you, understand the load requirements, the environment, the aesthetic — and then we build a solution that exists nowhere else. Our shop in Thunder Bay is equipped for everything from light ornamental work to heavy structural steel.",
      "We work with mild steel, stainless steel, aluminum, and wrought iron. Whether you need a one-off bracket or a full structural frame, we run the same process: design review, material selection, fabrication, finish, and delivery. Nothing leaves our floor without passing our internal inspection.",
      "Northern Ontario's extreme climate demands materials and finishes rated for -40° winters and Lake Superior humidity. We factor that into every spec — because a beautiful gate that corrodes in three seasons is a failure, not a success.",
    ],
    details: {
      included: [
        "Design consultation and drawings",
        "Material selection and sourcing",
        "Full shop fabrication",
        "Powder coat or custom finish",
        "Delivery and installation available",
      ],
      timeline: "2–6 weeks depending on complexity",
    },
  },
  {
    id: "structural-welding",
    icon: Building,
    label: "Structural Welding",
    layout: "zigzag" as const,
    reverse: true,
    image: {
      src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&q=80",
      alt: "Metal workshop — structural welding",
    },
    description: [
      "Structural work is where mistakes cost lives. Our welders hold current CWB (Canadian Welding Bureau) certifications and follow CSA W47.1 standards on every commercial and industrial job. We do not cut corners on structural work — period.",
      "We've completed structural welding for commercial builds, mining facilities, and industrial equipment throughout Northwestern Ontario. Load-bearing connections, reinforcing frames, equipment supports — if it carries weight, we've welded it.",
      "All structural work is documented with weld maps and inspection records. You get a paper trail as solid as the steel.",
    ],
    details: {
      included: [
        "CWB-certified welders on every job",
        "CSA W47.1 compliance",
        "Weld maps and inspection records",
        "Commercial, industrial, and residential",
        "Northern Ontario building code knowledge",
      ],
      timeline: "Project-dependent — contact us for assessment",
    },
  },
  {
    id: "ornamental-ironwork",
    icon: Sparkles,
    label: "Ornamental Ironwork",
    layout: "split" as const,
    reverse: true,
    image: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80",
      alt: "Iron gate — ornamental ironwork",
    },
    description: [
      "Ornamental ironwork is the intersection of craft and engineering. A gate needs to swing true for twenty years. A railing needs to meet code and still look like art. We understand both sides of that equation — and we work in the space between them.",
      "Custom gates, railings, balustrades, garden features, signage brackets, fire screens, public art installations — if it's decorative metalwork, we've made it. We're the only shop in Thunder Bay combining full ornamental capability with structural certification under one roof.",
      "Each ornamental piece is hand-forged or hand-fitted in our shop. We don't use catalogue parts or pre-bent stock unless you ask us to. Your property deserves work that's designed for it.",
    ],
    details: {
      included: [
        "Custom design from scratch",
        "Hand-forging and hand-fitting",
        "Gates, railings, balustrades",
        "Garden features and public art",
        "Powder coat or traditional oil finish",
      ],
      timeline: "3–8 weeks depending on scope",
    },
  },
  {
    id: "mobile-welding",
    icon: Flame,
    label: "Mobile Welding",
    layout: "zigzag" as const,
    reverse: false,
    image: {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80",
      alt: "Welding sparks — mobile welding service",
    },
    description: [
      "We go where the work is. Our mobile welding unit serves Thunder Bay, the Lakehead region, and Northwestern Ontario. When a piece of equipment fails at a remote site or a structural repair can't come to us, we come to it.",
      "The truck is stocked for MIG, TIG, and stick welding. We carry multiple shielding gas mixes, a generator for sites without power, and the equipment to work in adverse weather. We've welded in driving snow on a mining road — we know how to get the job done.",
      "Mobile welding is billed portal-to-portal with no hidden fuel surcharges. We're transparent about travel time and we'll tell you upfront if a shop repair would be more cost-effective than an on-site call.",
    ],
    details: {
      included: [
        "MIG, TIG, and stick welding on-site",
        "Generator for off-grid locations",
        "Thunder Bay + Northwestern Ontario radius",
        "Emergency calls accommodated",
        "Transparent portal-to-portal billing",
      ],
      timeline: "Same-day to 48 hours for emergency calls",
    },
  },
  {
    id: "repairs-restoration",
    icon: Wrench,
    label: "Repairs & Restoration",
    layout: "split" as const,
    reverse: false,
    image: {
      src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&q=80",
      alt: "Metal workshop — repairs and restoration",
    },
    description: [
      "Old buildings have old ironwork worth saving. We've restored heritage gates, period railings, and ornamental details on some of Thunder Bay's oldest commercial and residential buildings — working to preserve what exists rather than replace it wholesale.",
      "Beyond heritage work, we repair agricultural machinery, mining equipment, industrial components, and the kind of fabricated parts that you can't simply order from a supplier. If the metal is sound, we can usually save it. If it isn't, we can fabricate a replacement that matches the original.",
      "Restoration work requires patience and a different skill set than new fabrication. We take the time to understand what the original maker intended, match materials as closely as possible, and finish the work in a way that respects the piece.",
    ],
    details: {
      included: [
        "Heritage ironwork restoration",
        "Agricultural and mining equipment repair",
        "Custom replacement parts",
        "Material matching for period work",
        "Documentation for heritage projects",
      ],
      timeline: "Assessment required — varies by condition",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <SectionFullBleed
        background={
          <div
            className="absolute inset-0 section-bg-gradient"
            aria-hidden="true"
          />
        }
        contentPosition="left"
        minHeight="min-h-[40vh]"
        className="section-spacious"
      >
        <Reveal animation="clip-reveal">
          <div className="space-y-4">
            <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
              Our Services
            </h1>
            <p
              className="type-hero-sub max-w-2xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              From structural steel to ornamental art — built for Northern
              Ontario.
            </p>
          </div>
        </Reveal>
      </SectionFullBleed>

      {/* Service 1 — Custom Metal Fabrication (AsymmetricSplit) */}
      <SectionAsymmetricSplit
        ratio="7-5"
        className="section-standard section-bg-deep"
        left={
          <Reveal animation="blur-sharpen">
            <ServiceContent service={services[0]} />
          </Reveal>
        }
        right={
          <Reveal animation="slide-right" delay={0.1}>
            <ServiceImage image={services[0].image} />
          </Reveal>
        }
      />

      {/* Service 2 — Structural Welding (Zigzag) */}
      <SectionZigzag
        className="section-standard section-bg-gradient"
        items={[
          {
            visual: (
              <Reveal animation="slide-left">
                <ServiceImage image={services[1].image} />
              </Reveal>
            ),
            content: (
              <Reveal animation="blur-sharpen" delay={0.1}>
                <ServiceContent service={services[1]} />
              </Reveal>
            ),
          },
        ]}
      />

      {/* Service 3 — Ornamental Ironwork (AsymmetricSplit reversed) */}
      <SectionAsymmetricSplit
        ratio="7-5"
        reverse
        className="section-standard section-bg-deep"
        left={
          <Reveal animation="blur-sharpen">
            <ServiceContent service={services[2]} />
          </Reveal>
        }
        right={
          <Reveal animation="slide-left" delay={0.1}>
            <ServiceImage image={services[2].image} />
          </Reveal>
        }
      />

      {/* Service 4 — Mobile Welding (Zigzag) */}
      <SectionZigzag
        className="section-standard section-bg-gradient"
        items={[
          {
            visual: (
              <Reveal animation="slide-right">
                <ServiceImage image={services[3].image} />
              </Reveal>
            ),
            content: (
              <Reveal animation="blur-sharpen" delay={0.1}>
                <ServiceContent service={services[3]} />
              </Reveal>
            ),
          },
        ]}
      />

      {/* Service 5 — Repairs & Restoration (AsymmetricSplit) */}
      <SectionAsymmetricSplit
        ratio="7-5"
        className="section-standard section-bg-deep"
        left={
          <Reveal animation="blur-sharpen">
            <ServiceContent service={services[4]} />
          </Reveal>
        }
        right={
          <Reveal animation="slide-right" delay={0.1}>
            <ServiceImage image={services[4].image} />
          </Reveal>
        }
      />

      {/* CTA */}
      <section
        className="section-compact section-bg-gradient"
        style={{ borderTop: "2px solid var(--clr-surface-3)" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <h2
              className="type-section anvil-stamp inline-block mb-6"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Start Your Project
            </h2>
            <p
              className="type-body-lg mb-8"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Tell us what you need. We'll assess the scope and give you a
              straight answer on timeline and cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-profile inline-flex items-center gap-2">
                Get a Free Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18075550173"
                className="btn-profile-ghost inline-flex items-center gap-2"
              >
                Call (807) 555-0173
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ─── Sub-components ─── */

interface ServiceData {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string[];
  details: {
    included: string[];
    timeline: string;
  };
}

function ServiceContent({ service }: { service: ServiceData }) {
  const Icon = service.icon;
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Icon
          size={24}
          aria-hidden="true"
          style={{ color: "var(--clr-accent)" }}
        />
        <h2
          className="type-section anvil-stamp"
          style={{ color: "var(--clr-text-primary)" }}
        >
          {service.label}
        </h2>
      </div>

      {service.description.map((para, i) => (
        <p
          key={i}
          className={i === 0 ? "type-body-lg" : "type-body"}
          style={{ color: i === 0 ? "var(--clr-text-secondary)" : "var(--clr-text-muted)" }}
        >
          {para}
        </p>
      ))}

      <div className="grid sm:grid-cols-2 gap-6 pt-2">
        <div className="card-compact space-y-3">
          <h3
            className="type-small"
            style={{
              color: "var(--clr-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            What&rsquo;s Included
          </h3>
          <ul className="space-y-1">
            {service.details.included.map((item) => (
              <li
                key={item}
                className="type-body flex items-start gap-2"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                <span
                  aria-hidden="true"
                  style={{ color: "var(--clr-primary)", marginTop: "0.2em", flexShrink: 0 }}
                >
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-compact">
          <h3
            className="type-small mb-2"
            style={{
              color: "var(--clr-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Typical Timeline
          </h3>
          <p
            className="type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            {service.details.timeline}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceImage({ image }: { image: { src: string; alt: string } }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden img-elevated">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
        className="object-cover"
        style={{ filter: "grayscale(20%) contrast(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, color-mix(in oklch, var(--clr-surface-1) 40%, transparent) 100%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
