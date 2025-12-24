"use client"

import { 
  CreditCard, 
  ThumbsUp, 
  Award, 
  Wrench, 
  CalendarCheck, 
  UserCheck 
} from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#1877f2] overflow-hidden text-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-4 md:mb-12 relative z-10">
          <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm mb-2">
            [ CHỢ XE KIỂU MỸ ]
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            VÌ SAO CHỌN CHÚNG TÔI
          </h2>
        </div>

        {/* --- RADIAL LAYOUT (DESKTOP) --- */}
        {/* Container chính định vị các phần tử */}
        <div className="relative w-full max-w-6xl mx-auto h-auto md:h-[600px] flex flex-col md:block items-center">
          
          {/* 1. CENTRAL IMAGE (Hình xe ở giữa) */}
          <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-64 h-64 md:w-[450px] md:h-[450px] z-0 mb-8 md:mb-0">
            <div className="w-full h-full rounded-full border-[8px] border-white overflow-hidden shadow-2xl relative">
               {/* Thay đổi src ảnh xe của bạn vào đây */}
              <img 
                src="/images/design-mode/red-luxury-car-road-with-blur-background_160204-245.jpg" 
                alt="Chợ Xe Kiểu Mỹ Center" 
                className="w-full h-full object-cover"
              />
              {/* Overlay tối nhẹ bên dưới để nổi bật chữ nếu cần */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* --- LEFT SIDE ITEMS --- */}

          {/* Item 1: Góc 10h - GIÁ THÀNH CẠNH TRANH */}
          <div className="md:absolute md:top-[10%] md:left-[15%] flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 max-w-xs text-center md:text-right z-10 mb-8 md:mb-0">
            <div className="order-2 md:order-1 flex flex-col mr-0 md:mr-6">
              <h3 className="font-bold text-lg uppercase mb-1">GIÁ THÀNH CẠNH TRANH</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <CreditCard className="w-8 h-8 text-white" />
              {/* Mũi tên chỉ vào vòng tròn (Trang trí) */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-4 h-4 bg-white rotate-45 transform -translate-y-1/2 z-[-1]"></div>
            </div>
          </div>

          {/* Item 2: Góc 9h (Giữa trái) - UY TÍN CHUYÊN NGHIỆP */}
          <div className="md:absolute md:top-[42%] md:left-[5%] flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0 max-w-xs text-center md:text-right z-10 mb-8 md:mb-0">
            <div className="order-2 md:order-1 flex flex-col mr-0 md:mr-6">
              <h3 className="font-bold text-lg uppercase mb-1">UY TÍN – CHUYÊN NGHIỆP</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng
              </p>
            </div>
            <div className="order-1 md:order-2 bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Item 3: Góc 7h - MUA BÁN XE UY TÍN */}
          <div className="md:absolute md:bottom-[10%] md:left-[15%] flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-0 max-w-xs text-center md:text-right z-10 mb-8 md:mb-0">
            <div className="order-2 md:order-1 flex flex-col mr-0 md:mr-6">
              <h3 className="font-bold text-lg uppercase mb-1">MUA BÁN XE UY TÍN</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng
              </p>
            </div>
            <div className="order-1 md:order-2 bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <CalendarCheck className="w-8 h-8 text-white" />
            </div>
          </div>


          {/* --- RIGHT SIDE ITEMS --- */}

          {/* Item 4: Góc 2h - XE CHẤT KIỂM ĐỊNH KỸ */}
          <div className="md:absolute md:top-[10%] md:right-[15%] flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 max-w-xs text-center md:text-left z-10 mb-8 md:mb-0">
            <div className="bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <ThumbsUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col ml-0 md:ml-6">
              <h3 className="font-bold text-lg uppercase mb-1">XE CHẤT – KIỂM ĐỊNH KỸ</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng.
              </p>
            </div>
          </div>

          {/* Item 5: Góc 3h (Giữa phải) - GIÁ TỐT THỦ TỤC */}
          <div className="md:absolute md:top-[42%] md:right-[5%] flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0 max-w-xs text-center md:text-left z-10 mb-8 md:mb-0">
            <div className="bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col ml-0 md:ml-6">
              <h3 className="font-bold text-lg uppercase mb-1">GIÁ TỐT – THỦ TỤC NHANH GỌN</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng.
              </p>
            </div>
          </div>

          {/* Item 6: Góc 5h - HỖ TRỢ SANG TÊN */}
          <div className="md:absolute md:bottom-[10%] md:right-[15%] flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-0 max-w-xs text-center md:text-left z-10">
            <div className="bg-[#004aad] p-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col ml-0 md:ml-6">
              <h3 className="font-bold text-lg uppercase mb-1">HỖ TRỢ SANG TÊN – GIAO XE TẬN NƠI</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tất cả sản phẩm đều được chọn lọc từ các thương hiệu uy tín, đảm bảo chất lượng ổn định và hiệu quả trong quá trình sử dụng.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
