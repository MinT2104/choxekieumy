"use client";

import { Play, Eye } from "lucide-react";

export default function VideosPage() {
    const videos = [
        {
            id: 1,
            title: "16h 17/08/24 Cô Tư báo giá chuỗi xe mới cập bến ngay tại Chợ Xe Kiểu Mỹ",
            videoId: "vA75q3sWHak",
            youtubeUrl: "https://www.youtube.com/watch?v=vA75q3sWHak",
            views: "12.5K",
            duration: "22:15",
            category: "Báo giá",
        },
        {
            id: 2,
            title: "CÔ TƯ báo giá lướt hàng tuần 25/05/24",
            videoId: "437MCWDPPLM",
            youtubeUrl: "https://www.youtube.com/watch?v=437MCWDPPLM",
            views: "8.3K",
            duration: "18:45",
            category: "Báo giá",
        },
        {
            id: 3,
            title: "CÔ TƯ báo giá lướt thứ 7 ngày 30/03/2024",
            videoId: "hQ2whmGGfg0",
            youtubeUrl: "https://www.youtube.com/watch?v=hQ2whmGGfg0",
            views: "9.7K",
            duration: "20:30",
            category: "Báo giá",
        },
        {
            id: 4,
            title: "CÔ TƯ báo giá tổng hợp Thứ 7 hàng tuần 24/02/2024",
            videoId: "zb7n2jkSGIQ",
            youtubeUrl: "https://www.youtube.com/watch?v=zb7n2jkSGIQ",
            views: "7.2K",
            duration: "19:20",
            category: "Báo giá",
        },
        {
            id: 5,
            title: "CÔ TƯ báo giá tổng hợp Thứ 7 hàng tuần 20/01/2024",
            videoId: "yqmauuUHu9A",
            youtubeUrl: "https://www.youtube.com/watch?v=yqmauuUHu9A",
            views: "6.8K",
            duration: "21:10",
            category: "Báo giá",
        },
        {
            id: 6,
            title: "CÔ TƯ báo giá tổng hợp Thứ 7 hàng tuần 12/01/2024",
            videoId: "KTUe3BZuvzc",
            youtubeUrl: "https://www.youtube.com/watch?v=KTUe3BZuvzc",
            views: "5.9K",
            duration: "19:45",
            category: "Báo giá",
        },
        {
            id: 7,
            title: "A LÂN đến hội luận mua bán xe ô tô hiện tại và tương lai cùng ae CHỢ XE KIỂU MỸ",
            videoId: "TrMWdYizuA0",
            youtubeUrl: "https://www.youtube.com/watch?v=TrMWdYizuA0",
            views: "11.4K",
            duration: "32:15",
            category: "Hội thảo",
        },
        {
            id: 8,
            title: "Otosaigon đến trải nghiệm mua bán xe tại Chợ Xe Kiểu Mỹ",
            videoId: "J6cA2vyh90M",
            youtubeUrl: "https://www.youtube.com/watch?v=J6cA2vyh90M",
            views: "15.6K",
            duration: "28:40",
            category: "Trải nghiệm",
        },
        {
            id: 9,
            title: "Học nghề mua bán ô tô miễn phí với thợ máy 32 năm kinh nghiệm",
            videoId: "ccyxTYi3WWg",
            youtubeUrl: "https://www.youtube.com/watch?v=ccyxTYi3WWg",
            views: "18.9K",
            duration: "25:30",
            category: "Hướng dẫn",
        },
        {
            id: 10,
            title: "Review Mercedes C200 2002 - Chợ Xe Kiểu Mỹ",
            videoId: "CMatVqTlrPk",
            youtubeUrl: "https://www.youtube.com/watch?v=CMatVqTlrPk",
            views: "14.2K",
            duration: "16:20",
            category: "Review",
        },
        {
            id: 11,
            title: "Review mô hình chợ xe kiểu Mỹ đầu tiên tại Việt Nam",
            videoId: "ppvys_LNzVw",
            youtubeUrl: "https://www.youtube.com/watch?v=ppvys_LNzVw",
            views: "22.1K",
            duration: "12:45",
            category: "Review",
        },
        {
            id: 12,
            title: "Mô Hình Chợ Xe Kiểu Mỹ Tại Việt Nam (Video 1080p)",
            videoId: "Dh6cbxKZ0cM",
            youtubeUrl: "https://www.youtube.com/watch?v=Dh6cbxKZ0cM",
            views: "19.5K",
            duration: "15:10",
            category: "Mô hình",
        },
        {
            id: 13,
            title: "Thanh lý oto cũ buổi chiều cuối tuần - Chợ Xe Kiểu Mỹ",
            videoId: "Zoqdf9Esvr4",
            youtubeUrl: "https://www.youtube.com/watch?v=Zoqdf9Esvr4",
            views: "10.3K",
            duration: "18:55",
            category: "Thanh lý",
        },
        {
            id: 14,
            title: "KHÁCH CÓ OTO ĐẾN CHỢ - CHỢ XE KIỂU MỸ TỰ BÁN",
            videoId: "wn5DaxuXd9o",
            youtubeUrl: "https://www.youtube.com/watch?v=wn5DaxuXd9o",
            views: "16.7K",
            duration: "24:20",
            category: "Giao dịch",
        },
    ];

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* --- HERO SECTION --- */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Video
                    </h1>
                    <p className="text-xl text-blue-100">
                        Khám phá thế giới ô tô qua các video chi tiết và hữu ích
                    </p>
                </div>
            </section>

            {/* --- FEATURED VIDEO: PORSCHE --- */}
            <section className="py-8 md:py-12 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/nKqj-V9610s?si=s8DyQhVHvWKgXinl"
                                    title="Porsche Panamera 4S 2009"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                Featured
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                Porsche Panamera 4S 2009
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Chiếc xe thể thao hạng sang với hiệu năng vượt trội và công nghệ tiên tiến nhất.
                            </p>
                            <a
                                href="https://www.youtube.com/watch?v=nKqj-V9610s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
                            >
                                <Play className="w-4 h-4" fill="white" /> Xem Trên YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VIDEO GRID --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-800 mb-12">Video Khác</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <a
                                key={video.id}
                                href={video.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer block"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="w-12 h-12 text-white" fill="white" />
                                    </div>
                                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded mb-2">
                                        {video.category}
                                    </span>
                                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                        {video.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-600 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {video.views}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-16 md:py-24 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-700 uppercase mb-4">
                        Đăng Ký Kênh YouTube
                    </h2>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Không bỏ lỡ các video mới nhất. Đăng ký kênh YouTube của CHỢ XE KIỂU MỸ ngay hôm nay!
                    </p>
                    <a
                        href="https://www.youtube.com/@Choxekieumy-Hau"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
                    >
                        <span>▶</span> Đăng Ký Ngay
                    </a>
                </div>
            </section>
        </main>
    );
}
