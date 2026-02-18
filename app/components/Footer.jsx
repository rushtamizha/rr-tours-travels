"use client";

import Link from "next/link";
import Image from "next/image"
import logo from "@/public/logo.png"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black  pt-20 pb-10 px-6 border-t border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3
            className="text-2xl font-semibold inline-flex items-center gap-2 text-transparent bg-clip-text 
        bg-gradient-to-b from-yellow-300 to-amber-500 mb-4"
          >
            <Image
                            src={logo}
                            alt="RR Tours Logo"
                            width={30}
                            height={30}
                            priority
                          /> Tours-Stays
          </h3>

          <p className="text-white leading-relaxed">
            Your trusted partner for comprehensive travel and event management
            solutions across destinations. Delivering structured planning,
            reliable coordination, and service excellence for individuals,
            corporates, and institutions.
          </p>

          <div className="mt-6 space-y-5">
            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <div
                className="
      w-10 h-10 rounded-full
      border border-[#FFD700]/40
      flex items-center justify-center
      text-[#FFD700]
      bg-[#120f00]
    "
              >
                <MapPin size={18} />
              </div>

              <p className="text-white leading-relaxed">
                Ooty main road , Rajkumar Nagar , Ketti 
                <br/> 
                The Nilgiris - 643 215
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div
                className="
      w-10 h-10 rounded-full
      border border-[#FFD700]/40
      flex items-center justify-center
      text-[#FFD700]
      bg-[#120f00]
    "
              >
                <Phone size={18} />
              </div>

              <p className="text-white">
                +91 6380578937 <br />
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div
                className="
      w-10 h-10 rounded-full
      border border-[#FFD700]/40
      flex items-center justify-center
      text-[#FFD700]
      bg-[#120f00]
    "
              >
                <Mail size={18} />
              </div>

              <p className="text-white">info@rr-tours.com
                <br/>
                jeyam.rrtours@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="hidden">
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {["Home", "Packages", "Tours", "Blogs"].map((item, i) => (
              <li key={i}>
                <Link href="/" className="hover:text-[#FFD700] transition">
                  {item} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== PACKAGES ===== */}
        <div>
          <h3
            className="text-2xl font-semibold text-transparent bg-clip-text 
        bg-gradient-to-b from-yellow-300 to-amber-500 mb-4"
          >
            What We Can Do For You
          </h3>

          <ul className="space-y-3">
            <li className="text-white">Tour Packages</li>
            <li className="text-white">Corporate Travel Management</li>
            <li className="text-white">Group & Institutional Tours</li>
            <li className="text-white">School & college iv trips</li>
            <li className="text-white">Accommodation & Transportation Services</li>
            <li className="text-white">Event Management</li>
            <li className="text-white">Surprise Planning Services</li>
            <li className="text-white">Customized Travel Programs</li>
          </ul>
        </div>

        {/* ===== SOCIAL ===== */}
        <div>
          <h3
            className="text-2xl font-semibold text-transparent bg-clip-text 
        bg-gradient-to-b from-yellow-300 to-amber-500 mb-4"
          >
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-6 text-amber-300">
            <Social link="https://www.instagram.com/rrtoursandstays?igsh=MTM0MTJnajM1d25p" icon={<Instagram size={18} />} />
            <Social link="https://youtube.com/@rrtoursstays?si=HcwSfQf-em2TwvZO" icon={<Youtube size={18} />} />
            <Social link="https://x.com/Jeyam_rrtours" icon={<Twitter size={18} />} />
            <Social link="https://www.linkedin.com/in/ramajeyam-madhankumar-6713873b1?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<Linkedin size={18} />} />
            <Social link="https://www.facebook.com/share/1HwaCbFZqS/" icon={<Facebook size={18} />} />
          </div>

          <ul className="space-y-2 text-amber-200/70">
            <li className="text-white">All tours rated 4.9/5 stars</li>
            <li className="text-white">10+ Happy Customer</li>
            <li className="text-white">Certified Tour Operator</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-[#FFD700]/20 pt-6 text-center text-white">
        <p>© 2026 RR Tours & Stays. All rights reserved.</p>

        <p className="mt-2 text-sm text-white">
          Website developed by{" "}
          <a
            href="https://wepzite.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:underline"
          >
            wepzite.in
          </a>
        </p>
      </div>
    </footer>
  );
}

function Social({ icon, link }) {
  if (!link) {
    return (
      <div
        className="
        w-10 h-10 rounded-full
        border border-[#FFD700]/40
        flex items-center justify-center
        hover:bg-[#FFD700]/10
        transition
        cursor-pointer
        text-[#FFD700]
        "
      >
        {icon}
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      w-10 h-10 rounded-full
      border border-[#FFD700]/40
      flex items-center justify-center
      hover:bg-[#FFD700]/10
      hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]
      transition duration-300
      cursor-pointer
      text-[#FFD700]
      "
    >
      {icon}
    </a>
  );
}
