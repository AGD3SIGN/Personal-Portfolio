import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { approachSteps } from '@/lib/data'

function TimelineStep({ step, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative grid grid-cols-[1fr] md:grid-cols-[1fr_auto_1fr] md:gap-x-10">
      {/* Left column */}
      <div className="hidden md:col-start-1 md:block">
        {isEven ? (
          <ScrollReveal delay={100}>
            <StepContent step={step} align="right" />
          </ScrollReveal>
        ) : null}
      </div>

      {/* Center line node */}
      <div className="absolute left-0 top-0 flex flex-col items-center md:relative md:col-start-2 md:left-auto">
        <ScrollReveal delay={50}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary shadow-sm shadow-primary/10">
            {step.number}
          </div>
        </ScrollReveal>
        {index < approachSteps.length - 1 && (
          <div className="h-full w-px bg-border" />
        )}
      </div>

      {/* Right column */}
      <div className="hidden md:col-start-3 md:block">
        {!isEven ? (
          <ScrollReveal delay={100}>
            <StepContent step={step} align="left" />
          </ScrollReveal>
        ) : null}
      </div>

      {/* Mobile content (always to the right of the line) */}
      <div className="pb-12 pl-16 md:hidden">
        <ScrollReveal delay={100}>
          <StepContent step={step} align="left" />
        </ScrollReveal>
      </div>
    </div>
  )
}

function StepContent({ step, align }) {
  return (
    <div className={`pb-12 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Step {step.number}
      </p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {step.title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
      <ul
        className={`mt-4 flex flex-col gap-2 ${align === 'right' ? 'items-end' : 'items-start'
          }`}
      >
        {step.details.map((detail, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 font-body text-xs leading-relaxed text-muted-foreground ${align === 'right' ? 'flex-row-reverse text-right' : ''
              }`}
          >
            <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ApproachSection() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section id="approach" className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My Approach
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-body text-base leading-relaxed text-muted-foreground">
            No guesswork, no surprises. Here's exactly how we go from first conversation to a finished product you're proud of.
          </p>
        </ScrollReveal>
      </div>

      <div ref={timelineRef} className="relative mx-auto mt-16 max-w-[900px]">
        {/* Animated fill line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px">
          <motion.div
            className="w-full origin-top bg-primary"
            style={{ height: '100%', scaleY: smoothProgress }}
          />
        </div>

        {approachSteps.map((step, i) => (
          <TimelineStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  )
}
