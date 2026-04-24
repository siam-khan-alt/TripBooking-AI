import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Venice",
      tours: 356,
      src: "/destinations/Link → popular1.png.png",
    },
    {
      name: "Amsterdam",
      tours: 356,
      src: "/destinations/Link → popular2.png.png",
    },
    {
      name: "Budapest",
      tours: 356,
      src: "/destinations/Link → popular3.png.png",
    },
    {
      name: "Lisbon",
      tours: 356,
      src: "/destinations/Link → popular4.png.png",
    },
    {
      name: "London",
      tours: 356,
      src: "/destinations/Link → popular5.png.png",
    },
    {
      name: "Ottawa",
      tours: 356,
      src: "/destinations/Link → popular6.png.png",
    },
    { name: "Paris", tours: 356, src: "/destinations/Link → popular7.png.png" },
  ];

  return (
    <section className="w-full bg-white pt-[100px] pb-[130px] max-w-[1920px] mx-auto ">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-0">
        {/* Header Content */}
        <div className="mb-[38px]">
          <h2 className="text-4xl lg:text-[52px] font-extrabold text-[#000000] lg:text-left text-center mb-3">
            Popular Destinations
          </h2>
          <p className="text-[20px] lg:text-left text-center text-[#737373] font-medium">
            Favorite destinations based on customer reviews
          </p>
        </div>

        {/* --- Destination Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-[#E4E6E8] p-4 h-[305px] flex flex-col"
            >
              {" "}
              <div className="relative h-[326px] w-full lg:rounded-[20px] rounded-2xl overflow-hidden h-[202px]">
                <Image
                  src={dest.src}
                  alt={dest.name}
                  fill
                  className="object-cover "
                />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-[#000000] mt-2 mb-[6px]">
                  {dest.name}
                </h4>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-[14px] text-[#737373] ">
                    {dest.tours} Tours
                  </p>

                  <button className="w-[27px] h-[27px] rounded-full bg-[#F2F4F6] flex items-center justify-center text-[#000000] ">
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* --- Action Card --- */}
          <div className="bg-[#0640C3] rounded-3xl p-[19px] text-white flex flex-col justify-between h-[305px] col-span-1 ">
            <h3 className="text-[24px] w-[165px] mb-[66px] font-extrabold ">
              Crafting Your Perfect Travel Experience
            </h3>

            <button className="bg-[#FAB326] text-white w-full py-2 px-[26px] rounded-2xl w-[250px] h-[68px] font-bold flex items-center justify-between  mt-[17px]">
              <span className="text-sm">Browse All destinations</span>
              <div className="w-[27px] h-[27px] rounded-full bg-white flex items-center justify-center text-[#000000]">
                <ArrowRight size={10} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
