"use client";

import React from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { steps } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
};

export default function HowItWorks() {
  return (
    <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Section header — left aligned, asymmetric */}
        <SectionReveal>
          <p
            className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Processo
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#f0ede6] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Como Funciona
          </h2>
          <p className="text-[#8a8a9a] text-lg mt-4 max-w-xl">
            Um processo estruturado para transformar seu investimento em
            crescimento real e previsível.
          </p>
        </SectionReveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] z-0">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent" />
            <div className="flex justify-between px-[calc(25%-16px)]">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[rgba(201,168,76,0.3)] -mt-[3px]"
                />
              ))}
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <SectionReveal key={step.number} delay={index * 0.1}>
                <div className="relative z-10">
                  {/* Step number */}
                  <span
                    className="text-[#c9a84c] text-6xl opacity-20 block mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.number}
                  </span>

                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center mb-5">
                    {Icon && <Icon className="text-[#c9a84c]" size={24} />}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold text-[#f0ede6] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#8a8a9a] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
