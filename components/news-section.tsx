"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData } from "@/lib/data"

export default function NewsSection() {
  // Lấy 3 bài tin đầu tiên
  const news = newsData.slice(0, 3)

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">

        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-[#0052cc] font-bold text-sm tracking-widest uppercase mb-3 block">
            [ CHỢ XE KIỂU MỸ ]
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">
            TIN TỨC & SỰ KIỆN
          </h2>
        </div>

        {/* --- NEWS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-100 rounded-xl bg-white flex flex-col h-full">

              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay nhẹ khi hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* DATE BADGE - Vị trí: Góc dưới bên phải */}
                <div className="absolute bottom-0 right-0 bg-[#0052cc] text-white text-center px-3 py-2 rounded-tl-lg shadow-lg z-10">
                  <div className="text-sm font-bold">{new Date(item.date).toLocaleDateString("vi-VN")}</div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-1 flex flex-col">

                {/* Meta Data Row */}
                <div className="flex items-center gap-2 mb-3 text-[11px] font-bold uppercase tracking-wide">
                  <span className="text-[#0052cc]">{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 line-clamp-2 flex-1">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {item.excerpt}
                </p>

                {/* Button */}
                <Link
                  href={`/news/${item.id}`}
                  className="bg-[#f5f5f5] hover:bg-[#e0e0e0] text-[#0052cc] font-bold py-2 px-4 rounded-lg text-center transition-colors w-full"
                >
                  Đọc thêm →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-block bg-[#0052cc] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0041a0] transition-colors"
          >
            Xem tất cả tin tức →
          </Link>
        </div>
      </div>
    </section>
  )
}
