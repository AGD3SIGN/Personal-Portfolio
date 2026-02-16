import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
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

      {/* CTA */}
      <section className="bg-dark-bg px-6 py-20 text-center lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/about" className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white">ABOUT ME</Link>
            <Link to="/works" className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white">WORKS</Link>
            <Link to="/contact" className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white">CONTACT</Link>
          </div>
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {'Want to create something '}
            <span className="font-light italic text-white/30">awesome?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-dark-bg transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            {"Let's Talk"}
            <ArrowRight className="h-4 w-4" />
          </Link>
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
