"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function KontakPage() {
  // Form State
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
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

  // Validation Handler
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.subjek.trim()) {
      newErrors.subjek = "Subjek pesan wajib diisi";
    }
    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan pertanyaan wajib diisi";
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
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      nama: "",
      email: "",
      subjek: "",
      pesan: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

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
              <span className="text-amber-300">Hubungi Kami</span>
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <span>Layanan Informasi & Silaturahmi</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Hubungi Kami
              </h1>
              <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto pt-1">
                Kami siap melayani pertanyaan, konsultasi pendaftaran PPDB, serta menjalin silaturahmi dengan Bapak/Ibu sekalian.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. INFO KONTAK & PETA LOKASI */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Info Kontak Cards (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5 sm:space-y-6">
                <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 border-b border-slate-100 pb-3 sm:pb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  Informasi Kontak Resmi
                </h2>

                <div className="space-y-6 text-sm">
                  
                  {/* Alamat */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">Alamat Sekolah</h3>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Jl. Pendidikan Islam No. 123, Kelurahan Mulia, Kecamatan Berkah, Kota Kita 12345
                      </p>
                    </div>
                  </div>

                  {/* Telepon & WA */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-amber-800">Telepon & WhatsApp</h3>
                      <p className="text-slate-700 font-semibold">(021) 1234-5678</p>
                      <p className="text-slate-600 text-xs">0812-3456-7890 (Panitia PPDB)</p>
                      
                      {/* WhatsApp Direct Action Button */}
                      <div className="pt-2">
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chat via WhatsApp</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-teal-800">Email Resmi</h3>
                      <p className="text-slate-700 font-medium mt-1">info@sdit-sekolah.sch.id</p>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-700">Jam Operasional Kantor</h3>
                      <p className="text-slate-600 mt-1">Senin - Jumat: 07.00 - 15.30 WIB</p>
                      <p className="text-slate-600">Sabtu: 08.00 - 12.00 WIB</p>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>

          {/* Peta Lokasi Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    Lokasi Google Maps
                  </h2>
                  <span className="text-xs text-slate-400">Petunjuk Arah</span>
                </div>

                {/* Google Maps Responsive Iframe Embed */}
                <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                  <iframe
                    title="Peta Lokasi SDIT"
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28312015822!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e80f68695d%3A0x294c65369c08d3e9!2sJakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. LINK MEDIA SOSIAL & FORM KONTAK SINGKAT */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Media Sosial Cards (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/40 p-8 rounded-3xl border border-emerald-100 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-semibold border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Media Sosial Resmi</span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900">
                    Ikuti Komunitas Kami
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dapatkan pembaharuan dokumentasi kegiatan, informasi pengumuman, dan konten edukasi Islami harian melalui kanal resmi kami.
                  </p>
                </div>

                {/* Social Cards Grid */}
                <div className="space-y-3">
                  
                  {/* Instagram */}
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Instagram</h3>
                        <p className="text-xs text-slate-500">@sdit.sekolah.official</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Facebook Page</h3>
                        <p className="text-xs text-slate-500">SDIT [Nama Sekolah]</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">YouTube Channel</h3>
                        <p className="text-xs text-slate-500">SDIT Official TV</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </a>

                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Kontak Singkat (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4 space-y-1">
                  <h2 className="font-heading font-bold text-xl text-slate-900">
                    Kirim Pesan Pertanyaan
                  </h2>
                  <p className="text-xs text-slate-500">
                    Ada pertanyaan khusus? Tuliskan pesan Anda di bawah ini, tim Humas kami akan membalas via email/WhatsApp.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border-2 border-emerald-500/80 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-emerald-950">
                      Pesan Anda Berhasil Terkirim!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Terima kasih <strong>{formData.nama}</strong>. Pesan pertanyaan Anda telah diterima oleh tim Humas SDIT [Nama Sekolah].
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-5 py-2 rounded-full font-heading font-bold text-xs text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs cursor-pointer"
                      >
                        Kirim Pesan Lain
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Nama & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Nama Anda"
                            className={`w-full pl-10 pr-4 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                              errors.nama
                                ? "border-red-400 bg-red-50/50"
                                : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                            }`}
                          />
                        </div>
                        {errors.nama && (
                          <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.nama}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@domain.com"
                            className={`w-full pl-10 pr-4 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                              errors.email
                                ? "border-red-400 bg-red-50/50"
                                : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subjek Pesan */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Subjek Pertanyaan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleChange}
                        placeholder="Contoh: Informasi Biaya PPDB / Kunjungan Sekolah"
                        className={`w-full px-4 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.subjek
                            ? "border-red-400 bg-red-50/50"
                            : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        }`}
                      />
                      {errors.subjek && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subjek}
                        </p>
                      )}
                    </div>

                    {/* Isi Pesan */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Pesan Pertanyaan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="pesan"
                        rows={4}
                        value={formData.pesan}
                        onChange={handleChange}
                        placeholder="Tuliskan detail pertanyaan atau masukan Anda..."
                        className={`w-full p-4 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.pesan
                            ? "border-red-400 bg-red-50/50"
                            : "border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        }`}
                      ></textarea>
                      {errors.pesan && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.pesan}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Mengirim Pesan...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Kirim Pesan Sekarang</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </FadeIn>
          </div>

        </div>
      </section>

    </div>
  );
}
