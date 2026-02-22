import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Button } from '@/components/ui/button'
import { asset } from '@/lib/utils'

const achievements = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '30+' },
  { label: 'Happy Clients', value: '99%' },
  { label: 'Awards Won', value: '4' },
]

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
              className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
            />
            <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
              {/* Breakout Card */}
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-primary p-7 md:w-1/2 lg:w-auto">
                <div>
                  <p className="mb-2 text-lg font-semibold text-foreground text-black">
                    My Approach
                  </p>
                  <p className="font-body text-sm text-muted-foreground text-black">
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
        <ScrollReveal delay={160}>
          <div className="relative mt-16 overflow-hidden rounded-xl bg-muted p-8 md:p-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What I've Built So Far
              </h3>
              <p className="max-w-xl font-body text-sm text-muted-foreground">
                Every project teaches me something new — here's a snapshot of where I've been and what I've built along the way.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 text-center lg:grid-cols-4">
              {achievements.map((item) => (
                <div className="flex flex-col gap-2" key={item.label}>
                  <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {item.value}
                  </span>
                  <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
