import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-slate-200 pt-16 pb-8 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Profile & Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SDIT [Nama Sekolah]
                </span>
                <span className="text-xs font-semibold text-amber-400">
                  Sekolah Dasar Islam Terpadu
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mewujudkan generasi Rabbani yang unggul dalam Imtaq, cerdas dalam Iptek, serta berakhlak mulia dan berwawasan global.
            </p>
            
            {/* Social Media Links (Custom SVG Icons) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Profil Sekolah & Visi Misi</span>
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Berita & Informasi</span>
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Info Pendaftaran PPDB</span>
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Galeri Kegiatan Siswa</span>
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Hubungi Kami</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Kontak Sekolah
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Jl. Pendidikan Islam No. 123, Kelurahan Mulia, Kota Kita 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>(021) 1234-5678 / 0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>info@sdit-sekolah.sch.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Senin - Jumat: 07.00 - 15.30 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Call to Action / PPDB Badge */}
          <div className="space-y-4 bg-emerald-900/40 p-5 rounded-2xl border border-emerald-700/50">
            <h3 className="font-heading font-bold text-base text-amber-300 flex items-center gap-2">
              Pendaftaran PPDB 2026
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bergabunglah bersama keluarga besar SDIT [Nama Sekolah]. Tempat terbaik tumbuh kembang ananda dengan pendidikan karakter Islam unggulan.
            </p>
            <Link
              href="/ppdb"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all uppercase tracking-wider"
            >
              Info PPDB Selengkapnya
            </Link>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SDIT [Nama Sekolah]. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
