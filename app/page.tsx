import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CarBrands from "@/components/car-brands"
import FeaturedCars from "@/components/featured-cars"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import VideoGallery from "@/components/video-gallery"
import ContactSection from "@/components/contact-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CarBrands />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <VideoGallery />
      <ContactSection />
      <NewsSection />
      <Footer />
    </div>
  )
}
