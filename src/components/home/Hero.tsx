"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import ParticleField from "@/components/effects/ParticleField";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const background = (
    <div className="absolute inset-0 section-bg-deep">
      {/* Radial gradient — forge heat effect */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 75% 50%, color-mix(in oklch, var(--clr-primary) 20%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Angled hard stripe */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 50%, color-mix(in oklch, var(--clr-surface-2) 40%, transparent) 100%)",
        }}
      />
      {/* Copper spark particles */}
      <ParticleField
        color="var(--clr-accent)"
        fallbackColor="rgba(212,147,42,0.55)"
        variant="rise"
        count={32}
        speed={1.4}
        size={2}
      />
    </div>
  );

  return (
    <SectionFullBleed
      background={background}
      contentPosition="left"
      minHeight="min-h-[90vh]"
      className="section-spacious"
    >
      {/* Two-column split: text left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 lg:gap-16 items-center w-full">
        {/* Left — headline + CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="badge-label">Thunder Bay, Ontario</span>
          </motion.div>

          {/* Business name — Bebas Neue, massive */}
          <motion.h1
            variants={itemVariants}
            className="type-hero"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Forge &amp; Flame
            <br />
            <span style={{ color: "var(--clr-accent)" }}>
              Custom Metalworks
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="type-hero-sub"
            style={{
              color: "var(--clr-text-secondary)",
              maxWidth: "34rem",
            }}
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Phone — prominent, always visible */}
          <motion.a
            variants={itemVariants}
            href={`tel:${siteConfig.phone}`}
            className="type-section"
            style={{
              color: "var(--clr-accent)",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            {siteConfig.phone}
          </motion.a>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-profile">
              Request a Quote
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-profile-ghost">
              Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Right — hero image with gradient mask */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
          className="relative hidden lg:block"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&q=80"
            alt="Welding sparks in a metalworks workshop"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            style={{ objectFit: "cover" }}
            className="img-gradient-mask"
          />
        </motion.div>
      </div>
    </SectionFullBleed>
  );
}
