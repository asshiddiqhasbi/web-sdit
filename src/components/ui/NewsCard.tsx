import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { NewsItem } from "@/data/berita";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-ivory-light border border-sand/70 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
      <div>
        {/* Card Thumbnail (Architectural Straight Edges) */}
        <div className="w-full h-52 overflow-hidden relative bg-sand-light">
          {news.imageUrl ? (
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${news.imageBg} flex items-center justify-center p-6 text-center`}>
              <span className="text-xs font-semibold text-ivory/90 uppercase tracking-widest">
                {news.category}
              </span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-forest/90 backdrop-blur-xs text-ivory text-[10px] font-sans font-semibold uppercase tracking-wider">
              <Tag className="w-3 h-3 text-gold" />
              {news.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center text-xs text-charcoal-muted font-sans">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              {news.date}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg text-forest group-hover:text-forest-light transition-colors leading-snug">
            <Link href={`/berita/${news.slug}`}>
              {news.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed line-clamp-3">
            {news.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 pb-6 pt-2 border-t border-sand/40 mt-auto">
        <Link
          href={`/berita/${news.slug}`}
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-forest hover:text-gold transition-colors"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
        </Link>
      </div>
    </article>
  );
}
