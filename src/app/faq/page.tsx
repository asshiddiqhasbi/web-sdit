"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, Search, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  categoryTitle: string;
  categorySubtitle: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    id: "ppdb",
    categoryTitle: "Seputar PPDB (Pendaftaran Siswa Baru)",
    categorySubtitle: "Ketentuan usia, dokumen, jadwal pendaftaran, observasi, dan biaya.",
    items: [
      {
        id: "ppdb-1",
        question: "Berapa batas usia minimal calon siswa untuk mendaftar ke kelas 1?",
        answer:
          "Calon siswa kelas 1 SDIT [Nama Sekolah] berusia minimal 6 tahun per tanggal 1 Juli pada tahun ajaran berjalan. Bagi calon siswa yang berusia 5 tahun 8 bulan pada bulan Juli, pertimbangan dilakukan melalui hasil observasi kesiapan belajar sekolah dan surat rekomendasi psikolog anak.",
      },
      {
        id: "ppdb-2",
        question: "Dokumen apa saja yang perlu disiapkan saat mendaftar?",
        answer:
          "Berkas standar meliputi fotokopi Akta Kelahiran (2 lembar), fotokopi Kartu Keluarga (2 lembar), fotokopi KTP kedua orang tua (1 lembar), pasfoto berwarna 3x4 (4 lembar), serta fotokopi surat keterangan atau ijazah TK/PAUD jika ada.",
      },
      {
        id: "ppdb-3",
        question: "Kapan biasanya jadwal pendaftaran siswa baru dibuka?",
        answer:
          "Pendaftaran peserta didik baru berlangsung secara berkala setiap tahun ajaran, umumnya dibuka pada bulan November hingga April (atau ditutup lebih awal apabila kuota rombongan belajar telah terpenuhi). Informasi pembukaan resmi dapat dipantau di halaman PPDB.",
      },
      {
        id: "ppdb-4",
        question: "Apakah ada tes akademik masuk untuk calon siswa?",
        answer:
          "Kami tidak mengadakan ujian membaca atau berhitung bertekanan tinggi. Proses seleksi menggunakan observasi kesiapan belajar yang ramah anak (motorik halus, komunikasi dasar, dan kemandirian) disertai silaturahmi wawancara bersama orang tua.",
      },
      {
        id: "ppdb-5",
        question: "Bagaimana gambaran estimasi biaya masuk dan SPP bulanan?",
        answer:
          "Mengacu pada tahun ajaran berjalan, estimasi biaya formulir dan observasi sebesar Rp 350.000, uang pangkal sebesar Rp 8.500.000 (dapat diangsur bertahap), dan SPP bulanan Rp 650.000 yang sudah mencakup program tahfidz dan ekstrakurikuler wajib.",
      },
      {
        id: "ppdb-6",
        question: "Apakah sekolah menyediakan jalur prestasi atau keringanan biaya?",
        answer:
          "Ya, tersedia jalur prestasi tahfidz (hafal minimal 1 Juz), keringanan untuk pendaftaran saudara kandung yang bersekolah bersamaan, serta program potongan pendaftaran gelombang awal.",
      },
    ],
  },
  {
    id: "akademik",
    categoryTitle: "Seputar Kurikulum & Akademik",
    categorySubtitle: "Kurikulum, jam belajar harian, tahfidz Al-Qur'an, dan kegiatan siswa.",
    items: [
      {
        id: "akademik-1",
        question: "Kurikulum apa yang digunakan dalam pembelajaran sehari-hari?",
        answer:
          "Sekolah mengintegrasikan Kurikulum Nasional (Kemendikbudristek) dengan kurikulum khas Sekolah Dasar Islam Terpadu (SIT), sehingga pelajaran umum dan pembinaan agama berjalan selaras tanpa dipisahkan.",
      },
      {
        id: "akademik-2",
        question: "Bagaimana jadwal jam belajar siswa dari Senin sampai Jumat?",
        answer:
          "Kegiatan belajar berlangsung dengan sistem Full Day School pukul 07.00 hingga 14.30 WIB pada hari Senin sampai Jumat. Hari dimulai dengan shalat Dhuha dan halaqah Qur'an, diikuti pelajaran inti, shalat Dzuhur berjamaah, makan siang, serta literasi dan ekstrakurikuler.",
      },
      {
        id: "akademik-3",
        question: "Berapa target hafalan Al-Qur'an hingga lulus kelas 6?",
        answer:
          "Target minimal hafalan lulusan adalah 2 hingga 3 Juz Al-Qur'an (Juz 30, Juz 29, dan surah pilihan) dengan memperhatikan ketepatan makhraj dan hukum tajwid melalui metode talaqqi.",
      },
      {
        id: "akademik-4",
        question: "Berapa jumlah siswa dan guru pendamping di dalam satu kelas?",
        answer:
          "Setiap kelas berisi maksimal 24 hingga 28 siswa yang didampingi oleh dua orang guru (Wali Kelas dan Guru Pendamping) sehingga perhatian terhadap perkembangan tiap anak lebih terjaga.",
      },
      {
        id: "akademik-5",
        question: "Apa saja pilihan ekstrakurikuler yang tersedia bagi siswa?",
        answer:
          "Pilihan ekstrakurikuler antara lain Pramuka SIT, Panahan, Tahfidz Club, Sains dan Robotik Dasar, Pencak Silat, Futsal, Bulu Tangkis, Kaligrafi, serta Dokter Kecil (UKS).",
      },
    ],
  },
  {
    id: "fasilitas",
    categoryTitle: "Seputar Fasilitas & Operasional",
    categorySubtitle: "Layanan antar-jemput, seragam, kantin sehat, dan jam layanan kantor.",
    items: [
      {
        id: "fasilitas-1",
        question: "Apakah tersedia layanan antar-jemput siswa?",
        answer:
          "Tersedia layanan antar-jemput mitra sekolah dengan armada ber-AC dan pendamping rute untuk wilayah sekitar sekolah. Daftar rute dapat ditanyakan langsung ke bagian tata usaha.",
      },
      {
        id: "fasilitas-2",
        question: "Bagaimana ketentuan seragam siswa selama satu pekan?",
        answer:
          "Siswa mengenakan 4 setel seragam resmi bergantian sesuai jadwal hari: seragam merah-putih khas SIT, batik sekolah, seragam olahraga, dan seragam Pramuka SIT (dengan jilbab syar'i bagi siswi).",
      },
      {
        id: "fasilitas-3",
        question: "Apakah tersedia kantin sehat atau katering makan siang?",
        answer:
          "Sekolah menyediakan kantin sehat dengan jajanan terpantau bebas pengawet, serta pilihan katering makan siang bergizi bagi orang tua yang ingin memesan secara bulanan.",
      },
      {
        id: "fasilitas-4",
        question: "Bagaimana jam layanan kantor sekretariat sekolah?",
        answer:
          "Sekretariat sekolah melayani kunjungan orang tua dan informasi telepon setiap hari Senin sampai Jumat pukul 07.00 hingga 15.30 WIB, serta hari Sabtu pukul 08.00 hingga 12.00 WIB.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>(["ppdb-1", "akademik-1"]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCategories = FAQ_DATA.map((category) => {
    const matchingItems = category.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...category,
      items: matchingItems,
    };
  }).filter((category) => category.items.length > 0);

  return (
    <div className="space-y-10 sm:space-y-14 pb-12 sm:pb-16">
      
      {/* Editorial Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-sand/80 pb-6 sm:pb-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
              <Link href="/" className="hover:text-forest transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
              <span className="text-forest font-semibold">FAQ</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Pusat Informasi
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Pertanyaan Umum (FAQ)
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Kumpulan jawaban atas pertanyaan yang sering diajukan orang tua mengenai pendaftaran, kegiatan belajar, serta operasional sekolah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split Content: Left Search & Category Index, Right Hairline Accordions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (4 cols): Search & Quick Category Links */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-2">
              <label htmlFor="faq-search" className="text-xs font-sans font-bold text-forest uppercase tracking-wider block">
                Cari Topik Pertanyaan
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                <input
                  id="faq-search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ketik kata kunci (biaya, usia, ekskul...)"
                  className="w-full pl-10 pr-4 py-2.5 border border-sand bg-ivory-light text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-xs font-sans font-semibold text-gold hover:text-forest cursor-pointer"
                >
                  Hapus pencarian
                </button>
              )}
            </div>

            <div className="hidden lg:block border-t border-sand pt-5 space-y-2.5">
              <span className="text-[11px] font-sans font-bold text-gold uppercase tracking-wider">
                Kategori
              </span>
              <ul className="space-y-2 text-xs font-sans">
                {FAQ_DATA.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="text-charcoal-muted hover:text-forest font-medium transition-colors block py-1"
                    >
                      {cat.categoryTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sand-light/70 border border-sand p-5 space-y-3">
              <h2 className="font-heading font-bold text-base text-forest">
                Masih Ada Pertanyaan Lain?
              </h2>
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                Jika informasi yang dicari belum tercantum di sini, silakan kirim pesan atau hubungi sekretariat kami langsung.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold text-forest hover:text-gold transition-colors"
              >
                <span>Hubungi Sekolah</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>
          </aside>

          {/* Right Column (8 cols): Clean Hairline Accordions */}
          <div className="lg:col-span-8 space-y-10">
            {filteredCategories.length === 0 ? (
              <div className="border border-sand bg-ivory-light p-8 text-center space-y-2">
                <h3 className="font-heading font-bold text-lg text-forest">
                  Pertanyaan tidak ditemukan
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted">
                  Kata kunci &ldquo;{searchTerm}&rdquo; tidak cocok dengan daftar FAQ kami. Silakan coba kata lain atau hubungi kami melalui halaman Kontak.
                </p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id} id={category.id} className="space-y-4 scroll-mt-24">
                  <div className="border-b-2 border-forest pb-2.5">
                    <h2 className="font-heading font-bold text-lg sm:text-2xl text-forest">
                      {category.categoryTitle}
                    </h2>
                    <p className="font-sans text-xs text-charcoal-muted mt-0.5">
                      {category.categorySubtitle}
                    </p>
                  </div>

                  <div className="divide-y divide-sand border-b border-sand">
                    {category.items.map((item) => {
                      const isOpen = openItems.includes(item.id);
                      return (
                        <div key={item.id} className="py-1">
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="w-full py-3.5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                            aria-expanded={isOpen}
                          >
                            <span className="font-heading font-bold text-sm sm:text-base text-forest group-hover:text-forest-light leading-snug">
                              {item.question}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-gold shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="pb-4 pr-6 font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
