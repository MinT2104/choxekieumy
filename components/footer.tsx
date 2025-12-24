"use client"

import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-300 font-sans relative">
      {/* --- CUSTOM GRADIENT BORDER TOP --- */}
      {/* - h-1: Chiều cao 4px (tương đương border-t-4)
         - Gradient logic: 
           + 0% -> 30%: Màu xanh #0052cc (Solid)
           + 30% -> 100%: Chuyển màu từ Đỏ -> Xanh -> Tím
      */}
      <div
        className="w-full h-2"
        style={{
          background: "linear-gradient(90deg, #0052cc 0%, #0052cc 20%, #dc2626 30%, #0052cc 65%, #9333ea 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* CỘT 1: THÔNG TIN LIÊN HỆ */}
          <div>
            <h3 className="text-white text-lg font-bold uppercase mb-6 tracking-wide">THÔNG TIN LIÊN HỆ</h3>
            <ul className="space-y-4 text-base text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block mb-1">Trụ sở chính:</strong>
                  298 Vĩnh Viễn, Phường 4, Quận 10, Thành Phố Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block mb-1">Showroom:</strong>
                  714 Tân Kỳ Tân Quý, Phường Bình Hưng Hòa, Quận Bình Tân, Tp HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span>Điện thoại: 0909 XXX XXX - Liên hệ</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span>Email: contactsupport@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-white flex-shrink-0" />
                <span>Website: http://companyname.abc</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm font-bold text-white uppercase mr-2">LIÊN KẾT:</span>
              <div className="flex gap-2">
                <a 
                  href="https://www.facebook.com/choxekieumy.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Twitter className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="#"
                  className="bg-white text-black w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold hover:bg-gray-200 transition-colors"
                >
                  Zalo
                </a>
              </div>
            </div>
          </div>

          {/* CỘT 2: CHÍNH SÁCH HỖ TRỢ */}
          <div>
            <h3 className="text-white text-lg font-bold uppercase mb-6 tracking-wide">CHÍNH SÁCH HỖ TRỢ</h3>
            <ul className="space-y-4 text-base text-gray-400">
              {[
                "Chính sách bảo mật",
                "Chính sách thanh toán",
                "Chính sách đổi trả",
                "Chính sách đặt hàng",
                "Chính sách vận chuyển",
                "Quy chế hoạt động",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:underline decoration-white/30 underline-offset-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN HỖ TRỢ */}
          <div>
            <h3 className="text-white text-lg font-bold uppercase mb-6 tracking-wide">THÔNG TIN HỖ TRỢ</h3>
            <ul className="space-y-4 text-base text-gray-400">
              {[
                "Thông tin thanh toán",
                "Chính sách hỗ trợ",
                "Chính sách bảo mật thông tin",
                "Liên hệ tư vấn",
                "Mẫu xe đang khuyến mãi",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:underline decoration-white/30 underline-offset-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: FANPAGE FACEBOOK */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden p-3 shadow-lg">
              <div className="flex items-center gap-3 mb-3 px-1">
                <Facebook className="w-8 h-8 text-[#1877f2] fill-current" />
                <span className="font-bold text-black text-base">FANPAGE FACEBOOK</span>
              </div>
              <a 
                href="https://www.facebook.com/choxekieumy.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <Facebook className="w-12 h-12 mb-2 fill-white" />
                  <span className="font-bold text-sm">Theo dõi chúng tôi</span>
                  <span className="text-xs mt-1 opacity-90">Trên Facebook</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </a>
              <div className="mt-3">
                <a 
                  href="https://www.facebook.com/choxekieumy.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Truy cập Fanpage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div
        className="bg-[#003380] text-white/90 py-5 text-sm font-light border-t border-white/10 relative"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#003380]/85"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 relative z-10">
          <div className="text-center md:text-left">
            © Copyright <strong className="text-white font-bold">CHỢ XE KIỂU MỸ</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 opacity-90 text-xs md:text-sm">
            <span>
              Đang Online: <span className="font-bold">12</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span>
              Trong Tháng: <span className="font-bold">3029</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span>
              Tổng truy cập: <span className="font-bold">492 029</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
