"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send } from "lucide-react";

const packageOptions = [
  "2 Days / 1 Night - Sightseeing",
  "3 Days / 2 Nights - Premium",
  "Adventure Special Package",
  "Honeymoon Luxury Package",
  "Family Budget Package",
];

export default function Testimonials() {
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    adults: "",
    kids: "",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.adults ||
      !form.package
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSending(true);

    const text = `
✨ NEW BOOKING REQUEST ✨

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📅 Travel Date: ${form.date}
👥 Adults: ${form.adults}
👥 Kids: ${form.kids}
📦 Package: ${form.package}
📝 Special Requirements: ${form.message}
`;

    const encoded = encodeURIComponent(text);

    const goldColors = ["#FFD700", "#FFE7A3", "#D4AF37"];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: goldColors,
    });

    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: goldColors,
    });

    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: goldColors,
    });

    setTimeout(() => {
      window.open(`https://wa.me/916380578937?text=${encoded}`, "_blank");
      setSending(false);
    }, 800);
  };

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl from-yellow-300 to-amber-500 text-transparent bg-clip-text bg-gradient-to-b  font-semibold">
            Quick Booking
          </h2>
          <p className="text-white mt-2">
            Fill the form and we'll contact you immediately on WhatsApp
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
          rounded-[26px]
          border border-[#FFD700]/30
          bg-gradient-to-b placeholder:text-white from-[#111] via-[#120f00] to-[#1a1400] 
          p-8 md:p-12
          shadow-[0_0_40px_rgba(255,215,0,0.15)]
          "
        >
          <h3 className="text-center text-amber-300 text-xl mb-10">
            Book Your Trip Now
          </h3>

          <div className="grid md:grid-cols-2 gap-6 ">
            <Input label="Full Name *" name="name" onChange={handleChange} />

            <Input
              label="Phone Number *"
              name="phone"
              type="tel"
              onChange={handleChange}
            />

            <Input label="Email Address" name="email" onChange={handleChange} />

            <Input
              label="Travel Date *"
              name="date"
              type="date"
              onChange={handleChange}
            />

            <Input
              label="Number of Adults *"
              name="adults"
              onChange={handleChange}
            />

            <Input
              label="Number of Kids *"
              name="kids"
              onChange={handleChange}
            />

            {/* PACKAGE SELECT */}
            <div>
              <label className="text-white text-sm">Select Package *</label>
              <select
                name="package"
                required
                onChange={handleChange}
                className="
w-full mt-2 p-4 rounded-xl
bg-transparent
border border-[#FFD700]/30
focus:border-[#FFD700]/60
outline-none
text-white/40
"
              >
                <option value="">Select package</option>
                {packageOptions.map((pkg, i) => (
                  <option key={i} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* TEXTAREA */}
          <div className="mt-6">
            <label className="text-white text-sm">
              Special Requirements
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Enter Your Special Requirements"
              className="
              w-full mt-2 p-4 rounded-xl
              bg-transparent
              text-white
              border border-[#FFD700]/30
              focus:border-[#FFD700]/60
              outline-none
              placeholder:text-white/40
              "
            />
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={sending}
              className="
              group flex items-center gap-3
              px-8 py-3 rounded-full
              bg-gradient-to-b from-yellow-300 to-amber-500
              text-black font-semibold
              shadow-[0_0_20px_rgba(255,215,0,0.4)]
              hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]
              hover:scale-105
              transition
              "
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send on WhatsApp"}
            </button>
          </div>
        </form>

        {/* FOOTER BADGE */}
        <div
          className="
        mt-10 text-center
        border border-[#FFD700]/20
        rounded-xl py-4
        text-white/80
        bg-gradient-to-r from-[#120f00] to-[#000]
        "
        >
          ⚡ We'll contact you within 15 minutes on WhatsApp with the best deal!
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="text-white text-sm">{label}</label>
      <input
        type={type}
        name={name}
        required={label.includes("*")}
        onChange={onChange}
        inputMode={name === "phone" ? "numeric" : undefined}
        pattern={name === "phone" ? "[0-9]*" : undefined}
        placeholder={`Enter your ${label.replace("*", "")}`}
        className="
        w-full mt-2 p-4 rounded-xl
        bg-transparent
        border border-[#FFD700]/30
        focus:border-[#FFD700]/60
        outline-none
        text-white
        placeholder:text-white/40
        "
      />
    </div>
  );
}
