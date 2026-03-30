import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Button } from '@/components/ui/button'
import { asset } from '@/lib/utils'

const achievements = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 99, suffix: '+', label: 'Coffees Consumed' },
  { value: 124879, suffix: '+', label: 'Lines of Code Written' },
]

function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()
          const duration = 1800
          const startTime = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(value)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="flex flex-col gap-3 border-l border-border pl-4 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
      <p className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="font-body text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function AboutPreview() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Title + Description */}
        <div className="mb-16 grid gap-6 text-center md:grid-cols-2 md:text-left">
          <ScrollReveal>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Me
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              You've got a business to run — I get it. My job is to take the digital side off your plate and build you something that works hard for your brand around the clock. I build websites that don't just look good on a designer's screen — they look and feel great for your customers on every device they use to find you.
            </p>
          </ScrollReveal>
        </div>

        {/* Image Grid */}
        <ScrollReveal delay={120}>
          <div className="grid gap-7 lg:grid-cols-3">
            <img
              src={asset('/images/brandon.png')}
              alt="Portrait of Brandon Torres"
              className="size-full max-h-[620px] rounded-xl object-cover object-top lg:col-span-2"
            />
            <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
              {/* Breakout Card */}
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-primary p-7 md:w-1/2 lg:w-auto">
                <div>
                  <p className="mb-2 text-lg font-semibold text-primary-foreground">
                    My Approach
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    I keep things simple and transparent. From our first conversation to the moment your site goes live, you'll always know where we are, what's coming next, and exactly what your investment is going toward — no surprises, no guesswork.
                  </p>
                </div>
                <Button variant="outline" className="mr-auto" asChild>
                  <Link to="/about#approach">
                    Here's How I Work
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
              {/* Secondary Image */}
              <img
                src={asset('/images/about.jpg')}
                alt="Brandon Torres working"
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                loading="lazy"
                onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Achievements */}
        <div className="mt-24 border-t border-border pt-16">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Part Developer, Part Caffeine Experiment
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                Still not sure which one is the dependency — the code or the caffeine.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {achievements.map((item) => (
              <StatCounter key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
