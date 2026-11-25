import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    default: "SDIT [Nama Sekolah] | Sekolah Dasar Islam Terpadu",
    template: "%s | SDIT [Nama Sekolah]",
  },
  description:
    "Website resmi SDIT [Nama Sekolah]. Sekolah Dasar Islam Terpadu yang membina adab Islami, hafalan Al-Qur'an, serta kecakapan akademik siswa sejak dini.",
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
      </body>
    </html>
  );
}
