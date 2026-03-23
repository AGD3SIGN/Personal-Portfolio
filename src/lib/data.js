import { asset } from '@/lib/utils'

export const projects = [
  {
    slug: 'Safe Space',
    title: 'Safe Space',
    category: 'UI/UX & React',
    description: 'Designing a calmer path to mental wellness',
    image: asset('/images/TherapyMockup.png'),
    featured: true,
    size: 'large',
    date: 'January 25, 2026',
    client: 'Concept Project',
    services: ['UI/UX Design', 'React Development', 'Prototyping'],
    website: 'https://agd3sign.github.io/React_Therapy/#home',
    about: "Safe Space is a concept therapy platform built to explore what mental health care could look like when the design actually gets out of the way. The app gives users a single, calm environment to book sessions, journal their thoughts, track their mood over time, and set personal goals — without the noise and complexity that most wellness apps pile on. Every screen was built with one question in mind: does this make the user feel more at ease, or less?",
    clients: "The target user is someone who wants mental health support but keeps running into barriers — a packed schedule, the discomfort of in-person visits, or apps that feel more like productivity tools than safe spaces. This platform was designed for people who need something low-pressure and consistent, not another dashboard to manage. The goal was to meet users where they are and make showing up feel like the easiest part of their day.",
    challenge: "Most mental health apps try to do too much. They fill screens with features, progress rings, and streaks that end up creating pressure instead of relieving it. The challenge here was restraint — designing an experience that felt genuinely supportive without being clinical, and structured without feeling rigid. That meant stripping the interface down to only what matters, using calm typography and spacing to do the heavy lifting, and making every interaction feel intentional rather than automated.",
    metrics: [
      { value: '98', label: 'Lighthouse performance score' },
      { value: 'A+', label: 'Accessibility rating' },
      { value: '12+', label: 'Custom React components built' },
    ],
    galleryImages: {
      top: [asset('/images/TherapyPhone1.png'), asset('/images/TherapyPhone2.png')],
      bottom: asset('/images/TherapyMac.png'),
    },
    // testimonial: {
    //   quote: 'Working with Brandon was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.',
    //   author: 'Jacob McDany',
    //   role: 'CEO of Rackspace',
    //   company: 'rackspace',
    // },
  },
  {
    slug: 'tnt-lawn-care',
    title: 'TNT Lawn Care',
    category: 'Branding',
    description: 'A clean, professional web presence for a local lawn care business.',
    image: asset('/images/LawnMockup.png'),
    featured: true,
    size: 'medium',
    date: 'March 1, 2026',
    client: 'TNT Lawn Care',
    services: ['Website Design', 'Branding', 'UIUX'],
    website: 'https://www.tnt-lawns.com',
    about: 'TNT Lawn Care site revamp project was a change to their professional online presence that reflected the quality and reliability of their services. The goal was to create a site that was easy to navigate, clearly communicated their offerings, and made it simple for customers to get in touch and request a quote.',
    clients: 'Local homeowners in Saline County looking for dependable, high-quality lawn care services. Customers need a trustworthy, approachable brand that made scheduling and communication straightforward.',
    challenge: 'The challenge was translating a hands-on, community-focused business into a digital experience that felt personal and professional at the same time — building trust with new visitors while making it effortless to convert them into customers.',
    results: 'The finished site gave TNT Lawn Care a polished brand identity online, with a clear service offering, easy contact flow, and a design that works great on every device.',
    metrics: [
      { value: '100%', label: 'Mobile responsive across all devices' },
      { value: '< 2s', label: 'Average page load time' },
      { value: '96%', label: 'Performance rating on Google Lighthouse' },
    ],
    galleryImages: {
      top: [asset('/images/LawnPhone4.png'), asset('/images/LawnPhone5.png')],
      bottom: asset('/images/LawnLaptop1.png'),
    },
  },
  {
    slug: 'payrole',
    title: 'Payrole',
    category: 'Mobile App',
    description: 'A comprehensive payroll management system designed for modern businesses.',
    image: asset('/images/project-payrole-phone.jpg'),
    featured: true,
    size: 'medium',
    date: 'August 20, 2023',
    client: 'Michael Rivera',
    services: ['Mobile App', 'UIUX'],
    website: '#',
    about: 'Payrole is a next-generation payroll management application that simplifies employee payment processing and tax calculations for small to medium businesses.',
    clients: 'Small and medium business owners who needed a straightforward payroll solution that could scale with their growing teams.',
    challenge: 'Designing an interface that could accommodate complex payroll calculations while keeping the experience simple and stress-free for business owners.',
    results: 'We delivered a streamlined payroll experience that reduced processing time by 60% and eliminated common calculation errors.',
    metrics: [
      { value: '60%', label: 'Reduction in processing time' },
      { value: '+45%', label: 'Increase in user satisfaction' },
      { value: '~100K', label: 'Businesses served globally' },
    ],
    testimonial: {
      quote: 'Brandon is an exceptionally talented developer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs.',
      author: 'Rachel Krakow',
      role: 'CEO of Pipefy',
      company: 'pipefy',
    },
  },
]

export const skills = [
  { name: 'React', icon: '\u269B\uFE0F', proficiency: 92, description: 'Building complex SPAs with hooks, context, and modern patterns.' },
  { name: 'JavaScript', icon: '\uD83D\uDFE8', proficiency: 90, description: 'ES6+, async patterns, DOM manipulation, and functional programming.' },
  { name: 'TypeScript', icon: '\uD83D\uDD37', proficiency: 78, description: 'Type-safe codebases with generics, utility types, and strict mode.' },
  { name: 'HTML/CSS', icon: '\uD83C\uDFA8', proficiency: 95, description: 'Semantic markup, responsive design, animations, and accessibility.' },
  { name: 'Tailwind CSS', icon: '\uD83D\uDCA8', proficiency: 93, description: 'Utility-first styling with custom themes and component patterns.' },
  { name: 'GSAP', icon: '\u2728', proficiency: 75, description: 'Timeline-based animations, scroll triggers, and complex sequences.' },
  { name: 'Figma', icon: '\uD83D\uDD8C\uFE0F', proficiency: 85, description: 'Design systems, prototyping, auto-layout, and dev handoff.' },
  { name: 'Git', icon: '\uD83D\uDD00', proficiency: 88, description: 'Version control, branching strategies, and collaborative workflows.' },
]

export const approachSteps = [
  {
    number: '01',
    title: 'Introduction & Discovery',
    description: "We start with a conversation — no forms, no pressure. I learn what you need, you learn how I work, and we decide together if it's a good fit.",
    details: [
      'Free consultation — no obligation',
      'Defined scope, timeline, and flat-rate pricing before anything starts',
      'You sign off on the project brief before we move forward',
    ],
  },
  {
    number: '02',
    title: 'Research & Strategy',
    description: "I study your industry, your competitors, and your audience so every decision we make has a reason behind it — not just a gut feeling.",
    details: [
      'Competitor and market analysis',
      'Audience research to guide design and messaging',
      'Tech stack recommendation based on your goals and budget',
    ],
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: "You see exactly what you're getting before a single line of code is written. Wireframes and interactive mockups first — no surprises later.",
    details: [
      'Clickable prototypes you can review and share',
      'Two revision rounds per stage — we get it right',
      'Full design approval before development begins',
    ],
  },
  {
    number: '04',
    title: 'Development',
    description: "Clean, fast, fully responsive code built to match the approved design exactly. You get live preview links throughout so you can follow along.",
    details: [
      'Built with modern frameworks — React, Tailwind, and more',
      'Responsive across all screen sizes and browsers',
      'You own 100% of the code — no lock-in, ever',
    ],
  },
  {
    number: '05',
    title: 'Testing & QA',
    description: "Nothing ships until it's been tested thoroughly. I check every device, every browser, and every interaction so you don't have to.",
    details: [
      'Cross-browser and cross-device testing',
      'Performance and load speed checks',
      'Accessibility review against WCAG standards',
    ],
  },
  {
    number: '06',
    title: 'Deployment & Maintenance',
    description: "I handle the launch and stay available after. If something comes up, you reach me directly — not a support queue.",
    details: [
      'Hosted on my managed servers — direct line to me if anything breaks',
      '30-day post-launch support included, no extra charge',
      'Optional ongoing maintenance for updates and new features',
    ],
  },
]

export const clients = [
  { name: 'pipefy', label: 'Pipefy.io', date: 'May 5, 2023' },
  { name: 'django', label: 'Django', date: 'May 5, 2023' },
  { name: 'rackspace', label: 'Rackspace', date: 'May 5, 2023' },
  { name: 'portal', label: 'Portal', date: 'May 5, 2023' },
]

export const testimonials = [
  {
    quote: 'I had the pleasure of working with Brandon on a recent project, and I was blown away by his creativity and attention to detail. I highly recommend Brandon for anyone looking for a talented and professional developer.',
    author: 'Richard Jones',
    role: 'CEO at Teamwork',
    company: 'teamwork.',
  },
  {
    quote: 'His professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. He made invaluable contributions and would highly recommend him to anyone in need of a talented and reliable developer.',
    author: 'Spencer Morgan',
    role: 'Co-Founder',
    company: 'django',
  },
  {
    quote: "Brandon is an exceptionally talented developer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs that perfectly captured our brand's essence.",
    author: 'Rachel Krakow',
    role: 'CEO of Pipefy',
    company: 'pipefy',
  },
  {
    quote: 'Working with Brandon was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.',
    author: 'Jacob McDany',
    role: 'CEO of Rackspace',
    company: 'rackspace',
  },
]

export const awards = [
  { title: 'Honorable Mention', year: '2022', org: 'AWWWARDS' },
  { title: 'Site of The Day', year: '2022', org: 'CSS Winners' },
  { title: 'Best UI Design', year: '2023', org: 'CSS Design Awards' },
  { title: 'Site of The Day', year: '2023', org: 'AWWWARDS' },
]

export const experience = [
  { period: '2011–2019', duration: '8 years', role: 'IT Tech at Bryant Public Schools' },
  { period: '2022–Present', duration: '3+ years', role: 'IT Support Technician at OrthoArkansas' },
]

export const education = [
  { period: '2006–2010', degree: 'High School Diploma', school: 'Bryant High School' },
  { period: 'Graduated May 2024', degree: 'B.S. Web Development', school: 'Arkansas State University' },
]

export const blogPosts = [
  {
    title: 'The Power of Typography in Visual Design: Enhancing Communication and Impact',
    date: 'Feb 1, 2023',
    image: asset('/images/blog-typography.jpg'),
  },
  {
    title: 'Designing for User Experience: Creating Intuitive and Engaging Interfaces',
    date: 'April 5, 2023',
    image: asset('/images/blog-ux.jpg'),
  },
]
