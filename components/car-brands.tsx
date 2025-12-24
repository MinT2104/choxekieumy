"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Danh sách các hãng xe
const BRANDS = [
  {
    name: "Chevrolet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.png",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1200px-Toyota_carlogo.svg.png",
  },
  {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
  },
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png",
  },
  {
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png",
  },
  {
    name: "Suzuki",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
  },
  {
    name: "Audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png",
  },
  {
    name: "Kia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png",
  },
  {
    name: "Mazda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mazda_logo_with_emblem.svg/2560px-Mazda_logo_with_emblem.svg.png",
  },
  {
    name: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1024px-Mercedes-Logo.svg.png",
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
]

export default function CarBrands() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 relative group">
        
        {/* Nút bấm bên trái (Đã sửa kích thước từ w-32 thành w-10 chuẩn) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all opacity-0 group-hover:opacity-100 duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BRANDS.map((brand, index) => (
            <div
              key={index}
              // CHỈNH SỬA TẠI ĐÂY:
              // 1. Tăng width từ w-32/40 lên w-40/52
              // 2. Tăng height từ h-24 lên h-28
              // 3. Giảm padding từ p-4 xuống p-2 để ảnh bung ra to hơn
              className="flex-shrink-0 w-40 md:w-52 h-28 border border-gray-200 rounded bg-white flex items-center justify-center p-2 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group/item"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                // CHỈNH SỬA TẠI ĐÂY:
                // Thêm object-contain để giữ tỉ lệ, nhưng kích thước cha đã to hơn nên ảnh sẽ to hơn.
                className="w-full h-full object-contain opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Nút bấm bên phải */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all opacity-0 group-hover:opacity-100 duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
