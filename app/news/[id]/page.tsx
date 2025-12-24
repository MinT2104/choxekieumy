"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";

export default function NewsDetailPage() {
    const params = useParams();
    const newsId = parseInt(params.id as string);

    const newsData: { [key: number]: any } = {
        1: {
            id: 1,
            title: "CHỢ XE KIỂU MỸ Khai Trương Chi Nhánh Mới Tại TP. HCM",
            date: "2024-12-20",
            category: "Sự kiện",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Một cột mốc quan trọng trong lịch sử phát triển</h2>
        <p>Với sự kỳ vọng của hàng ngàn khách hàng, chi nhánh mới của CHỢ XE KIỂU MỸ chính thức khai trương tại Q. 1, TP. HCM với quy mô showroom lớn nhất từ trước đến nay.</p>
        
        <h3>Tiện ích hiện đại</h3>
        <p>Chi nhánh mới được trang bị các tiện ích hiện đại bao gồm:
        - Showroom rộng 500m² với 50+ xe trưng bày
        - Khu vực tư vấn sang trọng và thoải mái
        - Phòng kiểm định xe chuyên nghiệp
        - Khu vực bảo dưỡng và sửa chữa
        - Quán cà phê phục vụ khách hàng</p>
        
        <h3>Đội ngũ chuyên nghiệp</h3>
        <p>Với hơn 30 nhân viên được đào tạo bài bản, chi nhánh mới sẵn sàng phục vụ khách hàng 24/7 với dịch vụ tốt nhất.</p>
        
        <h3>Khuyến mãi khai trương</h3>
        <p>Để cảm ơn sự tin tưởng của khách hàng, CHỢ XE KIỂU MỸ tặng:
        - Giảm giá 10-15% cho tất cả xe
        - Hỗ trợ 100% thủ tục giấy tờ
        - Bảo hiểm miễn phí 1 năm
        - Giao xe tận nơi miễn phí</p>
      `
        },
        2: {
            id: 2,
            title: "Lợi Ích Của Việc Mua Xe Trả Góp Tại CHỢ XE KIỂU MỸ",
            date: "2024-12-18",
            category: "Tài chính",
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Giải pháp tài chính tối ưu cho mọi khách hàng</h2>
        <p>Trả góp giúp bạn sở hữu chiếc xe mơ ước mà không cần chuẩn bị toàn bộ số tiền. Chúng tôi cung cấp các gói vay ưu đãi lên đến 80% giá trị xe.</p>
        
        <h3>Lợi ích chính</h3>
        <p>- Không cần vốn ban đầu lớn
        - Lãi suất cạnh tranh từ 6-8% năm
        - Thời hạn vay linh hoạt 12-72 tháng
        - Xử lý nhanh chỉ trong 24 giờ
        - Không cần chứng thực giấy tờ phức tạp</p>
        
        <h3>Hỗ trợ đầy đủ từ A-Z</h3>
        <p>Đội ngũ tư vấn tài chính của chúng tôi sẽ giúp bạn:
        - Lựa chọn gói vay phù hợp
        - Tìm ngân hàng với lãi suất tốt nhất
        - Hoàn thành hồ sơ vay
        - Giải quyết các vấn đề phát sinh</p>
        
        <h3>Quy trình đơn giản</h3>
        <p>Chỉ cần 3 bước:
        1. Chọn xe yêu thích
        2. Liên hệ tư vấn viên
        3. Ký hợp đồng và nhận xe</p>
      `
        },
        3: {
            id: 3,
            title: "Quy Trình Kiểm Định Xe Toàn Diện Của Chúng Tôi",
            date: "2024-12-15",
            category: "Kiến thức",
            image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Chất lượng là ưu tiên hàng đầu</h2>
        <p>Mỗi chiếc xe đều được kiểm định bởi các kỹ thuật viên chuyên nghiệp trong 3 ngày, kiểm tra 150+ điểm trên chiếc xe.</p>
        
        <h3>150+ điểm kiểm tra</h3>
        <p>Chúng tôi kiểm tra toàn bộ:
        - Động cơ và hệ thống truyền động
        - Phanh, lái, gầm xe
        - Nội thất và ngoại thất
        - Hệ thống điện
        - Chứng chỉ pháp lý</p>
        
        <h3>Giấy chứng nhận chất lượng</h3>
        <p>Sau khi kiểm định, mỗi xe sẽ nhận được giấy chứng nhận với chi tiết:
        - Tình trạng kỹ thuật
        - Lịch sử sửa chữa
        - Bảo hành cho các lỗi phát hiện</p>
        
        <h3>Minh bạch và công bằng</h3>
        <p>Chúng tôi cam kết:
        - Không ẩn giấu tình trạng xe
        - Cung cấp báo cáo chi tiết
        - Bảo hành 6 tháng cho các lỗi ẩn
        - Miễn phí sửa chữa các vấn đề phát hiện sau khi bán</p>
      `
        },
        4: {
            id: 4,
            title: "Hướng Dẫn Chọn Xe Oto Phù Hợp Cho Gia Đình",
            date: "2024-12-12",
            category: "Mẹo hay",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Chọn đúng chiếc xe cho gia đình bạn</h2>
        <p>Là người đã mua xe, bạn có thể không biết chọn loại xe nào phù hợp nhất cho gia đình mình. Bài viết này sẽ giúp bạn quyết định.</p>
        
        <h3>1. Xác định nhu cầu sử dụng</h3>
        <p>- Dùng để đi làm hàng ngày?
        - Dùng để du lịch gia đình?
        - Dùng để chở hàng?
        - Dùng để kinh doanh?</p>
        
        <h3>2. Chọn loại xe phù hợp</h3>
        <p>- Sedan: Êm ái, kinh tế, phù hợp đôi vợ chồng
        - SUV: Cao, mạnh mẽ, phù hợp gia đình lớn
        - MPV: Rộng, linh hoạt, tiếp kiếm của gia đình nhiều con
        - Bán tải: Mạnh mẽ, phù hợp công việc vật lý</p>
        
        <h3>3. Xem xét ngân sách</h3>
        <p>- Xe mới hay xe cũ?
        - Mua trả góp hay trả một lần?
        - Chi phí bảo dưỡng hàng tháng?</p>
        
        <h3>4. Lái thử trước khi mua</h3>
        <p>Điều này rất quan trọng để:
        - Cảm nhận độ thoải mái
        - Kiểm tra các chức năng
        - Đánh giá hiệu năng</p>
      `
        },
        5: {
            id: 5,
            title: "Tháng 12: Khuyến Mãi Lớn Giảm Giá Toàn Bộ Dòng Xe",
            date: "2024-12-10",
            category: "Khuyến mãi",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Đừng bỏ lỡ cơ hội vàng này</h2>
        <p>Để cảm ơn sự ủng hộ của khách hàng, CHỢ XE KIỂU MỸ tặng tiền mặt, bảo hiểm, hỗ trợ giấy tờ, giao xe tận nơi cho toàn bộ khách hàng mua xe trong tháng 12.</p>
        
        <h3>Chương trình khuyến mãi</h3>
        <p>1. Giảm giá trực tiếp: 5-20% tùy theo dòng xe
        2. Tặng thêm tiền mặt: 5-50 triệu đồng
        3. Bảo hiểm miễn phí: 1 năm toàn bộ
        4. Hỗ trợ 100% giấy tờ
        5. Giao xe tận nơi miễn phí</p>
        
        <h3>Xe được khuyến mãi</h3>
        <p>- Toyota Fortuner: Giảm 15 triệu + tặng 10 triệu
        - Kia Sedona: Giảm 20 triệu + tặng 5 triệu
        - Mitsubishi Xpander: Giảm 10 triệu + tặng 3 triệu
        - Ford Transit: Giảm 25 triệu + tặng 8 triệu
        - Tất cả xe khác: Giảm 5-10%</p>
        
        <h3>Thời gian áp dụng</h3>
        <p>Từ 01/12/2024 đến 31/12/2024
        Chỉ áp dụng cho khách hàng đặt cọc trước 25/12/2024</p>
      `
        },
        6: {
            id: 6,
            title: "5 Bí Quyết Để Mua Được Ô Tô Giá Rẻ Nhất",
            date: "2024-12-08",
            category: "Tư vấn",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=800&h=400&fit=crop&auto=format",
            content: `
        <h2>Tiết kiệm tiền khi mua ô tô</h2>
        <p>Để mua được một chiếc ô tô mới với mức giá tốt nhất, bạn cần bình tĩnh, tham khảo kỹ lưỡng và chọn mua xe đúng thời điểm sẽ được hưởng trăm đường lợi.</p>
        
        <h3>Bí quyết 1: Chọn thời điểm đúng</h3>
        <p>- Cuối tháng: Showroom muốn hoàn thành quota nên giảm giá
        - Cuối năm: Chuẩn bị cho năm mới, ưu đãi lớn
        - Trước các lễ hội lớn</p>
        
        <h3>Bí quyết 2: So sánh giá</h3>
        <p>- Liên hệ nhiều showroom để so sánh
        - Đừng gọi điện, hãy đến trực tiếp
        - Tham khảo giá trên các website uy tín</p>
        
        <h3>Bí quyết 3: Thương lượng</h3>
        <p>- Bắt đầu với giá thấp hơn giá niêm yết 20%
        - Đề cập đến khuyến mãi của đối thủ
        - Mua thêm dịch vụ để được giảm giá</p>
        
        <h3>Bí quyết 4: Chọn mẫu xe cũ hoặc ít bán</h3>
        <p>- Xe cũ thường có giá rẻ hơn
        - Mẫu xe ít bán thường được giảm giá nhiều
        - Xe đã qua sử dụng có thể tiết kiệm 30-40%</p>
        
        <h3>Bí quyết 5: Tìm kiếm khuyến mãi ẩn</h3>
        <p>- Mua gói trả góp để được giảm giá
        - Hỏi về các chương trình khuyến mãi nội bộ
        - Mua thêm phụ kiện để được khấu trừ giá</p>
      `
        }
    };

    const article = newsData[newsId];

    if (!article) {
        return (
            <main className="min-h-screen bg-white font-sans py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Bài viết không tìm thấy</h1>
                    <Link href="/news" className="text-blue-700 font-bold hover:underline">
                        ← Quay lại trang tin tức
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden bg-gray-100">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                {/* Back Button */}
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <span className="inline-block bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                        {article.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none mb-12">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Share Section */}
                <div className="border-t border-gray-200 pt-8 flex items-center gap-4">
                    <Share2 className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-semibold">Chia sẻ bài viết này:</span>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-bold hover:underline"
                    >
                        Facebook
                    </a>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-blue-700 text-white rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Bạn cần tư vấn?</h3>
                    <p className="mb-6">Hãy liên hệ với CHỢ XE KIỂU MỸ để được hỗ trợ tốt nhất.</p>
                    <a
                        href="tel:0903901438"
                        className="inline-block bg-yellow-400 text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        Gọi ngay: 0903 901 438
                    </a>
                </div>
            </div>
        </main>
    );
}
