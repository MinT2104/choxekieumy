"use client";

import { Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white font-sans">
      {/* --- TOP SECTION --- */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* 1. Left: LOGO */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-end gap-3 hover:opacity-80 transition-opacity"
            >
              {/* Car Logo Icon */}
              <div className="w-28 h-28">
                <img
                  src="https://choxekieumy.vn/thumb/171x168/2/upload/hinhanh/logologochinh5965removebgpreview-4414.png"
                  alt="CHỢ XE KIÊU MỸ Logo"
                  className="w-full h-full object-contain cursor-pointer"
                />
              </div>
            </Link>

            {/* 2. Center: BIG TITLE */}
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl font-black text-blue-700 uppercase tracking-tight mb-1">
                CHỢ XE KIÊU MỸ
              </h1>
              <p className="text-gray-700 font-bold text-sm md:text-base">
                Bán xe an toàn – nhanh chóng – Uy tín tuyệt đối.
              </p>
            </div>

            {/* 3. Right: HOTLINE */}
            <div className="flex-shrink-0 flex flex-col items-end">
              <div className="text-blue-700 text-xs font-bold mb-2 tracking-widest">
                HOTLINE 24/7
              </div>
              <div className="bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-full p-2 flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-xl font-black tracking-wide whitespace-nowrap">
                  052 83 77779
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: NAVIGATION --- */}
      <div className="w-full bg-[#0052cc] h-12 relative mt-2 shadow-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Left: Menu Items with Slanted Decoration */}
          <div className="flex items-center h-full">
            {/* Decorative Slanted Lines (Các vạch chéo trang trí) */}
            <div className="hidden md:flex items-center mr-4 h-full space-x-2">
              <div className="w-3 h-full bg-blue-200 opacity-50 -skew-x-[20deg] transform origin-bottom"></div>
              <div className="w-3 h-full bg-blue-100 opacity-80 -skew-x-[20deg] transform origin-bottom"></div>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-1 md:gap-6 text-white text-sm font-bold uppercase h-full">
              <Link
                href="/"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Trang chủ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <a
                href="#"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Về chúng tôi
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <Link
                href="/products"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Sản phẩm
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <a
                href="#"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Tin tức
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a
                href="#"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Video
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a
                href="#"
                className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap"
              >
                Liên hệ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </nav>
          </div>

          {/* Right: Search Bar */}
          <div className="hidden md:flex items-center ml-4 w-64">
            <div className="relative w-full">
              <Input
                placeholder="Nhập từ khoá tìm kiếm.."
                className="w-full pl-4 pr-10 h-8 rounded-full bg-white text-black border-none text-xs focus-visible:ring-0 italic placeholder:text-gray-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
