import CTASection from "@/componants/CTASection";
import FeaturedTours from "@/componants/FeaturedTours";
import Hero from "@/componants/Hero";
import Offers from "@/componants/Offers";
import PopularDestinations from "@/componants/PopularDestinations";
import TopRatedHotels from "@/componants/TopRatedHotels";
import TrustedBy from "@/componants/TrustedBy";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-manrope w-full max-w-[1920px]  ">
      <section className="w-full px-6 max-w-[1920px] text-center bg-[#183497] text-white py-[9px]">
        <p >Autodesigner 2.0 is here. The most popular UI generator just got even better!</p>
      </section>
      <Hero/>
      <TrustedBy/>
      <PopularDestinations/>
      <FeaturedTours/>
      <Offers/>
      <TopRatedHotels/>
      <CTASection/>
    </div>
  );
}
