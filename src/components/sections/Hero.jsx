import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

export function Hero() {
  return (
    <section className="relative px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center pt-36 lg:pt-44">
        {/* Pulsing availability badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium tracking-wider text-foreground">
              Available for Freelance
            </span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-balance text-center text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {"Frontend developer with a passion for "}
            <span className="font-light italic text-primary">
              great design
            </span>
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={140}>
          <p className="mx-auto mt-6 max-w-xl text-center font-body text-base leading-relaxed text-muted-foreground">
            {"I'm Brandon, a Frontend Developer living in Saline County, and I focus on making digital experiences that are easy to use, enjoyable, and get the job done."}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            {"Let's Talk"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        {/* Hero Image with gradient overlay and decorative dots */}
        <ScrollReveal delay={250}>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <img
              src="/images/TherapyMockup.png"
              alt="Safe Space therapy platform mockup showcasing frontend development work"
              className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* Decorative dot patterns */}
            <div className="absolute -top-28 -right-28 -z-10 hidden aspect-video h-72 w-96 opacity-40 sm:block sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
            <div className="absolute -top-28 -left-28 -z-10 hidden aspect-video h-72 w-96 opacity-40 sm:block sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
