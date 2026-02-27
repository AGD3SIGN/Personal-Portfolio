import {
  Atom, FileCode2, FileType, Code2, Wind, Sparkles, Figma, GitBranch,
  Github, Container, BookOpen, MousePointerClick, Terminal, Database,
  Globe, Palette, Layers, Smartphone, Workflow, Chrome,
} from 'lucide-react'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

const techStack = [
  { name: 'React', icon: Atom },
  { name: 'JavaScript', icon: FileCode2 },
  { name: 'TypeScript', icon: FileType },
  { name: 'HTML/CSS', icon: Code2 },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'GSAP', icon: Sparkles },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'Docker', icon: Container },
  { name: 'Obsidian', icon: BookOpen },
  { name: 'Cursor', icon: MousePointerClick },
  { name: 'Terminal', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'REST APIs', icon: Globe },
  { name: 'Sass', icon: Palette },
  { name: 'Framer Motion', icon: Layers },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'CI/CD', icon: Workflow },
  { name: 'Chrome DevTools', icon: Chrome },
]

// Split into two rows
const row1 = techStack.slice(0, Math.ceil(techStack.length / 2))
const row2 = techStack.slice(Math.ceil(techStack.length / 2))

function SkillPill({ item }) {
  const Icon = item.icon

  return (
    <div className="flex shrink-0 cursor-default items-center gap-3 rounded-full border border-border bg-card px-5 py-3 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground [&:hover>svg]:text-primary-foreground [&:hover>span]:text-primary-foreground">
      <Icon className="h-4 w-4 text-muted-foreground transition-colors" strokeWidth={1.5} />
      <span className="text-sm font-medium text-foreground transition-colors">{item.name}</span>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left' }) {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  const copies = 4

  return (
    <div className="group/marquee flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {Array.from({ length: copies }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 gap-4 pr-4 ${animationClass} group-hover/marquee:[animation-play-state:paused]`}
          aria-hidden={i > 0 || undefined}
        >
          {items.map((item) => (
            <SkillPill key={`${i}-${item.name}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function SkillsMarquee() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
            Skills & Tech Stack
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </ScrollReveal>
    </section>
  )
}
