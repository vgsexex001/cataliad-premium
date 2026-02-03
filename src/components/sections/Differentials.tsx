"use client";

import React from "react";
import { Bot, BarChart3, Target, Zap } from "lucide-react";
import { differentials } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import Card3D from "@/components/ui/Card3D";

const iconMap: Record<string, React.ElementType> = {
  Bot,
  BarChart3,
  Target,
  Zap,
};

export default function Differentials() {
  return (
    <section id="sobre" className="py-32 bg-[#12121a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Header — centered */}
        <SectionReveal>
          <div className="text-center">
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em]">
              POR QUE NÓS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#f0ede6] mt-4">
              Nossos Diferenciais
            </h2>
            <p className="text-[#8a8a9a] text-lg mt-4 max-w-2xl mx-auto">
              Combinamos tecnologia, dados e estratégia para entregar
              resultados que realmente importam.
            </p>
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {differentials.map((diff, index) => {
            const Icon = iconMap[diff.icon] || Bot;

            return (
              <SectionReveal key={index} delay={index * 0.12}>
                <Card3D className="p-8">
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.12)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#c9a84c]" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#f0ede6] mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-sm text-[#8a8a9a] leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
