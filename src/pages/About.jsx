import { ArrowUpRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { SkillsMarquee as SkillsSection } from '@/components/sections/SkillsMarquee'
import { experience, clients, awards } from '@/lib/data'
import { asset } from '@/lib/utils'

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About | Brandon Torres - Frontend Developer</title>
        <meta name="description" content="Learn about Brandon Torres, a frontend developer with 5+ years of experience building intuitive websites and applications. Explore my skills, approach, and experience." />
        <link rel="canonical" href="https://www.brandonjosephtorres.com/about" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="font-light italic text-primary">About me, </span>
              a Frontend Developer living in Saline County.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
              With a background rooted in web design and development, I've built up 5+ years of experience that shape the way I approach every project — creating websites that feel right on every screen, for every person using them.
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
                src={asset('/images/about.jpg')}
                alt="Portrait of Brandon Torres, a frontend developer"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {"Let's build something your customers will enjoy using"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                I work closely with the people I build for — taking time to understand what your business actually needs before writing a single line of code. Every decision, from layout to functionality, is made with your goals and your customers in mind.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                When I'm not building, I'm staying busy — Outside of work, life is full and I wouldn't have it any other way. I'm a husband to my beautiful wife and dad to 5 kids — plus two dogs and a cat who keep things interesting. Most evenings you'll find me surrounded by noise, laughter, and probably someone asking for a snack. It's chaos, but it's my favorite kind.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ApproachSection />

      <SkillsSection />

      {/* Experience */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground">
              Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
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
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground">
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
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award Feature */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={asset('/images/award-trophy.jpg')}
                  alt="Design award trophy"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                  Awwards Winning - Independent of The Year
                </h2>
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  Brandon Torres - 2022
                </p>
                <button className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <div className="mt-10">
                  {awards.map((award, i) => (
                    <div
                      key={i}
                      className="group flex cursor-pointer items-center justify-between border-b border-border py-5 transition-colors hover:bg-secondary/30"
                    >
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {award.title}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground">
                          {award.year} - {award.org}
                        </p>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
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
