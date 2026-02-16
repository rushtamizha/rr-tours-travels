"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  BriefcaseConveyorBelt,
  HeartHandshake,
  Eye,
  Disc2,
} from "lucide-react";
import Footer from "../components/Footer";
import GoldSparkleBackground from "../components/GoldSparkleBackground";

export default function AboutPage() {
  const handleWhatsApp = () => {
    const msg =
      "Hi, I want to know more about RR Tours & Stays packages in Ooty.";
    window.open(
      `https://wa.me/916380578937?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const handleCall = () => {
    window.location.href = "tel:7904207365";
  };

  const services = [
    {
      title: "Our Mission",
      desc: "Our mission is to provide structured, reliable, and high-quality travel solutions that combine professional planning with personalized service. We aim to create seamless travel experiences by managing every detail — from transportation and accommodation to itinerary coordination and on-ground support. We strive to build long-term relationships with corporates, educational institutions, and individual clients by maintaining transparency, accountability, and consistent service excellence.",
      icon: Disc2,
    },
    {
      title: "Our Vision",
      desc: "Our vision is to establish RR Tours & Stays as a trusted and recognized travel brand across South India and beyond. We aim to set new standards in organized travel management by integrating innovation, strong partnerships, and customer-focused strategies.We aspire to become the preferred travel partner for corporates, colleges, and premium clients seeking dependable and professionally managed travel services.",
      icon: Eye,
    },
    {
      title: "Our Innovation",
      desc: "Innovation drives the way we operate and grow. At RR Tours & Stays, we continuously explore modern tools, digital platforms, and smart coordination systems to enhance travel planning and execution.From streamlined booking processes and structured itinerary planning to real-time communication and customized travel solutions, we embrace innovation to improve efficiency, accuracy, and customer convenience.We believe that adapting to new trends, technologies, and evolving client expectations is essential to delivering next-generation travel management services.",
      icon: BriefcaseConveyorBelt,
    },
    {
      title: "Our Commitment",
      desc: "At RR Tours & Stays, commitment is the foundation of our operations.We are committed to: Delivering safe and well-coordinated travel experiences Ensuring transparent pricing and ethical business practices Maintaining punctuality and structured execution Offering responsive customer support before, during, and after travel Continuously improving our services through innovation and client feedback Every trip we handle reflects our dedication to quality, professionalism, and long-term client relationships.",
      icon: HeartHandshake,
    }
  ];

  return (
    <section className="bg-black text-amber-200 min-h-screen">
      <Navbar />
      <GoldSparkleBackground/>
      <div className="max-w-7xl mx-auto px-6 py-34 space-y-24">
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="grid md:grid-cols-2 gap-16 items-center"
>

  {/* ===== LEFT CONTENT ===== */}
  <div className="text-center md:text-left order-1">

    <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
      Founder & MD 
    </h1>

    <p className="mt-6 text-white leading-relaxed max-w-xl">
      JEYAM founded RR Tours & Stays with a vision to build a professionally managed travel and
event solutions company driven by structure, reliability, and service excellence.
With a leadership style rooted in precision, accountability, and client-focused planning, he
has positioned the organization as a trusted partner for individuals, corporates, and
institutions. His commitment to operational clarity and consistent execution defines the
standards of the company.
Excellence is not optional — it is our operating principle
    </p>

    {/* CTA */}
    <div className="flex md:justify-start justify-center gap-4 mt-10 flex-wrap ">
      <button
        onClick={handleCall}
        className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700]/10 transition"
      >
        <Phone size={18} /> Call Now
      </button>

      <button
        onClick={handleWhatsApp}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-yellow-300 to-amber-400 text-black font-semibold hover:scale-105 transition"
      >
        <MessageCircle size={18} /> WhatsApp Booking
      </button>
    </div>

  </div>

  {/* ===== RIGHT IMAGE ===== */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex justify-center md:justify-end order-2 md:order-2"
  >
    <div
      className="
      relative
      rounded-[30px]
      border-2 border-[#FFD700]
      p-2
      bg-gradient-to-br from-amber-300/10 to-yellow-600/20
      shadow-[0_0_40px_rgba(255,215,0,0.3)]
      "
    >
      <img
        src="/ootyagency.png"   
        alt="RR Tours Owner"
        className="
        w-[280px] md:w-[350px]
        rounded-[25px]
        object-cover
        "
      />
<div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-[25px] bg-gradient-to-br from-yellow-300 to-amber-500">

  <div className="
    
    border-t border-[#FFD700]/40
    py-2
  ">

    <div className="whitespace-nowrap animate-marquee text-black font-medium text-sm tracking-wide">

      ✨ Excellence is not optional — it is our operating principle &nbsp;&nbsp;&nbsp; 
      ✨ Leading with Vision. Delivering with Precision &nbsp;&nbsp;&nbsp;

    </div>

  </div>
</div>

    </div>
  </motion.div>

</motion.div>


        {/* ================= SERVICES GRID ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
            Our Mission & Vision
          </h2>

          <p className="text-white mt-3 mb-14">
            Where every journey is thoughtfully designed to perfection
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="
                  relative text-left p-6 rounded-[20px]
                  border border-[#FFD700]/20
                  bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
                  shadow-[0_0_20px_rgba(255,215,0,0.1)]
                  
                  transition-all duration-300
                  "
                >
                  {/* Left Gold Accent */}
                  <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]" />

                  <Icon className="text-[#FFD700] mb-4" size={24} />

                  <h3 className="text-lg text-[#FFD700] font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center rounded-[30px] border border-[#FFD700]/30 p-12 bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]">
          <h2 className="text-3xl text-[#FFD700] mb-6">
            Ready to Explore?
          </h2>

          <p className="max-w-2xl mx-auto text-white mb-10">
            Contact us today to plan your perfect  adventure. Our team is
            ready to create a customized itinerary just for you.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleCall}
              className="px-6 py-3 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700]/10 transition"
            >
              Call Now: 6380578937
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-full bg-gradient-to-b from-yellow-300 to-amber-400 text-black font-semibold hover:scale-105 transition"
            >
              WhatsApp Instant Booking
            </button>
          </div>
        </div>

        {/* ================= FIND US ON MAP ================= */}
        <div className="pt-24">
          {/* TITLE */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
              Find Us on Map
            </h2>

            <p className="text-white mt-3">
              Visit our office or get directions to meet us in person
            </p>
          </div>

          {/* MAP CARD */}
          <div
            className="
  max-w-6xl mx-auto
  rounded-[30px]
  border border-[#FFD700]/20
  overflow-hidden
  bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
  shadow-[0_0_40px_rgba(255,215,0,0.15)]
  "
          >
            {/* HEADER BAR */}
            <div
              className="
    px-6 py-4
    text-[#FFD700]
    font-semibold
    border-b border-[#FFD700]/20
    bg-gradient-to-r from-[#120f00] to-black
    "
            >
              📍 Our Location in ooty
            </div>

            {/* GOOGLE MAP IFRAME */}
            <div className="w-full h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=Ooty&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>

            {/* ADDRESS */}
            <div className="px-6 py-5 text-amber-200/80 text-sm border-t border-[#FFD700]/20">
              📍 Ooty main road , Rajkumar Nagar , Ketti 
                The Nilgiris - 643 215
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
