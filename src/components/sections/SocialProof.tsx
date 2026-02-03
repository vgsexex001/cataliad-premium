"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Chrome,
  Linkedin,
  Music,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { partners } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Meta: Facebook,
  Google: Chrome,
  LinkedIn: Linkedin,
  TikTok: Music,
  YouTube: Youtube,
  WhatsApp: MessageCircle,
};

function PartnerItem({ partner }: { partner: string }) {
  const Icon = iconMap[partner];
  return (
    <div className="flex items-center gap-2 mx-10 shrink-0">
      {Icon && <Icon className="w-4 h-4 text-[#8a8a9a]" />}
      <span className="text-[#8a8a9a] text-sm font-medium whitespace-nowrap">
        {partner}
      </span>
    </div>
  );
}

export default function SocialProof() {
  // Duplicate the partner list so one full set scrolls out while
  // the identical second set scrolls in, creating a seamless loop.
  const doubled = [...partners, ...partners];

  return (
    <section
      id="trust-bar"
      className="bg-[#0a0a0f] border-y border-[rgba(255,255,255,0.06)] py-10"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Label */}
        <p
          className="text-center text-xs text-[#4a4a5a] uppercase tracking-[0.2em] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          PARCEIROS E PLATAFORMAS QUE UTILIZAMOS
        </p>

        {/* Marquee */}
        <div className="overflow-hidden group">
          <motion.div
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {doubled.map((partner, i) => (
              <PartnerItem key={`a-${partner}-${i}`} partner={partner} />
            ))}
            {doubled.map((partner, i) => (
              <PartnerItem key={`b-${partner}-${i}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
