import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
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
            <ScrollReveal>
              <ProjectCard project={featured[0]} />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ProjectCard project={featured[1]} />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <ProjectCard project={featured[0]} wide />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <ProjectCard project={featured[0]} />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ProjectCard project={featured[1]} />
            </ScrollReveal>
          </div>
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
