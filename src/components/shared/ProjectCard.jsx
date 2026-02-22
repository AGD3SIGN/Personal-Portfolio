import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { asset } from '@/lib/utils'

export function ProjectCard({ project, wide = false }) {
  return (
    <Link to={`/works/${project.slug}`} className="group block">
      <div
        className={`overflow-hidden rounded-2xl bg-secondary transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${
          wide ? 'aspect-[2/1]' : 'aspect-[4/3]'
        } relative`}
      >
        <img
          src={project.image}
          alt={`${project.title} — ${project.category} project`}
          width={wide ? 1400 : 700}
          height={wide ? 700 : 525}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-[0.6]"
          loading="lazy"
          onError={(e) => { e.target.src = asset('/images/placeholder.svg') }}
        />

        <div className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {project.category}
          </p>
          <p className="mt-1 text-lg font-bold text-white">
            {project.title}
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-white/80">
            View Project <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {project.category}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
