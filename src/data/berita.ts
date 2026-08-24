export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  imageBg: string;
  excerpt: string;
  content: string[];
}

export const DUMMY_BERITA: NewsItem[] = [
  {
    id: "1",
    slug: "penyambutan-siswa-baru-mpls-2026",
    title: "Penyambutan Siswa Baru & MPLS Ramah Anak TA 2026/2027",
    date: "15 Agustus 2026",
    category: "Kegiatan Siswa",
    author: "Humas SDIT",
    imageBg: "from-emerald-400 via-teal-500 to-emerald-600",
    excerpt: "Keceriaan dan kehangatan menyelimuti hari pertama sekolah siswa-siswi baru SDIT [Nama Sekolah] dalam pekan pengenalan lingkungan sekolah.",
    content: [
      "Suasana keceriaan dan kehangatan menyelimuti hari pertama sekolah di SDIT [Nama Sekolah]. Sebanyak 120 siswa-siswi baru kelas 1 disambut hangat oleh para guru dan kakak kelas dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS) Ramah Anak Tahun Ajaran 2026/2027.",
      "Kegiatan diawali dengan penyambutan ramah di gerbang utama sekolah, penyerahan name tag ceria, serta dongeng motivasi Islami yang dibawakan oleh pendongeng nasional. Seluruh siswa baru terlihat sangat antusias dan bersemangat mengikuti setiap alur kegiatan tanpa ada rasa canggung.",
      "Kepala SDIT [Nama Sekolah] menyampaikan bahwa MPLS tahun ini dirancang khusus untuk membangun kenyamanan psikologis anak, mengenalkan adab-adab sekolah, fasilitas belajar, serta menanamkan rasa cinta kepada sekolah sebagai rumah kedua mereka.",
      "Rangkaian acara ditutup dengan pelepasan balon harapan dan doa bersama seluruh civitas akademika. Semoga ananda semua menjadi generasi pembelajar yang berakhlak mulia dan senantiasa dalam lindungan Allah SWT."
    ]
  },
  {
    id: "2",
    slug: "kegiatan-manasik-haji-cilik-2026",
    title: "Kegiatan Manasik Haji Cilik: Menanamkan Rukun Islam Sejak Dini",
    date: "12 Agustus 2026",
    category: "Kegiatan Islami",
    author: "Tim Guru Agama",
    imageBg: "from-amber-400 via-yellow-500 to-amber-600",
    excerpt: "Ratusan siswa SDIT [Nama Sekolah] antusias mengikuti simulasi ibadah haji cilik lengkap dengan pakaian ihram dan miniatur Ka'bah.",
    content: [
      "SDIT [Nama Sekolah] sukses menggelar kegiatan tahunan Manasik Haji Cilik yang diikuti oleh seluruh siswa dari kelas 1 hingga kelas 6. Kegiatan ini bertujuan untuk mengenalkan rukun Islam kelima serta menanamkan kerinduan terhadap Tanah Suci sejak usia dini.",
      "Para siswa tampak anggun dan bersahaja mengenakan pakaian ihram putih bersih. Mereka mempraktikkan secara langsung seluruh rukun haji, mulai dari niat ihram di miqat, tawaf mengelilingi miniatur Ka'bah, sa'i antara Shafa dan Marwah, hingga melontar jumrah.",
      "Pembimbing kegiatan menjelaskan bahwa metode pembelajaran berbasis praktik langsung (learning by doing) sangat efektif untuk membentuk pemahaman agama yang mendalam dan berkesan bagi anak-anak.",
      "Orang tua murid yang turut hadir mengapresiasi tinggi kerapian dan kekhusyukan anak-anak selama pelaksanaan manasik. Semoga kelak ananda semua dapat menunaikan ibadah haji yang sesungguhnya di Baitullah."
    ]
  },
  {
    id: "3",
    slug: "siswa-sdit-raih-medali-emas-osn-2026",
    title: "Siswa SDIT Meraih Medali Emas Olimpiade Sains & Matematika Nasional",
    date: "10 Agustus 2026",
    category: "Prestasi",
    author: "Tim Prestasi Siswa",
    imageBg: "from-teal-400 via-emerald-500 to-teal-700",
    excerpt: "Prestasi membanggakan kembali diukir oleh ananda perwakilan sekolah yang berhasil menjuarai kompetisi sains tingkat nasional.",
    content: [
      "Kabar membanggakan kembali datang dari perwakilan siswa SDIT [Nama Sekolah]. Ananda Muhammad Al-Fatih (Siswa Kelas 5) berhasil meraih Medali Emas dalam ajang Olimpiade Sains dan Matematika Nasional tingkat SD tahun 2026.",
      "Kompetisi nasional yang diikuti oleh ribuan peserta dari berbagai provinsi ini menguji ketajaman logika, analisis masalah matematika, serta eksperimen sains dasar. Al-Fatih tampil percaya diri dan konsisten sejak babak penyisihan hingga final.",
      "Guru pembina olimpiade mengungkapkan rasa syukur dan bangganya atas kesungguhan Al-Fatih dalam berlatih. Keberhasilan ini tidak lepas dari kombinasi ketekunan siswa, bimbingan guru yang intensif, serta dukungan doa dari orang tua.",
      "Pihak sekolah memberikan penghargaan khusus beasiswa pendidikan untuk memotivasi Al-Fatih dan siswa-siswi lainnya agar terus berprestasi dan mengembangkan potensi terbaik mereka."
    ]
  },
  {
    id: "4",
    slug: "market-day-menumbuhkan-wirausaha-islami",
    title: "Kegiatan Market Day: Menumbuhkan Jiwa Wirausaha Islami Anak",
    date: "02 Agustus 2026",
    category: "Kewirausahaan",
    author: "Humas SDIT",
    imageBg: "from-orange-400 via-amber-500 to-orange-600",
    excerpt: "Melalui kegiatan Market Day, siswa belajar kejujuran bermuamalah, berhitung, serta indahnya berbagi dan bersedekah.",
    content: [
      "Halaman sekolah SDIT [Nama Sekolah] berubah menjadi pasar berseri yang penuh warna dalam acara tahunan Market Day. Para siswa kelas 3 dan 4 berperan sebagai penjual yang menjajakan aneka jajanan sehat, minuman segar, dan kreasi kerajinan tangan.",
      "Program ini dirancang untuk mengasah keberanian berbicara, kemampuan literasi finansial, keterampilan berhitung, serta pemahaman adab bermuamalah secara akurat dan jujur sesuai tuntunan Islam.",
      "Uniknya, sebagian dari keuntungan yang didapatkan dari hasil penjualan akan disalurkan sebagai dana sedekah untuk anak yatim di sekitar lingkungan sekolah. Hal ini mengajarkan bahwa berbisnis bukan hanya mencari keuntungan duniawi, melainkan juga sarana beramal jariyah.",
      "Para pembeli yang terdiri dari siswa kelas lain, guru, dan orang tua sangat menikmati suasana kebersamaan dalam acara yang seru dan mengedukasi ini."
    ]
  },
  {
    id: "5",
    slug: "program-tahfidz-camp-liburan-sekolah",
    title: "Tahfidz Camp: Menghafal Al-Qur'an dengan Suasana Ceria & Seru",
    date: "25 Juli 2026",
    category: "Program Unggulan",
    author: "Tim Tahfidz",
    imageBg: "from-emerald-500 via-teal-600 to-emerald-800",
    excerpt: "Mengisi waktu liburan dengan kegiatan positif, siswa-siswi SDIT bersemangat menambah hafalan Al-Qur'an juz 30 dan 29.",
    content: [
      "Sebanyak 80 siswa mengikuti program khusus Tahfidz Camp yang diadakan selama 3 hari di lingkungan SDIT [Nama Sekolah]. Program ini dikemas dengan konsep fun-learning agar anak-anak menghafal Al-Qur'an tanpa merasa tertekan.",
      "Selain murojaah dan penambahan hafalan baru, para peserta disuguhi berbagai kegiatan outdoor seperti outbond Islami, kuis Al-Qur'an interaktif, serta sesi motivasi penghafal Al-Qur'an.",
      "Hasil dari Tahfidz Camp kali ini sangat mengagumkan. Sebagian besar peserta mampu mencapai target kenaikan hafalan hingga 1-2 maqra dengan kualitas tajwid dan makhraj yang baik.",
      "Koordinator Tahfidz menegaskan bahwa kunci utama kesuksesan hafalan anak adalah rasa cinta dan kegembiraan ketika berinteraksi dengan ayat-ayat suci Al-Qur'an."
    ]
  },
  {
    id: "6",
    slug: "pemeriksaan-kesehatan-berkala-siswa",
    title: "Pemeriksaan Kesehatan Berkala Kerjasama dengan Puskesmas",
    date: "18 Juli 2026",
    category: "Kesehatan",
    author: "Tim UKS",
    imageBg: "from-teal-400 via-emerald-500 to-teal-600",
    excerpt: "Menjaga kesehatan fisik siswa sejak dini, sekolah menyelenggarakan tes kesehatan gigi, mata, dan gizi secara gratis.",
    content: [
      "SDIT [Nama Sekolah] bekerjasama dengan tim medis Puskesmas setempat mengadakan kegiatan Pemeriksaan Kesehatan Berkala untuk seluruh murid dari kelas 1 hingga 6.",
      "Pemeriksaan meliputi cek kesehatan mata, kebersihan gigi dan mulut, pengukuran tinggi dan berat badan, serta skrining status gizi anak. Petugas medis juga memberikan edukasi pentingnya mengonsumsi makanan halal dan thayyib.",
      "Kepala UKS menyampaikan bahwa fisik yang sehat dan kuat merupakan modal utama bagi siswa agar dapat beraktivitas dan beribadah dengan lancar (Al-Mukminul qawiyyu khairun wa ahabbu illallah).",
      "Hasil pemeriksaan akan disampaikan secara pribadi kepada orang tua murid sebagai panduan pemantauan tumbuh kembang ananda di rumah."
    ]
  }
];

export function getAllNews(): NewsItem[] {
  return DUMMY_BERITA;
}

export function getLatestNews(count: number = 3): NewsItem[] {
  return DUMMY_BERITA.slice(0, count);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return DUMMY_BERITA.find((item) => item.slug === slug);
}
