"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#000000]/30 z-20 w-full max-w-[1920px] h-[75px] flex items-center justify-between px-6 lg:px-0 lg:pl-[100px] lg:pr-[98px]">
      
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={221} 
          height={49} 
          className="w-[150px] lg:w-[221px] h-auto object-contain brightness-0 invert" 
          priority
        />
      </div>

      {/* Desktop  */}
      <div className="hidden md:flex items-center gap-8 text-white font-roboto font-medium">
          <a href="#" className="text-[#FAB326]">Home</a>
          <a href="#">Tours</a>
          <a href="#">Hotels</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      <div className="hidden md:flex items-center gap-[21px]">
        <button className="text-white flex items-center gap-[5px]">
            <Search size={20} />
            <span>Search</span>
          </button>
          <button className="bg-[#FAB326] text-white px-7 py-3 rounded-[40px] font-bold ">
            Sign In
          </button>
      </div>

      {/* Mobile  */}
      <div className="md:hidden flex items-center gap-4">
        <button className="text-white">
          <Search size={22} />
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-[#000000] flex flex-col p-6 gap-4 text-white md:hidden animate-in slide-in-from-top">
          <a href="#" className="text-[#FAB326] border-b border-[#E4E6E8] pb-2">Home</a>
          <a href="#" className="border-b border-[#E4E6E8] pb-2">Tours</a>
          <a href="#" className="border-b border-[#E4E6E8] pb-2">Hotels</a>
          <a href="#" className="border-b border-[#E4E6E8]pb-2">Blog</a>
          <a href="#" className="border-b border-[#E4E6E8] pb-2">About</a>
          <a href="#" className="border-b border-[#E4E6E8] pb-2">Contact</a>
          <button className="bg-[#FAB326] text-white py-3 rounded-full font-bold mt-4">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}