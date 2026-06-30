import AboutSection from "@/components/sections/home-page/about-section"
import HeroSection from "@/components/sections/home-page/hero-sections"
import TestimoniSection from "@/components/sections/home-page/testimoni-section"

export default function Page() {
  return (
    <div className="h-full w-full space-y-6 lg:space-y-24">
      <HeroSection />
      <AboutSection />
      <TestimoniSection />
    </div>
  )
}
