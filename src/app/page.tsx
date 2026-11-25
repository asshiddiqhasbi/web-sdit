import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestNews } from "@/data/berita";

export default function HomePage() {
  const latestNews = getLatestNews(3);
  const featuredNews = latestNews[0];
  const secondaryNews = latestNews.slice(1);

  return (
    <div className="pb-12 sm:pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (BRIGHT IVORY CANVAS + AUTHENTIC SDIT PHOTO) */}
      {/* ---------------------------------------------------- */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Clean Editorial Typography */}
            <div className="lg:col-span-6 space-y-5">
              <div className="border-l-2 border-gold pl-3.5 text-xs font-sans font-medium text-charcoal-muted tracking-wide">
                Sekolah Dasar Islam Terpadu | Terakreditasi A
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-forest leading-[1.16] tracking-tight">
                Membina Adab Islami, Kecerdasan Belajar, dan Cinta Al-Qur'an Sejak Dini.
              </h1>

              <p className="font-sans text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl">
                Di SDIT [Nama Sekolah], siswa kelas 1 hingga 6 belajar memahami ilmu pengetahuan umum dan Al-Qur'an dalam ruang kelas yang tertib, hangat, dan ramah anak.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/profil"
                  className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  <span>Mengenal Sekolah Kami</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 hover:bg-sand/40 transition-colors"
                >
                  <span>Jadwalkan Kunjungan</span>
                </Link>
              </div>
            </div>

            {/* Right: Authentic Sunlit Campus Photograph (Zero Overlays, Natural Light) */}
            <div className="lg:col-span-6">
              <div className="border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
                <img
                  src="/images/campus-hero.jpg"
                  alt="Siswa berjalan pagi di halaman kampus SDIT [Nama Sekolah]"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-sans text-charcoal-muted">
                Suasana pagi siswa di halaman sekolah sebelum kegiatan belajar dimulai.
              </p>
            </div>
          </div>

          {/* 4-Column Quick Overview Strip (Inspired by Aurevia) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-sand bg-ivory-light divide-y sm:divide-y-0 sm:divide-x divide-sand">
            <div className="p-4 sm:p-5 space-y-1">
              <span className="font-heading text-xs font-bold text-gold">01</span>
              <h2 className="font-sans font-bold text-sm text-forest">Rasio Kelas 1 : 14</h2>
              <p className="font-sans text-xs text-charcoal-muted">Dua guru di tiap kelas untuk pendampingan lebih dekat.</p>
            </div>
            <div className="p-4 sm:p-5 space-y-1">
              <span className="font-heading text-xs font-bold text-gold">02</span>
              <h2 className="font-sans font-bold text-sm text-forest">Tahfidz 2-3 Juz</h2>
              <p className="font-sans text-xs text-charcoal-muted">Pembiasaan murojaah pagi dalam kelompok talaqqi kecil.</p>
            </div>
            <div className="p-4 sm:p-5 space-y-1">
              <span className="font-heading text-xs font-bold text-gold">03</span>
              <h2 className="font-sans font-bold text-sm text-forest">Kurikulum Terpadu</h2>
              <p className="font-sans text-xs text-charcoal-muted">Integrasi Kurikulum Nasional dan pembiasaan adab harian.</p>
            </div>
            <div className="p-4 sm:p-5 space-y-1">
              <span className="font-heading text-xs font-bold text-gold">04</span>
              <h2 className="font-sans font-bold text-sm text-forest">Full Day School</h2>
              <p className="font-sans text-xs text-charcoal-muted">Senin s.d. Jumat, pukul 07.00 hingga 14.30 WIB.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. RITME BELAJAR HARIAN (BLOK WARNA SAND + DUAL FRAME ALA FIELDNOTE) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-sand-light/60 border-y border-sand py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2.5">
            <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
              Pendekatan Pendidikan
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
              Bagaimana Hari-Hari Siswa Dijalani di Sekolah
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Setiap hari dirancang seimbang antara pembiasaan ibadah, pemahaman materi akademik, serta waktu bermain dan istirahat yang cukup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
            {/* Left Box: 3 Core Learning Principles */}
            <div className="lg:col-span-7 bg-ivory border border-sand-dark/50 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="font-heading text-base sm:text-lg font-bold text-forest">
                  Pembiasaan Adab & Ibadah Pagi
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Siswa disambut guru di gerbang, mengawali pagi dengan shalat Dhuha, doa bersama, dan halaqah Al-Qur'an sebelum masuk ke mata pelajaran inti.
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-sand/60">
                <h3 className="font-heading text-base sm:text-lg font-bold text-forest">
                  Belajar Melalui Pengamatan & Praktik
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Materi matematika, IPA, dan bahasa disampaikan melalui diskusi kelompok, alat peraga nyata, serta kegiatan proyek sederhana agar anak aktif bertanya.
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-sand/60">
                <h3 className="font-heading text-base sm:text-lg font-bold text-forest">
                  Komunikasi Rutin Wali Kelas & Orang Tua
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Perkembangan hafalan, kebiasaan ibadah di rumah, dan catatan belajar anak dipantau bersama melalui buku penghubung dan pertemuan berkala.
                </p>
              </div>
            </div>

            {/* Right Box: Concrete Daily Schedule */}
            <div className="lg:col-span-5 bg-sage-soft border border-sage/25 p-6 sm:p-8 space-y-5">
              <h3 className="font-heading text-lg font-bold text-forest border-b border-sage/20 pb-3">
                Jadwal Harian Siswa
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
                <li className="flex justify-between gap-4 border-b border-sage/15 pb-2.5">
                  <span className="font-semibold text-forest">07.00 - 08.15</span>
                  <span className="text-charcoal-muted text-right">Penyambutan, Dhuha & Halaqah Qur'an</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-sage/15 pb-2.5">
                  <span className="font-semibold text-forest">08.15 - 11.45</span>
                  <span className="text-charcoal-muted text-right">Pembelajaran Tematik, Sains & Bahasa</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-sage/15 pb-2.5">
                  <span className="font-semibold text-forest">11.45 - 13.00</span>
                  <span className="text-charcoal-muted text-right">Shalat Dzuhur Berjamaah & Makan Siang</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="font-semibold text-forest">13.00 - 14.30</span>
                  <span className="text-charcoal-muted text-right">Literasi, Bina Pribadi & Ekstrakurikuler</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. POTRET KEHIDUPAN SEKOLAH (CLEAN PHOTO JOURNAL, NO TEXT OVERLAY) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
            Suasana Belajar di Dalam & Luar Kelas
          </h2>
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
          >
            <span>Lihat Galeri Kegiatan</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Primary Classroom Photo */}
          <figure className="lg:col-span-7 space-y-2.5">
            <div className="border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
              <img
                src="/images/classroom-learning.jpg"
                alt="Ibu guru mendampingi siswa SDIT berdiskusi di ruang kelas"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-xs font-sans text-charcoal-muted">
              Diskusi kelompok di kelas bersama wali kelas dengan pencahayaan ruang belajar yang nyaman.
            </figcaption>
          </figure>

          {/* Secondary Stacked Photos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <figure className="space-y-2">
              <div className="border border-sand bg-sand-light aspect-[16/9] overflow-hidden">
                <img
                  src="/images/tahfidz-halaqah.jpg"
                  alt="Siswa SDIT mengikuti halaqah tahfidz Al-Qur'an bersama ustadz"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-xs font-sans text-charcoal-muted">
                Bimbingan setoran hafalan Al-Qur'an di mushola sekolah.
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <div className="border border-sand bg-sand-light aspect-[16/9] overflow-hidden">
                <img
                  src="/images/activity-science.jpg"
                  alt="Alat peraga praktikum sains dasar siswa"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-xs font-sans text-charcoal-muted">
                Pengenalan eksperimen sains sederhana untuk melatih rasa ingin tahu anak.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. SAMBUTAN KEPALA SEKOLAH (HONEST EDITORIAL LETTER, ZERO FAKE PHOTO) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="border-t border-sand pt-10 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 bg-forest text-ivory p-7 sm:p-9 space-y-5">
            <span className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase block">
              Sambutan Kepala Sekolah
            </span>
            <blockquote className="font-heading italic text-lg sm:text-xl text-ivory leading-relaxed border-l-2 border-gold pl-4">
              "Sekolah dasar adalah masa peletakan dasar akhlak dan rasa senang anak terhadap ilmu. Ketika hati anak merasa aman dan dihargai, kecerdasannya akan tumbuh dengan sendirinya."
            </blockquote>
            <div className="pt-3 border-t border-ivory/15">
              <p className="font-heading font-bold text-base text-ivory">
                Ust. Ahmad Fauzan, M.Pd.
              </p>
              <p className="text-xs font-sans text-ivory/70">
                Kepala SDIT [Nama Sekolah]
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest leading-snug">
              Mendidik dengan Keteladanan dan Kerja Sama Orang Tua
            </h2>
            <div className="space-y-3 font-sans text-sm text-charcoal-muted leading-relaxed">
              <p>
                Assalamu'alaikum warahmatullahi wabarakatuh. Kami menyadari bahwa memilih sekolah dasar bagi putra-putri merupakan keputusan penting bagi setiap keluarga. Di masa usia 6 hingga 12 tahun, anak tidak hanya belajar membaca, berhitung, dan menulis, tetapi juga merekam kebiasaan baik dari orang-orang di sekitarnya.
              </p>
              <p>
                Oleh karena itu, seluruh guru dan staf di SDIT [Nama Sekolah] berupaya menjaga keselarasan antara apa yang diajarkan di buku dengan keteladanan sikap sehari-hari. Kami membuka ruang komunikasi yang terbuka dengan orang tua agar pembinaan di sekolah sejalan dengan pengasuhan di rumah.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
              >
                <span>Baca Sejarah & Visi Misi Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. KURIKULUM & PROGRAM (STICKY TITLE + NUMBERED INDEX) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="border-t border-sand pt-10 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
              Program Pendidikan
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest leading-tight">
              Kurikulum Inti & Pembinaan Karakter
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Empat bidang fokus utama yang dijalani siswa secara bertahap dari kelas 1 sampai kelas 6.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-sand border-y border-sand">
            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-1 font-heading text-sm font-bold text-gold">01</span>
              <h3 className="sm:col-span-4 font-heading text-base font-bold text-forest">
                Tahfidz & Perbaikan Bacaan
              </h3>
              <p className="sm:col-span-7 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Halaqah harian setiap pagi dalam kelompok kecil untuk membiasakan tartil, makhraj yang benar, dan hafalan bertahap Juz 30, 29, serta 28.
              </p>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-1 font-heading text-sm font-bold text-gold">02</span>
              <h3 className="sm:col-span-4 font-heading text-base font-bold text-forest">
                Sains, Logika & Matematika
              </h3>
              <p className="sm:col-span-7 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Penguatan pemahaman konsep berhitung, literasi membaca, serta praktikum sains sederhana untuk membiasakan cara berpikir runtut.
              </p>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-1 font-heading text-sm font-bold text-gold">03</span>
              <h3 className="sm:col-span-4 font-heading text-base font-bold text-forest">
                Bina Pribadi Islami (BPI)
              </h3>
              <p className="sm:col-span-7 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Pembinaan rutin adab berbicara, tanggung jawab terhadap barang pribadi, kesabaran antre, serta kerja sama dalam kelompok.
              </p>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-1 font-heading text-sm font-bold text-gold">04</span>
              <h3 className="sm:col-span-4 font-heading text-base font-bold text-forest">
                Bahasa Arab & Bahasa Inggris
              </h3>
              <p className="sm:col-span-7 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Pengenalan kosakata percakapan harian, cerita bergambar, serta latihan keberanian berbicara di depan kelas secara bertahap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. KABAR & KEGIATAN SEKOLAH (MAGAZINE LAYOUT: 1 FEATURED + 2 SIDE) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-sans font-semibold tracking-widest text-gold uppercase">
              Warta Sekolah
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mt-0.5">
              Berita & Dokumentasi Terbaru
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
          {/* Featured Article (Left 6 cols) */}
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

          {/* Secondary Stacked Articles (Right 6 cols) */}
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
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. PENUTUP HALAMAN (QUIET SAND INVITATION BAR, HARMONIS DENGAN FOOTER) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-light/80 border border-sand p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl space-y-1.5">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest">
              Ingin Meninjau Sekolah atau Bertanya Mengenai Pendaftaran?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Orang tua dapat menghubungi sekretariat kami pada jam kerja atau melihat panduan lengkap penerimaan peserta didik baru.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-5 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
            >
              <span>Hubungi Sekretariat</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 px-5 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 bg-ivory hover:bg-sand/40 transition-colors"
            >
              <span>Info PPDB</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
