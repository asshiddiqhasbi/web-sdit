import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getLatestNews } from "@/data/berita";
import { SCHOOL_CONFIG, getWhatsAppUrl } from "@/data/school";

export default function HomePage() {
  const latestNews = getLatestNews(3);
  const featuredNews = latestNews[0];
  const secondaryNews = latestNews.slice(1);

  const heroPrimaryCta = SCHOOL_CONFIG.ppdb.isOpen
    ? { label: "Daftar PPDB Online", href: "/ppdb" }
    : { label: "Jadwalkan Kunjungan", href: "/kontak#kunjungan" };

  const waConsultUrl = getWhatsAppUrl(
    `Assalamu'alaikum, saya orang tua calon siswa ingin menanyakan informasi mengenai ${SCHOOL_CONFIG.name}.`
  );

  return (
    <div className="pb-12 sm:pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HERO: NILAI UTAMA + AKSI NYATA (WA-FIRST & PURPOSEFUL) */}
      {/* ---------------------------------------------------- */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Crisp Editorial Typography */}
            <div className="lg:col-span-6 space-y-5">
              <div className="border-l-2 border-gold pl-3.5 text-xs font-sans font-medium text-charcoal-muted tracking-wide">
                {SCHOOL_CONFIG.tagline} | {SCHOOL_CONFIG.accreditation.label}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-forest leading-[1.16] tracking-tight">
                Membina Adab Islami, Kecerdasan Belajar, dan Cinta Al-Qur'an Sejak Dini.
              </h1>

              <p className="font-sans text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl">
                Di {SCHOOL_CONFIG.name}, siswa kelas 1 hingga 6 belajar ilmu pengetahuan umum dan Al-Qur'an dalam lingkungan kelas yang tertib, aman, dan ramah anak.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={heroPrimaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  <span>{heroPrimaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
                <a
                  href={waConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 hover:bg-sand/40 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Tanya via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Authentic Sunlit Campus Photo */}
            <div className="lg:col-span-6">
              <div className="border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
                <img
                  src="/images/campus-hero.jpg"
                  alt={`Suasana pagi di halaman ${SCHOOL_CONFIG.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-sans text-charcoal-muted">
                Suasana pagi siswa di halaman sekolah sebelum kegiatan belajar dimulai.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. BUKTI & KEPERCAYAAN ORANG TUA (METRICS + TESTIMONI) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-sand-light/60 border-y border-sand">
        {/* 4 Scannable Proof Metrics */}
        <div className="bg-ivory-light border-b border-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-sand">
            {SCHOOL_CONFIG.trustMetrics.map((metric, idx) => (
              <div key={idx} className="p-5 sm:p-6 space-y-1">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-forest block">
                  {metric.value}
                </span>
                <h2 className="font-sans font-bold text-xs sm:text-sm text-forest">
                  {metric.title}
                </h2>
                <p className="font-sans text-[11px] sm:text-xs text-charcoal-muted">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Testimonials + Principal Endorsement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
                Kepercayaan Keluarga
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mt-0.5">
                Kata Orang Tua Murid
              </h2>
            </div>
            <Link
              href="/profil"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
            >
              <span>Profil Guru & Sejarah Sekolah</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCHOOL_CONFIG.testimonials.map((item, idx) => (
              <div key={idx} className="bg-ivory border border-sand p-6 flex flex-col justify-between space-y-4">
                <p className="font-heading italic text-sm sm:text-base text-charcoal leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-sand/60">
                  <div className="w-9 h-9 bg-forest text-gold font-heading font-bold text-xs flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-xs sm:text-sm text-forest">
                      {item.name}
                    </p>
                    <p className="font-sans text-[11px] text-charcoal-muted">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. SUASANA BELAJAR & PROGRAM INTI (TERPADU & RINGKAS) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Clean Documentary Photos (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <figure className="space-y-2">
              <div className="border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
                <img
                  src="/images/classroom-learning.jpg"
                  alt="Ibu guru mendampingi siswa SDIT berdiskusi di kelas"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-xs font-sans text-charcoal-muted">
                Diskusi kelompok di kelas bersama wali kelas dengan suasana belajar yang aktif.
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              <figure className="space-y-1.5">
                <div className="border border-sand bg-sand-light aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/tahfidz-halaqah.jpg"
                    alt="Halaqah tahfidz Al-Qur'an di mushola sekolah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-[11px] font-sans text-charcoal-muted">
                  Halaqah tahfidz pagi di mushola.
                </figcaption>
              </figure>

              <figure className="space-y-1.5">
                <div className="border border-sand bg-sand-light aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/activity-science.jpg"
                    alt="Praktikum pengamatan sains sederhana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-[11px] font-sans text-charcoal-muted">
                  Pengamatan sains dasar siswa.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Right: Focused Curriculum & Daily Rhythm (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
                Pendidikan & Keseharian
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest leading-snug">
                Empat Fokus Pembinaan dari Kelas 1 hingga Kelas 6
              </h2>
            </div>

            <div className="divide-y divide-sand border-y border-sand">
              <div className="py-4 flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold text-gold shrink-0">01</span>
                <div>
                  <h3 className="font-heading text-base font-bold text-forest">Tahfidz & Perbaikan Bacaan Al-Qur'an</h3>
                  <p className="font-sans text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Halaqah harian setiap pagi dalam kelompok kecil untuk membiasakan tartil dan hafalan bertahap 2 hingga 3 Juz.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold text-gold shrink-0">02</span>
                <div>
                  <h3 className="font-heading text-base font-bold text-forest">Sains, Logika & Matematika</h3>
                  <p className="font-sans text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Belajar melalui alat peraga nyata, literasi membaca setiap pagi, dan pengamatan eksperimen sederhana.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold text-gold shrink-0">03</span>
                <div>
                  <h3 className="font-heading text-base font-bold text-forest">Bina Pribadi Islami (BPI)</h3>
                  <p className="font-sans text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Pembiasaan shalat Dhuha dan Dzuhur berjamaah, adab berbicara, kemandirian, dan laporan rutin wali kelas ke orang tua.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold text-gold shrink-0">04</span>
                <div>
                  <h3 className="font-heading text-base font-bold text-forest">Bahasa Arab & Bahasa Inggris</h3>
                  <p className="font-sans text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Pengenalan kosakata harian, cerita bergambar, serta latihan keberanian bercerita di depan kelas.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Daily Schedule Strip */}
            <div className="bg-ivory-light border border-sand p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
              <span className="font-bold text-forest">Jam Belajar: Senin s.d. Jumat, 07.00 - 14.30 WIB</span>
              <Link href="/profil" className="font-semibold text-gold hover:text-forest transition-colors">
                Detail Visi & Fasilitas &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WARTA SEKOLAH (MAGAZINE LAYOUT + EMPTY STATE GUARD) */}
      {/* ---------------------------------------------------- */}
      {latestNews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-sand pb-4">
            <div>
              <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
                Warta Sekolah
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mt-0.5">
                Berita & Kegiatan Terbaru
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
            >
              <span>Semua Berita</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {featuredNews && (
              <article className="lg:col-span-6 space-y-4 group">
                <Link href={`/berita/${featuredNews.slug}`} className="block border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
                  {featuredNews.imageUrl && (
                    <img
                      src={featuredNews.imageUrl}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </Link>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-sans text-charcoal-muted">
                    <span className="font-semibold text-gold uppercase tracking-wider">{featuredNews.category}</span>
                    <span>•</span>
                    <span>{featuredNews.date}</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest group-hover:text-forest-light transition-colors leading-snug">
                    <Link href={`/berita/${featuredNews.slug}`}>{featuredNews.title}</Link>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                </div>
              </article>
            )}

            {secondaryNews.length > 0 && (
              <div className="lg:col-span-6 divide-y divide-sand border-y border-sand">
                {secondaryNews.map((item) => (
                  <article key={item.id} className="py-5 first:pt-4 last:pb-4 grid grid-cols-12 gap-4 items-center group">
                    <Link href={`/berita/${item.slug}`} className="col-span-4 border border-sand bg-sand-light aspect-[4/3] overflow-hidden">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </Link>
                    <div className="col-span-8 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-sans text-charcoal-muted">
                        <span className="font-semibold text-gold uppercase tracking-wider">{item.category}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-forest group-hover:text-forest-light transition-colors leading-snug">
                        <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="font-sans text-xs text-charcoal-muted line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------------------------------------------------- */}
      {/* 5. CTA PENUTUP FOKUS (WHATSAPP-FIRST & PPDB) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-ivory p-7 sm:p-10 lg:p-12 border border-forest-light/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase block">
              {SCHOOL_CONFIG.ppdb.isOpen ? `Penerimaan Siswa Baru ${SCHOOL_CONFIG.ppdb.academicYear}` : "Kunjungan & Konsultasi"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-snug">
              {SCHOOL_CONFIG.ppdb.isOpen
                ? `Daftarkan Ananda ke ${SCHOOL_CONFIG.name} Sekarang.`
                : "Ingin Melihat Lingkungan Belajar Kami Secara Langsung?"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
              {SCHOOL_CONFIG.principal.quote}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-forest bg-gold hover:bg-gold-light transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-forest" />
              <span>Chat WhatsApp Sekretariat</span>
            </a>
            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory border border-sand/40 hover:bg-forest-light transition-colors"
            >
              <span>{SCHOOL_CONFIG.ppdb.isOpen ? "Formulir PPDB" : "Panduan PPDB"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
