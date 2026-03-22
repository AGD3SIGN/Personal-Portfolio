import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { asset } from '@/lib/utils'

const clients = [
  { name: 'TNT Lawn Care', logo: asset('/images/TNTLogo.png') },
]

const placeholderCount = 3

export function ClientsSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Wanna be featured here?
            </h2>
            <p className="mt-4 max-w-md font-body text-base text-muted-foreground">
              These slots are wide open. Let's put your brand where it belongs — right next to work you'll actually be proud of.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Let's Work Together
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 80}>
              <div className="flex aspect-[3/2] items-center justify-center rounded-xl bg-white p-6">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </ScrollReveal>
          ))}

          {Array.from({ length: placeholderCount }).map((_, i) => (
            <ScrollReveal key={i} delay={(clients.length + i) * 80}>
              <div className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 transition-colors duration-300 hover:border-primary/50 hover:bg-secondary">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  Your Logo Here
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
