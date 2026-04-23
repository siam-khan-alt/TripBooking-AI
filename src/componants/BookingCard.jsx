import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="bg-white relative lg:absolute lg:top-[486.22px] rounded-t-2xl rounded-b-none lg:rounded-2xl shadow-[0px_10px_20px_0px_rgba(0,0,0,0.05)] mt-6 lg:mt-0 p-4 lg:p-8  w-[95%] lg:w-full max-w-[1224px]  mx-auto left-0 right-0 z-20 lg:h-[230px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 font-bold text-[#000000]   ">
            <Image
              src="/icons/route-flag.svg"
              alt="Logo"
              width={18}
              height={18}
              className="w-[18px] h-[18px] "
            />{" "}
            Tours
          </button>
          <button className="flex items-center gap-2 px-5 py-2 font-semibold text-[14px] text-white bg-[#FAB326] rounded-[50px] ">
            <Image
              src="/icons/hotel.svg"
              alt="Logo"
              width={18}
              height={18}
              className="w-[18px] h-[18px] "
            /> Hotels
          </button>
        </div>
        <button className="text-sm text-[#737373] font-medium">
          Need some help?
        </button>
      </div>

      {/* Inner Search Box */}
      <div className="border border-[#E4E6E8] rounded-2xl p-4  lg:p-[29px] h-full lg:h-[104px] lg:w-full max-w-[1166px] grid grid-cols-1 md:grid-cols-12 gap-4 pb-[22px] pt-[23px] items-center">
        {/* Location */}
        <div className=" md:col-span-3 px-4 border-b md:border-b-0 md:border-r border-[#E4E6E8]">
          <label className="text-[14px] block text-left text-[#737373] font-bold mb-[5px]">
            Location
          </label>
          <div className="flex items-center justify-start gap-[15px] group cursor-pointer">
            <div className="flex items-center gap-[3px]">
              <MapPin size={16} className="text-[#D6D7D8]" />
              <span className="font-bold text-[#000000]">New York, USA</span>
            </div>
            <ChevronDown size={16} className="text-[#000000]" />
          </div>
        </div>

        {/* Date */}
        <div className="md:col-span-4 px-4 border-b md:border-b-0 md:border-r border-[#E4E6E8]">
          <label className="block text-left text-[14px] text-[#737373] font-bold mb-[5px]">
            Check In & Check Out
          </label>
          <div className="flex items-center justify-start gap-[21px] group cursor-pointer">
            <div className="flex items-center gap-[3px]">
              <Calendar size={16} className="text-[#D6D7D8]" />
              <span className="font-bold text-[#000000]">02 January 2024</span>
            </div>
            <ChevronDown size={16} className="text-[#000000]" />
          </div>
        </div>

        {/* Guests */}
        <div className="md:col-span-3 px-4">
          <label className="block text-left text-[14px] text-[#737373] font-bold mb-[5px] ">
            Guest
          </label>
          <div className="flex items-center justify-start gap-[15px] group cursor-pointer">
            <div className="flex items-center gap-[3px]">
              <Users size={16} className="text-[#D6D7D8]" />
              <span className="font-bold text-[#000000]">
                2 adults, 2 children
              </span>
            </div>
            <ChevronDown size={16} className="text-[#000000]" />
          </div>
        </div>

        {/* Search  */}
        <div className="md:col-span-2">
          <button className=" w-full bg-[#0640C3]  text-white py-4 px-8 rounded-[50px] font-bold flex items-center justify-center gap-1">
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
