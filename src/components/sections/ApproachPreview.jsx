import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { approachSteps } from '@/lib/data'

export function ApproachPreview() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-14 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                My Approach
              </h2>
              <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
                A clear, structured process so you always know what to expect.
              </p>
            </div>
            <Link
              to="/about#approach"
              className="hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:flex"
            >
              See Full Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approachSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 80}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <span className="text-xs font-bold text-primary">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 sm:hidden">
            <Link
              to="/about#approach"
              className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              See Full Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
