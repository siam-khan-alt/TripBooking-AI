'use client'
import Image from "next/image";
import { MapPin, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function TopRatedHotels() {
  const hotels = [
    {
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      price: "48.25",
      src: "/tours/journey2.png.png",
    },
    {
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      price: "17.32",
      src: "/tours/journey3.png.png",
    },
    {
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      price: "15.63",
      src: "/tours/journey4.png.png",
    },
    {
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      price: "48.25",
      src: "/tours/journey2.png.png",
    },
  ];

  return (
    <section className="w-full max-w-[1920px] bg-[#009AC5]/20 pt-20 pb-[52px] relative overflow-hidden mx-auto">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/topographic.svg"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        {/*  Title & Navigation */}
        <div className="flex max-w-[1224px] mx-auto flex-col lg:flex-row items-center lg:items-end justify-between mb-12 px-6 lg:px-0">
          <div>
            <h2 className="text-4xl lg:text-left text-center lg:text-[52px] font-extrabold text-[#000000] mb-2">
              Top Rated Hotels
            </h2>
            <p className="text-[18px] text-[#737373] font-medium lg:text-left text-center">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          <div className="flex gap-3 mt-8 lg:mt-0 mb-0 lg:mb-2">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
              <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Hotels Card */}
        <div className="flex flex-col lg:flex-row gap-6  pt-5 pb-20 px-6 lg:px-0 lg:pl-0 lg:ml-[calc((100vw-1224px)/2)]">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full lg:max-w-[403px]" 
            >
              <div className="relative h-[326px] w-full lg:rounded-[30px] rounded-2xl overflow-hidden">
                <Image
                  src={hotel.src}
                  alt={hotel.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white mr-0 -mt-28 lg:-mt-20 relative z-10 p-4 lg:p-8 rounded-2xl lg:rounded-[30px] w-full h-[273px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] border border-[#F2F4F6]">
                <h4 className="text-lg lg:text-2xl font-extrabold text-[#000000] mb-3 line-clamp-2 leading-tight">
                  {hotel.title}
                </h4>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#737373] text-[14px]">
                    <MapPin size={16} className="text-[#D6D7D8]" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#FAB326]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="mb-5 h-4"></div> 

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[20px] font-extrabold text-[#000000]">
                      ${hotel.price}
                    </span>
                    <span className="text-[14px] text-[#737373]">/ person</span>
                  </div>
                  <button className="bg-[#0640C3] text-white px-[19px] py-[9px] rounded-[50px] text-[14px] font-bold">
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