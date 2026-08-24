import Link from "next/link";
import { Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";
import { NewsItem } from "@/data/berita";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
      <div>
        {/* Card Thumbnail / Header */}
        <div
          className={`w-full h-48 bg-gradient-to-br ${news.imageBg} flex items-center justify-center p-6 text-center border-b border-slate-100 relative group-hover:scale-105 transition-transform duration-300`}
        >
          <div className="space-y-1 text-white">
            <div className="w-10 h-10 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold bg-white/90 text-slate-800 px-3 py-1 rounded-full shadow-xs inline-block">
              [Gambar Thumbnail Placeholder]
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
              <Tag className="w-3 h-3" />
              {news.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {news.date}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            {news.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {news.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-50 mt-auto">
        <Link
          href={`/berita/${news.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
