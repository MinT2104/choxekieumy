"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
    const news = [
        {
            id: 1,
            title: "CHỢ XE KIỂU MỸ Khai Trương Chi Nhánh Mới Tại TP. HCM",
            excerpt: "Với sự kỳ vọng của hàng ngàn khách hàng, chi nhánh mới của CHỢ XE KIỂU MỸ chính thức khai trương tại Q. 1, TP. HCM với quy mô showroom lớn nhất.",
            date: "2024-12-20",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format",
            category: "Sự kiện",
        },
        {
            id: 2,
            title: "Lợi Ích Của Việc Mua Xe Trả Góp Tại CHỢ XE KIỂU MỸ",
            excerpt: "Trả góp giúp bạn sở hữu chiếc xe mơ ước mà không cần chuẩn bị toàn bộ số tiền. Chúng tôi cung cấp các gói vay ưu đãi lên đến 80% giá trị xe.",
            date: "2024-12-18",
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&auto=format",
            category: "Tài chính",
        },
        {
            id: 3,
            title: "Lợi Ích Của Việc Mua Xe Trả Góp Tại CHỢ XE KIỂU MỸ",
            excerpt: "Trả góp giúp bạn sở hữu chiếc xe mơ ước mà không cần chuẩn bị toàn bộ số tiền. Chúng tôi cung cấp các gói vay ưu đãi lên đến 80% giá trị xe.",
            date: "2024-12-15",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&auto=format",
            category: "Tài chính",
        },
        {
            id: 4,
            title: "Quy Trình Kiểm Định Xe Toàn Diện Của Chúng Tôi",
            excerpt: "Mỗi chiếc xe đều được kiểm định bởi các kỹ thuật viên chuyên nghiệp trong 3 ngày, kiểm tra 150+ điểm trên chiếc xe.",
            date: "2024-12-12",
            image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&h=400&fit=crop&auto=format",
            category: "Kiến thức",
        },
        {
            id: 5,
            title: "Hướng Dẫn Chọn Xe Oto Phù Hợp Cho Gia Đình",
            excerpt: "Là người đã mua xe, bạn có thể không biết chọn loại xe nào phù hợp nhất cho gia đình mình. Bài viết này sẽ giúp bạn quyết định.",
            date: "2024-12-10",
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&auto=format",
            category: "Mẹo hay",
        },
        {
            id: 6,
            title: "Tháng 12: Khuyến Mãi Lớn Giảm Giá Toàn Bộ Dòng Xe",
            excerpt: "Để cảm ơn sự ủng hộ của khách hàng, CHỢ XE KIỂU MỸ tặng tiền mặt, bảo hiểm, hỗ trợ giấy tờ, giao xe tận nơi cho toàn bộ khách hàng mua xe trong tháng 12.",
            date: "2024-12-08",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
            category: "Khuyến mãi",
        },
    ];

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* --- HERO SECTION --- */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Tin Tức & Bài Viết
                    </h1>
                    <p className="text-xl text-blue-100">
                        Cập nhật thông tin mới nhất về thế giới ô tô
                    </p>
                </div>
            </section>

            {/* --- NEWS GRID --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((article) => (
                            <article
                                key={article.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="h-48 overflow-hidden bg-gray-100 relative">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                        {article.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(article.date).toLocaleDateString("vi-VN")}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/news/${article.id}`}
                                        className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900"
                                    >
                                        Đọc thêm
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
