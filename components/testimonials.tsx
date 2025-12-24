"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Chị Minh Thư",
      role: "Khách hàng Quận 7",
      rating: 5,
      text: "Xe mình mua tại Chợ Xe Kiểu Mỹ chạy rất đầm, máy êm, giấy tờ rõ ràng. Đặc biệt là đội ngũ kỹ thuật kiểm tra rất kỹ, nên mình cực kỳ yên tâm. Rất đáng để giới thiệu cho bạn bè!",
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg", 
    },
    {
      id: 2,
      name: "Bạn Khánh Vy",
      role: "Khách hàng Thủ Đức",
      rating: 5,
      text: "Mình ký gửi xe ở đây và chỉ trong 2 ngày là bán được. Nhân viên hỗ trợ đăng tin, chụp ảnh và tư vấn khách rất nhiệt tình. Giá bán đúng như mong muốn, chẳng phải lo gặp khách lạ.",
      avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    },
    {
      id: 3,
      name: "Anh Hoàng Long",
      role: "Khách hàng Bình Thạnh",
      rating: 5,
      text: "Mình đã mua xe ở nhiều nơi, nhưng Chợ Xe Kiểu Mỹ cho mình cảm giác an tâm nhất. Họ nói sao làm vậy, không giấu bệnh xe, kiểm tra rõ ràng trước khi giao.",
      avatar: "https://img.freepik.com/free-photo/portrait-handsome-man-smiling_171337-11934.jpg",
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-[#0052cc] font-bold text-sm tracking-widest uppercase mb-3 block">
            [ CHỢ XE KIỂU MỸ ]
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">
            FEEDBACK KHÁCH HÀNG
          </h2>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((item) => (
            <div key={item.id} className="relative group pt-6">
              
              {/* --- CARD CHÍNH --- */}
              <div 
                className="relative bg-white p-8 h-full flex flex-col items-start"
                style={{
                  // --- HÌNH DÁNG "HÌNH THANG" / "QUÉT XUỐNG" ---
                  // Bo thật mạnh góc TRÊN-TRÁI và DƯỚI-PHẢI để tạo độ vát chéo
                  borderTopLeftRadius: '80px',   // Bo xuống thật sâu ở góc trên trái
                  borderBottomRightRadius: '80px', // Bo lên thật sâu ở góc dưới phải
                  
                  borderTopRightRadius: '30px',    // Bo nhẹ hơn ở hai góc còn lại
                  borderBottomLeftRadius: '30px',

                  // --- VIỀN GRADIENT (KHÔNG PHẢI BÓNG ĐỔ) ---
                  border: '3px solid transparent', // Tạo độ dày cho viền
                  // Sử dụng 2 lớp background để tạo viền gradient:
                  // 1. Lớp nền trắng bên trong (padding-box)
                  // 2. Lớp gradient xanh -> trắng cho viền (border-box)
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(to top right, #0052cc 0%, #0052cc 25%, #ffffff 75%)',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  
                  // Bóng mờ nhẹ cho cả thẻ
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                }}
              >
                
                {/* --- QUOTE ICON --- */}
                {/* Nằm ở góc nhọn (Top-Right) */}
                <div className="absolute -top-8 -right-4 bg-[#0052cc] w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-white z-20">
                  <span className="text-white text-6xl font-serif font-black leading-none pt-8 pr-1">“</span>
                </div>

                {/* --- HEADER PROFILE --- */}
                <div className="flex items-center gap-4 mb-6 w-full mt-4 pr-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-1 mb-1">
                      {item.role}
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#ffc107] fill-[#ffc107]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- CONTENT TEXT --- */}
                <div className="relative z-10 w-full pl-2">
                  <p className="text-gray-600 text-[15px] leading-relaxed font-medium italic">
                    “{item.text}”
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
