import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { awards } from "@/lib/data"

export function AwardsSection() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Award image + heading */}
          <ScrollReveal className="lg:w-2/5">
            <div className="relative aspect-square max-w-xs overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/images/award-trophy.jpg"
                alt="Design award trophy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Awwards Winning - Independent of The Year
            </h2>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Ivan Kazarov - 2022
            </p>
          </ScrollReveal>

          {/* Awards list */}
          <div className="flex flex-1 flex-col justify-end lg:w-3/5">
            {awards.map((award, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group flex cursor-pointer items-center justify-between border-b border-border py-5 transition-colors hover:bg-secondary/50">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {award.title}
                    </h3>
                    <p className="mt-1 font-body text-xs text-muted-foreground">
                      {award.year} - {award.org}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
