import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { SCHOOL_CONFIG } from "@/data/school";
import "./globals.css";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL_CONFIG.name} | ${SCHOOL_CONFIG.tagline}`,
    template: `%s | ${SCHOOL_CONFIG.name}`,
  },
  description:
    `Website resmi ${SCHOOL_CONFIG.name}. ${SCHOOL_CONFIG.tagline} yang membina adab Islami, hafalan Al-Qur'an, serta kecakapan akademik siswa sejak dini.`,
  keywords: ["SDIT", "Sekolah Dasar Islam Terpadu", "Pendidikan Islam", "Tahfidz Al-Qur'an", "Sekolah Dasar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${lora.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-sand selection:text-forest">
        <NextTopLoader
          color="#C58B43"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
