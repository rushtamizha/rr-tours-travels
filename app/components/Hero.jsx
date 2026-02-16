"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  const images = [
    "/packages/3.jpg",
  "/packages/12.jpg",
  "/packages/13.jpg",
  "/packages/14.webp",
  "/packages/15.webp",
  "/packages/16.jpg",
  "/packages/20.webp",
  "/packages/21.png",
  "/packages/22.avif",
  "/packages/alleppey.jpg",
  "/packages/chikmagalur.webp",
  "/packages/coorg.avif",
  "/packages/kanyakumari.jpg",
  "/packages/kochi.jpg",
  "/packages/Kodaikanal.webp",
  "/packages/kovalam.webp",
  "/packages/Madurai.jpg",
  "/packages/Mahabalipuram.webp",
  "/packages/munnar.webp",
  "/packages/mysore.webp",
  "/packages/Rameswaram.jpg",
  "/packages/thekkady.jpg",
  "/packages/wayanad.jpg",
  ]; // put these inside /public folder

  const [current, setCurrent] = useState(0);

  // Auto image loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-80" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* PREMIUM BADGE */}
        <div
          className="mb-6 px-6 py-2 rounded-full 
        bg-gradient-to-r from-black to-[#2e2500] backdrop-blur-md 
        border border-[#FFD700]/40
        shadow-[0_0_20px_rgba(255,215,0,0.25)]
        text-amber-300 font-medium tracking-wide"
        >
          ✨ Premium Services
        </div>

        {/* MAIN HEADING */}
        <h1
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-b from-yellow-300 to-amber-500 mb-6 leading-tight"
        >
          Explore the Extraordinary with
          <br/>
           RR Tours & Stays
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-white text-lg md:text-xl leading-relaxed">
          Delivering structured travel solutions with precision, reliability, and a commitment to
excellence — for every client, every journey, everywhere
        </p>

        <Link
          href="/packages"
          className="
  group mt-8 inline-flex items-center gap-3
  px-6 py-2 rounded-full
  bg-gradient-to-r from-black to-[#2e2500]
  border border-[#FFD700]/40
  shadow-[0_0_20px_rgba(255,215,0,0.25)]
  text-amber-300 font-medium tracking-wide
  backdrop-blur-md
  hover:shadow-[0_0_30px_rgba(255,215,0,0.45)]
  transition-all duration-300
  "
        >
          Explore Packages
          {/* ARROW */}
          <ArrowRight
            className="
    transition-transform duration-300
    group-hover:translate-x-2
    "
            size={18}
          />
        </Link>
      </div>
    </section>
  );
}
