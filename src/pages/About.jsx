import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { experience, clients, awards } from '@/lib/data'
import brandonImg from '@/images/brandon.png'

export default function About() {
  useEffect(() => {
    document.title = 'About Me | showcasy.'
  }, [])

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[88px]">
              <span className="font-light italic text-muted-foreground">About me, </span>
              a Frontend Developer living in Munich
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
              As a Frontend Developer with over 10 years of experience, I specialize in creating intuitive and user-centered interfaces for a wide range of digital products and experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portrait */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <img
                src={brandonImg}
                alt="Portrait of Brandon Torres, a frontend developer"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[44px]">
              {"I'm the frontend developer you need to take your digital presence to the next level"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                With a collaborative mindset and a dedication to their craft, I work closely with clients to understand their goals and objectives, providing tailored design solutions that meet their unique needs.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Outside of work, you can find me exploring the latest design trends, attending design conferences, or working on personal projects.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {experience.map((exp, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <p className="font-body text-xs text-muted-foreground">{exp.period}</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {exp.duration}
                  </p>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    {exp.role}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
              Clients
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {clients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 80}>
                <div className="group flex cursor-pointer items-center justify-between border-b border-border py-6 transition-colors hover:bg-secondary/30">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {client.label}
                    </h3>
                    <p className="mt-1 font-body text-xs text-muted-foreground">
                      {client.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold italic tracking-tight text-muted-foreground">
                      {client.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award Feature */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src="/images/award-trophy.jpg"
                  alt="Design award trophy"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                  Awwards Winning - Independent of The Year
                </h2>
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  Brandon Torres - 2022
                </p>
                <button className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <div className="mt-8">
                  {awards.map((award, i) => (
                    <div
                      key={i}
                      className="group flex cursor-pointer items-center justify-between border-b border-border py-4 transition-colors hover:bg-secondary/30"
                    >
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {award.title}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground">
                          {award.year} - {award.org}
                        </p>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
