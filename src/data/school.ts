export const SCHOOL_CONFIG = {
  name: "SDIT [Nama Sekolah]",
  shortName: "SDIT",
  tagline: "Sekolah Dasar Islam Terpadu",
  accreditation: {
    grade: "A",
    label: "Terakreditasi A (Unggul)",
    body: "BAN-S/M Kemendikbudristek",
    foundedYear: "2010",
  },
  contact: {
    phone: "(021) 1234-5678",
    whatsappDisplay: "0812-3456-7890",
    whatsappNumber: "6281234567890",
    email: "info@sdit-sekolah.sch.id",
    address: "Jl. Pendidikan Islam No. 123, Kelurahan Mulia, Kota Bandung 40123",
    hoursWeekday: "Senin s.d. Jumat, 07.00 - 15.30 WIB",
    hoursSaturday: "Sabtu, 08.00 - 12.00 WIB",
  },
  social: {
    instagramHandle: "@sdit.sekolah",
    instagramUrl: "#",
    facebookUrl: "#",
    youtubeUrl: "#",
  },
  ppdb: {
    /**
     * Ubah ke `true` saat musim pendaftaran resmi dibuka agar tombol CTA utama
     * di Navbar/Beranda dan formulir pendaftaran online aktif otomatis.
     */
    isOpen: false,
    academicYear: "2026/2027",
    generalPeriod: "November s.d. April setiap tahun ajaran",
  },
  principal: {
    name: "Ust. Ahmad Fauzan, M.Pd.",
    role: "Kepala SDIT [Nama Sekolah]",
    quote:
      "Sekolah dasar adalah masa peletakan dasar akhlak dan rasa senang anak terhadap ilmu. Ketika hati anak merasa aman dan dihargai, kecerdasannya akan tumbuh dengan sendirinya.",
  },
  educators: [
    {
      initials: "AF",
      name: "Ust. Ahmad Fauzan, M.Pd.",
      role: "Kepala Sekolah",
      focus: "Manajemen Mutu & Keteladanan",
    },
    {
      initials: "NH",
      name: "Ustadzah Nurul Hidayah, S.Pd.",
      role: "Waka Kurikulum",
      focus: "Kurikulum Nasional & Literasi",
    },
    {
      initials: "MR",
      name: "Ust. Muhammad Ridwan, Al-Hafidz",
      role: "Koordinator Al-Qur'an",
      focus: "Tahfidz & Talaqqi Metode Utsmani",
    },
    {
      initials: "RS",
      name: "Ustadzah Rahma Sari, S.Psi.",
      role: "Koordinator Kesiswaan",
      focus: "Bina Pribadi Islami & Konseling Anak",
    },
  ],
  trustMetrics: [
    {
      value: "A",
      title: "Terakreditasi Unggul",
      detail: "Standar penilaian BAN-S/M sejak 2010",
    },
    {
      value: "1 : 14",
      title: "Rasio Guru & Siswa",
      detail: "Dua guru pendamping di setiap kelas",
    },
    {
      value: "3 Juz",
      title: "Target Tahfidz Lulusan",
      detail: "Halaqah harian dalam kelompok kecil",
    },
    {
      value: "450+",
      title: "Alumni Terbina",
      detail: "Melanjutkan ke SMP & pesantren pilihan",
    },
  ],
  testimonials: [
    {
      initials: "HW",
      name: "Bapak Hendra Wijaya",
      role: "Wali Murid Kelas 4",
      quote:
        "Alhamdulillah, anak kami jadi lebih tertib menjaga shalat lima waktu dan senang berangkat ke sekolah tanpa harus dipaksa.",
    },
    {
      initials: "NR",
      name: "Ibu Nadia Rahmawati",
      role: "Wali Murid Kelas 2",
      quote:
        "Komunikasi wali kelas sangat terbuka. Setiap perkembangan bacaan Al-Qur'an dan sikap anak di kelas selalu disampaikan dengan sabar.",
    },
    {
      initials: "RA",
      name: "Bapak Rizki Pratama",
      role: "Wali Murid Alumni 2025",
      quote:
        "Bekal hafalan 3 Juz dan kemandirian dari SDIT sangat membantu anak kami beradaptasi saat masuk ke SMP pilihannya.",
    },
  ],
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = `Assalamu'alaikum, saya ingin menanyakan informasi mengenai ${SCHOOL_CONFIG.name}.`;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${SCHOOL_CONFIG.contact.whatsappNumber}?text=${text}`;
}
