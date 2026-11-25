export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  caption: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  date: string;
}

export const DUMMY_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    title: "Suasana Pagi di Halaman Kampus",
    category: "Lingkungan Sekolah",
    date: "15 Agustus 2026",
    imageUrl: "/images/campus-hero.jpg",
    caption: "Siswa berjalan pagi menuju ruang kelas di lingkungan kampus yang hijau dan asri.",
  },
  {
    id: "2",
    title: "Diskusi Kelompok di Ruang Kelas",
    category: "Kegiatan Belajar",
    date: "12 Agustus 2026",
    imageUrl: "/images/classroom-learning.jpg",
    caption: "Ibu wali kelas mendampingi siswa dalam kegiatan diskusi dan penulisan tugas tematik.",
  },
  {
    id: "3",
    title: "Halaqah Tahfidz Pagi di Mushola",
    category: "Kegiatan Islami",
    date: "10 Agustus 2026",
    imageUrl: "/images/tahfidz-halaqah.jpg",
    caption: "Siswa menyetorkan hafalan Al-Qur'an bersama ustadz dengan suasana yang tenang.",
  },
  {
    id: "4",
    title: "Praktikum Pengamatan Sains Dasar",
    category: "Sains & Literasi",
    date: "05 Agustus 2026",
    imageUrl: "/images/activity-science.jpg",
    caption: "Pengenalan alat laboratorium dasar untuk melatih ketelitian siswa dalam pengamatan IPA.",
  },
  {
    id: "5",
    title: "Gerakan Literasi & Pojok Baca",
    category: "Sains & Literasi",
    date: "01 Agustus 2026",
    imageUrl: "/images/program-language.jpg",
    caption: "Koleksi buku cerita Islami dan ensiklopedia anak di sudut baca setiap ruang kelas.",
  },
  {
    id: "6",
    title: "Murojaah & Pembinaan Tartil Al-Qur'an",
    category: "Kegiatan Islami",
    date: "25 Juli 2026",
    imageUrl: "/images/program-quran.jpg",
    caption: "Pembiasaan membaca Al-Qur'an dengan tajwid dan makhraj yang baik sejak kelas awal.",
  },
  {
    id: "7",
    title: "Penyambutan Siswa Baru (MPLS)",
    category: "Lingkungan Sekolah",
    date: "18 Juli 2026",
    imageUrl: "/images/campus-hero.jpg",
    caption: "Hari pertama siswa kelas 1 mengenal ruang kelas, guru pembimbing, dan teman sekelas.",
  },
  {
    id: "8",
    title: "Pembelajaran Tematik Terpadu",
    category: "Kegiatan Belajar",
    date: "14 Juli 2026",
    imageUrl: "/images/classroom-learning.jpg",
    caption: "Pendampingan belajar personal dengan rasio guru dan siswa yang terjaga.",
  },
];

export const DUMMY_VIDEOS: GalleryVideo[] = [
  {
    id: "v1",
    title: "Dokumentasi Lingkungan & Suasana Belajar Sekolah",
    category: "Profil Sekolah",
    youtubeId: "LXb3EKWsInQ",
    date: "15 Agustus 2026",
  },
  {
    id: "v2",
    title: "Cuplikan Program Halaqah Tahfidz Pagi",
    category: "Kegiatan Islami",
    youtubeId: "aqz-KE-bpKQ",
    date: "10 Agustus 2026",
  },
  {
    id: "v3",
    title: "Kegiatan Eksperimen Sains & Literasi Siswa",
    category: "Sains & Literasi",
    youtubeId: "ysz5S6PUM-U",
    date: "02 Agustus 2026",
  },
];
