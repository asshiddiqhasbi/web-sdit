import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory pt-10 sm:pt-14 pb-6 sm:pb-8 border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 md:pb-10 border-b border-forest-light/40">
          
          {/* Column 1: School Profile, Branding & Social Icons (Tampil di Mobile & Desktop) */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-dark text-gold border border-gold/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-lg text-ivory tracking-tight">
                  SDIT [Nama Sekolah]
                </span>
                <span className="text-[10px] font-sans font-semibold text-gold tracking-widest uppercase">
                  Sekolah Dasar Islam Terpadu
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ivory/75 font-sans leading-relaxed max-w-sm md:max-w-none">
              Mendidik generasi yang berakar kuat pada adab Islami, hafalan Al-Qur'an, serta kecakapan akademik dan teknologi.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 pt-1">
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-forest-light/50 hover:bg-gold text-ivory hover:text-forest flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-forest-light/50 hover:bg-gold text-ivory hover:text-forest flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-forest-light/50 hover:bg-gold text-ivory hover:text-forest flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 bg-forest-light/50 hover:bg-gold text-ivory hover:text-forest flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Sembunyi di Mobile, Tampil di Desktop) */}
          <div className="hidden md:block">
            <h3 className="font-heading font-bold text-base text-ivory mb-4">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <Link href="/" className="text-ivory/75 hover:text-gold transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-ivory/75 hover:text-gold transition-colors">
                  Profil & Visi Misi
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-ivory/75 hover:text-gold transition-colors">
                  Kabar & Informasi
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="text-ivory/75 hover:text-gold transition-colors">
                  Penerimaan Siswa (PPDB)
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-ivory/75 hover:text-gold transition-colors">
                  Dokumentasi & Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-ivory/75 hover:text-gold transition-colors">
                  Kontak & Lokasi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-ivory/75 hover:text-gold transition-colors">
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Sembunyi di Mobile, Tampil di Desktop) */}
          <div className="hidden md:block">
            <h3 className="font-heading font-bold text-base text-ivory mb-4">
              Sekretariat Sekolah
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-ivory/75 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Jl. Pendidikan Islam No. 123, Kelurahan Mulia, Kota Bandung 40123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>(021) 1234-5678 / 0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@sdit-sekolah.sch.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Senin s.d. Jumat, 07.00 - 15.30 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Call to Action / Info (Sembunyi di Mobile, Tampil di Desktop) */}
          <div className="hidden md:block space-y-3.5 bg-forest-dark/70 p-5 border border-sand/20">
            <h3 className="font-heading font-bold text-base text-gold">
              Kunjungan & PPDB
            </h3>
            <p className="text-xs text-ivory/75 font-sans leading-relaxed">
              Informasi jadwal penerimaan peserta didik baru, panduan observasi, serta layanan kunjungan orang tua ke sekolah.
            </p>
            <Link
              href="/ppdb"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 font-sans font-semibold text-xs text-forest bg-gold hover:bg-gold-light transition-colors uppercase tracking-wider"
            >
              Informasi PPDB
            </Link>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-sans text-ivory/60">
          <p>© {new Date().getFullYear()} SDIT [Nama Sekolah]. Hak Cipta Dilindungi.</p>
          <p className="text-ivory/50">Sekolah Dasar Islam Terpadu</p>
        </div>
      </div>
    </footer>
  );
}
