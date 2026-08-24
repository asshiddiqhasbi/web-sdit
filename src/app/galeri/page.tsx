"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Image as ImageIcon,
  X,
  ChevronLeft,
  Calendar,
  Tag,
  Maximize2,
  Video,
} from "lucide-react";
import { DUMMY_PHOTOS, DUMMY_VIDEOS, GalleryPhoto } from "@/data/galeri";
import FadeIn from "@/components/ui/FadeIn";

const CATEGORIES = [
  "Semua",
  "Kegiatan Islami",
  "Seni & Bakat",
  "Sains & Teknologi",
  "Olahraga",
  "Edukasi Outdoor",
  "Acara Sekolah",
];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === "Semua"
      ? DUMMY_PHOTOS
      : DUMMY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  // Navigation inside Lightbox
  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleClose = () => {
    setActivePhotoIndex(null);
  };

  // Keyboard navigation event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  const activePhoto: GalleryPhoto | null =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="space-y-16 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HEADER HALAMAN & BREADCRUMB */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-12 px-4 sm:px-6 lg:px-8 shape-curve-bottom relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-islamic-pattern opacity-25"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 text-center">
          <FadeIn direction="up">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-emerald-200 mb-2">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-amber-300">Galeri Kegiatan</span>
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-amber-300 text-xs font-semibold">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Dokumentasi Visual</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
                Galeri Kegiatan Siswa
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto pt-1">
                Abadikan momen keceriaan, kebersamaan belajar, serta berbagai pencapaian bermakna di SDIT [Nama Sekolah].
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. CATEGORY TABS & GRID FOTO */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filter Pills */}
        <FadeIn direction="up">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActivePhotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Photo Grid (2 cols mobile, 3 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <FadeIn key={photo.id} direction="up" delay={index * 0.06}>
              <div
                onClick={() => setActivePhotoIndex(index)}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Photo Thumbnail */}
                <div
                  className={`h-44 sm:h-52 bg-gradient-to-br ${photo.gradientBg} flex flex-col items-center justify-center p-4 text-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 shadow-xs group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {photo.category}
                  </span>
                </div>

                {/* Caption */}
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* LIGHTBOX MODAL POPUP */}
      {/* ---------------------------------------------------- */}
      {activePhoto && activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup modal"
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Foto sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Foto berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            
            {/* Image Preview Large Container */}
            <div
              className={`w-full h-72 sm:h-96 rounded-2xl bg-gradient-to-br ${activePhoto.gradientBg} flex flex-col items-center justify-center p-6 text-white text-center shadow-inner relative`}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                [Tampilan Foto Besar Placeholder]
              </h3>
              <p className="text-xs text-amber-200 font-medium mt-1">
                Dokumentasi Resmi SDIT [Nama Sekolah]
              </p>
            </div>

            {/* Modal Caption Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                    <Tag className="w-3 h-3" />
                    {activePhoto.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {activePhoto.date}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-lg text-slate-900">
                  {activePhoto.title}
                </h2>
              </div>

              <div className="text-xs text-slate-400 font-medium">
                {activePhotoIndex + 1} dari {filteredPhotos.length} Foto
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. VIDEO KEGIATAN SEKOLAH */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200/60 space-y-8">
        
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-1">
              <Video className="w-3.5 h-3.5 text-amber-700" />
              <span>Kanal Video</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Video Kegiatan Sekolah
            </h2>
            <p className="text-slate-600 text-sm">
              Saksikan tayangan liputan kegiatan, profil sekolah, dan penampilan kreasi seni santri SDIT.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DUMMY_VIDEOS.map((video, idx) => (
            <FadeIn key={video.id} direction="up" delay={idx * 0.15}>
              <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full">
                {/* Responsive YouTube Embed Container */}
                <div className="relative w-full aspect-video bg-slate-900">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Title & Meta */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                      <Tag className="w-3 h-3" />
                      {video.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {video.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </section>

    </div>
  );
}
