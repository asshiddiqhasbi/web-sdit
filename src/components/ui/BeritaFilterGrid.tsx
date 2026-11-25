"use client";

import { useState } from "react";
import Link from "next/link";
import { NewsItem } from "@/data/berita";
import NewsCard from "@/components/ui/NewsCard";

interface BeritaFilterGridProps {
  items: NewsItem[];
}

export default function BeritaFilterGrid({ items }: BeritaFilterGridProps) {
  const categories = ["Semua", ...Array.from(new Set(items.map((item) => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filtered =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const featured = selectedCategory === "Semua" && filtered.length > 0 ? filtered[0] : null;
  const gridItems = featured ? filtered.slice(1) : filtered;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-sand/80">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-sans font-semibold transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
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

      {/* Featured Lead Article */}
      {featured && (
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-sand/80 pb-8 sm:pb-10 group">
          <Link
            href={`/berita/${featured.slug}`}
            className="lg:col-span-7 border border-sand bg-sand-light aspect-[16/10] overflow-hidden block"
          >
            {featured.imageUrl && (
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </Link>
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 text-xs font-sans text-charcoal-muted">
              <span className="font-semibold text-gold uppercase tracking-wider">
                {featured.category}
              </span>
              <span>•</span>
              <span>{featured.date}</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest leading-snug group-hover:text-forest-light transition-colors">
              <Link href={`/berita/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="pt-1">
              <Link
                href={`/berita/${featured.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-ivory bg-forest hover:bg-forest-light transition-colors"
              >
                Baca Artikel Utama
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {gridItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
