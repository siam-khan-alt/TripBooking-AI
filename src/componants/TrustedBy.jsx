import Image from "next/image";

export default function TrustedBy() {
  const partners = [
    { name: "CASA", src: "/partners/30 → casa.svg.png" },
    { name: "EgyptAir", src: "/partners/30 → egyptAir.svg.png" },
    { name: "Cubana", src: "/partners/30 → cubana.svg.png" },
    { name: "Delta", src: "/partners/30 → delta.svg.png" },
    { name: "ATA Airlines", src: "/partners/30 → ata.svg.png" },
    { name: "WestJet", src: "/partners/30 → westJet.svg.png" },
    { name: "Air Arabia", src: "/partners/30 → abx.svg.png" },
  ];

  return (
    <section className="w-full bg-[#E4E6E8] py-10 lg:py-0 lg:pt-[173px] lg:pb-[60px]">
      <div className="max-w-[1224px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-[65px]">
        {/*  Text Content */}
        <div className="max-w-[312px] text-center lg:text-left">
          <h3 className="text-[24px] font-bold text-[#000000] mb-[9.5px]">
            Trusted by
          </h3>
          <p className="text-[12px] mb-5 lg:mb-0 text-[#737373] font-medium ">
            We are a trusted partner of airlines, payment gateways, and travel
            services around the world.
          </p>
        </div>

        {/*  Partner Logos */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="  flex items-center justify-center  cursor-pointer"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={100}
                height={70}
                className="w-[100px] h-[70px] rounded-[10px] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
