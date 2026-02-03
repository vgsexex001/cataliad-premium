"use client";

import React from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0f, #1a1028, #0f1a2e)",
        }}
      />

      {/* Decorative blurred gold circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <SectionReveal>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#f0ede6]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pronto para vender todos os dias?
          </h2>
          <p className="text-[#8a8a9a] text-lg mt-4 mb-12">
            Receba um diagnóstico gratuito e descubra como podemos acelerar
            seu crescimento
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <form
            className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[#f0ede6] text-sm placeholder-[#4a4a5a] focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.3)] transition"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[#f0ede6] text-sm placeholder-[#4a4a5a] focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.3)] transition"
              />
              <input
                type="text"
                placeholder="Seu nicho/segmento"
                className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[#f0ede6] text-sm placeholder-[#4a4a5a] focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.3)] transition"
              />
            </div>

            <div className="mt-4 w-full">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {}}
              >
                Receber diagnóstico gratuito
              </Button>
            </div>

            <p className="text-xs text-[#4a4a5a] mt-4">
              Ao enviar, você concorda com nossa{" "}
              <a
                href="/politica"
                className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors"
              >
                Política de Privacidade
              </a>
            </p>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
