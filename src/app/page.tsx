import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  ShieldCheck,
  Users,
  Quote,
  Image as ImageIcon,
  ChevronRight,
  GraduationCap,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { getLatestNews } from "@/data/berita";
import NewsCard from "@/components/ui/NewsCard";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  const latestNews = getLatestNews(3);

  // Dummy data galeri preview
  const galleryItems = [
    { title: "Manasik Haji Cilik", category: "Kegiatan Islami", color: "from-emerald-400 to-teal-600" },
    { title: "Pentas Seni & Ekstrakurikuler", category: "Seni & Bakat", color: "from-amber-400 to-orange-500" },
    { title: "Praktikum STEM & Komputer", category: "Sains & Teknologi", color: "from-teal-400 to-emerald-700" },
    { title: "Tahfidz Camp & Murojaah", category: "Al-Qur'an", color: "from-emerald-500 to-amber-500" },
    { title: "Olahraga & Panahan Ceria", category: "Olahraga", color: "from-orange-400 to-amber-600" },
    { title: "Kunjungan Edukasi (Field Trip)", category: "Edukasi Outdoor", color: "from-teal-500 to-emerald-600" },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-teal-900 to-emerald-950 text-white pt-8 pb-20 lg:pt-14 lg:pb-28 shape-curve-bottom">
        {/* Decorative Blobs & Background Patterns */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>
        <div className="absolute inset-0 bg-islamic-pattern opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column (Text & CTAs) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <FadeIn direction="up" delay={0.1}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Penerimaan Peserta Didik Baru (PPDB) TA 2026/2027 Dibuka</span>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2}>
                {/* School Name & Main Title */}
                <div className="space-y-3">
                  <p className="text-amber-300 font-heading font-extrabold text-lg sm:text-xl tracking-wider uppercase">
                    SDIT [Nama Sekolah]
                  </p>
                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    Membentuk Generasi{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400">
                      Rabbani
                    </span>{" "}
                    yang Cerdas & Berakhlak
                  </h1>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                {/* Tagline / Subtitle */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Menyediakan pendidikan Islam terpadu berkualitas tinggi yang memadukan keunggulan akademik, hafalan Al-Qur'an (Tahfidz), serta pembentukan karakter Islami sejak dini.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/ppdb"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-base text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <span>Daftar PPDB Sekarang</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href="/profil"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
                  >
                    <span>Lihat Profil Sekolah</span>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                {/* Quick Highlights Info */}
                <div className="pt-6 grid grid-cols-3 gap-3 border-t border-emerald-800/60 max-w-lg mx-auto lg:mx-0 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Akreditasi A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Target Tahfidz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Fasilitas Lengkap</span>
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* Hero Right Column (Main Image Placeholder & Graphic Card) */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn direction="up" delay={0.3} className="w-full max-w-md">
                <div className="relative w-full">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-3xl blur-lg opacity-40"></div>

                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
                    <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 flex flex-col items-center justify-center text-white border border-white/20 p-6 shadow-inner relative overflow-hidden group">
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
                      <GraduationCap className="w-16 h-16 text-amber-300 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-heading font-extrabold text-xl text-white">
                        SDIT [Nama Sekolah]
                      </span>
                      <span className="text-xs text-amber-200 font-medium mt-1">
                        [Gambar / Ilustrasi Siswa Belajar Placeholder]
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="bg-emerald-950/70 p-3.5 rounded-2xl border border-emerald-700/60">
                        <p className="text-amber-300 font-heading font-extrabold text-lg">500+</p>
                        <p className="text-[11px] text-slate-300 font-medium">Siswa Active</p>
                      </div>
                      <div className="bg-emerald-950/70 p-3.5 rounded-2xl border border-emerald-700/60">
                        <p className="text-amber-300 font-heading font-extrabold text-lg">100%</p>
                        <p className="text-[11px] text-slate-300 font-medium">Lulusan Penghafal Juz 30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. SAMBUTAN KEPALA SEKOLAH */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 flex justify-center">
                <FadeIn direction="up" delay={0.1}>
                  <div className="relative">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 shape-blob-1 p-2 shadow-lg">
                      <div className="w-full h-full rounded-2xl bg-slate-200 flex flex-col items-center justify-center text-slate-500 border-2 border-white/80 p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 font-extrabold text-xl">
                          KS
                        </div>
                        <span className="text-xs font-bold text-slate-700">Foto Kepala Sekolah</span>
                        <span className="text-[10px] text-slate-500 mt-1">[Placeholder Image]</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-2 bg-amber-400 text-emerald-950 font-heading font-bold text-xs px-3 py-1.5 rounded-full shadow-md border border-white">
                      Kepala Sekolah
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <FadeIn direction="up" delay={0.2}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                    <Quote className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Kata Sambutan</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Sambutan Kepala SDIT [Nama Sekolah]
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1 my-2 bg-white/60 rounded-r-xl">
                    "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi SDIT [Nama Sekolah]. Kami berkomitmen penuh untuk menghadirkan lingkungan belajar yang aman, islami, dan menyenangkan agar setiap ananda dapat bertumbuh menjadi pribadi yang bertakwa, berprestasi tinggi, dan siap memimpin masa depan dengan akhlakul karimah."
                  </blockquote>

                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Ustadz H. Ahmad Dahlan, M.Pd.
                    </h3>
                    <p className="text-xs text-emerald-700 font-semibold">
                      Kepala Sekolah SDIT [Nama Sekolah]
                    </p>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. KEUNGGULAN SEKOLAH */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
              Nilai Plus Sekolah
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Kenapa Memilih SDIT [Nama Sekolah]?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Kami menghadirkan fondasi pendidikan terbaik yang menyeimbangkan potensi akal, jasmani, dan ruhani peserta didik.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4 group h-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Kurikulum Islam Terpadu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrasi sempurna Kurikulum Nasional dengan pemahaman dinul Islam yang kokoh dalam setiap mata pelajaran.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4 group h-full">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Program Tahfidz & Akhlak
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bimbingan hafalan Al-Qur'an terstruktur (Target minimal 2-3 Juz) serta pembiasaan ibadah harian.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4 group h-full">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Guru Berpengalaman
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tenaga pendidik profesional, tersertifikasi, ramah anak, dan senantiasa menjadi teladan yang baik.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4 group h-full">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Fasilitas & Lingkungan Aman
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ruang kelas ber-AC, laboratorium modern, masjid ramah anak, serta lingkungan bebas dari perundungan.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. CUPLIKAN BERITA TERBARU (Menggunakan NewsCard) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
                Informasi Terkini
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                Berita & Kegiatan Terbaru
              </h2>
            </div>

            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>Lihat Semua Berita</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news, idx) => (
            <FadeIn key={news.id} direction="up" delay={idx * 0.15}>
              <NewsCard news={news} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. CUPLIKAN GALERI */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
              Dokumentasi Siswa
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-3">
              Galeri Kegiatan Sekolah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Intip keceriaan dan ragam aktivitas belajar mengajar serta ekstrakurikuler di SDIT [Nama Sekolah].
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div
                  className={`h-52 bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6 text-center text-white relative`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold bg-black/20 backdrop-blur-xs px-3 py-1 rounded-full text-white">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Dokumentasi Foto Placeholder</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="text-center pt-8">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-all shadow-xs"
            >
              <span>Lihat Galeri Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. CTA SECTION SEBELUM FOOTER */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl border border-emerald-700/50">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-islamic-pattern opacity-20"></div>

            <div className="relative max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-emerald-950 text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4" />
                <span>Pendaftaran PPDB 2026/2027 Masih Dibuka</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Mari Tumbuhkan Potensi & Karakter Islami Ananda Bersama Kami
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Dapatkan kesempatan emas bergabung dengan SDIT [Nama Sekolah]. Tempat belajar terbaik yang nyaman, aman, dan berorientasi pada ridho Allah SWT.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/ppdb"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-heading font-extrabold text-base text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                >
                  <span>Daftar PPDB Sekarang</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-300" />
                  <span>Konsultasi Informasi</span>
                </Link>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

    </div>
  );
}
