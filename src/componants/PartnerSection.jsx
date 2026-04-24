import Image from "next/image";

const partners = [
  { name: "PayPal", logo: "/logos/21 → paypal.png.png" },
  { name: "Stripe", logo: "/logos/21 → stripe.png.png" },
  { name: "Payoneer", logo: "/logos/21 → payoneer.png.png" },
  { name: "Visa/Mastercard", logo: "/logos/21 → visa.png.png" },
  { name: "Cash App", logo: "/logos/21 → cashapp.png.png" },
  { name: "Bitcoin", logo: "/logos/21 → bitcoin.png.png" },
  { name: "Discover", logo: "/logos/21 → discover.png.png" },
];

export default function PartnerSection() {
  return (
    <section className="w-full pt-[81px] pb-[51px] bg-[#D8D8D8]/10 border-y  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] border-[#E4E6E8] ex justify-center items-center max-w-[1920px] mx-auto">
      <div className="max-w-[1224px] w-full px-6 mx-auto lg:px-0">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-0 items-center  ">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative h-[26px] w-[107px]  "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}