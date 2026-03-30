import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import SectionEditorial from "@/components/layouts/SectionEditorial";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "25 years of custom welding and metal fabrication in Thunder Bay. Meet Marcus Reeves and the Forge & Flame team.",
};

const values = [
  {
    heading: "Built to Last",
    body: "Northern Ontario weather doesn't forgive shortcuts. Everything we build is rated for -40° winters and Lake Superior humidity. We specify finishes, coatings, and welds with that reality in mind — not for how the piece looks on delivery day, but for how it holds up in year fifteen.",
  },
  {
    heading: "Custom, Not Cookie-Cutter",
    body: "We don't work from catalogues. Every railing, gate, and frame is designed for your specific space, load requirements, and aesthetic. If you want standard stock, there are faster and cheaper options. If you want something built for you, this is the shop.",
  },
  {
    heading: "Local Knowledge",
    body: "We know Thunder Bay's building codes, soil conditions, and weather patterns. We know the mines, the forestry operations, and the heritage buildings in the downtown core. That knowledge is built into every weld — it's not something you can import from a shop that's never seen a January here.",
  },
  {
    heading: "Honest Pricing",
    body: "We give you a written quote before we start, and we tell you upfront if a job is outside our scope. We've turned down work we didn't think we could do well. That's rarer in this trade than it should be.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — Full Bleed with workshop image */}
      <SectionFullBleed
        background={
          <>
            <Image
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&h=1080&fit=crop&q=80"
              alt="Metal workshop interior — Forge & Flame Custom Metalworks"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, color-mix(in oklch, var(--clr-surface-1) 85%, transparent) 40%, color-mix(in oklch, var(--clr-surface-1) 50%, transparent) 100%)",
              }}
              aria-hidden="true"
            />
          </>
        }
        contentPosition="left"
        minHeight="min-h-[55vh]"
        className="section-spacious section-bg-deep"
      >
        <Reveal animation="clip-reveal">
          <div className="space-y-4">
            <span
              className="badge-label"
              style={{ background: "var(--clr-accent)", color: "var(--clr-surface-1)" }}
            >
              Est. 2001
            </span>
            <h1
              className="type-hero"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Forge &amp; Flame<br />Custom Metalworks
            </h1>
            <p
              className="type-hero-sub max-w-xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              25 years of craft in Thunder Bay. Built by hand, built to last.
            </p>
          </div>
        </Reveal>
      </SectionFullBleed>

      {/* Story Section — AsymmetricSplit */}
      <SectionAsymmetricSplit
        ratio="7-5"
        className="section-standard section-bg-gradient"
        left={
          <Reveal animation="fade-up">
            <div className="space-y-5">
              <h2
                className="type-section anvil-stamp"
                style={{ color: "var(--clr-text-primary)" }}
              >
                The Story
              </h2>
              <p
                className="type-body-lg"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Marcus Reeves picked up a welding torch at 16, working
                summers in his father&rsquo;s small repair shop on the north
                shore of Lake Superior. His father ran a catch-all operation —
                agricultural equipment, boat moorings, whatever Thunder Bay
                needed fixed. Marcus learned to work fast, work clean, and
                never let a customer leave uncertain about the quality of the
                work.
              </p>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-muted)" }}
              >
                He apprenticed formally through the OYAP trades program, earned
                his Red Seal certification, and spent eight years working
                structural and industrial jobs across Northwestern Ontario
                before opening Forge &amp; Flame in 2001 in a rented bay on
                Memorial Avenue. The business grew on word-of-mouth — mining
                companies calling for equipment repairs, homeowners wanting
                custom railings, commercial builders needing structural work
                that a general contractor wouldn&rsquo;t touch.
              </p>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-muted)" }}
              >
                Today the shop serves residential, commercial, and industrial
                clients across Northwestern Ontario. We still have the same
                philosophy as day one: do the work right, or don&rsquo;t do it
                at all. The equipment is better, the team is larger, the scope
                has grown — but the standard hasn&rsquo;t changed.
              </p>
              <blockquote
                className="type-body-lg pl-4"
                style={{
                  borderLeft: "3px solid var(--clr-accent)",
                  color: "var(--clr-text-secondary)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Every piece that leaves our shop has my name on it.
                That&rsquo;s not a figure of speech — I literally stamp my mark
                into the metal.&rdquo;
                <footer
                  className="type-small mt-2 not-italic"
                  style={{ color: "var(--clr-accent)" }}
                >
                  — Marcus Reeves, Founder
                </footer>
              </blockquote>
            </div>
          </Reveal>
        }
        right={
          <Reveal animation="slide-right" delay={0.15}>
            <div className="relative aspect-[3/4] overflow-hidden img-elevated">
              <Image
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&q=80"
                alt="Metal workshop — Forge & Flame shop floor"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 38vw"
                className="object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, color-mix(in oklch, var(--clr-surface-1) 50%, transparent) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
          </Reveal>
        }
      />

      {/* Values Section — Editorial */}
      <SectionEditorial align="left" className="section-standard section-bg-texture">
        <Reveal animation="blur-sharpen">
          <h2
            className="type-section anvil-stamp"
            style={{ color: "var(--clr-text-primary)" }}
          >
            How We Work
          </h2>
        </Reveal>

        {values.map((value, i) => (
          <Reveal key={value.heading} animation="blur-sharpen" delay={i * 0.08}>
            <div
              className="card-compact pt-4 pb-2"
            >
              <h3
                className="type-card mb-2"
                style={{ color: "var(--clr-accent)" }}
              >
                {value.heading}
              </h3>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                {value.body}
              </p>
            </div>
          </Reveal>
        ))}
      </SectionEditorial>

      {/* Experience Strip */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0"
              style={{ borderTop: "2px solid var(--clr-surface-3)", borderBottom: "2px solid var(--clr-surface-3)" }}>
              {[
                { stat: "25+", label: "Years in Business" },
                { stat: "1,200+", label: "Projects Completed" },
                { stat: "Red Seal", label: "Certified Welders" },
                { stat: "NW Ontario", label: "Service Radius" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="py-6 px-4 text-center"
                  style={{
                    borderRight: i < 3 ? "1px solid var(--clr-surface-3)" : "none",
                  }}
                >
                  <div
                    className="type-section"
                    style={{ color: "var(--clr-accent)" }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="type-small mt-1"
                    style={{ color: "var(--clr-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-compact section-bg-gradient">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <p
              className="type-body-lg mb-6"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Ready to start a project? We&rsquo;ll respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-profile inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-profile-ghost inline-flex items-center gap-2">
                View Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
