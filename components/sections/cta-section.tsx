import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTASection() {
  return (
    <section className="bg-dark-bg px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <ScrollReveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/50">
            HAVE A NICE WORKS? LET&apos;S TALK WITH ME
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <a
            href="mailto:hello@kazarov.com"
            className="group inline-flex items-center gap-3 text-4xl font-bold text-white transition-colors hover:text-white/80 md:text-6xl lg:text-7xl"
          >
            hello@kazarov.com
            <ArrowUpRight className="h-8 w-8 rounded-full border border-white/30 p-1 transition-colors group-hover:bg-white group-hover:text-dark-bg md:h-12 md:w-12 md:p-2" />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              ABOUT ME
            </a>
            <a
              href="/works"
              className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              WORKS
            </a>
            <a
              href="/contact"
              className="text-xs font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              CONTACT
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
