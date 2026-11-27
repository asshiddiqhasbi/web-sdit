import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/school";

export default function FloatingWhatsApp() {
  const waUrl = getWhatsAppUrl(
    "Assalamu'alaikum, saya ingin berkonsultasi mengenai sekolah dan jadwal kunjungan."
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Sekretariat Sekolah"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-forest hover:bg-forest-light text-ivory border border-gold/40 shadow-lg transition-colors duration-200"
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
      <span className="hidden sm:inline font-sans font-semibold text-xs tracking-wide">
        Chat WhatsApp
      </span>
    </a>
  );
}
