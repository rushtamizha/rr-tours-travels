"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Check } from "lucide-react";
import "swiper/css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajan T",
      location: "Bangalore",
      img: "/Testimonials/1.webp",
      text: "We gone to pondicherry 🌴such a amazing tour trip with my friends . Stays and travel everything good & beach view . Camp fire with dj song + night vibe a🌚🔥 beautiful memories thanks for creating this memorable moments.Mr. Ram thanks for coordinating our team with full safe and romboo enjoy🥳🤩 panunom .. neenga guide panunathu nalla smooth ahh panuninga. Elame arrange panni kuduthinga . Nice kandipa next time tours ethuva irunthalum👍🏻 contact pandrom .Thank you RR tours and stays . 🤗",
      star:"★★★★★"
    },
    {
      name: "Anbu Venkat",
      location: "Chennai",
      img: "/Testimonials/2.webp",
      text: "I am thoroughly satisfied with the high quality of service and the delightful itinerary. A perfectly organized tour that delivered on its promise of a rewarding experience.The entire experience was immensely gratifying and worth every cent. This tour was pure bliss from start to finish! Every moment was filled with joy, and it truly felt like a 100% happiness guarantee. Im still smiling from ear to ear—it was a flawless journey where fun was the top priority. I loved every single minute and walked away with nothing but amazing memories.",
       star:"★★★★★"
    },
    {
      name: "CRSVC sri",
      location: "Hyderabad",
      img: "/Testimonials/3.webp",
      text: "Nice experience ♥️",
       star:"★★★★★"
    },
    {
      name: "lavanya sivakumar",
      location: "Chennai",
      img: "/Testimonials/4.webp",
      text: "It's good experience just explore page and just try it✨",
       star:"★★★★★"
    },
    {
      name: "Nandhini S",
      location: "Nilgis",
      img: "/Testimonials/1.webp",
      text: "I am very very happy super 🫶❤️🫶❤️❤️❤️",
       star:"★★★★★"
    },{
      name: "Ramani Jayakumar",
      location: "Ooty",
      img: "/Testimonials/2.webp",
      text: "Chennai to Ooty package full enjoyment. We visit all  site scenes . We really excited . I can't explain with words .bus travel with friends , botanical garden ,hills , everything I enjoyed . Thank you for RR TOURS AND STAYS",
       star:"★★★★★"
    },{
      name: "Evengeline jones",
      location: "ooty",
      img: "/Testimonials/3.webp",
      text: "Booked a 3-day trip to Manali with RR Tours and stays. The communication was seamless from the start. Our guide was incredibly knowledgeable about the places. The car was clean and the AC was a lifesaver in the heat. My only minor gripe was that the hotel they picked was a bit far from the main market, but overall a 5-star experience. Highly recommended☺️",
       star:"★★★★★"
    },{
      name: "arun nayagi",
      location: "Coimabatore",
      img: "/Testimonials/4.webp",
      text: "Chennai to velanganni tour best travel and bus arrangements lightings and song vibes .good enjoyment with my family . RR TOURS AND STAYS nalla guide panunnaga safety ah pathukitanga . Nalarnthuchu thank you thambi . Kandipa next time ungakitatha tours ku kaepom☺️",
       star:"★★★★★"
    },{
      name: "Parvathi suresh",
      location: "Chennai",
      img: "/Testimonials/1.webp",
      text: "Temple tour nice trip .palani to guruvayur bus travel safe trip .good experience.thank you RR TOURS & STAYS 👍 …",
       star:"★★★★★"
    },{
      name: "Manju prashanth",
      location: "Nilgris",
      img: "/Testimonials/2.webp",
      text: "Thank you Mr. Ram and RR TOURS AND STAYS. your secure and safety are too good . Food arrangements are nice and service are good  . The near beach view are pleasant feel. We hope stays because of good hearted and Drhopable  persons like you . The vehicle are good and well maintained .you made it all  Budget friendly . Rooms are very good and big space . We asked many peoples but no one respond like u . Ur response are very good and kind . You arranged everything whatever we want and you gave many  ideas wherever we want to go . Thank you soo much for everything . 👍",
       star:"★★★★★"
    },{
      name: "Vicky vicky",
      location: "Oothy",
      img: "/Testimonials/3.webp",
      text: "Had a really great experience with RR Tours and Stays! Everything was well organized and smooth from start to finish. The vehicle was clean and comfortable, and the driver was very polite and friendly. They explained the places clearly and made sure we didn’t miss any important spots.The stay arrangement was also neat and budget-friendly. Totally worth the money. They handled everything professionally but in a very friendly way.Highly recommend RR Tours and Stays for the trips. Will definitely book again! 👍",
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
