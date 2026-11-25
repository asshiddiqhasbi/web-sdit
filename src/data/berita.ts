export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  imageBg: string;
  imageUrl?: string;
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
    imageBg: "from-forest to-sage",
    imageUrl: "/images/campus-hero.jpg",
    excerpt: "Keceriaan dan kehangatan menyelimuti hari pertama sekolah siswa-siswi baru SDIT [Nama Sekolah] dalam pekan pengenalan lingkungan sekolah.",
    content: [
      "Suasana keceriaan dan kehangatan menyelimuti hari pertama sekolah di SDIT [Nama Sekolah]. Sebanyak 120 siswa-siswi baru kelas 1 disambut hangat oleh para guru dan kakak kelas dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS) Ramah Anak Tahun Ajaran 2026/2027.",
      "Kegiatan diawali dengan penyambutan ramah di gerbang utama sekolah, penyerahan tanda pengenal kelas, serta kisah motivasi Islami bersama wali kelas. Seluruh siswa baru terlihat antusias dan bersemangat mengikuti setiap alur kegiatan.",
      "Kepala SDIT [Nama Sekolah] menyampaikan bahwa MPLS tahun ini dirancang untuk membangun kenyamanan psikologis anak, mengenalkan adab di sekolah, fasilitas belajar, serta menumbuhkan rasa betah kepada sekolah sebagai rumah kedua mereka.",
      "Rangkaian acara ditutup dengan doa bersama seluruh guru dan siswa di halaman sekolah. Semoga ananda menjadi generasi pembelajar yang berakhlak baik."
    ]
  },
  {
    id: "2",
    slug: "kegiatan-manasik-haji-cilik-2026",
    title: "Praktik Manasik Haji Cilik: Mengenalkan Rukun Islam Sejak Dini",
    date: "12 Agustus 2026",
    category: "Kegiatan Islami",
    author: "Tim Guru Agama",
    imageBg: "from-sand-dark to-forest",
    imageUrl: "/images/tahfidz-halaqah.jpg",
    excerpt: "Siswa SDIT [Nama Sekolah] mengikuti simulasi ibadah haji lengkap dengan pakaian ihram dan urutan tata cara rukun haji di lapangan sekolah.",
    content: [
      "SDIT [Nama Sekolah] menggelar kegiatan tahunan Manasik Haji Cilik yang diikuti oleh seluruh siswa dari kelas 1 hingga kelas 6. Kegiatan ini bertujuan mengenalkan rukun Islam kelima secara langsung dan menyenangkan.",
      "Para siswa tampak tertib mengenakan pakaian ihram putih bersih. Mereka mempraktikkan seluruh rukun haji, mulai dari niat ihram, tawaf mengelilingi replika Ka'bah, sa'i, hingga melontar jumrah.",
      "Pembimbing kegiatan menjelaskan bahwa metode praktik langsung sangat membantu anak memahami urutan ibadah dengan lebih mudah dibandingkan sekadar teori di kelas.",
      "Orang tua murid yang turut hadir mengapresiasi ketertiban dan semangat anak-anak selama pelaksanaan manasik berlangsung."
    ]
  },
  {
    id: "3",
    slug: "siswa-sdit-raih-medali-emas-osn-2026",
    title: "Siswa SDIT Meraih Medali Emas Olimpiade Sains & Matematika Nasional",
    date: "10 Agustus 2026",
    category: "Prestasi",
    author: "Tim Prestasi Siswa",
    imageBg: "from-sage to-forest",
    imageUrl: "/images/activity-science.jpg",
    excerpt: "Ananda Muhammad Al-Fatih dari kelas 5 berhasil meraih medali emas dalam kompetisi sains dan matematika tingkat nasional tahun 2026.",
    content: [
      "Kabar membanggakan datang dari perwakilan siswa SDIT [Nama Sekolah]. Ananda Muhammad Al-Fatih (Siswa Kelas 5) berhasil meraih Medali Emas dalam ajang Olimpiade Sains dan Matematika Nasional tingkat SD tahun 2026.",
      "Kompetisi yang diikuti oleh peserta dari berbagai daerah ini menguji ketajaman logika, soal cerita matematika, serta pengamatan eksperimen sains dasar. Al-Fatih tampil tenang dan konsisten sejak babak penyisihan hingga final.",
      "Guru pembina olimpiade mengungkapkan rasa syukur atas kesungguhan Al-Fatih dalam berlatih setiap pekan bersama tim pembina sekolah dan dukungan penuh dari orang tua di rumah.",
      "Pihak sekolah memberikan apresiasi beasiswa pendidikan untuk memotivasi seluruh siswa agar terus tekun mengasah potensi masing-masing."
    ]
  },
  {
    id: "4",
    slug: "market-day-menumbuhkan-wirausaha-islami",
    title: "Kegiatan Market Day: Melatih Kejujuran Bermuamalah Anak",
    date: "02 Agustus 2026",
    category: "Kewirausahaan",
    author: "Humas SDIT",
    imageBg: "from-sand to-gold-dark",
    imageUrl: "/images/classroom-learning.jpg",
    excerpt: "Melalui kegiatan Market Day, siswa belajar berhitung, menawarkan karya secara jujur, serta menyisihkan hasil penjualan untuk bersedekah.",
    content: [
      "Halaman sekolah SDIT [Nama Sekolah] tampak ramai dalam acara tahunan Market Day. Para siswa kelas 3 dan 4 berlatih menjadi penjual yang menjajakan aneka makanan sehat buatan rumah dan kerajinan tangan.",
      "Program ini dirancang untuk melatih keberanian berbicara, keterampilan berhitung uang kembalian, serta pemahaman adab jual beli yang jujur sesuai tuntunan Islam.",
      "Sebagian dari hasil penjualan disalurkan siswa sebagai dana infaq untuk anak yatim di sekitar lingkungan sekolah, sehingga anak belajar bahwa bekerja dan berniaga juga menjadi jalan berbagi manfaat.",
      "Guru dan orang tua murid yang berkunjung menikmati suasana belajar kontekstual yang hangat dan penuh keceriaan."
    ]
  },
  {
    id: "5",
    slug: "program-tahfidz-camp-liburan-sekolah",
    title: "Tahfidz Camp: Murojaah Al-Qur'an dalam Suasana Kebersamaan",
    date: "25 Juli 2026",
    category: "Program Unggulan",
    author: "Tim Tahfidz",
    imageBg: "from-forest to-sage-dark",
    imageUrl: "/images/program-quran.jpg",
    excerpt: "Mengisi waktu libur sekolah dengan kegiatan positif, 80 siswa mengikuti Tahfidz Camp untuk menjaga hafalan Juz 30 dan Juz 29.",
    content: [
      "Sebanyak 80 siswa mengikuti program Tahfidz Camp yang diadakan selama 3 hari di lingkungan SDIT [Nama Sekolah]. Program ini dikemas santai agar anak-anak menghafal Al-Qur'an dengan hati gembira.",
      "Selain murojaah dan setoran hafalan baru bersama para ustadz dan ustadzah, para peserta mengikuti permainan ketangkasan kelompok dan kisah teladan para sahabat penghafal Al-Qur'an.",
      "Sebagian besar peserta mampu menuntaskan target murojaah dengan perbaikan makhraj dan kelancaran tajwid yang baik.",
      "Koordinator Tahfidz menekankan bahwa kunci utama anak cinta Al-Qur'an adalah suasana halaqah yang sabar, hangat, dan bebas dari tekanan."
    ]
  },
  {
    id: "6",
    slug: "gerakan-literasi-dan-pojok-baca-kelas",
    title: "Gerakan Literasi Pagi & Penambahan Koleksi Pojok Baca Kelas",
    date: "18 Juli 2026",
    category: "Akademik",
    author: "Tim Perpustakaan",
    imageBg: "from-sage to-sand",
    imageUrl: "/images/program-language.jpg",
    excerpt: "Setiap kelas kini dilengkapi rak buku cerita Islami dan ensiklopedia sains bergambar untuk membiasakan budaya membaca 15 menit sebelum pelajaran.",
    content: [
      "Untuk menumbuhkan kebiasaan membaca sejak kelas awal, SDIT [Nama Sekolah] menambah koleksi ratusan judul buku cerita Islami, buku pengetahuan alam, dan kamus bergambar di setiap pojok baca kelas.",
      "Setiap pagi selama 15 menit setelah sesi tahfidz, siswa diajak memilih satu buku bacaan sesuai minat mereka, lalu menceritakan kembali ringkasannya secara lisan kepada teman sebangku.",
      "Kepala Perpustakaan menyampaikan bahwa kebiasaan membaca buku fisik membantu melatih fokus anak serta memperkaya kosakata Bahasa Indonesia, Arab, dan Inggris.",
      "Sekolah juga membuka kesempatan bagi orang tua yang ingin mewakafkan buku bacaan anak layak pakai untuk memperkaya koleksi perpustakaan."
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
