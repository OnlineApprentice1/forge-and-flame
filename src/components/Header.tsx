"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: "var(--clr-surface-1)",
        borderBottom: "2px solid var(--clr-surface-3)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="type-card font-heading text-primary hover:text-accent transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`type-small transition-colors${
                pathname === link.href
                  ? " text-accent"
                  : " hover:text-accent"
              }`}
              style={{
                color:
                  pathname === link.href
                    ? "var(--clr-accent)"
                    : "var(--clr-text-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="type-small flex items-center gap-1.5 transition-colors hover:text-accent"
            style={{ color: "var(--clr-text-muted)" }}
          >
            <Phone size={14} />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-profile type-small">
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 transition-colors hover:text-accent"
          style={{ color: "var(--clr-text-secondary)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "var(--clr-surface-2)",
              borderBottom: "2px solid var(--clr-surface-3)",
            }}
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-body transition-colors hover:text-accent py-1"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--clr-accent)"
                        : "var(--clr-text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="type-small flex items-center gap-1.5 transition-colors hover:text-accent"
                style={{ color: "var(--clr-text-muted)" }}
                onClick={() => setOpen(false)}
              >
                <Phone size={14} />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-profile type-small w-fit"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
