"use client";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto px-1 lg:px-16 pt-[52px] pb-[52px] lg:pb-[109px]">
      <div className="relative w-full max-w-[1811px] mx-auto bg-[#0640C3] py-20 lg:py-28 overflow-hidden ">
        {/* Left Side Layer */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "630px",
            height: "499px",
            left: "-26px",
            top: "-114px",
            background:
              "linear-gradient(180deg, #F1F6FF 0%, rgba(145, 148, 153, 0) 100%)",
            filter: "blur(100px)",
            opacity: 0.7,
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
        {/*  Right Side Layer */}
         
        <div
          className="absolute pointer-events-none"
          style={{
            width: "630px",
            height: "499px",
            right: "-100px",
            bottom: "-155px",
            background:
              "linear-gradient(180deg, #F1F6FF 0%, #CACFD6 50%, #919499 100%)",
            opacity: 0.7,
            borderRadius: "50%",
            zIndex: 1,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="relative z-10 max-w-[1224px] mx-auto px-5 lg:px-0 flex flex-col items-start text-left">
          <h2 className="text-white text-3xl lg:text-[40px] font-bold leading-tight mb-[14px]">
            Find the Best Travel <br />
            Deals Instantly with AI!
          </h2>

          <p className="text-white/80 font-medium max-w-[677px] mb-[50px]">
            No more endless searching! Our AI scans thousands of travel packages
            to find you the best deals - Whether it’s a budget getaway or a
            luxury escape, we’ll match you with the best deal — instantly!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-white px-[25px] py-[14px] rounded-2xl"
            >
              <div className="relative w-[25px] h-[25px]">
                <Image
                  src="/apple-icon.png"
                  alt="Apple"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[1px] h-[32px] bg-black"></div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[12px] text-gray-500 font-medium">
                  Download on the 
                </span>
                <span className="text-[15px] font-bold text-black">
                  Apple Store
                </span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white px-[25px] py-[14px] rounded-2xl"
            >
              <div className="relative w-[25px] h-[25px]">
                <Image
                  src="/google-play-icon.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[1px] h-[32px] bg-black"></div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[12px] text-gray-500 font-medium">
                  Get it on
                </span>
                <span className="text-[15px] font-bold text-black">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}