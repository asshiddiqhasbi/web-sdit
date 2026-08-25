"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronRight, Phone, Mail, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Berita", href: "/berita" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Scroll to top on pathname change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper handler for all navbar links (scrolls to top & closes mobile menu)
  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white/95 backdrop-blur-md transition-all">
      {/* Top Header Notification / Quick Info Bar */}
      <div className="hidden md:block bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>(021) 1234-5678</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>info@sdit-sekolah.sch.id</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3" /> PPDB TA 2026/2027 DIBUKA
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-emerald-950 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                SDIT [Nama Sekolah]
              </span>
              <span className="text-[11px] font-medium text-amber-600 tracking-wider uppercase mt-1">
                Modern & Berakhlak Mulia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 font-bold"
                      : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/ppdb"
              onClick={handleNavClick}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-amber-200/50"
            >
              <span>Daftar PPDB</span>
              <ChevronRight className="w-4 h-4 text-emerald-900" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-slate-100 mt-2">
            <Link
              href="/ppdb"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-heading font-bold text-base text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md active:scale-95 transition-all"
            >
              <span>Daftar PPDB Online</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
