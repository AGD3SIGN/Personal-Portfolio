import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { projects } from '@/lib/data'

export default function Works() {
  useEffect(() => {
    document.title = 'Works | showcasy.'
  }, [])

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[88px]">
              {"What I've been "}
              <span className="font-light italic text-muted-foreground">working on</span>
              {' so far'}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal>
                <ProjectCard project={projects[0]} />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ProjectCard project={projects[1]} />
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <ProjectCard project={projects[0]} wide />
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal>
                <ProjectCard project={projects[0]} />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ProjectCard project={projects[1]} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({ project, wide = false }) {
  return (
    <Link to={`/works/${project.slug}`} className="group block">
      <div
        className={`overflow-hidden rounded-2xl bg-secondary transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${
          wide ? 'aspect-[2/1]' : 'aspect-[4/3]'
        } relative`}
      >
        <img
          src={project.image}
          alt={`${project.title} project mockup`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { e.target.src = '/images/placeholder.svg' }}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {project.category}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
