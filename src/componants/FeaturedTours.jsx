import Image from "next/image";
import { MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedTours() {
  const tours = [
    {
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      duration: "2 days 3 nights",
      guests: "4-6 guest",
      price: "48.25",
      badge: "Top Rated",
      badgeColor: "text-[#FAB326] ",
      src: "/tours/journey2.png.png",
    },
    {
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      duration: "3 days 3 nights",
      guests: "4-6 guest",
      price: "17.32",
      badge: "Best Sale",
      badgeColor: "text-[#3DC262]",
      src: "/tours/journey3.png.png",
    },
    {
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      duration: "7 days 6 nights",
      guests: "4-6 guest",
      price: "15.63",
      badge: "25% Off",
      badgeColor: "text-[#FAB326] ",
      src: "/tours/journey4.png.png",
    },
  ];

  return (
    <section className="w-full bg-white pt-[10px] pb-10 max-w-[1920px] mx-auto">
      <div className="max-w-[1224px] mx-auto px-6 lg:px-0">
        {/* Header with Arrows */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between mb-10">
          <div>
            <h2 className="text-4xl lg:text-left text-center lg:text-[52px] font-extrabold text-[#000000] mb-2">
              Our Featured Tours
            </h2>
            <p className="text-[18px] text-[#737373] font-medium lg:text-left text-center">
              Favorite destinations based on customer reviews
            </p>
          </div>

          <div className="flex gap-7 lg:gap-3 mb-2">
            <button className="w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-[#000000]">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-[#000000]">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <div key={index} className="   ">
              <div className="relative h-[326px] w-full lg:rounded-4xl rounded-2xl overflow-hidden">
                <Image
                  src={tour.src}
                  alt={tour.title}
                  width={390}
                  height={406}
                  className="object-cover "
                />
                <div
                  className={`absolute top-[22px] left-[25px] px-5 py-[5px] rounded-[50px] text-[14px] font-bold ${tour.badgeColor} bg-white`}
                >
                  {tour.badge}
                </div>
              </div>

              {/*-- Content Card --*/}
              <div className="bg-white mr-0  -mt-28 lg:-mt-20 relative z-10 p-4 lg:p-8 rounded-2xl lg:rounded-4xl w-full h-[273px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] border border-[#F2F4F6]">
                <h4 className="text-lg lg:text-2xl font-extrabold text-[#000000] mb-3  line-clamp-2">
                  {tour.title}
                </h4>

                <div className="flex items-center gap-1 text-[#737373] text-[14px] mb-4">
                  <MapPin size={16} className="text-[#D6D7D8]" />
                  <span>{tour.location}</span>
                </div>

                <div className="flex items-center gap-4 text-[#737373] text-[13px] font-medium mb-5">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-[#D6D7D8]" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-[#D6D7D8]" />
                    {tour.guests}
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[20px] font-extrabold text-[#000000]">
                      ${tour.price}
                    </span>
                    <span className="text-[14px] text-[#737373]">/ person</span>
                  </div>
                  <button className="bg-[#0640C3] text-white px-[19px] py-[9px] rounded-[50px] text-[14px] font-bold ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
