"use client";

export default function WhatsAppCTA({ title, location }) {
  const handleWhatsApp = () => {
    const message = `Hi, I saw your blog about ${title}. I want tour details in ${location}.`;

    window.open(
      `https://wa.me/916380578937?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className=" border border-yellow-200
      mt-12 px-8 py-3 rounded-full
      bg-gradient-to-b from-yellow-300 to-amber-400
      text-black font-semibold
      hover:scale-105 transition
      "
    >
      Book Tours & Stays on WhatsApp
    </button>
  );
}
