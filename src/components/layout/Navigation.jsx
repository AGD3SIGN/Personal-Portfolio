import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { ToggleTheme } from '@/components/ui/toggle-theme'

const navItems = [
  { label: 'Home', href: '/', number: '01' },
  { label: 'About Me', href: '/about', number: '02' },
  { label: 'Works', href: '/works', number: '03' },
  { label: 'Contact', href: '/contact', number: '04' },
]

const socialLinks = [
  { label: 'INSTAGRAM', href: 'https://instagram.com/agd3sign' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@agdesign9920' },
  { label: 'GITHUB', href: 'https://github.com/AGD3SIGN' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            <span className="font-light italic text-muted-foreground">Torres</span>
            <span className="font-bold">Folio.</span>
          </Link>

          <div className="flex items-center gap-3">
            <ToggleTheme animationType="circle-spread" className="text-foreground" />

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Open navigation menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M0 0H18V2H0V0Z" fill="currentColor" />
                <path d="M0 5H18V7H0V5Z" fill="currentColor" />
                <path d="M0 10H18V12H0V10Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-background" />
        <div
          className={`relative flex h-full flex-col transition-transform duration-500 ${
            isOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 lg:px-10">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold tracking-tight text-foreground"
            >
              <span className="font-light italic text-muted-foreground">Torres</span>
              <span className="font-bold">Folio.</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-6 border-t border-border lg:mx-10" />

          <nav className="flex-1 px-6 pt-8 lg:px-10">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-5xl font-bold tracking-tight transition-colors md:text-7xl ${
                          pathname === item.href
                            ? 'text-foreground'
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="text-sm text-primary">
                        ({item.number})
                      </span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 pb-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm text-muted-foreground">Follow me.</p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
