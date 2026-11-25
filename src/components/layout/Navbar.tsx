"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "PPDB", href: "/ppdb" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/95 backdrop-blur-md border-b border-sand/70 transition-all">
      {/* Main Single-Tier Editorial Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-6">
          
          {/* Logo */}
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-forest text-ivory flex items-center justify-center group-hover:bg-forest-light transition-colors shrink-0">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-heading font-bold text-base sm:text-lg text-forest tracking-tight leading-tight whitespace-nowrap">
                SDIT [Nama Sekolah]
              </span>
              <span className="text-[10px] font-sans font-medium tracking-wider text-charcoal-muted uppercase whitespace-nowrap">
                Sekolah Dasar Islam Terpadu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`py-1.5 text-sm font-sans transition-colors whitespace-nowrap border-b-2 ${
                    isActive
                      ? "text-forest font-semibold border-gold"
                      : "text-charcoal-muted hover:text-forest border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Neutral Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/kontak"
              onClick={handleNavClick}
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                pathname.startsWith("/kontak")
                  ? "bg-forest-dark text-gold"
                  : "bg-forest hover:bg-forest-light text-ivory"
              }`}
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-forest hover:bg-sand/30 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-ivory border-b border-sand/80 shadow-lg px-4 pt-2 pb-6 space-y-2">
          <nav className="flex flex-col divide-y divide-sand/40">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-2 py-3 text-sm font-sans transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-forest font-bold"
                      : "text-charcoal-muted hover:text-forest"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-gold" : "text-sand-dark"}`} />
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-3 mt-2">
            <Link
              href="/kontak"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-all"
            >
              <span>Hubungi Sekretariat</span>
              <ChevronRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
