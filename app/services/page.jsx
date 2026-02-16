"use client";

import { motion } from "framer-motion";
import {
  Map,
  Mountain,
  Car,
  Hotel,
  Group,
  Bus,
  Plane,
  Cake,
  Balloon,
  Luggage,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Goudy_Bookletter_1911 } from "next/font/google";
import GoldSparkleBackground from "../components/GoldSparkleBackground";

export default function ServicesPage() {

  const services = [
    {
      title: "Sightseeing Tours",
      desc: "Professionally curated destination experiences covering major attractions with structured itineraries",
      icon: Map,
    },
    {
      title: "Adventure Programs",
      desc: "Organized outdoor and experiential activities designed with safety and expert coordination",
      icon: Mountain,
    },
    {
      title: "Accommodation Bookings",
      desc: "Reliable hotel and room reservation services across all categories to match client preferences.",
      icon: Car,
    },
    {
      title: "Corporate Travel Management",
      desc: "Comprehensive business travel planning for meetings, conferences, events and executive movements.",
      icon: Hotel,
    },
    {
      title: "Group & Institutional Tours",
      desc: "Well-coordinated travel solutions for colleges, companies, and large group movements.",
      icon: Group,
    },
    {
      title: "Transportation Services",
      desc: "Private cars, tempo travelers, buses, and airport transfers managed with punctuality and efficiency.",
      icon: Bus,
    },{
      title: "Flight & Ticket Reservations",
      desc: "Air, train, and bus ticket booking services with streamlined scheduling support.",
      icon: Plane,
    },{
      title: "Event Management Services",
      desc: "Professional planning and execution of corporate events, celebrations, gatherings, and special occasions with complete logistical coordination.",
      icon: Balloon,
    },{
      title: "Surprise Planning Services",
      desc: "Creative and confidential arrangement of birthdays, anniversaries, proposals, and customized surprise experiences.",
      icon: Cake,
    },{
      title: "Customized Travel Planning",
      desc: "Tailor-made itineraries designed according to budget, objectives, and specific travel requirements.",
      icon: Luggage,
    },
  ];

  /* ===== WHATSAPP REDIRECT ===== */
  const handleWhatsApp = (service) => {
    const message = `
✨ SERVICE ENQUIRY ✨

📌 Service: ${service.title}

Hi, I would like more details about this service. Please assist me.
`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916380578937?text=${encoded}`, "_blank");
  };

  /* ===== MOTION VARIANTS ===== */

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-black min-h-screen py-24 px-6">
      <Navbar />
      <GoldSparkleBackground/>

      <div className="max-w-7xl mx-auto m-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
            Our Premium Services
          </h1>

          <p className="text-white mt-4">
            Discover luxury travel experiences crafted for unforgettable memories.
          </p>
        </motion.div>

        {/* ===== SERVICES GRID ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleWhatsApp(service)}
                className="
                cursor-pointer
                group relative rounded-[26px]
                border border-[#FFD700]/30
                bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
                p-8
                shadow-[0_0_25px_rgba(255,215,0,0.15)]
                
                transition-all duration-500
                "
              >

                {/* ICON */}
                <div className="
                w-14 h-14 rounded-xl
                bg-gradient-to-b from-yellow-300 to-amber-400
                text-black flex items-center justify-center
                shadow-[0_0_20px_rgba(255,215,0,0.35)]
                mb-6
                ">
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl text-[#FFD700] font-semibold mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* ARROW ICON */}
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="
                  absolute top-4 right-4
                  w-10 h-10 rounded-full
                  bg-black/70 backdrop-blur-md
                  border border-[#FFD700]/50
                  flex items-center justify-center
                  text-amber-300
                  "
                >
                  <ArrowUpRight size={16} />
                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
      <Footer/>
    </section>
  );
}
