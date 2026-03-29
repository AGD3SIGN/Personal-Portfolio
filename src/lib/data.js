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
    brandMoodboard: {
      previewColors: { bg: '#f5f5f5', accent: '#E8B84B', shadow: '#ffffff' },
      colors: [
        { name: 'Golden Yellow', hex: '#E8B84B', role: 'Primary — CTAs, highlights & brand accent' },
        { name: 'Warm Orange', hex: '#E85C10', role: 'Crisis & warm emphasis sections' },
        { name: 'Cream Surface', hex: '#FEF3E2', role: 'Warm tinted section backgrounds' },
        { name: 'Light Gray', hex: '#f5f5f5', role: 'Card & input surfaces' },
        { name: 'White', hex: '#ffffff', role: 'Default page background' },
        { name: 'Near Black', hex: '#0a0a0a', role: 'Foreground — all headings & body' },
      ],
      typography: [
        {
          name: 'Space Grotesk',
          role: 'Display / Headings',
          weights: ['300', '400', '500', '600', '700'],
          sample: 'A Space Created for You to Be Understood.',
          note: 'Geometric and modern — gives the UI editorial structure and quiet confidence without feeling clinical or cold.',
        },
        {
          name: 'DM Sans',
          role: 'Body / UI',
          weights: ['400', '500', '600', '700'],
          sample: 'Book a session. Journal your thoughts. Track your mood.',
          note: 'Variable-weight sans-serif with wide optical size range. Friendly and highly legible across all screen sizes.',
        },
      ],
      typeScale: [
        { level: 'H1', size: 'clamp(2–4rem)', weight: '700', font: 'Space Grotesk', use: 'Hero headline' },
        { level: 'H2', size: 'clamp(1.5–3rem)', weight: '700', font: 'Space Grotesk', use: 'Section heading' },
        { level: 'H3', size: 'clamp(1.25–2rem)', weight: '600', font: 'Space Grotesk', use: 'Card heading' },
        { level: 'Body', size: 'clamp(1–1.125rem)', weight: '400', font: 'DM Sans', use: 'Body copy' },
        { level: 'UI', size: '14px', weight: '500', font: 'DM Sans', use: 'Labels & nav links' },
        { level: 'Caption', size: '12px', weight: '500', font: 'DM Sans', use: 'Metadata & timestamps' },
      ],
      buttons: [
        {
          label: 'Primary',
          example: 'Book a Session',
          bg: '#E8B84B',
          text: '#0a0a0a',
          border: 'none',
          description: 'Main CTAs · Space Grotesk 700 · golden yellow with dark text for contrast',
        },
        {
          label: 'Outline',
          example: 'Learn More',
          bg: 'transparent',
          text: '#E8B84B',
          border: '1.5px solid #E8B84B',
          description: 'Secondary actions · transparent background · golden yellow border and text',
        },
        {
          label: 'Ghost',
          example: 'Read More →',
          bg: 'transparent',
          text: '#0a0a0a',
          border: '1px solid #e5e5e5',
          description: 'Low-priority actions · transparent with light gray border',
        },
      ],
      badges: [
        { label: 'Success', example: 'Open Today', bg: '#dcfce7', text: '#16a34a', border: '1px solid #bbf7d0', description: 'Hours & availability status' },
        { label: 'Warm', example: 'Upcoming', bg: '#FEF3E2', text: '#E85C10', border: '1px solid #fddcaa', description: 'Appointments & warm emphasis' },
        { label: 'Neutral', example: 'Residential', bg: '#f5f5f5', text: '#3a3a3a', border: '1px solid #e5e5e5', description: 'Secondary category labels' },
      ],
      radii: [
        { name: 'sm', value: '0.25rem', px: '4px', use: 'Tight elements' },
        { name: 'md', value: '0.5rem', px: '8px', use: 'Inputs & buttons' },
        { name: 'lg', value: '0.75rem', px: '12px', use: 'Standard cards' },
        { name: '2xl', value: '1rem', px: '16px', use: 'Feature cards' },
        { name: '3xl', value: '1.5rem', px: '24px', use: 'Hero & large CTAs' },
      ],
      shadows: [
        { name: 'Subtle', css: '0 1px 3px rgba(0,0,0,.06)', use: 'Default card lift' },
        { name: 'Medium', css: '0 4px 12px rgba(0,0,0,.10)', use: 'Hover state' },
        { name: 'Large', css: '0 10px 30px rgba(0,0,0,.12)', use: 'Modals & drawers' },
        { name: 'Gold Glow', css: '0 8px 24px -4px rgba(232,184,75,.4)', use: 'Primary CTA emphasis' },
      ],
    },
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
    about: 'The TNT Lawn Care site revamp was a chance to build a professional online presence that reflected the quality and reliability of their services. The goal was to create a site that was easy to navigate, clearly communicated their offerings, and made it simple for customers to get in touch and request a quote.',
    clients: 'Local homeowners in Saline County looking for dependable, high-quality lawn care services. Customers need a trustworthy, approachable brand that makes scheduling and communication straightforward.',
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
    brandMoodboard: {
      previewColors: { bg: '#e5e5e0', accent: '#143d24', shadow: '#f2f2eb' },
      colors: [
        { name: 'Lime', hex: '#d4f238', role: 'Primary — CTAs & highlights' },
        { name: 'Forest Green', hex: '#143d24', role: 'Secondary — buttons & accents' },
        { name: 'Dark Green', hex: '#0a210f', role: 'Foreground — headings & body' },
        { name: 'Cream', hex: '#f2f2eb', role: 'Background' },
        { name: 'Light Gray', hex: '#e5e5e0', role: 'Borders & subtle surfaces' },
        { name: 'White', hex: '#ffffff', role: 'Cards & contrast surfaces' },
      ],
      typography: [
        {
          name: 'Manrope',
          role: 'All text — headings, body & UI',
          weights: ['400', '500', '600', '700', '800'],
          sample: 'Quality lawn care, done right.',
          note: 'Single-font system. Manrope is clean, geometric, and highly legible — approachable without being casual. Weight variations alone handle the full hierarchy from body copy to hero headlines.',
        },
      ],
      typeScale: [
        { level: 'H1', size: '72px', weight: '800', font: 'Manrope', use: 'Hero headline' },
        { level: 'H2', size: '48px', weight: '700', font: 'Manrope', use: 'Section heading' },
        { level: 'H3', size: '36px', weight: '700', font: 'Manrope', use: 'Card heading' },
        { level: 'Body', size: '16px', weight: '400', font: 'Manrope', use: 'Body copy' },
        { level: 'UI', size: '14px', weight: '600', font: 'Manrope', use: 'Labels & nav links' },
        { level: 'Caption', size: '12px', weight: '500', font: 'Manrope', use: 'Metadata & timestamps' },
      ],
      buttons: [
        {
          label: 'Primary',
          example: 'Get a Free Quote',
          bg: '#d4f238',
          text: '#0a210f',
          border: 'none',
          description: 'Main CTAs · Manrope 700 · lime background with dark green text for strong contrast',
        },
        {
          label: 'Secondary',
          example: 'Our Services',
          bg: '#143d24',
          text: '#ffffff',
          border: 'none',
          description: 'Supporting actions · forest green background · white text',
        },
        {
          label: 'Outline',
          example: 'Learn More',
          bg: 'transparent',
          text: '#0a210f',
          border: '1.5px solid #0a210f',
          description: 'Low-priority actions · transparent background · dark green border',
        },
      ],
      badges: [
        { label: 'Primary', example: 'Lawn Care', bg: '#d4f238', text: '#0a210f', border: 'none', description: 'Service tags & featured labels' },
        { label: 'Subtle', example: 'Residential', bg: '#e5e5e0', text: '#143d24', border: 'none', description: 'Secondary category labels' },
        { label: 'Dark', example: 'Free Estimate', bg: '#0a210f', text: '#d4f238', border: 'none', description: 'High-contrast promotional badges' },
      ],
      radii: [
        { name: 'sm', value: '0.25rem', px: '4px', use: 'Tight elements' },
        { name: 'md', value: '0.375rem', px: '6px', use: 'Inputs' },
        { name: 'lg', value: '0.5rem', px: '8px', use: 'Cards & buttons' },
        { name: '2xl', value: '1rem', px: '16px', use: 'Feature cards' },
        { name: 'full', value: '9999px', px: '∞', use: 'Pills & CTAs' },
      ],
      shadows: [
        { name: 'Subtle', css: '0 1px 3px rgba(10,33,15,.08)', use: 'Default card lift' },
        { name: 'Medium', css: '0 4px 12px rgba(10,33,15,.12)', use: 'Hover state' },
        { name: 'Large', css: '0 10px 30px rgba(10,33,15,.15)', use: 'Modals & drawers' },
        { name: 'Lime Glow', css: '0 8px 24px -4px rgba(212,242,56,.5)', use: 'Primary CTA emphasis' },
      ],
    },
  },
  {
    slug: 'torch-studio',
    title: 'Torch Studio',
    category: 'UI/UX & Branding',
    description: 'Building a music platform where honest pricing is the feature',
    image: asset('/images/TSMacMockup.png'),
    featured: true,
    size: 'medium',
    date: 'November 12, 2024',
    client: 'Concept Project',
    services: ['UI/UX Design', 'Branding', 'Prototyping'],
    website: 'https://agd3sign.github.io/Torch_Studio/',
    about: "Torch Studio is a concept music production and distribution platform built around a simple question: what if affordable and well-designed weren't opposites? The platform gives independent creators, podcasters, and filmmakers access to a catalog of royalty-free tracks, loops, and stems — starting at $0.99. The design challenge was building something that felt premium without communicating premium pricing.",
    clients: "Budget-conscious creators who've been priced out of mainstream licensing platforms. Podcasters, indie filmmakers, students, and small content teams who need quality music without the overhead. The target user isn't looking for a discount — they're looking for a platform that respects their budget without making them feel like a second-tier customer.",
    challenge: 'Most music platforms use dark, high-contrast interfaces that signal exclusivity and expense. Torch Studio needed to flip that convention — building a warm, inviting brand that felt trustworthy and approachable without looking cheap. The hardest part was making honest pricing feel like a strength rather than a limitation, and making the UI feel polished enough to sit alongside premium competitors.',
    results: 'The finished brand system gave Torch Studio a clear visual identity built around warmth and accessibility. Amber and cream replaced the industry-standard dark aesthetic, Fraunces brought editorial personality to the headlines, and every UI decision was anchored in the idea that affordability and quality are not at odds.',
    metrics: [
      { value: '100+', label: 'Tracks in catalog' },
      { value: '$0.99', label: 'Starting price per track' },
      { value: '8', label: 'Core UI screens designed' },
    ],
    galleryImages: {
      top: [asset('/images/TSPhoneMockup.png'), asset('/images/TSPhoneMockup2.png')],
      bottom: asset('/images/TSMacMockup2.png'),
    },
    brandMoodboard: {
      previewColors: { bg: '#EDE6D9', accent: '#D96B2B', shadow: '#FAF7F2' },
      colors: [
        { name: 'Torch Amber', hex: '#D96B2B', role: 'Primary — CTAs & highlights' },
        { name: 'Terracotta', hex: '#B54A1B', role: 'Accent — hover states' },
        { name: 'Warm Cream', hex: '#FAF7F2', role: 'Background' },
        { name: 'Warm Stone', hex: '#EDE6D9', role: 'Secondary surfaces & cards' },
        { name: 'Deep Charcoal', hex: '#1C1714', role: 'Foreground — all text' },
        { name: 'Warm Gray', hex: '#7D7064', role: 'Muted text & metadata' },
      ],
      typography: [
        {
          name: 'Fraunces',
          role: 'Display / Headings',
          weights: ['300', '400', '700', '900'],
          sample: 'Every beat, at a price that makes sense.',
          note: 'Used for H1–H4. Brings editorial warmth and quiet character — recalls analog music ephemera without feeling retro.',
        },
        {
          name: 'Nunito',
          role: 'Body / UI',
          weights: ['400', '500', '600', '700'],
          sample: '100+ tracks starting at $0.99.',
          note: "Rounded terminals are friendly and highly legible. Handles labels, buttons, and body copy with zero friction.",
        },
      ],
      typeScale: [
        { level: 'H1', size: '48px', weight: '700', font: 'Fraunces', use: 'Hero headline' },
        { level: 'H2', size: '36px', weight: '700', font: 'Fraunces', use: 'Section heading' },
        { level: 'H3', size: '30px', weight: '700', font: 'Fraunces', use: 'Card heading' },
        { level: 'Lead', size: '20px', weight: '400', font: 'Nunito', use: 'Hero sub-copy' },
        { level: 'Body', size: '16px', weight: '400', font: 'Nunito', use: 'Body copy' },
        { level: 'UI', size: '14px', weight: '600', font: 'Nunito', use: 'Labels & nav links' },
        { level: 'Kicker', size: '10px', weight: '700', font: 'Nunito', use: 'Section kickers (uppercase)' },
      ],
      buttons: [
        {
          label: 'Primary',
          example: 'Browse the catalog',
          bg: '#D96B2B',
          text: '#FAF7F2',
          border: 'none',
          description: 'Main CTAs · Nunito 700 · hover shifts to #B54A1B with amber shadow',
        },
        {
          label: 'Outline',
          example: 'See how it works',
          bg: 'transparent',
          text: '#1C1714',
          border: '1px solid #D4C9B5',
          description: 'Secondary actions · hover background #EDE6D9',
        },
        {
          label: 'Ghost',
          example: 'Learn more',
          bg: 'transparent',
          text: '#7D7064',
          border: 'none',
          description: 'Nav links & low-priority actions · hover background #EDE6D9, text #1C1714',
        },
      ],
      badges: [
        { label: 'Primary', example: 'New Release', bg: 'rgba(217,107,43,0.10)', text: '#D96B2B', border: '1px solid rgba(217,107,43,0.25)', description: 'CTAs, highlights, active states' },
        { label: 'Outline', example: 'Instrumental', bg: 'transparent', text: '#7D7064', border: '0.5px solid #D4C9B5', description: 'Secondary tags, genre labels' },
        { label: 'CC0 License', example: 'CC0 Free', bg: 'rgba(22,163,74,0.10)', text: '#15803D', border: '1px solid rgba(22,163,74,0.25)', description: 'License status on all track cards' },
      ],
      radii: [
        { name: 'sm', value: '0.5rem', px: '8px', use: 'Badges, small chips' },
        { name: 'md', value: '0.625rem', px: '10px', use: 'Inputs, secondary elements' },
        { name: 'lg', value: '0.75rem', px: '12px', use: 'Cards, buttons, modals' },
        { name: 'xl', value: '1rem', px: '16px', use: 'Large feature cards' },
        { name: '2xl', value: '1.25rem', px: '20px', use: 'Hero CTAs, large containers' },
      ],
      shadows: [
        { name: 'Warm SM', css: '0 1px 3px rgba(28,23,20,.08)', use: 'Subtle card lift' },
        { name: 'Warm MD', css: '0 4px 6px rgba(28,23,20,.10)', use: 'Standard cards' },
        { name: 'Warm LG', css: '0 10px 15px rgba(28,23,20,.10)', use: 'Hover state lift' },
        { name: 'Amber', css: '0 8px 24px -4px rgba(217,107,43,.3)', use: 'Primary CTAs, featured cards' },
      ],
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
      'Flat-rate pricing locked in before anything starts',
      'You sign off on the project brief before we move forward',
    ],
  },
  {
    number: '02',
    title: 'Research & Inspiration',
    description: "I gather design references and explore ideas across the web — using every tool available, including AI, to find what resonates before any decisions are made.",
    details: [
      'Design research and reference gathering',
      'AI-assisted ideation to explore more directions, faster',
      'Tech stack recommendation based on your goals and budget',
    ],
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: "You see exactly what you're getting before a single line of code is written. AI helps accelerate the process — the decisions and direction are still mine.",
    details: [
      'Clickable prototypes you can review and share',
      'Two revision rounds per stage — we get it right before moving on',
      'Full design approval before development begins',
    ],
  },
  {
    number: '04',
    title: 'Development',
    description: "Clean, fast, fully responsive code built to match the approved design exactly. I use AI as a development tool to work efficiently — every line is reviewed and intentional.",
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
    description: "I handle the launch and stay available after. If something comes up, you reach me directly — not a support ticket queue.",
    details: [
      'Hosted on my managed servers — direct line to me if anything breaks',
      '30-day post-launch support included, no extra charge',
      'Optional ongoing maintenance for updates and new features',
    ],
  },
]

export const clients = [
  { name: 'pipefy', label: 'Pipefy.io', date: 'March 2023' },
  { name: 'django', label: 'Django', date: 'June 2023' },
  { name: 'rackspace', label: 'Rackspace', date: 'October 2022' },
  { name: 'portal', label: 'Portal', date: 'January 2024' },
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
