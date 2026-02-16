"use client";

import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/916380578937"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999]"
    >
      {/* GLOW RING */}
      <span className="absolute inset-0 rounded-full animate-ping
      bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37] opacity-30 blur-md"></span>

      {/* BUTTON */}
      <div
        className="
        relative w-14 h-14
        rounded-full
        flex items-center justify-center
        text-black
        bg-gradient-to-b from-yellow-300 to-amber-500
        shadow-[0_0_25px_rgba(255,215,0,0.7)]
        hover:scale-110
        hover:shadow-[0_0_40px_rgba(255,215,0,1)]
        transition-all duration-300
        "
      >
        <MessageCircle size={26} />
      </div>
    </a>
  );
}
