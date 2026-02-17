"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Calendar,
  Users,
  Car,
  Hotel,
  Utensils,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import GoldSparkleBackground from "../components/GoldSparkleBackground";

export default function PackagesPage() {
  const  packages = [ {
    title: "Nilgiri Executive Circuit (Ooty – Coonoor – Kotagiri)",
    image: "/Packages/nilgris.jpeg",
    description:
      "Strategic hill station itinerary covering scenic landscapes, heritage landmarks, tea estates, and curated leisure experiences.",
  },

  {
    title: "Kodaikanal Premium Escape",
    image: "/Packages/Kodaikanal.webp",
    description:
      "Structured high-altitude retreat featuring lakefront experiences, nature trails, and signature viewpoints.",
  },

  {
    title: "Rameswaram Spiritual Corridor",
    image: "/Packages/Rameswaram.jpg",
    description:
      "Professionally coordinated pilgrimage program with temple access planning and coastal heritage visits.",
  },

  {
    title: "Madurai Heritage Immersion",
    image: "/Packages/Madurai.jpg",
    description:
      "Cultural architecture tour covering temple complexes and royal-era landmarks.",
  },

  {
    title: "Chennai – Mahabalipuram – Pondicherry Coastal Route",
    image: "/Packages/Mahabalipuram.webp",
    description:
      "Urban heritage, UNESCO monuments, and colonial cultural districts in a seamless coastal itinerary.",
  },

  {
    title: "Kanyakumari Southern Tip Experience",
    image: "/Packages/Kanyakumari.jpg",
    description:
      "India’s southernmost landmark visit with structured sunrise and memorial access.",
  },

  {
    title: "Munnar Highland Reserve",
    image: "/Packages/munnar.webp",
    description:
      "Tea valley landscapes, national park visits, and elevated climate retreat experiences.",
  },

  {
    title: "Alleppey Private Houseboat Charter",
    image: "/Packages/alleppey.jpg",
    description:
      "Exclusive backwater cruise with onboard hospitality and curated dining options.",
  },

  {
    title: "Thekkady Wildlife & Spice Trail",
    image: "/Packages/thekkady.jpg",
    description:
      "Sanctuary boating experience with plantation visits and eco-tour coordination.",
  },

  {
    title: "Wayanad Forest & Waterfall Circuit",
    image: "/Packages/wayanad.jpg",
    description:
      "Highland terrain exploration with structured nature access and dam visits.",
  },

  {
    title: "Kochi Heritage & Trade Route Tour",
    image: "/Packages/kochi.jpg",
    description:
      "Historic port city experience including colonial districts and maritime heritage.",
  },

  {
    title: "Kovalam – Varkala Coastal Retreat",
    image: "/Packages/kovalam.webp",
    description:
      "Premium beach access programs with cliffside leisure and relaxation planning.",
  },

  {
    title: "Coorg Plantation Retreat",
    image: "/Packages/coorg.avif",
    description:
      "Coffee estate landscapes, waterfall visits, and structured eco-tour programs.",
  },

  {
    title: "Mysore Royal Heritage Tour",
    image: "/Packages/mysore.webp",
    description:
      "Palace architecture, hill temples, and illuminated garden experiences.",
  },

  {
    title: "Chikmagalur Mountain Expedition",
    image: "/Packages/chikmagalur.webp",
    description:
      "Peak viewpoints, coffee trails, and scenic highland drives.",
  },

  {
    title: "Hampi UNESCO Heritage Circuit",
    image: "/Packages/14.webp",
    description:
      "World heritage ruins with guided monument access and architectural exploration.",
  },

  {
    title: "Bangalore Urban Signature Tour",
    image: "/Packages/3.jpg",
    description:
      "Garden city highlights and landmark cultural institutions.",
  },

  {
    title: "Gokarna Coastal Serenity Program",
    image: "/Packages/12.jpg",
    description:
      "Beach circuit with private transfer and leisure coordination.",
  },

  {
    title: "Goa – Coastal Leisure Executive Plan",
    image: "/Packages/13.jpg",
    description:
      "Curated North & South Goa circuit including beach access, heritage churches, and private leisure scheduling.",
  },

  {
    title: "Andaman & Nicobar Premium Island Escape",
    image: "/Packages/20.webp",
    description:
      "Havelock Island, Radhanagar Beach, cellular heritage sites, and structured island transfers with marine experiences.",
  },

  {
    title: "Manali Alpine Retreat",
    image: "/Packages/22.avif",
    description:
      "Mountain valley landscapes, Solang Valley excursions, snow experience planning, and high-altitude leisure programs.",
  },

  {
    title: "Kashmir Signature Experience",
    image: "/Packages/15.webp",
    description:
      "Srinagar houseboat stay, Gulmarg meadow landscapes, Pahalgam valley retreat, and structured scenic mobility planning.",
  },

  {
    title: "Delhi Capital Heritage Circuit",
    image: "/Packages/21.png",
    description:
      "Red Fort, India Gate, Qutub Minar, Rajpath axis, and Old Delhi cultural walk integrated into a professional urban itinerary.",
  },

];

  const handleWhatsApp = (pkg) => {
    const message = `
✨ TOUR PACKAGE ENQUIRY ✨

📦 Package: ${pkg.title}
🗓 Duration: ${pkg.days}
👥 Suitable For: ${pkg.persons}
🚗 Transport: ${pkg.transport}
🏨 Stay: ${pkg.hotel}
🍽 Food: ${pkg.food}

Hi, I'm interested in this package. Please share more details.
`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916380578937?text=${encoded}`, "_blank");
  };

  /* ===== ANIMATION VARIANTS ===== */

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black min-h-screen py-24 px-6">
      <Navbar />
      <GoldSparkleBackground/>

      <div className="max-w-7xl mx-auto m-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
            Tour Packages
          </h1>

          <p className="text-white mt-4">
            Explore our premium travel packages crafted for unforgettable experiences
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleWhatsApp(pkg)}
              className="
              cursor-pointer
              group relative rounded-[26px]
              border border-[#FFD700]/30
              bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
              overflow-hidden
              shadow-[0_0_25px_rgba(255,215,0,0.15)]
              
              transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-[180px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="
                    absolute top-3 right-3
                    w-10 h-10 rounded-full
                    bg-black/70 backdrop-blur-md
                    border border-[#FFD700]/50
                    flex items-center justify-center
                    text-amber-300
                    "
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-8">
                <h3 className="text-xl text-[#FFD700] font-semibold mb-4">
                  {pkg.title}
                </h3>

                <p className="text-white">{pkg.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <Footer/>
    </section>
  );
}
