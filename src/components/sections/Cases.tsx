"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cases } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import Card3D from "@/components/ui/Card3D";
import Counter from "@/components/ui/Counter";

export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-[#0a0a0f]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Header — right-aligned for asymmetry */}
        <SectionReveal>
          <div className="lg:text-right">
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em]">
              RESULTADOS COMPROVADOS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#f0ede6] mt-4">
              Casos de Sucesso
            </h2>
            <p className="text-[#8a8a9a] text-lg mt-4">
              Resultados reais de clientes que escalam todos os dias
            </p>
          </div>
        </SectionReveal>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {cases.map((caseItem, index) => (
            <SectionReveal key={index} delay={index * 0.15}>
              <Card3D className="p-8">
                {/* Tag pill */}
                <span className="text-xs text-[#c9a84c] bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] px-3 py-1 rounded-full inline-block mb-4">
                  {caseItem.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#f0ede6] mb-1">
                  {caseItem.title}
                </h3>

                {/* Challenge */}
                <p className="text-sm text-[#8a8a9a] mb-6">
                  {caseItem.challenge}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {caseItem.metrics.map((metric, mIndex) => (
                    <div
                      key={mIndex}
                      className={
                        metric.highlight
                          ? "bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] rounded-xl p-3 text-center"
                          : "bg-[rgba(255,255,255,0.03)] rounded-xl p-3 text-center"
                      }
                    >
                      <Counter
                        value={metric.value}
                        className={`text-xl font-bold ${
                          metric.highlight
                            ? "text-[#c9a84c]"
                            : "text-[#f0ede6]"
                        }`}
                      />
                      <p className="text-[10px] text-[#8a8a9a] uppercase tracking-wider mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <p className="italic text-sm text-[#8a8a9a] border-l-2 border-[#c9a84c] pl-4">
                  &ldquo;{caseItem.quote}&rdquo;
                </p>
              </Card3D>
            </SectionReveal>
          ))}
        </div>

        {/* CTA link */}
        <SectionReveal delay={0.5}>
          <div className="flex justify-center mt-16">
            <a
              href="/cases"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8d5a3] border border-[rgba(201,168,76,0.3)] px-6 py-3 rounded-full hover:bg-[rgba(201,168,76,0.05)] transition"
            >
              Ver todos os casos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
