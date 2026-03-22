import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/lightswind/accordion'

const faqs = [
  {
    question: "What does your process look like from start to finish?",
    answer: "Every project starts with a conversation — no forms, no intake questionnaires. We talk through your goals, I ask the right questions, and from there I handle research, wireframes, design, and development. You're involved at every key stage, but I do the heavy lifting so you don't have to.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most websites land between 4 and 8 weeks depending on scope. A straightforward branding site is on the shorter end; something with custom functionality or a lot of pages will take longer. I'll give you a realistic timeline before anything starts — and I stick to it.",
  },
  {
    question: "What do you charge?",
    answer: "Pricing depends on what you need. I don't do one-size-fits-all packages because every project is different. What I can tell you is there are no hidden fees — you'll know exactly what you're paying for before we shake hands.",
  },
  {
    question: "Do you only do design, or development too?",
    answer: "Both. I handle the full stack from Figma mockups through to production-ready React code. You won't need to hire a separate developer to build what I design — it all comes from one person.",
  },
  {
    question: "Will my site work on mobile?",
    answer: "Every site I build is fully responsive by default — it's not an add-on. I test across phones, tablets, and desktops before anything goes live, so your visitors get a consistent experience no matter what device they're on.",
  },
  {
    question: "Who hosts the site after it's built?",
    answer: "I host on my own managed servers, which means if something ever goes wrong you're talking to me directly — not a support ticket system. I also include 30 days of post-launch support at no extra charge, plus optional maintenance plans if you want ongoing help.",
  },
  {
    question: "Do I own the code?",
    answer: "Yes, 100%. Once the project is paid for, the code is yours. No licensing fees, no lock-in. You can take it anywhere.",
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
