"use client"

import { Play } from "lucide-react"

// --- COMPONENT CON: VIDEO ITEM ---
interface VideoItemProps {
  video: { title: string; thumbnail: string };
  className?: string;
}

function VideoItem({ video, className = "" }: VideoItemProps) {
  return (
    <div className={`relative group overflow-hidden rounded-lg cursor-pointer ${className}`}>
      {/* Thumbnail Image */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay & Play Button */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:bg-red-700 flex items-center justify-center">
          <Play className="w-8 h-8 fill-current" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4">
        <h3 className="text-white text-sm md:text-base font-medium leading-tight line-clamp-2">
          {video.title}
        </h3>
      </div>
    </div>
  )
}

// --- COMPONENT CHÍNH ---
export default function VideoGallery() {
  const featuredVideo = {
      title: "Giới thiệu một số dòng xe ô tô cơ bản tại thị trường Việt Nam",
      thumbnail: "https://media.vov.vn/sites/default/files/styles/front_large/public/2025-12/595014617_1337387454803728_1734676650733311913_n.png",
    }

  // Dữ liệu mẫu (3 video cho cột bên phải)
  const sideVideos = [
    {
      title: "Giới thiệu một số dòng xe ô tô cơ bản tại thị trường Việt Nam",
      thumbnail: "https://media.vov.vn/sites/default/files/styles/large/public/2021-06/toyota-raize-1.2g-indonesia-850x561.jpg",
    },
    {
      title: "Giới thiệu một số dòng xe ô tô cơ bản tại thị trường Việt Nam",
      thumbnail: "https://media.vov.vn/sites/default/files/styles/large/public/2021-06/toyota-raize-1.2g-indonesia-850x561.jpg",
    },
    {
      title: "Giới thiệu một số dòng xe ô tô cơ bản tại thị trường Việt Nam",
      thumbnail: "https://media.vov.vn/sites/default/files/styles/large/public/2021-06/toyota-raize-1.2g-indonesia-850x561.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#0052cc] font-bold text-sm tracking-widest uppercase mb-3 block">
            [ CHỢ XE KIỂU MỸ ]
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">
            VIDEO HOẠT ĐỘNG
          </h2>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[550px]">
          
          {/* CỘT TRÁI: Video Lớn */}
          <div className="lg:col-span-3 h-full">
            <VideoItem 
              video={featuredVideo} 
              className="h-[300px] lg:h-full" 
            />
          </div>

          {/* CỘT PHẢI: Lưới 2x2 */}
          <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {sideVideos.map((video, index) => (
              <VideoItem 
                key={index} 
                video={video} 
                // LOGIC CHỈNH SỬA Ở ĐÂY:
                // Nếu là video thứ 3 (index === 2), thêm class 'col-span-2' để nó chiếm 2 cột
                className={`h-[180px] lg:h-full ${index === 2 ? 'col-span-2' : ''}`} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
