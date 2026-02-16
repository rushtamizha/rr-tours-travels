"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Check } from "lucide-react";
import "swiper/css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      img: "/Testimonials/1.webp",
      text: "Amazing family trip! Everything was perfectly organized. The car was clean and driver was very knowledgeable. Highly recommended!",
      star:"★★★★★"
    },
    {
      name: "Rahul Kumar",
      location: "Chennai",
      img: "/Testimonials/2.webp",
      text: "Best Ooty experience ever! Smooth booking process and premium service throughout the journey.",
       star:"★★★★★"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      img: "/Testimonials/3.webp",
      text: "Loved the trip planning and support. Truly professional travel team!",
       star:"★★★★★"
    },
    {
      name: "Arjun Mehta",
      location: "Mumbai",
      img: "/Testimonials/4.webp",
      text: "Fantastic arrangements and comfortable stay. Would book again!",
       star:"★★★★★"
    },
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400">
          Customer Reviews
        </h2>

        <p className="text-white mt-3 mb-10">
          See what our happy customers say about their experience
        </p>

        {/* GOOGLE RATING BADGE */}
        <div
          className="
        mx-auto mb-14 inline-flex items-center gap-6
        px-10 py-6 rounded-2xl
        border border-[#FFD700]/30
        bg-gradient-to-r from-[#120f00] to-[#000]
        shadow-[0_0_35px_rgba(255,215,0,0.2)]
        "
        >
          <span className="text-5xl text-[#FFD700] font-bold">G</span>

          <div className="text-left">
            <div className="text-[#FFD700] text-xl">
              ★★★★★ <span className="ml-2 text-white/80">4.9/5</span>
            </div>

            <div className="mt-2 inline-flex  px-1.5 py-1 text-sm rounded-full border border-[#FFD700]/30 text-white  gap-1">
              <div className="bg-yellow-800 rounded-full">
                {" "}
                <Check size={20} />
              </div>{" "}
              Verified Reviews
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div
                className="
              group h-full text-left
              rounded-[26px]
              border border-[#FFD700]/30
              bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
              p-6
              shadow-[0_0_25px_rgba(255,215,0,0.15)]
              hover:shadow-[0_0_45px_rgba(255,215,0,0.35)]
              transition-all duration-500
              "
              >
                {/* STARS */}
                <div className="text-[#FFD700] mb-4 text-lg">{review.star}</div>

                {/* TEXT */}
                <p className="text-white text-sm leading-relaxed">
                  {review.text}
                </p>

                {/* USER */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.img}
                      alt="user"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />

                    <div>
                      <p className="text-amber-300 font-medium">
                        {review.name}
                      </p>
                      <p className="text-xs text-amber-300/70">
                        {review.location}
                      </p>
                    </div>
                  </div>

                  {/* GOOGLE ICON */}
                  <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-black text-xs font-bold">
                    <Image
                      src="/google.png"
                      alt="Google logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
