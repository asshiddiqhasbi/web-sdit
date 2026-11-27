"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { SCHOOL_CONFIG, getWhatsAppUrl } from "@/data/school";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nama.trim()) newErrors.nama = "Nama lengkap wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.subjek.trim()) newErrors.subjek = "Subjek pesan wajib diisi";
    if (!formData.pesan.trim()) newErrors.pesan = "Pesan pertanyaan wajib diisi";

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
    }, 800);
  };

  const handleReset = () => {
    setFormData({ nama: "", email: "", subjek: "", pesan: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  const waDirectUrl = getWhatsAppUrl(
    `Assalamu'alaikum Sekretariat ${SCHOOL_CONFIG.name}, saya ingin menjadwalkan kunjungan atau bertanya mengenai sekolah.`
  );

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
              <span className="text-forest font-semibold">Kontak</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Sekretariat & Lokasi
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Hubungi Kami & Kunjungan
                </h1>
              </div>
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Untuk respons tercepat, orang tua dapat menghubungi WhatsApp Sekretariat {SCHOOL_CONFIG.name} secara langsung pada jam kerja.
                </p>
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Chat WhatsApp Sekarang</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Directory + Embedded Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 divide-y divide-sand border-y border-sand">
            <div className="py-4 flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-1" />
              <div className="space-y-1.5">
                <h2 className="font-sans font-bold text-xs uppercase tracking-wider text-forest">
                  WhatsApp & Telepon (Kanal Utama)
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal font-medium">
                  {SCHOOL_CONFIG.contact.whatsappDisplay} (WhatsApp) / {SCHOOL_CONFIG.contact.phone}
                </p>
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-sans font-semibold text-xs text-ivory bg-forest hover:bg-forest-light transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Buka Chat WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="py-4 flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="font-sans font-bold text-xs uppercase tracking-wider text-forest">
                  Alamat Sekolah
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {SCHOOL_CONFIG.contact.address}
                </p>
              </div>
            </div>

            <div className="py-4 flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="font-sans font-bold text-xs uppercase tracking-wider text-forest">
                  Email Resmi
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted">
                  {SCHOOL_CONFIG.contact.email}
                </p>
              </div>
            </div>

            <div className="py-4 flex items-start gap-3.5">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="font-sans font-bold text-xs uppercase tracking-wider text-forest">
                  Jam Layanan Kantor
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted">
                  {SCHOOL_CONFIG.contact.hoursWeekday}
                </p>
                <p className="font-sans text-xs text-charcoal-muted">
                  {SCHOOL_CONFIG.contact.hoursSaturday}
                </p>
              </div>
            </div>

            <div className="py-4 space-y-2">
              <h2 className="font-sans font-bold text-xs uppercase tracking-wider text-forest">
                Kanal Media Sosial
              </h2>
              <div className="flex flex-wrap gap-4 text-xs font-sans font-semibold text-forest">
                <a href={SCHOOL_CONFIG.social.instagramUrl} className="hover:text-gold transition-colors underline underline-offset-4 decoration-sand-dark">
                  Instagram ({SCHOOL_CONFIG.social.instagramHandle})
                </a>
                <a href={SCHOOL_CONFIG.social.facebookUrl} className="hover:text-gold transition-colors underline underline-offset-4 decoration-sand-dark">
                  Facebook Page
                </a>
                <a href={SCHOOL_CONFIG.social.youtubeUrl} className="hover:text-gold transition-colors underline underline-offset-4 decoration-sand-dark">
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2.5">
            <div className="w-full h-80 sm:h-[420px] border border-sand bg-sand-light overflow-hidden">
              <iframe
                title={`Peta Lokasi ${SCHOOL_CONFIG.name}`}
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.5731168!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-xs font-sans text-charcoal-muted">
              Lokasi peta sebagai ilustrasi sementara. Silakan konfirmasi via WhatsApp sebelum melakukan kunjungan langsung ke sekolah.
            </p>
          </div>

        </div>
      </section>

      {/* Visit / Message Form */}
      <section id="kunjungan" className="bg-sand-light/60 border-y border-sand py-10 sm:py-14 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Formulir Kunjungan & Pesan
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest leading-snug">
                Ajukan Jadwal Kunjungan atau Pesan Tertulis
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Selain melalui WhatsApp, Bapak/Ibu juga dapat mengisi formulir singkat ini untuk menjadwalkan kunjungan keluarga atau mengajukan pertanyaan resmi via email.
              </p>
            </div>

            <div className="lg:col-span-7 bg-ivory border border-sand p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-forest text-gold flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-forest">
                    Pesan Anda Telah Diterima
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.nama}</strong>. Pesan Anda sudah tercatat dan tim sekretariat akan merespons melalui email atau kontak yang diberikan.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-forest border border-forest/30 hover:bg-sand/40 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                        Nama Lengkap <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none ${
                          errors.nama ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                      {errors.nama && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nama}
                        </p>
                      )}
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
                        placeholder="email@domain.com"
                        className={`w-full px-3.5 py-2.5 border bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none ${
                          errors.email ? "border-red-500" : "border-sand focus:border-forest"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                      Subjek Pesan <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="subjek"
                      value={formData.subjek}
                      onChange={handleChange}
                      placeholder="Contoh: Jadwal Kunjungan Sekolah / Informasi Kurikulum"
                      className={`w-full px-3.5 py-2.5 border bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none ${
                        errors.subjek ? "border-red-500" : "border-sand focus:border-forest"
                      }`}
                    />
                    {errors.subjek && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subjek}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold text-forest uppercase tracking-wider">
                      Pesan Pertanyaan <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="pesan"
                      rows={4}
                      value={formData.pesan}
                      onChange={handleChange}
                      placeholder="Tuliskan pertanyaan atau rencana hari/jam kunjungan Anda..."
                      className={`w-full p-3.5 border bg-ivory-light text-xs sm:text-sm font-sans focus:outline-none ${
                        errors.pesan ? "border-red-500" : "border-sand focus:border-forest"
                      }`}
                    ></textarea>
                    {errors.pesan && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.pesan}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
