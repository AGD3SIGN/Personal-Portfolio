import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { blogPosts } from '@/lib/data'

export function InsightsSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest Insights
            </h2>
            <a
              href="#"
              className="hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:flex"
            >
              View All Insights
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a href="#" className="group block">
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl md:h-28 md:w-28">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.target.src = '/images/placeholder.svg' }}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-lg">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-body text-xs text-muted-foreground">
                      {post.date}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
