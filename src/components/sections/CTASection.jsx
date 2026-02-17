import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

export function CTASection() {
  return (
    <section className="bg-secondary px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <ScrollReveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            HAVE A NICE WORKS? LET&apos;S TALK WITH ME
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <a
            href="mailto:hello@brandontorres.dev"
            className="group inline-flex items-center gap-3 text-4xl font-bold text-foreground transition-colors hover:text-primary md:text-6xl lg:text-7xl"
          >
            hello@brandontorres.dev
            <ArrowUpRight className="h-8 w-8 rounded-full border border-border p-1 transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:h-12 md:w-12 md:p-2" />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              ABOUT ME
            </Link>
            <Link
              to="/works"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              WORKS
            </Link>
            <Link
              to="/contact"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              CONTACT
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
