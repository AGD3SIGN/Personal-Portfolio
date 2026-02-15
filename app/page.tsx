import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ClientsSection } from "@/components/sections/clients-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
