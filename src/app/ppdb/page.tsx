"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Send, Check, AlertCircle, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { SCHOOL_CONFIG, getWhatsAppUrl } from "@/data/school";

export default function PPDBPage() {
  const isPpdbOpen = SCHOOL_CONFIG.ppdb.isOpen;

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

  const [waitlistData, setWaitlistData] = useState({
    namaOrangTua: "",
    noWhatsapp: "",
    tahunMasuk: "Tahun Ajaran 2027/2028",
  });
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.namaSiswa.trim()) newErrors.namaSiswa = "Nama calon siswa wajib diisi";
    if (!formData.tempatLahir.trim()) newErrors.tempatLahir = "Tempat lahir wajib diisi";
    if (!formData.tanggalLahir) newErrors.tanggalLahir = "Tanggal lahir wajib dipilih";
    if (!formData.namaOrangTua.trim()) newErrors.namaOrangTua = "Nama orang tua/wali wajib diisi";
    if (!formData.noWhatsapp.trim()) {
      newErrors.noWhatsapp = "Nomor WhatsApp wajib diisi";
    } else if (!/^[0-9+\-\s]{9,15}$/.test(formData.noWhatsapp)) {
      newErrors.noWhatsapp = "Format nomor WhatsApp tidak valid";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.alamat.trim()) newErrors.alamat = "Alamat lengkap wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
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

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistData.namaOrangTua.trim() || !waitlistData.noWhatsapp.trim()) return;
    setWaitlistSubmitted(true);
  };

  const waPpdbUrl = getWhatsAppUrl(
    `Assalamu'alaikum Panitia PPDB ${SCHOOL_CONFIG.name}, saya ingin menanyakan informasi pendaftaran siswa baru.`
  );

  const steps = [
    { num: "01", title: "Pengisian Formulir", desc: "Melengkapi data calon siswa secara online maupun langsung di sekretariat." },
    { num: "02", title: "Verifikasi Berkas", desc: "Pemeriksaan akta kelahiran, kartu keluarga, dan kelengkapan dokumen." },
    { num: "03", title: "Observasi Anak", desc: "Pemetaan kesiapan belajar anak yang santai serta silaturahmi orang tua." },
    { num: "04", title: "Pengumuman Hasil", desc: "Penyampaian hasil seleksi secara resmi oleh panitia kepada orang tua." },
    { num: "05", title: "Daftar Ulang", desc: "Penyelesaian administrasi awal serta pengukuran seragam sekolah." },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pb-12 sm:pb-16">
      
      {/* Editorial Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-b border-sand/80 pb-6 sm:pb-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
              <Link href="/" className="hover:text-forest transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
              <span className="text-forest font-semibold">PPDB</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Informasi Admisi Sekolah
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Penerimaan Peserta Didik Baru (PPDB)
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Panduan resmi mengenai jalur penerimaan, persyaratan dokumen, tahapan seleksi, serta rincian estimasi biaya pendidikan di {SCHOOL_CONFIG.name}.
                </p>
              </div>
            </div>
          </div>

          {/* Seasonal Status Notice + WhatsApp-first CTA */}
          {!isPpdbOpen && (
            <div className="bg-sand-light/80 border-l-4 border-gold p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-sans font-bold text-forest uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Status Saat Ini: Di Luar Masa Pendaftaran Aktif</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Penerimaan peserta didik baru {SCHOOL_CONFIG.name} dibuka secara berkala setiap {SCHOOL_CONFIG.ppdb.generalPeriod}. Informasi ketentuan dan estimasi biaya di bawah ini tetap dapat digunakan orang tua sebagai panduan persiapan awal.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={waPpdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 font-sans font-semibold text-xs text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Tanya Panitia via WhatsApp</span>
                </a>
                <a
                  href="#informasi-ppdb"
                  className="inline-flex items-center gap-2 px-4 py-2.5 font-sans font-semibold text-xs text-forest border border-forest/30 bg-ivory hover:bg-sand/40 transition-colors"
                >
                  <span>Daftar Tunggu</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Panduan Jalur, Syarat, Jadwal Umum & Estimasi Biaya */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-sand/80 pb-3">
          <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
            Panduan Referensi
          </span>
          <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
            Ketentuan & Estimasi Biaya Pendidikan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-sand divide-y md:divide-y-0 md:divide-x divide-sand bg-ivory-light">
          
          <div className="p-6 space-y-3">
            <span className="font-heading text-sm font-bold text-gold">01</span>
            <h3 className="font-heading font-bold text-lg text-forest">Jalur Penerimaan</h3>
            <ul className="space-y-2.5 text-xs font-sans text-charcoal-muted leading-relaxed">
              <li>
                <strong className="text-forest block">Jalur Reguler</strong>
                Terbuka untuk calon siswa lulusan TK/PAUD maupun dari pengasuhan keluarga.
              </li>
              <li>
                <strong className="text-forest block">Jalur Prestasi Tahfidz</strong>
                Apresiasi khusus bagi calon siswa yang memiliki hafalan Al-Qur'an minimal 1 Juz.
              </li>
            </ul>
          </div>

          <div className="p-6 space-y-3">
            <span className="font-heading text-sm font-bold text-gold">02</span>
            <h3 className="font-heading font-bold text-lg text-forest">Syarat Dokumen</h3>
            <ul className="space-y-2 text-xs font-sans text-charcoal-muted">
              <li>Usia minimal 6 tahun pada bulan Juli</li>
              <li>Fotokopi Akta Kelahiran (2 lembar)</li>
              <li>Fotokopi Kartu Keluarga (2 lembar)</li>
              <li>Fotokopi KTP Orang Tua (1 lembar)</li>
              <li>Pasfoto berwarna 3x4 (4 lembar)</li>
              <li>Surat keterangan TK/PAUD (jika ada)</li>
            </ul>
          </div>

          <div className="p-6 space-y-3">
            <span className="font-heading text-sm font-bold text-gold">03</span>
            <h3 className="font-heading font-bold text-lg text-forest">Periode Umum</h3>
            <div className="space-y-3 text-xs font-sans text-charcoal-muted">
              <div>
                <p className="font-semibold text-forest">Gelombang 1 (Awal)</p>
                <p>November s.d. Januari setiap tahun ajaran</p>
              </div>
              <div className="pt-2 border-t border-sand/60">
                <p className="font-semibold text-forest">Gelombang 2 (Reguler)</p>
                <p>Februari s.d. April (selama kuota kelas tersedia)</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <span className="font-heading text-sm font-bold text-gold">04</span>
            <h3 className="font-heading font-bold text-lg text-forest">Estimasi Biaya</h3>
            <ul className="space-y-2.5 text-xs font-sans text-charcoal-muted">
              <li className="flex justify-between border-b border-sand/60 pb-1.5">
                <span>Formulir & Observasi</span>
                <span className="font-semibold text-forest">Rp 350.000</span>
              </li>
              <li className="flex justify-between border-b border-sand/60 pb-1.5">
                <span>Uang Pangkal</span>
                <span className="font-semibold text-forest">Rp 8.500.000</span>
              </li>
              <li className="flex justify-between">
                <span>SPP Bulanan</span>
                <span className="font-semibold text-forest">Rp 650.000</span>
              </li>
            </ul>
            <p className="text-[11px] font-sans text-charcoal-muted/80 pt-1">
              Rincian resmi mengikuti ketetapan yayasan pada tahun ajaran terkait.
            </p>
          </div>

        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-sand/80 pb-3">
          <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
            Tahapan
          </span>
          <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
            Alur Pendaftaran Siswa Baru
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="border-t-2 border-forest pt-4 space-y-2">
              <span className="font-heading text-base font-bold text-gold">{step.num}</span>
              <h3 className="font-heading font-bold text-base text-forest">{step.title}</h3>
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section: Waitlist saat tutup vs Full Registration saat buka */}
      <section id="informasi-ppdb" className="bg-sand-light/60 border-y border-sand py-10 sm:py-14 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isPpdbOpen ? (
            <div className="bg-ivory border border-sand p-6 sm:p-10 space-y-6">
              <div className="border-b border-sand pb-4 space-y-1 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                    Formulir Resmi {SCHOOL_CONFIG.ppdb.academicYear}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
                    Formulir Pendaftaran Online
                  </h2>
                </div>
                <a
                  href={waPpdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-forest hover:text-gold"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  <span>Butuh bantuan? Chat Panitia PPDB</span>
                </a>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-forest text-gold flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-forest">
                    Pendaftaran Berhasil Dikirim
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-charcoal-muted max-w-lg mx-auto leading-relaxed">
                    Data pendaftaran ananda <strong>{formData.namaSiswa}</strong> telah tercatat. Panitia akan menghubungi Bapak/Ibu <strong>{formData.namaOrangTua}</strong> melalui WhatsApp ({formData.noWhatsapp}).
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 hover:bg-sand/40 cursor-pointer"
                  >
                    Isi Formulir Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                      Nama Lengkap Calon Siswa <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="namaSiswa"
                      value={formData.namaSiswa}
                      onChange={handleChange}
                      placeholder="Contoh: Muhammad Al-Fatih"
                      className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                        errors.namaSiswa ? "border-red-500" : "border-sand focus:border-forest"
                      }`}
                    />
                    {errors.namaSiswa && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.namaSiswa}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Tempat Lahir <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="tempatLahir"
                        value={formData.tempatLahir}
                        onChange={handleChange}
                        placeholder="Contoh: Bandung"
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                          errors.tempatLahir ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Tanggal Lahir <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggalLahir"
                        value={formData.tanggalLahir}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                          errors.tanggalLahir ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                      Nama Orang Tua / Wali <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="namaOrangTua"
                      value={formData.namaOrangTua}
                      onChange={handleChange}
                      placeholder="Nama orang tua atau wali"
                      className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                        errors.namaOrangTua ? "border-red-500" : "border-sand focus:border-forest"
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Nomor WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="noWhatsapp"
                        value={formData.noWhatsapp}
                        onChange={handleChange}
                        placeholder="081234567890"
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                          errors.noWhatsapp ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="orangtua@email.com"
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                          errors.email ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                      Alamat Lengkap <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="alamat"
                      rows={3}
                      value={formData.alamat}
                      onChange={handleChange}
                      placeholder="Alamat tempat tinggal saat ini"
                      className={`w-full p-3.5 border bg-ivory-light text-sm font-sans focus:outline-none ${
                        errors.alamat ? "border-red-500" : "border-sand focus:border-forest"
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>{isSubmitting ? "Mengirim..." : "Kirim Formulir Pendaftaran"}</span>
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="bg-ivory border border-sand p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Pemberitahuan Pembukaan
                </span>
                <h2 className="font-heading text-2xl font-bold text-forest leading-snug">
                  Daftar Tunggu Informasi PPDB
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Karena pendaftaran sedang ditutup, orang tua dapat langsung menghubungi Panitia via WhatsApp atau meninggalkan nomor kontak agar kami kabari saat gelombang baru dibuka.
                </p>
                <div className="pt-2">
                  <a
                    href={waPpdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 font-sans font-semibold text-xs text-forest border border-forest/30 hover:bg-sand/40 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold" />
                    <span>Konsultasi via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                {waitlistSubmitted ? (
                  <div className="border border-sand bg-sand-light/40 p-6 text-center space-y-3">
                    <div className="w-10 h-10 mx-auto bg-forest text-gold flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-forest">
                      Kontak Berhasil Dicatat
                    </h3>
                    <p className="font-sans text-xs text-charcoal-muted">
                      Terima kasih, <strong>{waitlistData.namaOrangTua}</strong>. Kami akan mengabari via WhatsApp ({waitlistData.noWhatsapp}) saat PPDB dibuka.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setWaitlistData({ namaOrangTua: "", noWhatsapp: "", tahunMasuk: "Tahun Ajaran 2027/2028" });
                        setWaitlistSubmitted(false);
                      }}
                      className="text-xs font-sans font-semibold text-forest underline cursor-pointer"
                    >
                      Catat kontak lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Nama Orang Tua / Wali <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={waitlistData.namaOrangTua}
                        onChange={(e) => setWaitlistData((prev) => ({ ...prev, namaOrangTua: e.target.value }))}
                        placeholder="Contoh: Ibu Siti Aisyah"
                        className="w-full px-3.5 py-2.5 border border-sand bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none focus:border-forest"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                          Nomor WhatsApp <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={waitlistData.noWhatsapp}
                          onChange={(e) => setWaitlistData((prev) => ({ ...prev, noWhatsapp: e.target.value }))}
                          placeholder="081234567890"
                          className="w-full px-3.5 py-2.5 border border-sand bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none focus:border-forest"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                          Rencana Tahun Masuk
                        </label>
                        <select
                          value={waitlistData.tahunMasuk}
                          onChange={(e) => setWaitlistData((prev) => ({ ...prev, tahunMasuk: e.target.value }))}
                          className="w-full px-3.5 py-2.5 border border-sand bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none focus:border-forest"
                        >
                          <option>Tahun Ajaran 2027/2028</option>
                          <option>Tahun Ajaran 2028/2029</option>
                          <option>Pindahan / Mutasi Siswa</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors cursor-pointer"
                    >
                      <span>Simpan untuk Pemberitahuan PPDB</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
