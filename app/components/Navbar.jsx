"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Packages", link: "/packages" },
    { name: "Blogs", link: "/blogs" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 text-amber-300">
      {/* GOLD OUTER BORDER */}
      <div className="max-w-5xl mx-auto rounded-full p-[1px] bg-gradient-to-b from-[#FFE7A3] via-[#FFD700] to-[#B8962E] shadow-[0_0_25px_rgba(255,215,0,0.25)]">
        {/* INNER NAV */}
        <div className="px-6 bg-[#0b0b0b]/95 backdrop-blur-md rounded-full border border-amber-400/20">
          <div className="flex items-center justify-between py-3">
            {/* LOGO */}
            <div className="text-xl inline-flex gap-2 items-center font-semibold tracking-wide cursor-pointer text-transparent bg-clip-text bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]">
              <Image
                src={logo}
                alt="RR Tours Logo"
                width={30}
                height={30}
                priority
              /> Tours-Stays
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="relative font-medium text-white transition duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-gradient-to-r after:from-[#FFE7A3] after:to-[#FFD700]
                  after:transition-all after:duration-300 hover:after:w-full hover:text-[#FFE7A3]"
                >
                  {item.name}
                </a>
              ))}

              {/* GOLD CONTACT BUTTON */}
              <a
                href="https://wa.me/916380578937"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full 
                bg-gradient-to-b from-yellow-300 to-amber-500
                text-black font-semibold
                shadow-[0_0_15px_rgba(255,215,0,0.35)]
                border border-[#FFD700]/40
                hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]
                transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* MOBILE MENU ICON */}
            <button
              className="md:hidden text-amber-300"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE SLIDER */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#0b0b0b] to-black border-l border-amber-400/20 shadow-xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BTN */}
        <div className="flex justify-end p-6 text-amber-300">
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-6 px-6 text-amber-300">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className="
      relative text-lg font-medium text-white
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-gradient-to-r after:from-[#FFE7A3] after:to-[#FFD700]
      after:transition-all after:duration-300
      hover:after:w-full hover:text-[#FFE7A3]
      transition-all duration-300
      "
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.me/916380578937"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 rounded-full text-center font-semibold
            bg-gradient-to-b from-yellow-300 to-amber-500 text-black
            shadow-[0_0_15px_rgba(255,215,0,0.35)]"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
