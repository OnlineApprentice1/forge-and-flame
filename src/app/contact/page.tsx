import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote for custom welding and metal fabrication in Thunder Bay. Call (807) 555-0173 or fill out our form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <SectionFullBleed
        background={
          <div
            className="absolute inset-0 section-bg-gradient"
            aria-hidden="true"
          />
        }
        contentPosition="left"
        minHeight="min-h-[32vh]"
        className="section-standard"
      >
        <Reveal animation="clip-reveal">
          <div className="space-y-3">
            <h1
              className="type-hero"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Get in Touch
            </h1>
            <p
              className="type-hero-sub max-w-xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Tell us about your project. We&rsquo;ll get back to you within
              one business day.
            </p>
          </div>
        </Reveal>
      </SectionFullBleed>

      {/* Main Content */}
      <section className="section-standard section-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16">

            {/* Left — Form */}
            <Reveal animation="fade-up">
              <div>
                <h2
                  className="type-section anvil-stamp mb-8"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Send a Request
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Right — Sidebar */}
            <Reveal animation="slide-right" delay={0.12}>
              <div className="space-y-8">
                <div>
                  <h2
                    className="type-section anvil-stamp mb-6"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    Contact Info
                  </h2>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <Phone
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <div
                          className="type-small mb-0.5"
                          style={{
                            color: "var(--clr-text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Phone
                        </div>
                        <a
                          href="tel:+18075550173"
                          className="type-body-lg font-semibold"
                          style={{ color: "var(--clr-text-primary)", textDecoration: "none" }}
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <Mail
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <div
                          className="type-small mb-0.5"
                          style={{
                            color: "var(--clr-text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Email
                        </div>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="type-body"
                          style={{ color: "var(--clr-text-primary)", wordBreak: "break-all" }}
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <MapPin
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <div
                          className="type-small mb-0.5"
                          style={{
                            color: "var(--clr-text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Location
                        </div>
                        <p
                          className="type-body"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          Thunder Bay, Ontario
                        </p>
                        <p
                          className="type-small mt-0.5"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Service area: {siteConfig.location.serviceArea}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <Clock
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <div
                          className="type-small mb-0.5"
                          style={{
                            color: "var(--clr-text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Hours
                        </div>
                        <p
                          className="type-body"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          Mon–Fri: 7:00 AM – 5:00 PM
                        </p>
                        <p
                          className="type-small mt-0.5"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Saturday: by appointment
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps Embed */}
                <div
                  className="overflow-hidden"
                  style={{ border: "2px solid var(--clr-surface-3)" }}
                >
                  <div className="relative w-full" style={{ paddingBottom: "62.5%" }}>
                    <iframe
                      src={siteConfig.location.mapEmbedUrl}
                      title="Forge &amp; Flame Custom Metalworks — Thunder Bay, Ontario"
                      className="absolute inset-0 w-full h-full"
                      style={{
                        border: 0,
                        filter: "grayscale(30%) contrast(1.05)",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="card-standard p-5">
                  <p
                    className="type-body mb-3"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    Need a faster answer? Call us directly — we pick up during
                    business hours.
                  </p>
                  <a
                    href="tel:+18075550173"
                    className="btn-profile w-full text-center block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
