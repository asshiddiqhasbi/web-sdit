"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  MessageCircle,
  PhoneCall,
  Search,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

// Structure Data FAQ
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  categoryTitle: string;
  categorySubtitle: string;
  icon: React.ElementType;
  badgeColor: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    categoryTitle: "Seputar PPDB (Pendaftaran Siswa Baru)",
    categorySubtitle: "Informasi alur, syarat dokumen, usia, biaya, dan beasiswa pendaftaran.",
    icon: HelpCircle,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    items: [
      {
        id: "ppdb-1",
        question: "Berapa batas usia minimal calon siswa untuk mendaftar PPDB?",
        answer:
          "Calon siswa kelas 1 SDIT [Nama Sekolah] berusia minimal 6 tahun per tanggal 1 Juli 2026. Untuk calon siswa yang berusia 5 tahun 8 bulan pada bulan Juli dapat dipertimbangkan melalui rekomendasi tertulis dari psikolog anak atau tim observasi sekolah.",
      },
      {
        id: "ppdb-2",
        question: "Dokumen apa saja yang wajib disiapkan saat proses pendaftaran?",
        answer:
          "Dokumen yang perlu disiapkan antara lain: Fotokopi Akta Kelahiran (2 lembar), Fotokopi Kartu Keluarga (2 lembar), Fotokopi KTP kedua orang tua (1 lembar), Pasfoto berwarna ukuran 3x4 (4 lembar), serta Fotokopi Ijazah/Sertifikat TK/PAUD (jika ada).",
      },
      {
        id: "ppdb-3",
        question: "Kapan periode pendaftaran PPDB TA 2026/2027 dibuka?",
        answer:
          "Pendaftaran dibuka dalam 2 Gelombang: Gelombang 1 (Early Bird - Diskon Uang Pangkal 15%) dibuka mulai 1 November 2025 hingga 31 Januari 2026. Gelombang 2 (Reguler) dibuka mulai 1 Februari 2026 hingga 30 April 2026 atau hingga kuota terpenuhi.",
      },
      {
        id: "ppdb-4",
        question: "Apakah ada tes ujian seleksi masuk untuk calon siswa SDIT?",
        answer:
          "SDIT [Nama Sekolah] tidak menerapkan ujian akademis yang menegangkan. Kami menggunakan tes observasi kesiapan belajar yang menyenangkan dan ramah anak (pemetaan motorik, minat, bahasa, dan adab), disertai sesi wawancara silaturahmi dengan orang tua/wali siswa.",
      },
      {
        id: "ppdb-5",
        question: "Berapa rincian estimasi biaya pendaftaran dan SPP bulanan?",
        answer:
          "Biaya Formulir & Observasi sebesar Rp 350.000, Biaya Uang Pangkal/Pengembangan sebesar Rp 8.500.000 (dapat diangsur selama 3x), dan SPP Bulanan sebesar Rp 650.000/bulan (sudah mencakup kegiatan ekskul wajib & program tahfidz). Rincian lengkap diberikan saat pengambilan formulir.",
      },
      {
        id: "ppdb-6",
        question: "Apakah tersedia jalur beasiswa atau keringanan biaya pendaftaran?",
        answer:
          "Ya! Kami menyediakan Potongan Harga Early Bird 15% pada Gelombang 1, Beasiswa Khusus Pendaftar Hafiz Al-Qur'an (minimal 1 Juz), serta diskon persaudaraan sebesar 10% untuk pendaftaran saudara kandung yang masuk secara bersamaan.",
      },
    ],
  },
  {
    categoryTitle: "Seputar Kurikulum & Akademik",
    categorySubtitle: "Sistem pembelajaran, jam belajar, target tahfidz, dan ekstrakurikuler.",
    icon: BookOpen,
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    items: [
      {
        id: "akademik-1",
        question: "Kurikulum apa yang diterapkan dalam proses belajar mengajar?",
        answer:
          "Kami mengintegrasikan Kurikulum Merdeka Kemendikbudristek secara nasional dengan Kurikulum Khas Sekolah Dasar Islam Terpadu (SIT). Pembelajaran memadukan kecerdasan sains-teknologi (Iptek) dengan pembinaan akidah, adab, dan hafalan Al-Qur'an (Imtaq).",
      },
      {
        id: "akademik-2",
        question: "Bagaimana jadwal jam belajar siswa sehari-hari?",
        answer:
          "Pembelajaran berlangsung dengan sistem Full Day School dari hari Senin hingga Jumat pukul 07.00 - 14.30 WIB (diawali dengan shalat Dhuha, Murojaah, dan pembelajaran tematik, serta diakhiri shalat Dzuhur & Ashar berjamaah). Hari Sabtu dikhususkan untuk ekskul pilihan.",
      },
      {
        id: "akademik-3",
        question: "Berapa target hafalan Al-Qur'an (Tahfidz) untuk lulusan SDIT?",
        answer:
          "Target minimal hafalan lulusan SDIT [Nama Sekolah] adalah 2 hingga 3 Juz Al-Qur'an (dimulai dari Juz 30, Juz 29, dan surah-surah pilihan) dengan bimbingan metode Utsmani yang teruji, cepat, dan fasih.",
      },
      {
        id: "akademik-4",
        question: "Berapa rasio jumlah siswa dan guru dalam satu kelas?",
        answer:
          "Setiap kelas dibatasi maksimal 24 hingga 28 siswa dan didampingi oleh 2 orang guru (Guru Kelas Utama dan Guru Pendamping/Co-Teacher) agar perhatian terhadap perkembangan belajar dan karakter setiap anak berlangsung secara personal.",
      },
      {
        id: "akademik-5",
        question: "Apa saja kegiatan ekstrakurikuler yang dapat diikuti siswa?",
        answer:
          "Kegiatan ekstrakurikuler mencakup: Tahfidz Club, Panahan Islami, Pramuka SIT, Robotik Cilik & STEM, Seni Pencak Silat, Futsal, Bulu Tangkis, Sanggar Seni Kaligrafi, dan Dokter Kecil (UKS).",
      },
    ],
  },
  {
    categoryTitle: "Seputar Fasilitas & Operasional Sekolah",
    categorySubtitle: "Layanan antar-jemput, seragam, kantin sehat, dan keamanan sekolah.",
    icon: ShieldCheck,
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    items: [
      {
        id: "fasilitas-1",
        question: "Apakah sekolah menyediakan layanan transportasi antar-jemput siswa?",
        answer:
          "Ya, sekolah bermitra dengan armada bus antar-jemput resmi ber-AC yang aman, nyaman, dan dilengkapi pendamping rute untuk area Kota Kita dan kecamatan sekitarnya.",
      },
      {
        id: "fasilitas-2",
        question: "Bagaimana ketentuan dan pilihan seragam sekolah siswa?",
        answer:
          "Siswa mendapatkan 4 setel seragam resmi: Seragam Merah-Putih Khas SIT, Seragam Batik Sekolah, Seragam Olahraga Ceria, dan Seragam Pramuka SIT (dilengkapi jilbab syar'i untuk siswi perempuan).",
      },
      {
        id: "fasilitas-3",
        question: "Apakah tersedia fasilitas kantin dan paket katering makan siang?",
        answer:
          "Ya, sekolah menyediakan Kantin Sehat & Thayyib yang menjual jajanan sehat bebas pengawet, serta opsi Paket Katering Makan Siang Bergizi yang dikelola di bawah pengawasan standar gizi anak.",
      },
      {
        id: "fasilitas-4",
        question: "Bagaimana sistem keamanan dan penanganan kesehatan anak di sekolah?",
        answer:
          "Sekolah menerapkan One-Gate System dengan pengawasan CCTV 24 jam dan petugas satpam siaga. Untuk kesehatan, tersedia Ruang UKS bersih yang bekerjasama dengan klinik/puskesmas terdekat untuk pertolongan pertama.",
      },
      {
        id: "fasilitas-5",
        question: "Bagaimana jam operasional kantor sekretariat dan layanan informasi?",
        answer:
          "Sekretariat sekolah dan Panitia PPDB melayani setiap hari Senin - Jumat pukul 07.00 - 15.30 WIB dan hari Sabtu pukul 08.00 - 12.00 WIB. Pertanyaan online via WhatsApp direspon selama jam kerja.",
      },
    ],
  },
];

export default function FAQPage() {
  // Store open items IDs (Multiple expand for great user flexibility)
  const [openItems, setOpenItems] = useState<string[]>([
    "ppdb-1", // Open first question by default
    "akademik-1",
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter FAQ items by search keyword
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
              <span className="text-amber-300">Pertanyaan Umum (FAQ)</span>
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>Pusat Bantuan & Informasi</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Pertanyaan Umum (FAQ)
              </h1>
              <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto pt-1">
                Temukan jawaban cepat atas pertanyaan seputar pendaftaran PPDB, kurikulum akademik, hingga fasilitas sekolah sebelum menghubungi kami.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SEARCH BAR (Quick FAQ Lookup) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari pertanyaan... (contoh: biaya, usia, kurikulum, ekskul)"
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200/80 bg-white text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-3 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Reset Search
              </button>
            )}
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. DAFTAR FAQ (ACCORDION PER KATEGORI) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-slate-200/80 shadow-xs space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-slate-800">
              Pertanyaan tidak ditemukan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Maaf, kata kunci "<span className="font-semibold text-emerald-700">{searchTerm}</span>" tidak cocok dengan daftar FAQ kami. Silakan gunakan kata kunci lain atau hubungi tim Humas kami.
            </p>
          </div>
        ) : (
          filteredCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <FadeIn key={catIdx} direction="up" delay={catIdx * 0.1}>
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                        {category.categoryTitle}
                      </h2>
                      <p className="text-xs text-slate-500">{category.categorySubtitle}</p>
                    </div>
                  </div>

                  {/* Accordion Items List */}
                  <div className="space-y-3">
                    {category.items.map((item) => {
                      const isOpen = openItems.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                            isOpen
                              ? "border-emerald-300 shadow-md ring-1 ring-emerald-200/60"
                              : "border-slate-200/80 hover:border-slate-300 shadow-xs"
                          }`}
                        >
                          {/* Accordion Header / Question Button */}
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                              {item.question}
                            </span>
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                isOpen
                                  ? "bg-emerald-100 text-emerald-700 rotate-180"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {/* Accordion Body / Answer Panel */}
                          {isOpen && (
                            <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })
        )}
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. CTA PENUTUP */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-12 text-center shadow-xl border border-emerald-700/50">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-islamic-pattern opacity-20"></div>

            <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Belum Menemukan Jawaban?</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Masih Ada Pertanyaan Lain?
              </h2>

              <p className="text-slate-200 text-xs sm:text-base leading-relaxed">
                Tim Layanan Humas dan Panitia PPDB SDIT [Nama Sekolah] siap membantu memberikan informasi lebih detail seputar sekolah kami.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-extrabold text-sm sm:text-base text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Kami Sekarang</span>
                </Link>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-300" />
                  <span>Chat WhatsApp Humas</span>
                </a>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

    </div>
  );
}
