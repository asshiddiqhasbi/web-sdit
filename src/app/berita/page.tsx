import Link from "next/link";
import { ChevronRight, Newspaper } from "lucide-react";
import { getAllNews } from "@/data/berita";
import NewsCard from "@/components/ui/NewsCard";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Berita & Kegiatan",
  description: "Kabar terbaru, kegiatan siswa, dan artikel edukasi dari SDIT [Nama Sekolah]",
};

export default function BeritaPage() {
  const allNews = getAllNews();

  return (
    <div className="space-y-8 sm:space-y-12 pb-10 sm:pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* HEADER HALAMAN & BREADCRUMB */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 shape-curve-bottom relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-islamic-pattern opacity-25"></div>

        <div className="relative max-w-7xl mx-auto space-y-3 sm:space-y-4 text-center">
          <FadeIn direction="up">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-emerald-200 mb-2">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-amber-300">Berita & Kegiatan</span>
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs font-semibold">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Kabar & Informasi Terkini</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Berita & Kegiatan Sekolah
              </h1>
              <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto pt-1">
                Dapatkan wawasan seputar kegiatan pembelajaran, dokumentasi acara, prestasi siswa, serta informasi resmi dari SDIT [Nama Sekolah].
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* GRID BERITA LIST */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allNews.map((news, idx) => (
            <FadeIn key={news.id} direction="up" delay={idx * 0.1}>
              <NewsCard news={news} />
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
