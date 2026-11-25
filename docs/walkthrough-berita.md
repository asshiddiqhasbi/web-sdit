# Walkthrough - Fitur Berita & Artikel (Centralized Data & Dynamic Route)

Fitur **Berita & Kegiatan Sekolah** telah berhasil dibuat lengkap dengan pengelolaan data terpusat (DRY), komponen reusable card, halaman list berita, dan halaman detail berita dinamis berbasis `[slug]`.

---

## 🛠️ Ringkasan Struktur & File yang Dibuat

### 1. Data Terpusat ([src/data/berita.ts](file:///c:/Users/Hasbi/Documents/web-sekolah/src/data/berita.ts))
- Menyimpan **6 item data dummy berita realistis**:
  - `penyambutan-siswa-baru-mpls-2026`
  - `kegiatan-manasik-haji-cilik-2026`
  - `siswa-sdit-raih-medali-emas-osn-2026`
  - `market-day-menumbuhkan-wirausaha-islami`
  - `program-tahfidz-camp-liburan-sekolah`
  - `pemeriksaan-kesehatan-berkala-siswa`
- Menyediakan helper functions: `getAllNews()`, `getLatestNews(count)`, `getNewsBySlug(slug)`.
- Digunakan bersama oleh **Beranda (`page.tsx`)**, **List Berita (`/berita`)**, dan **Detail Berita (`/berita/[slug]`)**.

### 2. Komponen Reusable Card ([src/components/ui/NewsCard.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/components/ui/NewsCard.tsx))
- Komponen card berita yang konsisten:
  - Header gradien & thumbnail placeholder.
  - Tanggal & badge kategori.
  - Judul dengan hover effect emerald.
  - Cuplikan singkat (1-2 kalimat).
  - Link otomatis menuju `/berita/[slug]`.

### 3. Halaman List Berita ([src/app/berita/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/berita/page.tsx))
- Navigasi breadcrumb: `Beranda > Berita & Kegiatan`.
- Header banner bermotif islami.
- Grid 6-9 card berita meggunakan komponen `NewsCard`.

### 4. Halaman Detail Berita ([src/app/berita/[slug]/page.tsx](file:///c:/Users/Hasbi/Documents/web-sekolah/src/app/berita/[slug]/page.tsx))
- Dynamic breadcrumb: `Beranda > Berita > [Judul Berita]`.
- Banner gambar utama berukuran besar.
- Judul, tanggal publikasi, kategori, dan nama penulis.
- Isi berita lengkap (3-4 paragraf narasi sesuai berita).
- Sidebar rekomendasi berita terbaru lainnya & tombol bagikan artikel.
- **Handling Error Slug**: Menampilkan tampilan ramah *"Berita Tidak Ditemukan"* jika slug tidak cocok di database, lengkap dengan tombol kembali ke `/berita`.

---

## 🎯 Status Verifikasi
- **Build Status**: `npm run build` sukses 100% tanpa error TypeScript maupun Turbopack.
- **Data Integrity**: Terpusat di `src/data/berita.ts` tanpa duplikasi data.
