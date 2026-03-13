import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/layout/ScrollReveal'

const services = [
  'Mobile App',
  'Website Design',
  'Branding',
  'Web Development',
  'Illustration',
  'Logo Design',
  'Graphic Design',
]

const budgetRanges = [
  '$1k - $5k',
  '$5k - $10k',
  '$10k - $20k',
  '$20k - $50k',
  '>$50k',
]

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices.join(', '),
          budget: selectedBudget,
        }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) throw new Error()

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      setSelectedServices([])
      setSelectedBudget('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <Helmet>
        <title>Contact | Brandon Torres - Frontend Developer</title>
        <meta name="description" content="Get in touch with Brandon Torres for freelance frontend development, web design, and React projects. Available for new opportunities." />
        <link rel="canonical" href="https://www.brandonjosephtorres.com/contact" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pb-4 pt-32 text-center lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[88px]">
              <span className="font-light italic text-primary">Say Hi! </span>
              and tell me about your idea
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mx-auto mt-6 max-w-md font-body text-base text-muted-foreground">
              Have a project in mind? Reach out and let&apos;s chat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[640px]">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-foreground">Message sent!</h2>
              <p className="font-body text-base text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <ScrollReveal>
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Hello..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`mt-3 w-full border-b bg-transparent pb-3 font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.name ? 'border-red-500' : 'border-border focus:border-primary'}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={50}>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Where can I reply?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`mt-3 w-full border-b bg-transparent pb-3 font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.email ? 'border-red-500' : 'border-border focus:border-primary'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div>
                  <label htmlFor="company" className="text-sm font-semibold text-foreground">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company or website?"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    {"What's in your mind?"}
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`rounded-full border px-5 py-2.5 font-body text-sm transition-all ${
                          selectedServices.includes(service)
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-foreground hover:border-primary'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    How much is your budget range?
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setSelectedBudget(range)}
                        className={`rounded-full border px-5 py-2.5 font-body text-sm transition-all ${
                          selectedBudget === range
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-foreground hover:border-primary'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="message"
                    placeholder="I want to build something..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`mt-3 w-full resize-y border-b bg-transparent pb-3 font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.message ? 'border-red-500' : 'border-border focus:border-primary'}`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col items-center gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="rounded-full bg-primary px-12 py-4 text-base font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                  {status === 'error' && (
                    <p className="font-body text-sm text-red-500">
                      Something went wrong. Please try again or email me directly at{' '}
                      <a href="mailto:brandon.agdesign@gmail.com" className="underline">
                        brandon.agdesign@gmail.com
                      </a>
                    </p>
                  )}
                </div>
              </ScrollReveal>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
