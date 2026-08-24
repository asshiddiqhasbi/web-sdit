import Link from "next/link";
import { ChevronRight, Calendar, Tag, User, ArrowLeft, BookOpen, Share2, AlertCircle } from "lucide-react";
import { getNewsBySlug, getLatestNews } from "@/data/berita";
import FadeIn from "@/components/ui/FadeIn";

interface DetailBeritaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DetailBeritaPageProps) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
      description: "Halaman berita yang Anda cari tidak ditemukan.",
    };
  }

  return {
    title: news.title,
    description: news.excerpt,
  };
}

export default async function DetailBeritaPage({ params }: DetailBeritaPageProps) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  const recentNews = getLatestNews(3).filter((item) => item.slug !== slug);

  // Error State: Berita tidak ditemukan
  if (!news) {
    return (
      <div className="py-20 max-w-3xl mx-auto px-4 text-center space-y-6">
        <FadeIn direction="up">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 mb-2">
            Berita Tidak Ditemukan
          </h1>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Maaf, artikel berita dengan alamat <code className="bg-slate-100 text-emerald-700 px-2 py-0.5 rounded font-mono text-xs">{slug}</code> tidak ditemukan atau telah dipindahkan.
          </p>
          <div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Berita</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* HEADER & BREADCRUMB */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-10 px-4 sm:px-6 lg:px-8 shape-curve-bottom relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-islamic-pattern opacity-25"></div>

        <div className="relative max-w-5xl mx-auto space-y-3">
          <FadeIn direction="up">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-200">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/berita" className="hover:text-amber-300 transition-colors">
                Berita
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-amber-300 line-clamp-1 max-w-xs">{news.title}</span>
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN ARTICLE & SIDEBAR CONTENT */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Container (8 cols) */}
          <article className="lg:col-span-8">
            <FadeIn direction="up">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                
                {/* Back Link */}
                <div>
                  <Link
                    href="/berita"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors border border-emerald-200/60"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali ke Berita</span>
                  </Link>
                </div>

                {/* Article Meta Badges */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                    <Tag className="w-3.5 h-3.5" />
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {news.author}
                  </span>
                </div>

                {/* Article Title */}
                <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {news.title}
                </h1>

                {/* Large Featured Image Placeholder */}
                <div
                  className={`w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-br ${news.imageBg} flex flex-col items-center justify-center text-white p-6 shadow-inner border border-slate-200 text-center relative overflow-hidden`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-white">
                    [Gambar Utama Artikel Placeholder]
                  </span>
                  <span className="text-xs text-slate-100 mt-1">
                    Dokumentasi Resmi SDIT [Nama Sekolah]
                  </span>
                </div>

                {/* Article Body Paragraphs */}
                <div className="space-y-4 text-slate-700 text-base leading-relaxed pt-4 border-t border-slate-100">
                  {news.content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "font-medium text-slate-800 text-lg leading-relaxed" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Article Footer & Share */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Bagikan artikel ini:</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200/60"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Bagikan</span>
                  </button>
                </div>

              </div>
            </FadeIn>
          </article>

          {/* Sidebar Container (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            <FadeIn direction="up" delay={0.2}>
              {/* Recent News Widget */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  Berita Terbaru Lainnya
                </h2>

                <div className="space-y-4">
                  {recentNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/berita/${item.slug}`}
                      className="block group p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">
                        {item.category} • {item.date}
                      </span>
                      <h3 className="font-heading font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2 mt-1">
                        {item.title}
                      </h3>
                    </Link>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/berita"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                  >
                    <span>Lihat Semua Berita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              {/* PPDB Widget */}
              <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-6 rounded-3xl shadow-sm space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-700/60">
                  Informasi PPDB
                </span>
                <h3 className="font-heading font-bold text-lg">Pendaftaran PPDB 2026/2027</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Ingin mendaftarkan putera-puteri Anda di SDIT [Nama Sekolah]? Dapatkan info persyaratan lengkapnya.
                </p>
                <Link
                  href="/ppdb"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
                >
                  <span>Info PPDB Selengkapnya</span>
                </Link>
              </div>
            </FadeIn>

          </aside>

        </div>
      </section>

    </div>
  );
}
