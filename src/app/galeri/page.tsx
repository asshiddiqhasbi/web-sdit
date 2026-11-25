"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, X, ChevronLeft, Maximize2 } from "lucide-react";
import { DUMMY_PHOTOS, DUMMY_VIDEOS, GalleryPhoto } from "@/data/galeri";

const CATEGORIES = [
  "Semua",
  "Lingkungan Sekolah",
  "Kegiatan Belajar",
  "Kegiatan Islami",
  "Sains & Literasi",
];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "Semua"
      ? DUMMY_PHOTOS
      : DUMMY_PHOTOS.filter((photo) => photo.category === selectedCategory);

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
    <div className="space-y-10 sm:space-y-14 pb-12 sm:pb-16">
      
      {/* Editorial Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-sand/80 pb-6 sm:pb-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-muted">
              <Link href="/" className="hover:text-forest transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-sand-dark" />
              <span className="text-forest font-semibold">Galeri Kegiatan</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                  Dokumentasi Visual
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mt-1">
                  Galeri Kegiatan Siswa
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Arsip visual suasana belajar di kelas, halaqah Al-Qur'an, kegiatan sains, dan aktivitas harian siswa di SDIT [Nama Sekolah].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar & Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-sand/80">
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
                className={`px-3.5 py-2 text-xs font-sans font-semibold transition-colors shrink-0 cursor-pointer border-b-2 ${
                  isActive
                    ? "text-forest border-gold bg-sand/30"
                    : "text-charcoal-muted border-transparent hover:text-forest"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean Documentary Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <figure
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className="relative border border-sand bg-sand-light aspect-[4/3] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/25 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-ivory text-forest p-2.5 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <figcaption className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-sans text-charcoal-muted">
                  <span className="font-semibold text-gold uppercase tracking-wider">{photo.category}</span>
                  <span>{photo.date}</span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-forest group-hover:text-forest-light transition-colors leading-snug">
                  {photo.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-forest-dark/90 backdrop-blur-xs flex items-center justify-center p-4">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup modal"
            className="absolute top-4 right-4 z-50 p-2.5 bg-ivory text-forest hover:bg-gold transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Foto sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-ivory/90 text-forest hover:bg-gold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Foto berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-ivory/90 text-forest hover:bg-gold transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="relative max-w-4xl w-full bg-ivory border border-sand p-4 sm:p-6 space-y-4">
            <div className="w-full aspect-[16/10] bg-sand-light overflow-hidden border border-sand">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain bg-forest-dark/5"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pt-1">
              <div className="space-y-1">
                <span className="text-[11px] font-sans font-semibold text-gold uppercase tracking-wider">
                  {activePhoto.category} • {activePhoto.date}
                </span>
                <h2 className="font-heading font-bold text-lg text-forest">
                  {activePhoto.title}
                </h2>
                <p className="font-sans text-xs text-charcoal-muted">
                  {activePhoto.caption}
                </p>
              </div>
              <div className="text-xs font-sans text-charcoal-muted shrink-0">
                {activePhotoIndex + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Section (Sand Block Separation) */}
      <section className="bg-sand-light/60 border-t border-sand py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-sand pb-3">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase">
                Liputan Video
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-bold text-forest mt-0.5">
                Video Kegiatan Sekolah
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md">
              Tayangan dokumentasi profil sekolah dan kegiatan pembelajaran siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DUMMY_VIDEOS.map((video) => (
              <div key={video.id} className="bg-ivory border border-sand space-y-3 p-3">
                <div className="relative w-full aspect-video bg-forest-dark">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-1 pb-1 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-sans text-charcoal-muted">
                    <span className="font-semibold text-gold uppercase tracking-wider">{video.category}</span>
                    <span>{video.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-forest leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
