import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SCHOOL_CONFIG } from "@/data/school";

export const metadata = {
  title: "Profil Sekolah",
  description: `Sejarah, Visi Misi, Tim Pendidik, dan Fasilitas ${SCHOOL_CONFIG.name}`,
};

export default function ProfilPage() {
  const missionPoints = [
    "Menyelenggarakan pendidikan Islam terpadu yang mengintegrasikan aspek Imtaq dan Iptek secara seimbang.",
    "Membimbing pembiasaan ibadah harian, adab Islami, serta hafalan Al-Qur'an target 2 hingga 3 Juz.",
    "Mengembangkan potensi bakat, minat, dan kecerdasan majemuk setiap peserta didik secara bertahap.",
    "Menciptakan lingkungan belajar yang ramah anak, aman, bersih, dan kaya akan keteladanan harian.",
    "Menjalin komunikasi yang erat dan saling mendukung antara sekolah, orang tua murid, dan masyarakat.",
  ];

  const coreValues = [
    {
      num: "01",
      title: "Salimul Aqidah",
      sub: "Aqidah yang Lurus",
      desc: "Membangun ketauhidan yang kokoh dalam diri ananda agar senantiasa bergantung dan beribadah kepada Allah SWT.",
    },
    {
      num: "02",
      title: "Shahihul Ibadah",
      sub: "Ibadah yang Benar",
      desc: "Membimbing tata cara ibadah harian (shalat, wudhu, doa) sesuai tuntunan sunnah Rasulullah SAW.",
    },
    {
      num: "03",
      title: "Matinul Khuluq",
      sub: "Akhlak yang Mulia",
      desc: "Menanamkan sikap santun, jujur, hormat kepada orang tua dan guru, serta menyayangi sesama teman.",
    },
    {
      num: "04",
      title: "Mutsaqqajul Fikr",
      sub: "Wawasan yang Luas",
      desc: "Mendorong daya kritis, kreativitas, kecerdasan akademik, dan kecintaan pada ilmu pengetahuan.",
    },
  ];

  const featuredFacilities = [
    {
      name: "Lingkungan Kampus Asri",
      desc: "Area sekolah yang bersih, teduh dengan pepohonan hijau, dan aman bagi aktivitas anak.",
      image: "/images/campus-hero.jpg",
    },
    {
      name: "Ruang Kelas Nyaman",
      desc: "Ruang belajar dengan pencahayaan alami yang baik, meja kursi ergonomis, dan alat bantu visual.",
      image: "/images/classroom-learning.jpg",
    },
    {
      name: "Mushola & Ruang Tahfidz",
      desc: "Tempat shalat berjamaah harian, halaqah hafalan Al-Qur'an, dan pembinaan adab yang tenang.",
      image: "/images/tahfidz-halaqah.jpg",
    },
    {
      name: "Pojok Literasi & Sains",
      desc: "Koleksi buku cerita Islami, ensiklopedia sains bergambar, serta alat peraga eksperimen dasar.",
      image: "/images/program-language.jpg",
    },
  ];

  const supportingFacilities = [
    {
      name: "Ruang UKS & Kesehatan",
      desc: "Ruang kesehatan bersih dengan perlengkapan pertolongan pertama serta pemantauan kesehatan berkala.",
    },
    {
      name: "Kantin Sehat & Thayyib",
      desc: "Menyediakan asupan makanan dan minuman yang terjamin kehalalan, kebersihan, serta gizinya.",
    },
    {
      name: "Lapangan Olahraga Sekolah",
      desc: "Area luar ruang untuk senam pagi, permainan bola, serta kegiatan kepanduan Pramuka SIT.",
    },
    {
      name: "Area Bermain & Taman",
      desc: "Taman bermain terbuka yang aman untuk melatih ketangkasan motorik dan interaksi sosial siswa.",
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pb-12 sm:pb-16">
      
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-sand/80 pb-6 sm:pb-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
              <Link href="/" className="hover:text-forest transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
              <span className="text-forest font-semibold">Profil Sekolah</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Tentang Sekolah | {SCHOOL_CONFIG.accreditation.label}
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Profil, Sejarah & Visi Pendidikan
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Perjalanan pendirian, tim pendidik, nilai karakter Islam Terpadu, serta sarana belajar di {SCHOOL_CONFIG.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-2.5">
            <div className="border border-sand bg-sand-light aspect-[16/10] overflow-hidden">
              <img
                src="/images/campus-hero.jpg"
                alt={`Lingkungan Kampus ${SCHOOL_CONFIG.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-sans text-charcoal-muted">
              Lingkungan belajar {SCHOOL_CONFIG.name}, berdiri sejak tahun {SCHOOL_CONFIG.accreditation.foundedYear}.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Sejarah Kami
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-1">
                Berawal dari Niat Tulus Mencetak Generasi Beradab
              </h2>
            </div>

            <div className="space-y-3.5 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              <p>
                {SCHOOL_CONFIG.name} didirikan pada tahun {SCHOOL_CONFIG.accreditation.foundedYear} oleh para praktisi pendidikan dan tokoh masyarakat yang peduli terhadap pentingnya pembinaan karakter anak di usia sekolah dasar. Sekolah ini hadir untuk menjawab kebutuhan orang tua akan pendidikan yang memadukan ilmu pengetahuan umum dengan pemahaman agama yang kuat.
              </p>
              <p>
                Seiring berjalannya waktu, {SCHOOL_CONFIG.name} terus berkembang dengan memadukan Kurikulum Nasional bersama kurikulum khas Sekolah Dasar Islam Terpadu (SIT). Proses belajar dirancang secara interaktif, ramah anak, dan memperhatikan perkembangan kecerdasan maupun adab keseharian siswa.
              </p>
              <p>
                Hingga kini, kami telah meluluskan berbagai angkatan alumni yang melanjutkan pendidikan ke SMP maupun pesantren pilihan, dengan bekal akhlak baik serta hafalan Al-Qur'an yang terjaga.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-sand/80 pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5">
            <div className="bg-forest text-ivory p-6 sm:p-8 space-y-4 border border-forest-light/40">
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Visi Sekolah
              </span>
              <blockquote className="font-heading italic text-lg sm:text-2xl text-ivory leading-relaxed border-l-2 border-gold pl-4">
                "Terwujudnya Generasi Rabbani yang Unggul dalam Imtaq, Cerdas dalam Iptek, serta Berakhlak Mulia dan Berwawasan Luas."
              </blockquote>
              <p className="text-xs font-sans text-ivory/70 pt-2 border-t border-ivory/15">
                Menjadi arah utama seluruh kegiatan pembelajaran dan pembiasaan harian di sekolah.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Misi Sekolah
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest mt-1">
                Langkah Nyata Mewujudkan Visi
              </h2>
            </div>

            <ol className="divide-y divide-sand/80 border-y border-sand/80">
              {missionPoints.map((item, idx) => (
                <li key={idx} className="py-3.5 flex items-baseline gap-4">
                  <span className="font-heading text-sm font-bold text-gold shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* Pimpinan & Koordinator Pendidik (Trust Signal) */}
      <section className="bg-sand-light/60 border-y border-sand py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-sand pb-3">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Tenaga Pendidik
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
                Pimpinan & Koordinator Bidang
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md">
              Didampingi oleh guru-guru lulusan kependidikan dan penghafal Al-Qur'an yang berpengalaman membina anak usia sekolah dasar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCHOOL_CONFIG.educators.map((person, idx) => (
              <div key={idx} className="bg-ivory border border-sand p-5 space-y-3">
                <div className="w-11 h-11 bg-forest text-gold font-heading font-bold text-sm flex items-center justify-center">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-forest leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-gold mt-0.5">
                    {person.role}
                  </p>
                </div>
                <p className="text-xs font-sans text-charcoal-muted pt-2 border-t border-sand/60">
                  {person.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai-nilai Islam Terpadu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-sand/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
              Filosofi Pendidikan
            </span>
            <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
              Pendekatan Islam Terpadu Kami
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md">
            Seluruh ilmu umum dihubungkan dengan nilai keimanan agar melahirkan generasi yang cerdas akal dan baik adabnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="border-t-2 border-forest pt-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="font-heading font-bold text-gold">{val.num}</span>
                <span className="text-[11px] font-semibold text-sage uppercase tracking-wider">
                  {val.sub}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-forest">
                {val.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fasilitas Sekolah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-sand/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
              Sarana & Prasarana
            </span>
            <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
              Fasilitas Sekolah
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md">
            Lingkungan belajar yang aman, bersih, dan memadai untuk menunjang kegiatan akademik maupun pembinaan karakter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredFacilities.map((facility, idx) => (
            <div key={idx} className="space-y-2.5 group">
              <div className="border border-sand bg-sand-light aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-base text-forest">
                  {facility.name}
                </h3>
                <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand/80">
          {supportingFacilities.map((item, idx) => (
            <div key={idx} className="py-2 space-y-1">
              <h4 className="font-heading font-bold text-sm sm:text-base text-forest">
                {item.name}
              </h4>
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-sand/80 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-forest">
              Ingin melihat langsung suasana belajar di sekolah kami?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted">
              Silakan jadwalkan kunjungan atau hubungi sekretariat kami untuk informasi lebih lanjut.
            </p>
          </div>
          <Link
            href="/kontak#kunjungan"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-all shrink-0"
          >
            <span>Jadwalkan Kunjungan</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>
      </section>

    </div>
  );
}
