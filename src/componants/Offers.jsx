import Image from "next/image";
import {  ArrowRight, ArrowLeft } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      title1: "We Make Every ",
      title2: "Trips Special",
      subtitle: "",
      buttonText: "View More",
      buttonBg: "bg-[#FAB326]",
      image: "/offers/offer-1.png",
    },
    {
      title1: "Buy 1, Get 1 Free",
      title2: " Attractions",
      subtitle: "Limited Offers",
      buttonText: "View More",
      buttonBg: "bg-[#0640C3]",
      image: "/offers/offer-2.png",
    },
    {
      title1: "Buy 1, Get 1 Free",
      title2: " Attractions",
      subtitle: "Limited Offers",
      buttonText: "View More",
      buttonBg: "bg-[#FAB326]",
      image: "/offers/offer-3.png",
    },
  ];

  return (
    <section className="w-full bg-white mb-10 lg:mb-0 pt-[90px] relative overflow-hidden">
      <div className="max-w-[1324px] mx-auto px-6 lg:px-0 relative">
        
        {/* Navigation Arrows Desktop */}
        <div className="hidden xl:block">
          <button className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-black">
            <ArrowLeft size={16} />
          </button>
          <button className="absolute top-1/2 -right-[10px] -translate-y-1/2 w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-black">
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-0 lg:mb-10 mt-5 gap-6 lg:gap-[30px] max-w-[1224px] w-full mx-auto">
          {offers.map((offer, index) =>  (
              <div
                key={index}
                className={`relative h-[232px] rounded-2xl overflow-hidden flex border border-[#F2F4F6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] group cursor-pointer ${
                  index === 0 ? "justify-end p-[35px]" : "justify-start p-[30px]"
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <Image src={offer.image} alt="bg" fill className="object-cover" />
                </div>

                <div className={`relative z-10 flex flex-col h-full w-full ${index === 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className={`${index === 1 ? 'pt-4' : 'pt-0'}`}>
                    <div className={`h-[24px] ${index === 2 ? 'mb-[12px]' : 'mb-[6px]'}`}>
                      {offer.subtitle && (
                        <span className={`inline-block font-bold text-black ${index === 2 ? 'bg-white rounded py-[2px] px-[10px]' : ''}`}>
                          {offer.subtitle}
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`text-[24px] font-extrabold leading-[1.2] text-nowrap ${index === 0 ? 'text-white' : 'text-black'} ${index === 2 ? 'bg-white rounded mb-[5px] py-[2px] px-[10px]' : ''}`}>
                      {offer.title1}
                    </h3>
                    <h3 className={`text-[24px] font-extrabold leading-[1.2] ${index === 0 ? 'text-white' : 'text-black'} ${index === 2 ? 'bg-white py-[2px] px-[10px]' : 'mb-6'}`}>
                      {offer.title2}
                    </h3>
                  </div>

                  <div className={`mt-auto flex w-full ${index === 0 ? 'justify-end' : 'justify-start'}`}>
                    <button className={`${offer.buttonBg} text-white px-[23px] py-[7px] rounded-[50px] flex items-center gap-3 text-[14px] font-bold`}>
                      {offer.buttonText}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex xl:hidden justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-black">
            <ArrowLeft size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#E4E6E8] flex items-center justify-center text-black">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}