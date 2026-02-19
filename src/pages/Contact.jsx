import { useState, useEffect } from 'react'
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

  useEffect(() => {
    document.title = 'Contact | showcasy.'
  }, [])

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
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
    // TODO: Replace with actual form submission (e.g. EmailJS, Formspree, or API endpoint)
  }

  return (
    <main>
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
              Have a nice works? Reach out and let&apos;s chat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[640px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <ScrollReveal>
              <div>
                <label className="text-sm font-semibold text-foreground">Name</label>
                <input
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
                <label className="text-sm font-semibold text-foreground">Email Address</label>
                <input
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
                <label className="text-sm font-semibold text-foreground">Company Name</label>
                <input
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
                  How much your budget range?
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
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  placeholder="I want to build some.."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`mt-3 w-full resize-y border-b bg-transparent pb-3 font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.message ? 'border-red-500' : 'border-border focus:border-primary'}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="rounded-full bg-primary px-12 py-4 text-base font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
