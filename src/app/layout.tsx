import type { Metadata } from "next";
import { Playfair_Display, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/site/smooth-scroll-provider";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "PinkGlow | Luxury Makeup Artistry & MUA Academy",
  description:
    "PinkGlow is a premium makeup artistry studio and certified MUA academy — bridal makeup, glam services, and the Ultimate MUA Course from basic to advance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay pointer-events-none fixed inset-0 z-1" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
