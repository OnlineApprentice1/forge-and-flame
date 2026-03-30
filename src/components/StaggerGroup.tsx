"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type StaggerPattern = "cascade" | "fan" | "wave" | "pop";

const containerVariants: Record<StaggerPattern, Variants> = {
  // cascade: items slide up and fade in one after another
  cascade: {
    hidden: {},
    visible: (staggerDelay: number) => ({
      transition: { staggerChildren: staggerDelay },
    }),
  },
  // fan: items fan out from centre — alternating left/right
  fan: {
    hidden: {},
    visible: (staggerDelay: number) => ({
      transition: { staggerChildren: staggerDelay },
    }),
  },
  // wave: items ripple with sine-offset delays
  wave: {
    hidden: {},
    visible: (staggerDelay: number) => ({
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    }),
  },
  // pop: items scale-in with a spring pop
  pop: {
    hidden: {},
    visible: (staggerDelay: number) => ({
      transition: { staggerChildren: staggerDelay },
    }),
  },
};

export const childVariants: Record<StaggerPattern, Variants> = {
  cascade: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  },
  fan: {
    hidden: { opacity: 0, x: -20, rotate: -4 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  },
  wave: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 16 },
    },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 14 },
    },
  },
};

interface StaggerGroupProps {
  children: ReactNode;
  pattern?: StaggerPattern;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerGroup({
  children,
  pattern = "cascade",
  staggerDelay = 0.06,
  className,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={staggerDelay}
      variants={containerVariants[pattern]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — place inside StaggerGroup to receive stagger animation.
 * Usage:
 *   <StaggerGroup pattern="cascade">
 *     <StaggerItem pattern="cascade"><Card /></StaggerItem>
 *   </StaggerGroup>
 */
interface StaggerItemProps {
  children: ReactNode;
  pattern?: StaggerPattern;
  className?: string;
}

export function StaggerItem({
  children,
  pattern = "cascade",
  className,
}: StaggerItemProps) {
  return (
    <motion.div variants={childVariants[pattern]} className={className}>
      {children}
    </motion.div>
  );
}
