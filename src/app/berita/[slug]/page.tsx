import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowLeft, AlertCircle } from "lucide-react";
import { getNewsBySlug, getLatestNews } from "@/data/berita";

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
  const recentNews = getLatestNews(4).filter((item) => item.slug !== slug).slice(0, 3);

  if (!news) {
    return (
      <div className="py-16 sm:py-24 max-w-2xl mx-auto px-4 text-center space-y-5">
        <div className="w-12 h-12 mx-auto bg-sand-light border border-sand text-forest flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-gold" />
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
          Berita Tidak Ditemukan
        </h1>
        <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Maaf, artikel dengan alamat <code className="bg-sand-light text-forest px-2 py-0.5 font-mono text-xs">{slug}</code> tidak ditemukan atau telah dipindahkan.
        </p>
        <div className="pt-2">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            <span>Kembali ke Daftar Berita</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-12 pb-12 sm:pb-16">
      
      {/* Breadcrumb Bar */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-sans text-charcoal-muted border-b border-sand/80 pb-4">
            <Link href="/" className="hover:text-forest transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
            <Link href="/berita" className="hover:text-forest transition-colors">
              Berita
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
            <span className="text-forest font-semibold line-clamp-1 max-w-md">{news.title}</span>
          </nav>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Main Editorial Article (8 cols) */}
          <article className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-charcoal-muted">
                <span className="font-bold text-gold uppercase tracking-wider">
                  {news.category}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {news.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold" />
                  {news.author}
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-bold text-forest leading-snug">
                {news.title}
              </h1>
            </div>

            {/* Real Article Photograph */}
            {news.imageUrl && (
              <figure className="space-y-2">
                <div className="border border-sand bg-sand-light aspect-[16/9] overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs font-sans text-charcoal-muted">
                  Dokumentasi SDIT [Nama Sekolah] | {news.date}
                </figcaption>
              </figure>
            )}

            {/* Article Prose */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal-muted leading-relaxed pt-2 border-t border-sand/60">
              {news.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-charcoal font-medium text-base sm:text-lg leading-relaxed" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back Navigation */}
            <div className="pt-6 border-t border-sand/80">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-gold" />
                <span>Kembali ke Daftar Berita</span>
              </Link>
            </div>
          </article>

          {/* Editorial Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:border-l lg:border-sand/80 lg:pl-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-lg text-forest border-b border-sand/80 pb-2.5">
                Berita Lainnya
              </h2>

              <div className="divide-y divide-sand/60">
                {recentNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/berita/${item.slug}`}
                    className="block py-3.5 group space-y-1"
                  >
                    <span className="text-[11px] font-sans font-semibold text-gold uppercase tracking-wider">
                      {item.category} • {item.date}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-forest group-hover:text-forest-light transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sand-light/70 border border-sand p-5 space-y-3">
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-gold">
                Informasi Sekolah
              </span>
              <h3 className="font-heading font-bold text-base text-forest">
                Ingin Berkunjung atau Bertanya Seputar Kurikulum?
              </h3>
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                Silakan hubungi sekretariat kami atau lihat halaman informasi penerimaan peserta didik baru.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-4 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  Hubungi Sekretariat
                </Link>
                <Link
                  href="/ppdb"
                  className="inline-flex items-center justify-center px-4 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 hover:bg-sand/40 transition-colors"
                >
                  Panduan PPDB
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>

    </div>
  );
}
