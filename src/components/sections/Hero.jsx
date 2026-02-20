import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

// TODO: Add your real social links here
const socialLinks = [
  // { label: 'INSTAGRAM', href: 'https://instagram.com/yourusername' },
  // { label: 'BEHANCE', href: 'https://behance.net/yourusername' },
  // { label: 'DRIBBBLE', href: 'https://dribbble.com/yourusername' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <ScrollReveal>
          <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[88px]">
            {"I'm a frontend developer with passion to create "}
            <span className="font-light italic text-primary">
              great experiences
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="my-8 h-px w-20 bg-primary" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            {"I'm Brandon, a Frontend Developer living in Munich, and I focus on making digital experiences that are easy to use, enjoyable, and get the job done."}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            <div className="sm:ml-auto">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {"Let's Talk"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
