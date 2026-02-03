"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-32 bg-[#12121a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left column - Header */}
          <SectionReveal className="lg:w-2/5">
            <div className="sticky top-32">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.2em]">
                FAQ
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#f0ede6] mt-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Perguntas Frequentes
              </h2>
              <p className="text-[#8a8a9a] mt-4">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>
          </SectionReveal>

          {/* Right column - Accordion */}
          <SectionReveal className="lg:w-3/5 mt-12 lg:mt-0">
            <div>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[rgba(255,255,255,0.06)]"
                >
                  <button
                    className="w-full text-left py-6 flex items-center justify-between gap-4"
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="text-[#f0ede6] text-base font-medium">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        size={20}
                        className="text-[#8a8a9a]"
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#8a8a9a] text-sm leading-relaxed pb-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
