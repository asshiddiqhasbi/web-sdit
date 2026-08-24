export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  date: string;
  gradientBg: string;
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
    title: "Kegiatan Manasik Haji Cilik 2026",
    category: "Kegiatan Islami",
    date: "12 Agustus 2026",
    gradientBg: "from-emerald-400 via-teal-500 to-emerald-700",
  },
  {
    id: "2",
    title: "Pentas Seni & Kreasi Bakat Siswa",
    category: "Seni & Bakat",
    date: "05 Agustus 2026",
    gradientBg: "from-amber-400 via-yellow-500 to-orange-500",
  },
  {
    id: "3",
    title: "Praktikum Robotik & Lab Komputer",
    category: "Sains & Teknologi",
    date: "28 Juli 2026",
    gradientBg: "from-teal-400 via-emerald-600 to-teal-800",
  },
  {
    id: "4",
    title: "Tahfidz Camp & Murojaah Bersama",
    category: "Kegiatan Islami",
    date: "25 Juli 2026",
    gradientBg: "from-emerald-500 via-amber-400 to-emerald-700",
  },
  {
    id: "5",
    title: "Lomba Panahan & Olahraga Sunnah",
    category: "Olahraga",
    date: "18 Juli 2026",
    gradientBg: "from-orange-400 via-amber-500 to-yellow-500",
  },
  {
    id: "6",
    title: "Kunjungan Edukasi (Field Trip) Kebun Raya",
    category: "Edukasi Outdoor",
    date: "10 Juli 2026",
    gradientBg: "from-teal-500 via-emerald-500 to-amber-400",
  },
  {
    id: "7",
    title: "Peringatan Hari Kemerdekaan RI ke-81",
    category: "Acara Sekolah",
    date: "17 Agustus 2026",
    gradientBg: "from-red-400 via-rose-500 to-amber-500",
  },
  {
    id: "8",
    title: "Market Day & Praktek Kewirausahaan",
    category: "Edukasi Outdoor",
    date: "02 Agustus 2026",
    gradientBg: "from-amber-400 via-orange-400 to-emerald-600",
  },
  {
    id: "9",
    title: "Upacara Bendera Senin & Muhadhoroh",
    category: "Acara Sekolah",
    date: "04 Agustus 2026",
    gradientBg: "from-emerald-600 via-teal-700 to-emerald-900",
  },
  {
    id: "10",
    title: "Belajar Bercocok Tanam & Hydroponik",
    category: "Sains & Teknologi",
    date: "20 Juli 2026",
    gradientBg: "from-emerald-300 via-teal-400 to-emerald-600",
  },
  {
    id: "11",
    title: "Pemeriksaan Kesehatan Berkala Dokter UKS",
    category: "Kesehatan",
    date: "15 Juli 2026",
    gradientBg: "from-teal-300 via-emerald-400 to-amber-300",
  },
  {
    id: "12",
    title: "Latihan Pramuka SIT & Camping Ceria",
    category: "Olahraga",
    date: "08 Juli 2026",
    gradientBg: "from-amber-500 via-orange-500 to-emerald-700",
  },
  {
    id: "13",
    title: "Pemberian Santunan Anak Yatim",
    category: "Kegiatan Islami",
    date: "01 Juli 2026",
    gradientBg: "from-emerald-500 via-teal-600 to-amber-500",
  },
  {
    id: "14",
    title: "Klub Kaligrafi & Seni Lukis Islami",
    category: "Seni & Bakat",
    date: "24 Juni 2026",
    gradientBg: "from-orange-400 via-amber-400 to-teal-500",
  },
];

export const DUMMY_VIDEOS: GalleryVideo[] = [
  {
    id: "v1",
    title: "Profil & Profil Kegiatan Pembelajaran SDIT [Nama Sekolah]",
    category: "Profil Sekolah",
    youtubeId: "LXb3EKWsInQ",
    date: "15 Agustus 2026",
  },
  {
    id: "v2",
    title: "Keseruan Kegiatan Manasik Haji Cilik 2026",
    category: "Kegiatan Islami",
    youtubeId: "dQw4w9WgXcQ",
    date: "12 Agustus 2026",
  },
  {
    id: "v3",
    title: "Penampilan Pentas Seni & Seni Bela Diri Pencak Silat",
    category: "Seni & Bakat",
    youtubeId: "LXb3EKWsInQ",
    date: "05 Agustus 2026",
  },
];
