import type { Metadata } from "next";
import { Sora, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cataliad.com"),
  title: "Cataliad - Performance Marketing e Agentes de IA | Cresça Pagando Só Quando Vender",
  description:
    "A Cataliad combina performance marketing com agentes de IA para escalar suas vendas. Modelo de pagamento por resultado: você só paga quando vender. Sem taxa de setup, sem mensalidade fixa.",
  keywords: [
    "performance marketing",
    "agentes de IA",
    "marketing digital",
    "pagamento por resultado",
    "inteligência artificial",
    "automação de vendas",
    "Cataliad",
  ],
  authors: [{ name: "Cataliad" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cataliad.com",
    siteName: "Cataliad",
    title: "Cataliad - Performance Marketing e Agentes de IA",
    description:
      "Escale suas vendas com performance marketing e agentes de IA. Pague apenas por resultado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cataliad - Performance Marketing e Agentes de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cataliad - Performance Marketing e Agentes de IA",
    description:
      "Escale suas vendas com performance marketing e agentes de IA. Pague apenas por resultado.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
