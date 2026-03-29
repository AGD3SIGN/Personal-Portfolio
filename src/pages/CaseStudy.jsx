import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { AnimatedMetric } from '@/components/shared/AnimatedMetric'
import { projects } from '@/lib/data'
import { asset } from '@/lib/utils'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/works" replace />
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main>
      <Helmet>
        <title>{project.title} | Brandon Torres - Frontend Developer</title>
        <meta name="description" content={project.description || `Case study for ${project.title} — a ${project.category} project by Brandon Torres.`} />
        <meta property="og:title" content={`${project.title} | Brandon Torres`} />
        <meta property="og:description" content={project.description || `Case study for ${project.title}`} />
        <meta property="og:image" content={project.image} />
        <link rel="canonical" href={`https://www.brandonjosephtorres.com/works/${project.slug}`} />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <p className="font-body text-sm text-muted-foreground">{project.title}</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {project.description}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 relative aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl bg-secondary">
              <img
                src={project.image}
                alt={`${project.title} hero image`}
                width={1200}
                height={675}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content with sticky sidebar */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
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
                <h2 className="mt-14 text-3xl font-bold tracking-tight text-foreground">Who It&apos;s For</h2>
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

              {project.results && (
                <ScrollReveal>
                  <h2 className="mt-14 text-3xl font-bold tracking-tight text-foreground">Results</h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                    {project.results}
                  </p>
                </ScrollReveal>
              )}

              {/* Metrics */}
              <ScrollReveal>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {project.metrics.map((metric) => (
                    <AnimatedMetric key={metric.label} value={metric.value} label={metric.label} />
                  ))}
                </div>
              </ScrollReveal>

              {/* Project images gallery */}
              <ScrollReveal>
                <div className="mt-14 grid gap-4 md:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                    <img
                      src={project.galleryImages ? project.galleryImages.top[0] : asset('/images/project-wepay-phone.jpg')}
                      alt="Project screenshot 1"
                      width={700}
                      height={525}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                    <img
                      src={project.galleryImages ? project.galleryImages.top[1] : asset('/images/placeholder.svg')}
                      alt="Project screenshot 2"
                      width={700}
                      height={525}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Full width image */}
              <ScrollReveal>
                <div className="mt-4 relative aspect-[2/1] overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={project.galleryImages ? project.galleryImages.bottom : asset('/images/project-estatery-laptop-2.jpg')}
                    alt="Project full view"
                    width={1400}
                    height={700}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
                  />
                </div>
              </ScrollReveal>

              {/* Brand Moodboard */}
              {project.brandMoodboard && (
                <ScrollReveal>
                  <div className="mt-14">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Brand Identity</h2>

                    {/* Color Palette */}
                    <div className="mt-8">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Color Palette</p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {project.brandMoodboard.colors.map((color) => (
                          <div key={color.hex} className="overflow-hidden rounded-xl border border-border">
                            <div className="h-16" style={{ backgroundColor: color.hex }} />
                            <div className="p-3">
                              <p className="text-sm font-semibold text-foreground">{color.name}</p>
                              <p className="font-body text-xs text-muted-foreground">{color.hex}</p>
                              <p className="mt-0.5 font-body text-xs text-muted-foreground">{color.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="mt-10">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Typography</p>
                      <div className="grid gap-4 md:grid-cols-2">
                        {project.brandMoodboard.typography.map((font) => (
                          <div key={font.name} className="rounded-xl border border-border p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{font.role}</p>
                            <p className="mt-3 text-4xl font-bold tracking-tight text-foreground">{font.name}</p>
                            <p className="mt-3 font-body text-sm italic text-muted-foreground">&ldquo;{font.sample}&rdquo;</p>
                            <p className="mt-2 font-body text-xs text-muted-foreground">{font.note}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {font.weights.map((w) => (
                                <span key={w} className="rounded-full border border-border px-3 py-1 font-body text-xs text-muted-foreground">
                                  {w}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Type Scale */}
                    <div className="mt-10">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Type Scale</p>
                      <div className="overflow-hidden rounded-xl border border-border">
                        {project.brandMoodboard.typeScale.map((item, i) => (
                          <div
                            key={item.level}
                            className={`flex items-center justify-between gap-4 px-6 py-4 ${i !== 0 ? 'border-t border-border' : ''}`}
                          >
                            <div className="flex min-w-0 items-center gap-4">
                              <span className="w-12 shrink-0 font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                {item.level}
                              </span>
                              <span className="truncate font-body text-sm text-foreground">
                                {item.font} · {item.weight}
                              </span>
                            </div>
                            <div className="flex shrink-0 items-center gap-6">
                              <span className="hidden font-body text-xs text-muted-foreground sm:block">{item.use}</span>
                              <span className="font-body text-sm font-semibold text-foreground">{item.size}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    {project.brandMoodboard.buttons && (
                      <div className="mt-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Buttons</p>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {project.brandMoodboard.buttons.map((btn) => (
                            <div key={btn.label} className="overflow-hidden rounded-xl border border-border">
                              <p className="px-5 pt-5 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{btn.label}</p>
                              <div className="flex items-center justify-center py-8" style={{ backgroundColor: project.brandMoodboard.previewColors?.bg }}>
                                <button
                                  type="button"
                                  className="cursor-default rounded-xl px-5 py-2.5 text-sm font-semibold"
                                  style={{ backgroundColor: btn.bg, color: btn.text, border: btn.border }}
                                >
                                  {btn.example}
                                </button>
                              </div>
                              <p className="px-5 py-4 font-body text-xs text-muted-foreground">{btn.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Badges */}
                    {project.brandMoodboard.badges && (
                      <div className="mt-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Badges</p>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {project.brandMoodboard.badges.map((badge) => (
                            <div key={badge.label} className="overflow-hidden rounded-xl border border-border">
                              <p className="px-5 pt-5 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{badge.label}</p>
                              <div className="flex items-center justify-center py-8" style={{ backgroundColor: project.brandMoodboard.previewColors?.bg }}>
                                <span
                                  className="rounded-full px-3 py-1 text-xs font-bold"
                                  style={{ backgroundColor: badge.bg, color: badge.text, border: badge.border }}
                                >
                                  {badge.example}
                                </span>
                              </div>
                              <p className="px-5 py-4 font-body text-xs text-muted-foreground">{badge.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Border Radius */}
                    {project.brandMoodboard.radii && (
                      <div className="mt-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Border Radius</p>
                        <div className="grid grid-cols-5 gap-3">
                          {project.brandMoodboard.radii.map((r) => (
                            <div key={r.name} className="flex flex-col items-center gap-3">
                              <div
                                className="h-14 w-full"
                                style={{ borderRadius: r.value, backgroundColor: project.brandMoodboard.previewColors?.accent, opacity: 0.15 + (project.brandMoodboard.radii.indexOf(r) * 0.17) }}
                              />
                              <div className="text-center">
                                <p className="text-xs font-semibold text-foreground">{r.name}</p>
                                <p className="font-body text-xs text-muted-foreground">{r.px}</p>
                                <p className="mt-0.5 font-body text-[10px] text-muted-foreground leading-tight">{r.use}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Shadows */}
                    {project.brandMoodboard.shadows && (
                      <div className="mt-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Shadows</p>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                          {project.brandMoodboard.shadows.map((shadow) => (
                            <div key={shadow.name} className="flex flex-col items-center gap-4">
                              <div className="w-full rounded-2xl p-4" style={{ backgroundColor: project.brandMoodboard.previewColors?.shadow }}>
                                <div
                                  className="h-16 w-full rounded-xl"
                                  style={{ backgroundColor: project.brandMoodboard.previewColors?.shadow, boxShadow: shadow.css }}
                                />
                              </div>
                              <div className="text-center">
                                <p className="text-xs font-semibold text-foreground">{shadow.name}</p>
                                <p className="mt-0.5 font-body text-xs text-muted-foreground">{shadow.use}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )}

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
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {"What's next?"}
              </h2>
              <Link
                to="/works"
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
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
                      onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{p.category}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
