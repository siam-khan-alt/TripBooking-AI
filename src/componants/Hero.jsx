import Image from "next/image";
import Navbar from "./Navbar";
import BookingCard from "./BookingCard";

export default function Hero() {
  return (
    <section className="relative  w-full min-h-[587px] max-w-[1920px]  flex  flex-col items-center">
      <div className="absolute  inset-0 z-0">
        <Image
          src="/Hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0  bg-[#000000]/50"></div>
      </div>

      {/* Navbar  */}
      <Navbar />

      {/* Hero Content */}
      <div className=" z-10 flex flex-col items-center justify-center text-center mt-[76px] px-6">
        <div
          className="bg-[#FAB326]
          py-[14px] px-[23px] rounded-full text-white font-bold flex items-center gap-[9px] "
        >
          <Image
            src="/icons/earth.svg.svg"
            alt="Logo"
            width={23}
            height={15}
            className="w-[23px] h-[15px] "
          />
          Explore the world
        </div>
        <h1 className="text-white text-4xl mt-[25px] mb-5 lg:text-[52px] font-extrabold ">
          Your Gateway to Extraordinary Adventures
        </h1>
        <p className="text-white  max-w-[767.9px] text-2xl font-medium">
          Pack your bags and let Travila redefine your travel experience. Where
          every journey is a story waiting to be told
        </p>

        {/* Booking Card */}
        <BookingCard />
      </div>
    </section>
  );
}
