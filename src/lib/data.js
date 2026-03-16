import { asset } from '@/lib/utils'

export const projects = [
  {
    slug: 'Safe Space',
    title: 'Safe Space',
    category: 'UIUX',
    description: 'A React Therapy Platform for Mental Health',
    image: asset('/images/TherapyMockup.png'),
    featured: true,
    size: 'large',
    date: 'January 25, 2026',
    client: 'Jon Doe',
    services: ['Website Design', 'UIUX', 'React'],
    website: 'https://agd3sign.github.io/React_Therapy/#home',
    about: "At Safe Space Therapy, the goal is to make mental wellness approachable, private, and consistent. The platform combines compassionate care with modern technology, allowing individuals to book sessions, track emotional patterns, and access guided resources in one secure space. Clients can schedule appointments, journal their thoughts, monitor mood trends, and set personal goals — all within a calm, distraction-free interface designed to reduce friction and encourage routine. The experience emphasizes clarity, trust, and emotional safety from the first interaction.",
    clients: "The platform was designed for people who want support but struggle with traditional barriers — time, stigma, uncertainty, or accessibility. Many users were balancing demanding work schedules, caregiving responsibilities, or anxiety around in-person visits. They needed a simple, reassuring environment where they could check in regularly, communicate comfortably, and see progress over time. The product focuses on consistency rather than intensity, helping users build sustainable habits instead of relying on one-time interventions.",
    challenge: "Mental health platforms often overwhelm users with complex dashboards or clinical language. The challenge was to design an experience that felt calm rather than medical — structured without feeling rigid, supportive without feeling intrusive. Key design problems included: Reducing cognitive load during emotional moments, Making scheduling effortless, Encouraging continued engagement without pressure. The interface was intentionally simplified to guide users step-by-step, prioritizing emotional comfort over feature density.",

    metrics: [
      { value: '$22.8M', label: 'Projected platform value in behavioral health market positioning' },
      { value: '+24%', label: 'Increase in session booking completion after UX redesign' },
      { value: '~400K', label: 'Monthly check-ins and mood logs recorded by users' },
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
    website: '#',
    about: 'TNT Lawn Care needed a professional online presence that reflected the quality and reliability of their services. The goal was to create a site that was easy to navigate, clearly communicated their offerings, and made it simple for customers to get in touch and request a quote.',
    clients: 'Local homeowners and property managers looking for dependable, high-quality lawn care services. Customers needed a trustworthy, approachable brand that made scheduling and communication straightforward.',
    challenge: 'The challenge was translating a hands-on, community-focused business into a digital experience that felt personal and professional at the same time — building trust with new visitors while making it effortless to convert them into customers.',
    results: 'The finished site gave TNT Lawn Care a polished brand identity online, with a clear service offering, easy contact flow, and a design that works great on every device.',
    metrics: [
      { value: '100%', label: 'Mobile responsive across all devices' },
      { value: '< 2s', label: 'Average page load time' },
      { value: '+40%', label: 'Increase in quote requests after launch' },
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

export const achievements = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 99, suffix: '+', label: 'Happy Clients' },
  { value: 4, suffix: '', label: 'Awards Won' },
]

export const approachSteps = [
  {
    number: '01',
    title: 'Introduction & Discovery',
    description: 'Before anything else, we talk. I want to understand your business, your goals and who you are trying to reach - because getting that right from the start makes everything else smoother.',
    details: [
      'Free initial consultation to discuss your project and goals',
      'A clear project brief covering scope, timeline, and deliverables — nothing moves forward until you are happy with it',
      'Straightforward, transparent pricing with no hidden costs',
    ],
  },
  {
    number: '02',
    title: 'Research & Strategy',
    description: 'Once I know your goals, I do my homework. I look at your industry, see what your competitors are doing, and figure out the smartest path forward for your specific situation.',
    details: [
      'A look at your competitors and where you fit in the market',
      'Understanding your audience so every design decision has a reason behind it',
      'Technology recommendations that fit your budget and where you want to grow',
    ],
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: 'This is where things start to take shape. I will build out wire-frames and mockups so you can see exactly what your site will look and feel like before a single line of code gets written. No surprises — you approve everything before we start coding.',
    details: [
      'Interactive prototypes you can actually click through and explore',
      'Up to two rounds of revisions at every stage so we get it right',
      'A consistent design foundation that keeps your site looking sharp long-term',
    ],
  },
  {
    number: '04',
    title: 'Development',
    description: 'Once the design is locked in, I get to work building it — clean, responsive code that looks and performs great on every device. You will not be left wondering what is going on either; I keep you updated along the way.',
    details: [
      'Regular progress updates with live preview links so you can see it coming together',
      'Fully responsive builds tested across devices and browsers',
      'Code you completely own from day one — no strings attached',
    ],
  },
  {
    number: '05',
    title: 'Testing & QA',
    description: 'Nothing goes live until I am confident it is ready. I put the site through its paces across devices, browsers, and connection speeds so your visitors get a smooth experience every single time.',
    details: [
      'Cross-browser and cross-device testing to catch anything before your users do',
      'Performance checks to make sure your site loads fast and does not keep people waiting',
      'Accessibility review so your site works for as many people as possible',
    ],
  },
  {
    number: '06',
    title: 'Deployment & Maintenance',
    description: 'Launch day is exciting — and I make sure it goes smoothly. I handle getting your site live and stick around afterward to make sure everything keeps running the way it should. You will not be left wondering what to do next once the project is done.',
    details: [
      'I host your site on my own managed servers, so you are dealing with me directly — not a faceless third party — if anything ever comes up',
      '30 days of post-launch bug fixes included — no extra charge, no questions asked',
      'Optional maintenance plans if you want ongoing support for updates and new features down the road',
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
  { period: '2013-2015', duration: '2 years', role: 'as a Product Designer at Uber' },
  { period: '2015-2018', duration: '3 years', role: 'as a Lead of Product Designer at Spotify' },
  { period: '2018-Now', duration: '5+ years', role: 'as a Head of Product Designer at Rovio' },
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
