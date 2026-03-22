import { ScrollReveal } from '@/components/layout/ScrollReveal'

export function AwardsSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 md:px-16 md:py-24">

            {/* Decorative oversized quote mark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-8 select-none text-[12rem] font-bold leading-none text-primary/10 md:text-[18rem]"
            >
              &ldquo;
            </span>

            <div className="relative">
              <p className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                A man who stands for{' '}
                <span className="italic text-primary">nothing</span>{' '}
                will fall for anything.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <p className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Malcolm X
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
