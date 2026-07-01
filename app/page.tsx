import AboutSection from "@/components/sections/home-page/about-section"
import HeroSection from "@/components/sections/home-page/hero-sections"
import TestimonialsSection from "@/components/sections/home-page/testimonial-section"
import TrustSection from "@/components/sections/home-page/trust-section"

export default function Page() {
  return (
    <div className="h-full w-full space-y-4 lg:space-y-24">
      <HeroSection />
      <div className="w-full space-y-4">
        <AboutSection />
        <TrustSection />
        <TestimonialsSection />
      </div>
    </div>
  )
}
