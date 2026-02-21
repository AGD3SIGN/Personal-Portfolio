import { useState } from 'react'
import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { skills } from '@/lib/data'

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <ScrollReveal delay={index * 60}>
      <motion.div
        className="group relative cursor-pointer rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="mb-3 text-2xl">{skill.icon}</div>
        <h3 className="text-base font-semibold text-foreground">{skill.name}</h3>

        <motion.div
          initial={false}
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground">
            {skill.description}
          </p>
          <div className="mt-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: hovered ? `${skill.proficiency}%` : '0%' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
            <p className="mt-1 text-right font-body text-[10px] text-muted-foreground">
              {skill.proficiency}%
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  )
}

export function SkillsSection() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
            Skills & Tech Stack
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
