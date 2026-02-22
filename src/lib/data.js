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
    // testimonial: {
    //   quote: 'Working with Brandon was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.',
    //   author: 'Jacob McDany',
    //   role: 'CEO of Rackspace',
    //   company: 'rackspace',
    // },
  },
  {
    slug: 'wepay',
    title: 'Wepay',
    category: 'Branding',
    description: 'A modern fintech payment solution with clean, user-friendly interface design.',
    image: asset('/images/project-wepay-phone.jpg'),
    featured: true,
    size: 'medium',
    date: 'June 12, 2023',
    client: 'Sarah Chen',
    services: ['Branding', 'Mobile App', 'UIUX'],
    website: '#',
    about: 'Wepay is a revolutionary fintech payment platform designed to streamline financial transactions for businesses of all sizes. Our comprehensive approach to design ensured both aesthetics and functionality.',
    clients: 'Our clients needed a payment solution that was both secure and intuitive, allowing their users to manage transactions effortlessly while maintaining trust in the platform.',
    challenge: "The main challenge was creating a mobile-first experience that could handle complex financial data while maintaining a clean, approachable interface that users of all technical levels could navigate with ease.",
    results: 'Through extensive user research and iterative design, we delivered a platform that significantly improved user engagement and transaction completion rates.',
    metrics: [
      { value: '$15.2M', label: 'Processed in first quarter' },
      { value: '+38%', label: 'User retention improvement' },
      { value: '~200K', label: 'Active monthly users' },
    ],
    testimonial: {
      quote: "Brandon's professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. He made invaluable contributions and would highly recommend him.",
      author: 'Spencer Morgan',
      role: 'Co-Founder',
      company: 'django',
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
    description: 'Every great project starts with a conversation. I take the time to understand your vision, business goals, target audience, and project constraints before anything else.',
    details: [
      'Free initial consultation to discuss your project and goals',
      'Detailed project brief with scope, timeline, and deliverables for your sign-off',
      'Clear and transparent pricing with no hidden costs',
    ],
  },
  {
    number: '02',
    title: 'Research & Strategy',
    description: 'I dig into your industry, analyze competitors, and map out a technical strategy that positions your product for success.',
    details: [
      'Competitor audit and market landscape analysis',
      'User persona and journey mapping to guide design decisions',
      'Technology recommendations tailored to your budget and scale',
    ],
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: 'From wireframes to pixel-perfect mockups, I design with intention. You see and approve every screen before a single line of code is written.',
    details: [
      'Wireframes and interactive prototypes you can click through',
      'Up to two rounds of design revisions included at every stage',
      'Design system with reusable components for long-term consistency',
    ],
  },
  {
    number: '04',
    title: 'Development',
    description: 'Clean, performant code built with modern frameworks. I develop responsively and keep you in the loop with regular progress demos.',
    details: [
      'Weekly progress updates with live preview links',
      'Responsive builds tested across devices and browsers',
      'Version-controlled code you fully own from day one',
    ],
  },
  {
    number: '05',
    title: 'Testing & QA',
    description: 'Before anything goes live, I run thorough testing to make sure everything works flawlessly for every user on every device.',
    details: [
      'Cross-browser and cross-device compatibility testing',
      'Performance optimization for fast load times',
      'Accessibility review to meet WCAG standards',
    ],
  },
  {
    number: '06',
    title: 'Deployment & Maintenance',
    description: 'Launch day is just the beginning. I handle deployment and offer ongoing support to keep your product running smoothly.',
    details: [
      'Managed deployment to your hosting platform of choice',
      '30 days of post-launch bug fixes included at no extra cost',
      'Optional maintenance plans for updates and new features',
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
