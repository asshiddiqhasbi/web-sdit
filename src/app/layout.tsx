import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SDIT [Nama Sekolah] - Sekolah Dasar Islam Terpadu",
    template: "%s | SDIT [Nama Sekolah]",
  },
  description:
    "Website Profil Resmi SDIT [Nama Sekolah]. Mewujudkan generasi Rabbani yang unggul dalam Imtaq, cerdas dalam Iptek, dan berakhlak mulia.",
  keywords: ["SDIT", "Sekolah Dasar Islam Terpadu", "Pendidikan Islam", "PPDB SDIT", "Profil Sekolah"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-200 selection:text-emerald-900">
        <NextTopLoader
          color="#059669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #059669,0 0 5px #059669"
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
