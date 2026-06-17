import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andressa — Fotografia autoral",
  description:
    "Fotografias criadas para preservar aquilo que o tempo transforma. Natureza, sensibilidade e contemplação em São Francisco do Sul, Santa Catarina.",
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full font-inter flex flex-col text-[#FBF9F5]">
        {children}
      </body>
    </html>
  );
}

