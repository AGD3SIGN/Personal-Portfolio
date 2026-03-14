import {
  Atom, FileCode2, FileType, Code2, Wind, Sparkles, Figma, GitBranch,
  Github, Container, BookOpen, MousePointerClick, Terminal, Database,
  Globe, Palette, Layers, Smartphone, Workflow, Chrome,
} from 'lucide-react'

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

const row1 = techStack.slice(0, Math.ceil(techStack.length / 2))
const row2 = techStack.slice(Math.ceil(techStack.length / 2))

function Pill({ item }) {
  const Icon = item.icon
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
      <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
      <span className="text-xs font-medium text-foreground">{item.name}</span>
    </div>
  )
}

function Row({ items, direction = 'left' }) {
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`flex shrink-0 gap-3 pr-3 ${animClass}`} aria-hidden={i > 0 || undefined}>
          {items.map((item) => (
            <Pill key={`${i}-${item.name}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function TechStackCard() {
  return (
    <div className="flex min-w-0 grow flex-col justify-center gap-3 overflow-hidden rounded-xl bg-secondary py-7">
      <p className="px-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        My Stack
      </p>
      <Row items={row1} direction="left" />
      <Row items={row2} direction="right" />
    </div>
  )
}
