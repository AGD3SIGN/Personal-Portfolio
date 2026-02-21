import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <ScrollReveal className="lg:w-2/5">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {"Let's see what my clients say"}
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-10 lg:w-3/5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border-b border-border pb-10">
                  <p className="font-body text-base leading-relaxed text-muted-foreground">
                    {`"${t.quote}"`}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {t.author}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold italic tracking-tight text-foreground">
                      {t.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
