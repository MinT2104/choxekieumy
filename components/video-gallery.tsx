"use client"

import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { videoData } from "@/lib/data"

// --- COMPONENT CON: VIDEO ITEM ---
interface VideoItemProps {
  video: { title: string; videoId: string };
  className?: string;
}

function VideoItem({ video, className = "" }: VideoItemProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group overflow-hidden rounded-lg cursor-pointer block`}
    >
      {/* Thumbnail Image from YouTube */}
      <img
        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
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
    </a>
  )
}

// --- COMPONENT CHÍNH ---
export default function VideoGallery() {
  const featuredVideo = videoData[0]

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

        {/* Featured Video - Full Width */}
        <div className="mb-12 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <VideoItem
            video={featuredVideo}
          />
        </div>

        {/* CTA Section - View All Videos */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
            Xem Thêm Videos Khác
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Tìm hiểu thêm về các dòng xe, tư vấn mua bán, và các hoạt động của CHỢ XE KIỂU MỸ
          </p>
          <Link
            href="/videos"
            className="inline-flex items-center gap-3 bg-[#0052cc] hover:bg-[#0041a0] text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
          >
            Xem Toàn Bộ Videos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
