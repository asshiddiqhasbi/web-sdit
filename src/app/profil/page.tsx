import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  BookOpen,
  Target,
  CheckCircle2,
  Award,
  HeartHandshake,
  ShieldCheck,
  Building2,
  Monitor,
  HeartPulse,
  Utensils,
  Smile,
  Compass,
  GraduationCap,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Profil Sekolah",
  description: "Sejarah, Visi Misi, Nilai-nilai Islam Terpadu, dan Fasilitas SDIT [Nama Sekolah]",
};

export default function ProfilPage() {
  // Data Fasilitas Sekolah (8 items)
  const facilities = [
    {
      name: "Ruang Kelas Ber-AC & Multimedia",
      desc: "Ruang belajar nyaman ber-AC yang dilengkapi dengan proyektor interaktif dan pencahayaan optimal.",
      icon: Building2,
      color: "from-emerald-100 to-teal-100",
    },
    {
      name: "Masjid & Ruang Tahfidz",
      desc: "Masjid sekolah yang bersih dan luas untuk shalat berjamaah, hafalan Al-Qur'an, dan pembiasaan adab.",
      icon: BookOpen,
      color: "from-amber-100 to-yellow-100",
    },
    {
      name: "Perpustakaan & Corner Baca",
      desc: "Koleksi buku bacaan lengkap mulai dari ilmu pengetahuan umum, sains, hingga kisah nabi & sahabat.",
      icon: GraduationCap,
      color: "from-teal-100 to-emerald-100",
    },
    {
      name: "Laboratorium Komputer & STEM",
      desc: "Fasilitas perangkat komputer terkini untuk mengenalkan literasi digital dan teknologi sejak dini.",
      icon: Monitor,
      color: "from-orange-100 to-amber-100",
    },
    {
      name: "Lapangan Olahraga & Panahan",
      desc: "Area olahraga outdoor serbaguna untuk basket, futsal, bulu tangkis, dan kegiatan ekstrakurikuler panahan.",
      icon: Target,
      color: "from-emerald-100 to-amber-100",
    },
    {
      name: "Ruang UKS & Kesehatan",
      desc: "Ruang kesehatan yang bersih, terlengkapi obat-obatan pertolongan pertama, dan ditangani petugas siaga.",
      icon: HeartPulse,
      color: "from-red-100 to-rose-100",
    },
    {
      name: "Kantin Sehat & Thayyib",
      desc: "Kantin yang menyajikan makanan dan minuman yang terjamin kehalalan, kebersihan, serta gizinya.",
      icon: Utensils,
      color: "from-amber-100 to-orange-100",
    },
    {
      name: "Area Bermain & Taman Ceria",
      desc: "Taman bermain terbuka yang aman untuk mengasah motorik dan sosialisasi anak saat jam istirahat.",
      icon: Smile,
      color: "from-teal-100 to-orange-100",
    },
  ];

  // Nilai-Nilai Utama (4 cards)
  const coreValues = [
    {
      title: "Salimul Aqidah",
      sub: "Aqidah yang Lurus",
      desc: "Membangun ketauhidan yang kokoh dalam diri ananda agar hanya bergantung dan beribadah kepada Allah SWT.",
      icon: HeartHandshake,
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      title: "Shahihul Ibadah",
      sub: "Ibadah yang Benar",
      desc: "Membimbing tata cara ibadah harian (shalat, wudhu, doa) sesuai dengan sunnah Rasulullah SAW.",
      icon: Award,
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    },
    {
      title: "Matinul Khuluq",
      sub: "Akhlak yang Mulia",
      desc: "Menanamkan sikap santun, jujur, hormat kepada orang tua & guru, serta menyayangi sesama teman.",
      icon: ShieldCheck,
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    },
    {
      title: "Mutsaqqajul Fikr",
      sub: "Wawasan yang Luas",
      desc: "Mendorong daya kritis, kreativitas, kecerdasan akademik, dan kecintaan pada ilmu pengetahuan modern.",
      icon: Compass,
      badgeColor: "bg-orange-100 text-orange-900 border-orange-200",
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pb-10 sm:pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HEADER HALAMAN & BREADCRUMB */}
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
              <span className="text-amber-300">Profil Sekolah</span>
            </nav>

            {/* Header Title */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mengenal SDIT [Nama Sekolah]</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Profil & Visi Misi Sekolah
              </h1>
              <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto pt-1">
                Mengenal lebih dekat sejarah, landasan filosofi, serta komitmen kami dalam mencetak generasi penerus yang Qur'ani dan berprestasi.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. SEJARAH SINGKAT */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Sejarah Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <FadeIn direction="up">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60 mb-3.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Perjalanan Kami</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Sejarah Berdirinya SDIT [Nama Sekolah]
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                <p>
                  SDIT [Nama Sekolah] didirikan pada tahun 2010 oleh para tokoh pendidikan dan alim ulama yang peduli terhadap pentingnya pendidikan karakter anak di era modern. Berawal dari niat suci untuk memadukan ilmu pengetahuan umum dan pemahaman keagamaan yang mendalam, sekolah ini hadir sebagai solusi pendidikan dasar berkualitas di wilayah ini.
                </p>
                <p>
                  Seiring berjalannya waktu, SDIT [Nama Sekolah] terus bertransformasi menjadi lembaga pendidikan unggulan dengan mengadopsi standar Kurikulum Merdeka yang diselaraskan dengan kurikulum khas Sekolah Dasar Islam Terpadu (SIT). Pembelajaran diolah secara interaktif, ramah anak, dan berorientasi pada pengembangan kecerdasan holistik.
                </p>
                <p>
                  Kini, SDIT [Nama Sekolah] telah meluluskan ratusan alumni yang tidak hanya unggul secara akademik di jenjang pendidikan selanjutnya, tetapi juga memiliki ketahanan moral serta hafalan Al-Qur'an yang kuat.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Sejarah Image Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn direction="up" delay={0.3} className="w-full max-w-md">
              <div className="relative w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-3xl blur-md opacity-30"></div>
                
                <div className="relative bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-md space-y-4 text-center">
                  <div className="w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 flex flex-col items-center justify-center text-white p-4 sm:p-6 shadow-inner border border-white/20">
                    <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-amber-300 mb-2" />
                    <span className="font-heading font-extrabold text-base sm:text-lg">Gedung Utama Sekolah</span>
                    <span className="text-[11px] sm:text-xs text-amber-200 font-medium mt-1">[Gambar Gedung Sekolah Placeholder]</span>
                  </div>
                  <div className="bg-emerald-50 p-2.5 sm:p-3 rounded-xl border border-emerald-100 text-emerald-900 text-xs font-semibold">
                    Berdiri Sejak 2010 • Melayani dengan Sepenuh Hati
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. VISI & MISI */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
              Arah & Tujuan
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Visi dan Misi Sekolah
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card Visi (4 cols) */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.1} className="h-full">
              <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 sm:p-10 rounded-3xl shadow-md space-y-5 sm:space-y-6 relative overflow-hidden flex flex-col justify-between border border-emerald-700/60 h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-amber-300">
                    Visi SDIT [Nama Sekolah]
                  </h3>
                  <blockquote className="text-sm sm:text-lg text-slate-100 font-medium leading-relaxed italic border-l-4 border-amber-400 pl-3 sm:pl-4 py-1">
                    "Terwujudnya Generasi Rabbani yang Unggul dalam Imtaq, Cerdas dalam Iptek, serta Berakhlak Mulia dan Berwawasan Global."
                  </blockquote>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-emerald-700/60 text-xs text-amber-200 font-medium">
                  Landasan Utama Pendidikan Karakter Qur'ani
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Card Misi (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-5 sm:space-y-6 h-full">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                      Misi SDIT [Nama Sekolah]
                    </h3>
                    <p className="text-xs text-slate-500">Langkah Nyata Mewujudkan Visi Sekolah</p>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menyelenggarakan pendidikan Islam terpadu yang mengintegrasikan aspek Imtaq dan Iptek secara harmonis.</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Membimbing pembiasaan ibadah harian, adab Islami, serta hafalan Al-Qur'an (Tahfidz) target 2-3 Juz.</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mengembangkan potensi bakat, minat, dan kecerdasan majemuk (multiple intelligences) setiap peserta didik.</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menciptakan lingkungan belajar yang ramah anak, aman, inovatif, dan kaya akan keteladanan.</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Jalinan kemitraan yang erat dan harmonis antara sekolah, orang tua murid, dan masyarakat.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. NILAI-NILAI ISLAM TERPADU */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-50 p-6 sm:p-12 rounded-3xl border border-emerald-100 space-y-6 sm:space-y-8">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 mb-3.5">
                Filosofi Pendidikan
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                Pendekatan Islam Terpadu Kami
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Konsep Sekolah Islam Terpadu mendasarkan seluruh proses pembelajaran pada Al-Qur'an dan As-Sunnah. Setiap ilmu umum senantiasa dihubungkan dengan kebesaran Allah SWT agar melahirkan generasi yang cerdas intelek sekaligus mulia jiwanya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {coreValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:shadow-md transition-shadow h-full">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${val.badgeColor}`}>
                          {val.sub}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                        {val.title}
                      </h3>
                      
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FASILITAS SEKOLAH */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
              Sarana & Prasarana
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Fasilitas Sekolah Lengkap
            </h2>
            <p className="text-slate-600 text-xs sm:text-base">
              Mendukung kegiatan belajar mengajar yang optimal, aman, dan menyenangkan bagi seluruh siswa.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => {
            const IconComp = facility.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.08}>
                <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full">
                  <div>
                    {/* Facility Image Placeholder Header */}
                    <div
                      className={`h-40 bg-gradient-to-br ${facility.color} flex flex-col items-center justify-center p-4 text-center border-b border-slate-100 relative group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-xs text-emerald-800 flex items-center justify-center shadow-xs mb-1">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600">
                        [Gambar Fasilitas Placeholder]
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {facility.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {facility.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-1 text-[11px] font-semibold text-emerald-700">
                    ✓ Tersedia & Siap Pakai
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

    </div>
  );
}
