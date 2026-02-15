import { ScrollReveal } from "@/components/scroll-reveal"

const clientBrands = [
  { name: "pipefy", display: "pipefy", service: "UI/UX & Branding", year: "2022" },
  { name: "django", display: "django", service: "UI/UX & Branding", year: "2022" },
  { name: "rackspace", display: "rackspace", service: "UI/UX & Branding", year: "2022" },
  { name: "portal", display: "portal", service: "UI/UX & Branding", year: "2022" },
]

export function ClientsSection() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A visual partner for brands, companies, and agencies
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {clientBrands.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 100}>
              <div className="group">
                <p className="text-2xl font-bold italic tracking-tight text-foreground md:text-3xl">
                  {client.display}
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-body text-xs font-medium uppercase tracking-wider text-foreground">
                    {client.service}
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {client.year}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
