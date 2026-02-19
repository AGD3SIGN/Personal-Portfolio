import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

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
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { e.target.src = '/images/placeholder.svg' }}
        />
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
