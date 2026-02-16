import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { projects } from '@/lib/data'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | showcasy.`
    }
  }, [project])

  if (!project) {
    return <Navigate to="/works" replace />
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="font-body text-sm text-muted-foreground">{project.title}</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Unleash Your Potential and Push Beyond Limits
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 relative aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl bg-secondary">
              <img
                src={project.image}
                alt={`${project.title} hero image`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content with sticky sidebar */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* Sidebar */}
            <aside className="lg:w-[280px] lg:flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <ScrollReveal>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{project.date}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Client Name</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{project.client}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Services</p>
                      <div className="mt-1 flex flex-col gap-0.5">
                        {project.services.map((s) => (
                          <p key={s} className="text-sm font-medium text-foreground">{s}</p>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.website}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      Visit Website
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">About</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {project.about}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="mt-14 text-3xl font-bold tracking-tight text-foreground">Our Clients</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {project.clients}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="mt-14 text-3xl font-bold tracking-tight text-foreground">Challenge</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="mt-14 text-3xl font-bold tracking-tight text-foreground">Results</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {project.results}
                </p>
              </ScrollReveal>

              {/* Metrics */}
              <ScrollReveal>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 font-body text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Project images gallery */}
              <ScrollReveal>
                <div className="mt-14 grid gap-4 md:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                    <img
                      src="/images/project-wepay-phone.jpg"
                      alt="Project screenshot 1"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                    <img
                      src="/images/project-payrole-phone.jpg"
                      alt="Project screenshot 2"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Full width image */}
              <ScrollReveal>
                <div className="mt-4 relative aspect-[2/1] overflow-hidden rounded-xl bg-secondary">
                  <img
                    src="/images/project-estatery-laptop-2.jpg"
                    alt="Project full view"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              {/* Testimonial */}
              {project.testimonial && (
                <ScrollReveal>
                  <div className="mt-14 rounded-2xl border border-border p-8 md:p-10">
                    <p className="font-body text-lg leading-relaxed text-foreground">
                      {`"${project.testimonial.quote}"`}
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                          {project.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {project.testimonial.author}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            {project.testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold italic tracking-tight text-muted-foreground">
                        {project.testimonial.company}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {"What's next?"}
              </h2>
              <Link
                to="/works"
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                View All Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link to={`/works/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                    <img
                      src={p.image}
                      alt={`${p.title} project mockup`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{p.category}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
