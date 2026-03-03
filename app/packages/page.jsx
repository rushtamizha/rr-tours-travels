"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import GoldSparkleBackground from "../components/GoldSparkleBackground";

export default function PackagesPage() {

  /* ================= STATE ================= */

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [formData, setFormData] = useState({
    date: "",
    members: "",
    pickup: "",
    stay: "",
    kids: "",
    kidsAge: "",
    budget: 15000,
  });

  /* ================= ESC CLOSE ================= */

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPackage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* ================= PACKAGES ================= */

  const packages = [
    {
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

  /* ================= WHATSAPP SUBMIT ================= */

  const handleSubmit = () => {
    if (!formData.date || !formData.members || !formData.pickup) {
      alert("Please fill Date, Members & Pickup Location");
      return;
    }

    const message = `
✨ TOUR PACKAGE ENQUIRY ✨

📦 Package: ${selectedPackage.title}

🗓 Date: ${formData.date}
👥 Total Members: ${formData.members}
🚗 Pickup & Drop From: ${formData.pickup}
🏨 Stay Duration: ${formData.stay}
👶 No Of Kids: ${formData.kids}
👶 Kids Age: ${formData.kidsAge}
💰 Budget: ₹${formData.budget}

Hi, I'm interested in this package. Please share more details.
`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916380578937?text=${encoded}`, "_blank");

    setSelectedPackage(null);
  };

  /* ================= UI ================= */

  return (
    <section className="bg-black min-h-screen py-24 px-6 relative">
      <Navbar />
      <GoldSparkleBackground />

      <div className="max-w-7xl mx-auto m-10">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPackage(pkg)}
              className="cursor-pointer group relative rounded-[26px] border border-[#FFD700]/30 bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400] overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.15)]"
            >
              <div className="relative p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-[180px] object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 border border-[#FFD700]/50 flex items-center justify-center text-amber-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-8">
                <h3 className="text-xl text-[#FFD700] font-semibold mb-4">
                  {pkg.title}
                </h3>
                <p className="text-white text-sm">{pkg.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPackage(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-[#FFD700]/40 rounded-3xl w-full max-w-lg p-8 shadow-[0_0_40px_rgba(255,215,0,0.2)]"
            >
              <h2 className="text-2xl text-[#FFD700] font-semibold mb-6">
                {selectedPackage.title}
              </h2>

              <div className="space-y-4">
                <input type="date"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,date:e.target.value})} />

                <input type="number" placeholder="Total Members"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,members:e.target.value})} />

                <input type="text" placeholder="Pickup & Drop Location"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,pickup:e.target.value})} />

                <input type="text" placeholder="Stay Duration (3D / 2N)"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,stay:e.target.value})} />

                <input type="number" placeholder="No Of Kids"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,kids:e.target.value})} />

                <input type="text" placeholder="Kids Age (5,8)"
                  className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white"
                  onChange={(e)=>setFormData({...formData,kidsAge:e.target.value})} />

                <div>
                  <label className="text-white block mb-2">
                    Budget Per Head : ₹{formData.budget}
                  </label>
                  <input type="range"
                    min="3000"
                    max="200000"
                    step="100"
                    value={formData.budget}
                    onChange={(e)=>setFormData({...formData,budget:e.target.value})}
                    className="w-full accent-yellow-400" />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold hover:scale-105 transition"
                >
                  Send Enquiry on WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
}
