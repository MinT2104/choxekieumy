import HeroSection from "@/components/hero-section"
import CarBrands from "@/components/car-brands"
import FeaturedCars from "@/components/featured-cars"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import VideoGallery from "@/components/video-gallery"
import NewsSection from "@/components/news-section"
import ConsultationForm from "@/components/consultation-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CarBrands />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <VideoGallery />
      <ConsultationForm />
      <NewsSection />
    </div>
  )
}
