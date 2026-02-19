import { useEffect } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { ProjectCard } from '@/components/shared/ProjectCard'
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
              <span className="font-light italic text-primary">working on</span>
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
              {projects.slice(0, 2).map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 100}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            {projects[2] && (
              <ScrollReveal>
                <ProjectCard project={projects[2]} wide />
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
