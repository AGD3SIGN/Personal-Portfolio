import { Helmet } from 'react-helmet-async'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
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
      <Helmet>
        <title>Brandon Torres | Frontend Developer Portfolio</title>
        <meta name="description" content="Frontend developer based in Saline County with 5+ years of experience creating intuitive, user-friendly websites and applications. Available for freelance." />
        <link rel="canonical" href="https://www.brandonjosephtorres.com/" />
      </Helmet>
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
