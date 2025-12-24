"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "GIỚI THIỆU MỘT SỐ DÒNG XE Ô TÔ CƠ BẢN TẠI THỊ TRƯỜNG VIỆT NAM",
      excerpt: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản...",
      date: "29",
      month: "Tháng 7",
      views: 3,
      image: "https://img.freepik.com/free-photo/white-off-roader-jeep-parking_114579-4007.jpg",
    },
    {
      id: 2,
      title: "GIỚI THIỆU MỘT SỐ DÒNG XE Ô TÔ CƠ BẢN TẠI THỊ TRƯỜNG VIỆT NAM",
      excerpt: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản...",
      date: "29",
      month: "Tháng 7",
      views: 3,
      image: "https://toyota-longbien.vn/storage/san-pham/cross/mau-xe/trang-089.jpg",
    },
    {
      id: 3,
      title: "GIỚI THIỆU MỘT SỐ DÒNG XE Ô TÔ CƠ BẢN TẠI THỊ TRƯỜNG VIỆT NAM",
      excerpt: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản...",
      date: "29",
      month: "Tháng 7",
      views: 3,
      image: "https://toyota-longbien.vn/storage/san-pham/veloz/mau-xe/trang-089.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-[#0052cc] font-bold text-sm tracking-widest uppercase mb-3 block">
            [ CHỢ XE KIỂU MỸ ]
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">
            TIN TỨC SỰ KIỆN
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
                <div className="absolute bottom-0 right-0 bg-[#0052cc] text-white text-center w-16 py-2 rounded-tl-lg shadow-lg z-10">
                  <div className="text-2xl font-bold leading-none">{item.date}</div>
                  <div className="text-[11px] font-medium mt-1">{item.month}</div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-1 flex flex-col">
                
                {/* Meta Data Row */}
                <div className="flex items-center gap-2 mb-3 text-[11px] font-bold uppercase tracking-wide">
                  <span className="text-[#0052cc]">TIN TỨC SỰ KIỆN</span>
                  <span className="text-gray-400 font-medium normal-case">• {item.views} lượt xem</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#1a1a1a] mb-3 leading-snug line-clamp-2 hover:text-[#0052cc] transition-colors cursor-pointer uppercase">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                
                {/* Không có nút "Đọc thêm" bên trong thẻ như hình mẫu, chỉ hiển thị text */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- BOTTOM BUTTON --- */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#0052cc] hover:bg-blue-800 text-white font-bold px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all uppercase text-xs tracking-wider"
          >
            XEM THÊM TẤT CẢ TIN TỨC
          </Button>
        </div>
      </div>
    </section>
  )
}
