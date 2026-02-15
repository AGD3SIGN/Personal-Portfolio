import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutPreview() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          {/* Image */}
          <ScrollReveal className="md:w-2/5">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-2xl">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Ivan, a visual designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={150} className="md:w-3/5">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Design that sparks engagement and inspires action
            </h2>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted-foreground">
              Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is attracting the digital users and standing itself from the rivalry.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              About Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
