import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { projects } from '@/lib/data'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Discover my latest works
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          <div className="grid gap-8 md:grid-cols-2">
            {featured.slice(0, 2).map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {featured[2] && (
            <ScrollReveal>
              <ProjectCard project={featured[2]} wide />
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              View All Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
