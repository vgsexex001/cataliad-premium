"use client";

import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import Card3D from "@/components/ui/Card3D";

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#0a0a0f]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.2em]">
              DEPOIMENTOS
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#f0ede6] mt-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              O que nossos clientes dizem
            </h2>
            <p className="text-[#8a8a9a] text-lg mt-2">
              sobre trabalhar conosco
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <Card3D className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#c9a84c"
                      stroke="#c9a84c"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <span
                    className="text-4xl text-[#c9a84c] opacity-30 block mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;
                  </span>
                  <p className="text-[#f0ede6] text-sm leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8d5a3] flex items-center justify-center">
                    <span className="text-[#0a0a0f] font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#f0ede6] text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-[#8a8a9a] text-xs">
                      {testimonial.role} &bull; {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card3D>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
