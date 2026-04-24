import React from 'react';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0640C3] mt-8 lg:mt-[58px] text-white font-sans">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[72px] pt-16 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-6 lg:mb-[50px]">
          
          {/* Brand */}
          <div className="flex flex-col">
            
              <Image 
                src="/footer-logo.png" 
                alt="tripbooking.ai" 
                width={156}
                height={27}
                className="object-contain mb-5"
              />
            <p className="text-white  max-w-[395px]">
              Dive into local recommendations for a truly authentic experience.
            </p>
            <div className="mt-4 lg:mt-[65px]">
              <div className="flex items-center gap-[13px] text-white/90 mb-2">
                <div className='rounded-full border border-white h-[22px] w-[22px] flex items-center justify-center'><Phone size={12} className="text-white" /></div>
                <span className="text-[14px]">Need help? Call us</span>
              </div>
              <h3 className="text-5 lg:text-6 font-extrabold">
                1-800-222-8888
              </h3>
            </div>
          </div>

          {/* Company */}
          <div className="lg:pl-10">
            <h4 className="text-[18px] font-bold mb-[16px]">Company</h4>
            <ul className="space-y-[18px] text-white/75">
              <li >About Us</li>
              <li >Community Blog</li>
              <li>Jobs & Careers</li>
              <li>Contact Us</li>
              <li>Our Awards</li>
            </ul>
          </div>

          {/* Services */}
          <div>
          <h4 className="text-[18px] font-bold mb-[16px]">Services</h4>
            <ul className="space-y-[18px] text-white/75">
              <li>Tour Guide</li>
              <li>Tour Booking</li>
              <li>Hotel Booking</li>
              <li>Ticket Booking</li>
              <li>Rental Services</li>
            </ul>
          </div>

          {/* Newsletter & Payments */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold mb-[15px]">Newsletter</h4>
            <div className="relative flex h-[58px] items-center mb-[35px]">
              <div className="absolute left-[25px] z-10 text-[#737373]">
                <Mail size={16} />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-5 pl-[50px]  rounded-full bg-white text-[#737373]  "
              />
              <button className="absolute right-0 py-[17px] px-[23px] rounded-full h-[60px] bg-[#FFB321] text-white font-bold text-[14px]">
                Subscribe
              </button>
            </div>

            <h4 className="text-[18px] font-bold mb-6">Payments</h4>
            <div className="flex flex-wrap gap-[10px]">
              {['paypal', 'stripe', 'visa', 'skrill'].map((pay) => (
                <div key={pay} className="relative w-[60px] h-[28px] bg-white rounded-md">
                  <Image 
                    src={`/payments/${pay}.png`} 
                    alt={pay} 
                    fill 
                    className="object-contain py-[7px] px-[6px] " 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-[30px] border-t border-white flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-[14px]">
            © 2024 Travila Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-[9px]">
            <span className="text-[18px] font-bold text-white mr-2">Follow us</span>
            <div className="flex gap-[7px]">
              {['instagram', 'facebook', 'x', 'youtube'].map((social) => (
                <div key={social} className=" w-[43px] h-[43px] bg-[#183497] flex items-center justify-center rounded-full cursor-pointer  text-white border border-white">
                  <Image 
                    src={`/socials/${social}.png`} 
                    alt={social} 
                    width={20}
                    height={20}
                    className="object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

