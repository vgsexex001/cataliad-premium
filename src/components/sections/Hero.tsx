"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { heroData } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MeshGradient from "@/components/effects/MeshGradient";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  const titleWords = heroData.title.split(" ");
  const accentWords = heroData.titleAccent.split(" ");

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <MeshGradient />

      {/* Content */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10 w-full text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={childVariants}>
          <span
            className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] text-[#c9a84c] text-xs tracking-wider uppercase px-4 py-2 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {heroData.badge}
          </span>
        </motion.div>

        {/* Title with word-by-word stagger */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mt-8"
          style={{ fontFamily: "var(--font-display)" }}
          variants={childVariants}
        >
          <motion.span
            className="flex flex-wrap justify-center lg:justify-start gap-x-[0.3em]"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={`title-${i}`}
                className="inline-block text-[#f0ede6]"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
            {accentWords.map((word, i) => (
              <motion.span
                key={`accent-${i}`}
                className="inline-block text-[#c9a84c]"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[#8a8a9a] max-w-2xl font-light mt-6 mb-10 mx-auto lg:mx-0"
          variants={childVariants}
        >
          {heroData.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start"
          variants={childVariants}
        >
          <Button variant="primary" href={heroData.cta.href}>
            {heroData.cta.text}
          </Button>
          <Button variant="ghost" href={heroData.ctaSecondary.href}>
            {heroData.ctaSecondary.text}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.p
          className="text-xs text-[#4a4a5a] mt-12"
          variants={childVariants}
        >
          {heroData.socialProof}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-5 h-5 text-[#4a4a5a]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
