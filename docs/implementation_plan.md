# Implementation Plan - Setup Initial Project SDIT Web Profile

Initial setup for an SDIT (Sekolah Dasar Islam Terpadu) website profile built with Next.js (App Router), TypeScript, and Tailwind CSS. The design theme follows **"Modern-Islami yang Ceria"** with emerald/tosca primary colors, golden accents, soft cheerful highlights, and rounded organic UI shapes.

## User Review Required

> [!IMPORTANT]
> **Teknologi & Versi**: Project akan di-setup menggunakan Next.js (App Router) + TypeScript + Tailwind CSS + Lucide Icons (`lucide-react`).
> **Google Fonts**: Menggunakan `Plus Jakarta Sans` (Heading) dan `Inter` (Body Text) via `next/font/google` untuk performa terbaik.

## Proposed Changes

### Configuration & Design System Setup

#### [NEW] [tailwind.config.ts](file:///c:/Users/Hasbi/Documents/web-sekolah/tailwind.config.ts)
- Definisi skema warna custom:
  - `primary`: Emerald/Tosca segar (`emerald-600` / `teal-600` basis: `#0D9488`, `#059669`)
  - `accent`: Emas / Yellow Gold (`#EAB308`, `#D97706`)
  - `cheerful`: Kuning/Oranye lembut (`#FEF08A`, `#FFEDD5`, `#F97316`)
  - `surface` / `base`: Putih bersih `#FFFFFF` dan slate netral `#F8FAFC`
- Extended Border Radius & Shadow untuk elemen rounded / organic shape (misal: `rounded-3xl`, `rounded-4xl`, soft blobs).

#### [NEW] [src/app/globals.css](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/globals.css)
- Tailwind directives & custom CSS variables untuk font dan bg pattern islami/ceria minimalis.

#### [NEW] [src/app/layout.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/layout.tsx)
- Root layout yang memuat Google Fonts (`Plus Jakarta Sans` & `Inter`), Navbar global, Footer global, dan metadata SEO dasar.

---

### Components & Layout

#### [NEW] [src/components/layout/Navbar.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/components/layout/Navbar.tsx)
- Logo SDIT ("SDIT [Nama Sekolah]")
- Navigation Links: Beranda, Profil, Berita, PPDB, Galeri, Kontak
- Mobile Hamburger Menu dengan state toggle responsive
- Prominent CTA Button "Daftar PPDB" dengan aksen emas/emerald

#### [NEW] [src/components/layout/Footer.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/components/layout/Footer.tsx)
- Informasi kontak singkat sekolah (Alamat, Email, Telepon)
- Tautan navigasi cepat
- Icon media sosial (Instagram, YouTube, Facebook, WhatsApp)
- Hak cipta / Copyright notice

---

### Pages & Routing Structure

#### [NEW] [src/app/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/page.tsx)
- Halaman **Beranda** (Hero placeholder + ringkasan singkat)

#### [NEW] [src/app/profil/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/profil/page.tsx)
- Halaman **Profil** sekolah

#### [NEW] [src/app/berita/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/berita/page.tsx)
- Halaman daftar **Berita & Artikel**

#### [NEW] [src/app/berita/[slug]/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/berita/[slug]/page.tsx)
- Halaman detail **Berita** (`[slug]`)

#### [NEW] [src/app/ppdb/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/ppdb/page.tsx)
- Halaman **PPDB** (Penerimaan Peserta Didik Baru)

#### [NEW] [src/app/galeri/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/galeri/page.tsx)
- Halaman **Galeri Kegiatan**

#### [NEW] [src/app/kontak/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/kontak/page.tsx)
- Halaman **Kontak & Lokasi**

---

## Verification Plan

### Automated Tests / Commands
- Menjalankan `npm run build` untuk memastikan tidak ada error TypeScript maupun routing Next.js.
- Menjalankan `npm run dev` untuk memastikan server development berjalan secara lancar tanpa error runtime.

### Manual Verification
- Pengujian navigasi link di Navbar & Footer untuk memastikan seluruh halaman di atas (`/`, `/profil`, `/berita`, `/berita/[slug]`, `/ppdb`, `/galeri`, `/kontak`) dapat diakses tanpa error 404.
- Pengujian tampilan responsive mobile (hamburger menu).
