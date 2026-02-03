"use client";

import React from "react";
import { motion } from "framer-motion";

type TagType = "h1" | "h2" | "h3" | "p" | "span";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: TagType;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "p",
}: TextRevealProps) {
  const Tag = motion[as] as typeof motion.p;
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.3em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
