import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Custom Metal Fabrication",
  "Structural Welding",
  "Ornamental Ironwork",
  "Mobile Welding",
  "Repairs & Restoration",
];

const serviceAreas = ["Thunder Bay", "Lakehead Region", "Northwestern Ontario"];

export default function Footer() {
  return (
    <footer
      className="section-bg-deep"
      style={{ borderTop: "4px solid var(--clr-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <h3
              className="type-card mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--clr-accent)" }}
            >
              {siteConfig.name}
            </h3>
            <p
              className="type-small mb-5"
              style={{ color: "var(--clr-text-muted)" }}
            >
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="type-small flex items-center gap-2 transition-colors hover:text-accent"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                <Phone size={14} aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="type-small flex items-center gap-2 transition-colors hover:text-accent"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                <Mail size={14} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              className="type-small uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-accent)", fontFamily: "var(--font-heading)", letterSpacing: "0.12em" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-small transition-colors hover:text-accent"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4
              className="type-small uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-accent)", fontFamily: "var(--font-heading)", letterSpacing: "0.12em" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="type-small transition-colors hover:text-accent"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service Area + Hours */}
          <div>
            <h4
              className="type-small uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-accent)", fontFamily: "var(--font-heading)", letterSpacing: "0.12em" }}
            >
              Service Area
            </h4>
            <div className="flex items-start gap-2 mb-4">
              <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--clr-text-muted)" }} aria-hidden="true" />
              <ul className="flex flex-col gap-1">
                {serviceAreas.map((area) => (
                  <li key={area} className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <h4
              className="type-small uppercase tracking-widest mb-3 mt-6"
              style={{ color: "var(--clr-accent)", fontFamily: "var(--font-heading)", letterSpacing: "0.12em" }}
            >
              Hours
            </h4>
            <div className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 shrink-0" style={{ color: "var(--clr-text-muted)" }} aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <p className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                  Mon&ndash;Fri: 7:00&ndash;17:00
                </p>
                <p className="type-small" style={{ color: "var(--clr-text-muted)" }}>
                  Sat: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--clr-surface-3)" }}
        >
          <p
            className="type-caption"
            style={{ color: "var(--clr-text-muted)" }}
          >
            &copy; 2025 Forge &amp; Flame Custom Metalworks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="type-caption transition-colors hover:text-accent"
              style={{ color: "var(--clr-text-muted)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="type-caption transition-colors hover:text-accent"
              style={{ color: "var(--clr-text-muted)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
