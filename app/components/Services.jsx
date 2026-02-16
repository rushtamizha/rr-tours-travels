'use client'
import { ArrowUpRight, Map, Mountain, Car, Hotel ,Group,Bus,Plane,Balloon , Cake , Luggage} from "lucide-react";

export default function Services() {
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

  return (
    <section  className="relative py-24 bg-black overflow-hidden">

      {/* GOLD SIDE GLOW */}
      <div className="absolute hidden top-0 left-0 w-96 h-full bg-gradient-to-r from-[#FFD700]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-6">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-500">
              Explore Tour Categories
            </h2>

            <p className="text-white mt-3 max-w-xl">
              Choose from our wide range of specialized tour services for the perfect experience
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.slice(0,4).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl
                border border-[#FFD700]/30
                bg-gradient-to-b from-[#111] to-[#000]
                hover:border-[#FFD700]/70
                hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]
                transition-all duration-500"
              >

                {/* TOP RIGHT ARROW ICON */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full
                border border-[#FFD700]/40
                flex items-center justify-center
                text-amber-300
                group-hover:bg-[#FFD700]/20
                transition">
                  <ArrowUpRight size={14} />
                </div>

                {/* MAIN ICON */}
                <div className="w-14 h-14 rounded-xl
                bg-gradient-to-b from-yellow-300 to-amber-500
                text-black
                flex items-center justify-center
                shadow-[0_0_20px_rgba(255,215,0,0.35)]
                mb-6">
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#FFD700] mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
