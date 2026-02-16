import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'

export default function Home() {
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
      <Footer />
    </main>
  )
}
