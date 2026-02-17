"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PopularPackages() {
  const  packages = [ {
    title: "Nilgiri Executive Circuit (Ooty – Coonoor – Kotagiri)",
    image: "/Packages/nilgris.jpeg",
    description:
      "Strategic hill station itinerary covering scenic landscapes, heritage landmarks, tea estates, and curated leisure experiences.",
  },

  {
    title: "Kodaikanal Premium Escape",
    image: "/packages/kodaikanal.webp",
    description:
      "Structured high-altitude retreat featuring lakefront experiences, nature trails, and signature viewpoints.",
  },

  {
    title: "Rameswaram Spiritual Corridor",
    image: "/packages/rameswaram.jpg",
    description:
      "Professionally coordinated pilgrimage program with temple access planning and coastal heritage visits.",
  },

  {
    title: "Madurai Heritage Immersion",
    image: "/packages/madurai.jpg",
    description:
      "Cultural architecture tour covering temple complexes and royal-era landmarks.",
  },

];


  return (
    <section className="relative py-24 bg-black overflow-hidden">

      {/* LEFT GOLD GLOW */}
      <div className="absolute hidden left-0 top-0 h-full w-[400px] bg-gradient-to-r from-[#FFD700]/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-500 font-semibold">
          Top Trending Destination
        </h2>

        <p className="text-white mt-3 mb-14">
          Best selling tour packages with all-inclusive amenities
        </p>

        {/* ===== DESKTOP GRID ===== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
          {packages.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* ===== MOBILE SWIPER ===== */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
          >
            {packages.map((item, i) => (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BUTTON */}
        <p className="text-white mt-10">Executive-curated travel programs across premier destinations in India, designed with
structured planning, premium coordination, and scalable customization.</p>
        <Link
          href="/packages"
          className="
          inline-flex items-center gap-2 mt-16
          px-6 py-2 rounded-full
          border border-[#FFD700]/40
          text-amber-300
          hover:bg-[#FFD700]/10
          transition
          "
        >
          All packages
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT INSIDE SAME FILE ================= */

function Card({ item }) {
  return (
    <div
      className="
      group relative rounded-[26px]
      border border-[#FFD700]/40
      bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
      overflow-hidden
      shadow-[0_0_25px_rgba(255,215,0,0.15)]
      hover:shadow-[0_0_40px_rgba(255,215,0,0.35)]
      transition-all duration-500
      "
    >

      {/* IMAGE */}
      <div className="relative p-3">
        <div className="relative rounded-2xl overflow-hidden">

          <Image
            src={item.image || "/tour.jpg"}
            alt="tour"
            width={400}
            height={250}
            className="w-full h-[180px] object-cover transition duration-500 group-hover:scale-105"
          />

          {/* TOP RIGHT ARROW BADGE */}
          <Link href="/packages" className="
          absolute top-3 right-3
          w-10 h-10 rounded-full
          bg-black/70 backdrop-blur-md
          border border-[#FFD700]/50
          flex items-center justify-center
          text-amber-300
          ">
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-8 text-left">

        <h3 className="text-xl text-[#FFD700] font-semibold mb-4">
          {item.title}
        </h3>

        <p className="text-white">{item.description}</p>
      </div>
    </div>
  );
}
