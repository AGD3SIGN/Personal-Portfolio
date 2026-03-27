import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/AGD3SIGN',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@agdesign9920',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/agd3sign',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
]

export function Footer() {
  const { pathname } = useLocation()
  const isContact = pathname === '/contact'

  return (
    <footer className="bg-secondary">
      <div className="px-6 pb-10 pt-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          {!isContact && (
            <>
              {/* Headline row */}
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                  Ready to build<br />
                  something{' '}
                  <span className="font-bold italic text-primary">great?</span>
                </h2>
              </div>

              {/* CTA button */}
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                >
                  {"Let's Talk"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}

          {/* Divider */}
          <div className="mt-20 border-t border-border" />

          {/* Brand + Social */}
          <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
            <div>
              <Link to="/" className="mb-3 block text-xl font-bold tracking-tight text-foreground">
                <span className="font-light italic text-muted-foreground">Torres</span>
                <span className="font-bold">Folio.</span>
              </Link>
              <p className="max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
                A freelance frontend developer based in Saline County, building websites people actually enjoy using.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Stay Connected</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-2 border-t border-border pt-6 pb-6 md:flex-row md:items-center md:justify-between">
            <p className="font-body text-xs text-muted-foreground">
              &copy; 2026 TorresFollio. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Designed & Built by Brandon Torres
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
