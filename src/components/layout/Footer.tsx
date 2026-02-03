"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { footerData } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1 lg:pr-8">
            <Link href="/">
              <img
                src="/assets/cataliad-logo.jpg"
                alt="Cataliad"
                className="h-10 mb-6"
              />
            </Link>

            <p
              className="text-[#8a8a9a] text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {footerData.tagline}
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${footerData.email}`}
                className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${footerData.phone}`}
                className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="Telefone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Company Info */}
          <div>
            <h4
              className="text-[#f0ede6] font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Empresa
            </h4>
            <div
              className="space-y-2 text-sm text-[#8a8a9a]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>{footerData.company}</p>
              <p>{footerData.address}</p>
              <p>{footerData.city}</p>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4
              className="text-[#f0ede6] font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4
              className="text-[#f0ede6] font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerData.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8a8a9a] hover:text-[#c9a84c] transition-colors duration-300 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-[#4a4a5a] text-sm text-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; 2026 Cataliad. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
