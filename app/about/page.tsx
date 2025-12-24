"use client";

import { Award, Users, Zap, Target } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Award,
            title: "Uy Tín",
            description: "15+ năm kinh nghiệm mua bán xe hàng đầu thị trường",
        },
        {
            icon: Users,
            title: "Đội Ngũ Chuyên Nghiệp",
            description: "Nhân viên tốt nghiệp cao đẳng, đạo tạo chuyên sâu",
        },
        {
            icon: Zap,
            title: "Dịch Vụ Nhanh Chóng",
            description: "Xử lý thủ tục trong 24-48 giờ, giao xe tận nơi",
        },
        {
            icon: Target,
            title: "Giá Cạnh Tranh",
            description: "So sánh giá với các thương hiệu khác trên thị trường",
        },
    ];

    const timeline = [
        { year: "2010", event: "Thành lập CHỢ XE KIỂU MỸ với 5 nhân viên" },
        { year: "2015", event: "Mở chi nhánh tại 3 thành phố lớn" },
        { year: "2018", event: "Đạt 10.000 khách hàng hài lòng" },
        { year: "2023", event: "Xây dựng website bán xe trực tuyến" },
        { year: "2024", event: "Mở rộng kho xe, dòng xe đa dạng" },
    ];

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* --- HERO SECTION --- */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Về Chúng Tôi
                    </h1>
                    <p className="text-xl text-blue-100">
                        Hành trình 15 năm xây dựng niềm tin với khách hàng
                    </p>
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-blue-700 mb-6 uppercase">
                                CHỢ XE KIỂU MỸ
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Chúng tôi là một trong những cửa hàng bán xe uy tín hàng đầu tại Việt Nam, với cam kết cung cấp những chiếc xe chất lượng cao với giá cạnh tranh nhất.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Với đội ngũ chuyên viên tận tâm, kinh nghiệm 15 năm trong ngành, chúng tôi luôn đặt nhu cầu của khách hàng lên hàng đầu.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mỗi chiếc xe được kiểm định kỹ lưỡng, đơn chứng chỉ rõ ràng, hỗ trợ trả góp linh hoạt và sang tên nhanh chóng.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl h-96">
                            <img
                                src="https://images.unsplash.com/photo-1741902370552-aee879e1bb11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Showroom CHỢ XE KIỂU MỸ"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VALUES SECTION --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-700 uppercase mb-12 text-center">
                        Giá Trị Cốt Lõi
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={i}
                                    className="text-center p-8 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Icon className="w-12 h-12 text-blue-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-700 mb-3 uppercase">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- TIMELINE SECTION --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-700 uppercase mb-12 text-center">
                        Hành Trình Phát Triển
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-6 mb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-24 bg-blue-700 text-white font-black text-xl rounded-lg p-4 text-center">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-700">
                                    <p className="text-gray-700 text-lg">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-16 md:py-24 bg-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-black mb-2">15+</p>
                            <p className="text-blue-100 text-lg">Năm kinh nghiệm</p>
                        </div>
                        <div>
                            <p className="text-5xl font-black mb-2">50+</p>
                            <p className="text-blue-100 text-lg">Nhân viên chuyên sâu</p>
                        </div>
                        <div>
                            <p className="text-5xl font-black mb-2">15K+</p>
                            <p className="text-blue-100 text-lg">Khách hàng hài lòng</p>
                        </div>
                        <div>
                            <p className="text-5xl font-black mb-2">1K+</p>
                            <p className="text-blue-100 text-lg">Xe bán ra hàng năm</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
