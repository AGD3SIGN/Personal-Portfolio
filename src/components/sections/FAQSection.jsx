import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/lightswind/accordion'

const faqs = [
  {
    question: "How do we get started?",
    answer: "Reach out with a brief overview of your project — what you're building, your timeline, and any reference sites you like. From there, we'll schedule a quick call to make sure we're a good fit before anything is formalized.",
  },
  {
    question: "Do you use AI to build my site?",
    answer: "Yes — Since AI is becoming a big part of technology, I like to keep myself up-to-date. AI is part of my workflow for research, design ideation, and development, but it's a tool — not a replacement developer. Every decision is intentional, every line of code is reviewed, and the end result is built around your specific goals. It means faster turnaround without cutting corners on quality.",
  },
  // {
  //   question: "How do you handle revisions?",
  //   answer: "Every project includes a set number of revision rounds built into the scope. Anything beyond that is billed at an agreed hourly rate — no surprises.",
  // },
  {
    question: "Are you available right now, or is there a waitlist?",
    answer: "Yes, I am currently available! Availability will shift depending on active projects. The best way to find out is to reach out directly. If there's a wait, I'll give you an estimated start date so you can plan accordingly.",
  },
  {
    question: "Can you work within a tight deadline?",
    answer: "Ideally, no — the best work takes time, and rushing rarely does either of us any favors. That said, rush timelines are possible depending on scope and may come with adjusted pricing. The earlier you reach out, the more flexibility we have.",
  },
  {
    question: "Will my site work on mobile?",
    answer: "Every site I build is fully responsive by default — it's not an add-on. I test across phones, tablets, and desktops before anything goes live so your visitors get a consistent experience no matter what device they're on.",
  },
  {
    question: "Who hosts the site after it's built?",
    answer: "I host on my own managed servers. If something ever goes wrong, you're talking to me directly — not a support ticket queue. If you're currently with another host and want to switch, I'll handle the migration — making sure all your content is transferred over before the new site goes live.",
  },
  // {
  //   question: "What's included in the quoted price?",
  //   answer: "The quote covers everything in the agreed scope — design, development, and a set number of revisions. Anything added after scope is locked is handled as a change order.",
  // },
  {
    question: "Are there ongoing costs after launch?",
    answer: "It depends on your setup. Hosting, domain renewal, and any third-party tools are separate costs. Ongoing maintenance and support are available as an add-on if you need them.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer: "Yes. If self-editing matters to you, we'll build with that in mind from the start. Before handoff, I'll walk you through how to make common updates on your own.",
  },
]

export function FAQSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Answers to the things people usually ask before reaching out.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
