import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAllNews } from "@/data/berita";
import BeritaFilterGrid from "@/components/ui/BeritaFilterGrid";

export const metadata = {
  title: "Berita & Kegiatan",
  description: "Kabar terbaru, kegiatan siswa, dan informasi resmi dari SDIT [Nama Sekolah]",
};

export default function BeritaPage() {
  const allNews = getAllNews();

  return (
    <div className="space-y-8 sm:space-y-12 pb-12 sm:pb-16">
      
      {/* Editorial Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-sand/80 pb-6 sm:pb-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
              <Link href="/" className="hover:text-forest transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
              <span className="text-forest font-semibold">Berita & Kegiatan</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Warta & Jurnal Sekolah
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Berita & Kegiatan Sekolah
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Catatan kegiatan pembelajaran, dokumentasi acara siswa, prestasi akademik, serta pengumuman resmi dari SDIT [Nama Sekolah].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable News & Journal Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeritaFilterGrid items={allNews} />
      </section>

    </div>
  );
}
