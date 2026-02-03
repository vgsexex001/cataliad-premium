"use client";

import React from "react";
import {
  ShoppingCart,
  Users,
  Video,
  Bot,
  Smartphone,
  Check,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import Card3D from "@/components/ui/Card3D";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Users,
  Video,
  Bot,
  Smartphone,
};

export default function Services() {
  return (
    <section className="py-32 bg-[#12121a] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Section header — centered */}
        <SectionReveal>
          <div className="text-center">
            <p
              className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] font-semibold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              O Que Fazemos
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#f0ede6] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nossos Serviços
            </h2>
            <p className="text-[#8a8a9a] text-lg mt-4 max-w-2xl mx-auto">
              Soluções completas para acelerar seu crescimento
            </p>
          </div>
        </SectionReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLast = index === services.length - 1 && services.length % 2 !== 0;

            return (
              <SectionReveal key={service.title} delay={index * 0.1} className={isLast ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""}>
                <Card3D>
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.12)] flex items-center justify-center">
                      {Icon && <Icon color="#c9a84c" size={22} />}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-semibold text-[#f0ede6] mt-5 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#8a8a9a] mb-6">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check
                            className="text-[#c9a84c] mt-0.5 shrink-0"
                            size={14}
                          />
                          <span className="text-sm text-[#8a8a9a]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* "Ver detalhes" link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-medium hover:text-[#e8d5a3] transition-colors mt-6 group"
                    >
                      Ver detalhes
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                    {/* Bottom gradient border line */}
                    <div className="mt-6 -mx-8 -mb-8">
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-30" />
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
