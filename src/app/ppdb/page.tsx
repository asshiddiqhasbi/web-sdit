"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  FileText,
  CheckCircle2,
  UserCheck,
  Award,
  CreditCard,
  Calendar,
  DollarSign,
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  School,
  Check,
  AlertCircle,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function PPDBPage() {
  // Form State
  const [formData, setFormData] = useState({
    namaSiswa: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "Laki-laki",
    namaOrangTua: "",
    noWhatsapp: "",
    email: "",
    alamat: "",
    asalSekolah: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Form Validation Handler
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.namaSiswa.trim()) {
      newErrors.namaSiswa = "Nama calon siswa wajib diisi";
    }
    if (!formData.tempatLahir.trim()) {
      newErrors.tempatLahir = "Tempat lahir wajib diisi";
    }
    if (!formData.tanggalLahir) {
      newErrors.tanggalLahir = "Tanggal lahir wajib dipilih";
    }
    if (!formData.namaOrangTua.trim()) {
      newErrors.namaOrangTua = "Nama orang tua/wali wajib diisi";
    }
    if (!formData.noWhatsapp.trim()) {
      newErrors.noWhatsapp = "Nomor WhatsApp wajib diisi";
    } else if (!/^[0-9+--\s]{9,15}$/.test(formData.noWhatsapp)) {
      newErrors.noWhatsapp = "Format nomor WhatsApp tidak valid (minimal 9-15 digit)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.alamat.trim()) {
      newErrors.alamat = "Alamat lengkap wajib diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      namaSiswa: "",
      tempatLahir: "",
      tanggalLahir: "",
      jenisKelamin: "Laki-laki",
      namaOrangTua: "",
      noWhatsapp: "",
      email: "",
      alamat: "",
      asalSekolah: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HEADER HALAMAN & BREADCRUMB */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-12 px-4 sm:px-6 lg:px-8 shape-curve-bottom relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-islamic-pattern opacity-25"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 text-center">
          <FadeIn direction="up">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-emerald-200 mb-2">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-amber-300">PPDB Online</span>
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tahun Ajaran 2026 / 2027</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
                Penerimaan Peserta Didik Baru (PPDB)
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto pt-1">
                Selamat datang calon orang tua murid! Mari bergabung dengan keluarga besar SDIT [Nama Sekolah] untuk mendidik putra-putri tercinta menjadi generasi Rabbani yang unggul dan cerdas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. INFO PENERIMAAN */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-3.5">
              Informasi Pendaftaran
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Ketentuan & Biaya PPDB
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Jalur Pendaftaran
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Jalur Reguler:</strong> Terbuka untuk umum calon siswa lulusan TK/PAUD.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Jalur Prestasi:</strong> Bebas tes untuk hafalan Al-Qur'an (Min. 1 Juz) / Prestasi Sains.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Syarat Berkas
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Usia minimal 6 tahun per Juli 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>FC Akta Kelahiran (2 Lembar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>FC Kartu Keluarga (2 Lembar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pasfoto 3x4 berwarna (4 Lembar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>FC Ijazah TK/PAUD (Jika ada)</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Jadwal Gelombang
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="font-bold text-emerald-900">Gelombang 1 (Early Bird)</p>
                  <p className="text-slate-600">1 Nov 2025 - 31 Jan 2026</p>
                  <span className="text-[10px] text-emerald-700 font-semibold">Diskon Biaya Masuk 15%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900">Gelombang 2 (Reguler)</p>
                  <p className="text-slate-600">1 Feb 2026 - 30 Apr 2026</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Estimasi Biaya
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Formulir & Tes</span>
                  <span className="font-bold text-slate-900">Rp 350.000</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Uang Pangkal</span>
                  <span className="font-bold text-slate-900">Rp 8.500.000</span>
                </li>
                <li className="flex justify-between">
                  <span>SPP Bulanan</span>
                  <span className="font-bold text-emerald-700">Rp 650.000/bln</span>
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. ALUR PENDAFTARAN */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-50 p-8 sm:p-12 rounded-3xl border border-emerald-100 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-widest text-emerald-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 mb-3.5">
                Langkah Pendaftaran
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-2">
                Alur Pendaftaran PPDB
              </h2>
              <p className="text-slate-600 text-sm">
                5 Tahap mudah mendaftarkan calon siswa secara transparan dan cepat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 relative text-center group hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-600 text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                    1
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">Isi Form Online</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Melengkapi biodata calon siswa dan orang tua di form formulir online di bawah ini.
                  </p>
                </div>
              </FadeIn>

              {/* Step 2 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 relative text-center group hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-600 text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                    2
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">Verifikasi Berkas</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Panitia melakukan konfirmasi data dan pemeriksaan dokumen persyaratan.
                  </p>
                </div>
              </FadeIn>

              {/* Step 3 */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 relative text-center group hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-500 text-emerald-950 font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                    3
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">Observasi Siswa</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Pemetaan bakat, kesiapan belajar anak, dan wawancara singkat dengan orang tua.
                  </p>
                </div>
              </FadeIn>

              {/* Step 4 */}
              <FadeIn direction="up" delay={0.4}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 relative text-center group hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-600 text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                    4
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">Pengumuman</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Pengumuman hasil observasi kelulusan disampaikan via WhatsApp resmi.
                  </p>
                </div>
              </FadeIn>

              {/* Step 5 */}
              <FadeIn direction="up" delay={0.5}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 relative text-center group hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-teal-600 text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-sm">
                    5
                  </div>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">Daftar Ulang</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Konfirmasi pendaftaran ulang & pengambilan seragam sekolah.
                  </p>
                </div>
              </FadeIn>

            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. FORM PENDAFTARAN ONLINE */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg p-6 sm:p-10 space-y-8">
            
            <div className="text-center space-y-2 border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-1">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                <span>Formulir Resmi</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Formulir Pendaftaran Online
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Silakan isi formulir di bawah ini dengan data yang sebenar-benarnya.
              </p>
            </div>

            {/* Success State Notification Card */}
            {isSubmitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-500/80 rounded-2xl p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl text-emerald-950">
                    Pendaftaran Berhasil Dikirim!
                  </h3>
                  <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
                    Jazakumullah Khairan Katsiran! Data pendaftaran ananda <strong>{formData.namaSiswa}</strong> telah tersimpan dalam sistem panitia PPDB SDIT [Nama Sekolah].
                  </p>
                  <p className="text-xs text-emerald-800 font-semibold pt-2">
                    Tim Panitia kami akan menghubungi Bapak/Ibu <strong>{formData.namaOrangTua}</strong> melalui WhatsApp (<strong>{formData.noWhatsapp}</strong>) dalam kurun waktu 1x24 jam.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full font-heading font-bold text-xs text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
                  >
                    Isi Formulir Baru Lagi
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field 1: Nama Siswa */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Nama Lengkap Calon Siswa <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="namaSiswa"
                      value={formData.namaSiswa}
                      onChange={handleChange}
                      placeholder="Contoh: Muhammad Al-Fatih"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.namaSiswa
                          ? "border-red-400 bg-red-50/50 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      }`}
                    />
                  </div>
                  {errors.namaSiswa && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.namaSiswa}
                    </p>
                  )}
                </div>

                {/* Grid 2 cols: Tempat, Tanggal Lahir */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Tempat Lahir */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tempatLahir"
                      value={formData.tempatLahir}
                      onChange={handleChange}
                      placeholder="Contoh: Jakarta"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.tempatLahir
                          ? "border-red-400 bg-red-50/50 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      }`}
                    />
                    {errors.tempatLahir && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.tempatLahir}
                      </p>
                    )}
                  </div>

                  {/* Tanggal Lahir */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Tanggal Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="tanggalLahir"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.tanggalLahir
                          ? "border-red-400 bg-red-50/50 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      }`}
                    />
                    {errors.tanggalLahir && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.tanggalLahir}
                      </p>
                    )}
                  </div>

                </div>

                {/* Jenis Kelamin (Radio Button) */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Laki-laki"
                        checked={formData.jenisKelamin === "Laki-laki"}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 font-medium">Laki-laki</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Perempuan"
                        checked={formData.jenisKelamin === "Perempuan"}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 font-medium">Perempuan</span>
                    </label>
                  </div>
                </div>

                {/* Nama Orang Tua */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Nama Orang Tua / Wali <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="namaOrangTua"
                      value={formData.namaOrangTua}
                      onChange={handleChange}
                      placeholder="Contoh: H. Ahmad Subardjo"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.namaOrangTua
                          ? "border-red-400 bg-red-50/50 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      }`}
                    />
                  </div>
                  {errors.namaOrangTua && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.namaOrangTua}
                    </p>
                  )}
                </div>

                {/* Grid 2 cols: Nomor WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* No WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="noWhatsapp"
                        value={formData.noWhatsapp}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.noWhatsapp
                            ? "border-red-400 bg-red-50/50 focus:border-red-500"
                            : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        }`}
                      />
                    </div>
                    {errors.noWhatsapp && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.noWhatsapp}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Email Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Contoh: orangtua@gmail.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50/50 focus:border-red-500"
                            : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Alamat Lengkap */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Alamat Lengkap Tempat Tinggal <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      name="alamat"
                      rows={3}
                      value={formData.alamat}
                      onChange={handleChange}
                      placeholder="Contoh: Jl. Merdeka No. 45, RT 02/RW 05, Kelurahan Mulia"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.alamat
                          ? "border-red-400 bg-red-50/50 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      }`}
                    ></textarea>
                  </div>
                  {errors.alamat && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.alamat}
                    </p>
                  )}
                </div>

                {/* Asal TK/PAUD (Opsional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Asal TK / PAUD <span className="text-slate-400 font-normal">(Opsional)</span>
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="asalSekolah"
                      value={formData.asalSekolah}
                      onChange={handleChange}
                      placeholder="Contoh: TK Islam An-Nur"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-heading font-extrabold text-base text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Pendaftaran...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Kirim Formulir Pendaftaran</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </FadeIn>
      </section>

    </div>
  );
}
