# HOW-TO: Managing Your Portfolio Website

This guide explains how your portfolio is built, where all the data lives, and how to edit everything.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [How Data Works](#how-data-works)
4. [Editing Your Projects](#editing-your-projects)
5. [Adding New Projects](#adding-new-projects)
6. [Editing Page Content](#editing-page-content)
7. [Updating Personal Info](#updating-personal-info)
8. [Managing Images](#managing-images)
9. [Styling & Theming](#styling--theming)
10. [Routing (Pages)](#routing-pages)
11. [Component Reference](#component-reference)
12. [Common Tasks Cheat Sheet](#common-tasks-cheat-sheet)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your site runs at `http://localhost:5173` during development.

---

## Project Structure

```
Personal Portfolio/
├── public/
│   └── images/              # All your images go here
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui component library (pre-built, rarely touched)
│   │   ├── sections/        # Homepage section components
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutPreview.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── ClientsSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── AwardsSection.jsx
│   │   │   ├── InsightsSection.jsx
│   │   │   └── CTASection.jsx
│   │   ├── Navigation.jsx   # Top nav bar + full-screen menu overlay
│   │   ├── Footer.jsx       # Site footer with CTA
│   │   ├── ScrollReveal.jsx # Scroll animation wrapper
│   │   └── ScrollToTop.jsx  # Auto-scroll to top on page change
│   ├── pages/
│   │   ├── Home.jsx         # Homepage (/)
│   │   ├── About.jsx        # About page (/about)
│   │   ├── Works.jsx        # All projects (/works)
│   │   ├── CaseStudy.jsx    # Individual project page (/works/:slug)
│   │   └── Contact.jsx      # Contact form (/contact)
│   ├── hooks/               # React hooks (use-mobile, use-toast)
│   ├── lib/
│   │   ├── data.js          # ALL YOUR CONTENT DATA LIVES HERE
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Router setup
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles + CSS color variables
├── index.html               # HTML shell (fonts, meta tags, page title)
├── tailwind.config.js       # Tailwind theme (colors, fonts, animations)
├── vite.config.js           # Vite bundler config
├── components.json          # shadcn/ui config
└── package.json             # Dependencies
```

---

## How Data Works

Almost all dynamic content on your site comes from one file:

### `src/lib/data.js`

This file exports 6 data arrays that get imported by various pages and components:

| Export | Used By | What It Controls |
|--------|---------|-----------------|
| `projects` | Works page, Case Study page, Featured Projects section | Your portfolio projects |
| `clients` | About page | Client list on the about page |
| `testimonials` | Testimonials section (homepage) | Client quotes |
| `awards` | About page, Awards section (homepage) | Award listings |
| `experience` | About page | Work experience timeline |
| `blogPosts` | Insights section (homepage) | Blog post cards |

### How the data flows

```
src/lib/data.js
    │
    ├── projects ──────► src/pages/Works.jsx (project grid)
    │                  ► src/pages/CaseStudy.jsx (full case study)
    │                  ► src/components/sections/FeaturedProjects.jsx (homepage)
    │
    ├── clients ───────► src/pages/About.jsx (client list)
    │
    ├── testimonials ──► src/components/sections/TestimonialsSection.jsx (homepage)
    │
    ├── awards ────────► src/pages/About.jsx (award list)
    │                  ► src/components/sections/AwardsSection.jsx (homepage)
    │
    ├── experience ────► src/pages/About.jsx (work history)
    │
    └── blogPosts ─────► src/components/sections/InsightsSection.jsx (homepage)
```

---

## Editing Your Projects

Open `src/lib/data.js` and find the `projects` array. Each project is an object like this:

```js
{
  // --- IDENTITY ---
  slug: 'estatery',           // URL path — your project lives at /works/estatery
  title: 'Estatery',          // Display name shown on cards and case study
  category: 'UIUX',           // Tag shown below the title on cards

  // --- CARD DISPLAY ---
  description: 'A cutting-edge real estate platform...',  // Short summary
  image: '/images/project-estatery-laptop.jpg',           // Card thumbnail image
  featured: true,              // true = shows on homepage, false = works page only
  size: 'large',               // Layout hint (not actively used right now)

  // --- CASE STUDY SIDEBAR ---
  date: 'May 5, 2023',        // Shown in sidebar
  client: 'Jacob McDany',     // Shown in sidebar
  services: ['Mobile App', 'Website Design', 'UIUX'],  // Shown in sidebar
  website: '#',                // "Visit Website" button link — change '#' to a real URL

  // --- CASE STUDY BODY ---
  about: 'Long description...',       // "About" section text
  clients: 'Client description...',   // "Our Clients" section text
  challenge: 'Challenge text...',     // "Challenge" section text
  results: 'Results text...',         // "Results" section text

  // --- CASE STUDY METRICS ---
  metrics: [
    { value: '$22.8M', label: 'Total raised in funding so far' },
    { value: '+24%', label: 'Conversion rate with new design' },
    { value: '~400K', label: 'Daily users enjoying sporttify' },
  ],

  // --- CASE STUDY TESTIMONIAL (optional) ---
  testimonial: {
    quote: 'Working with Brandon was a game-changer...',
    author: 'Jacob McDany',
    role: 'CEO of Rackspace',
    company: 'rackspace',
  },
}
```

### To edit a project

1. Open `src/lib/data.js`
2. Find the project object you want to change
3. Update any field value
4. Save — the dev server hot-reloads automatically

### Field-by-field guide

| Field | Where It Shows Up | Example |
|-------|-------------------|---------|
| `slug` | URL: `/works/your-slug` | `'my-awesome-app'` |
| `title` | Card title, case study heading, browser tab | `'My Awesome App'` |
| `category` | Small text under card title | `'Web Development'` |
| `image` | Project card thumbnail | `'/images/my-app.jpg'` |
| `featured` | Set to `true` to show on homepage | `true` or `false` |
| `website` | "Visit Website" button on case study | `'https://myapp.com'` |
| `date` | Case study sidebar | `'January 15, 2024'` |
| `client` | Case study sidebar | `'Acme Corp'` |
| `services` | Case study sidebar list | `['Web Dev', 'Design']` |
| `about` | Case study body paragraph | Long text string |
| `challenge` | Case study body paragraph | Long text string |
| `results` | Case study body paragraph | Long text string |
| `metrics` | Stats row (3 items) | `[{ value: '50%', label: 'Faster load' }]` |
| `testimonial` | Quote card at bottom (optional) | Object with quote, author, role, company |

---

## Adding New Projects

### Step 1: Add your project image

Put your image file in `public/images/`. For example:

```
public/images/project-myapp.jpg
```

### Step 2: Add the project data

Open `src/lib/data.js` and add a new object to the `projects` array:

```js
export const projects = [
  // ... existing projects ...

  // ADD YOUR NEW PROJECT HERE:
  {
    slug: 'my-new-project',
    title: 'My New Project',
    category: 'Web Development',
    description: 'A brief one-liner about this project.',
    image: '/images/project-myapp.jpg',
    featured: true,
    size: 'medium',
    date: 'March 10, 2024',
    client: 'Client Name',
    services: ['Web Development', 'UIUX'],
    website: 'https://example.com',
    about: 'Detailed paragraph about the project...',
    clients: 'Who the client was and what they needed...',
    challenge: 'What challenges you faced...',
    results: 'What the outcomes were...',
    metrics: [
      { value: '3x', label: 'Faster page loads' },
      { value: '+60%', label: 'User engagement increase' },
      { value: '10K', label: 'Monthly active users' },
    ],
    testimonial: {
      quote: 'Working with Brandon was incredible...',
      author: 'Jane Doe',
      role: 'CTO',
      company: 'Acme Corp',
    },
  },
]
```

### Step 3: It's live

Your new project will automatically:
- Appear at `/works/my-new-project` (based on the slug)
- Show on the homepage if `featured: true`

### Important: Update the Works page grid

The Works page (`src/pages/Works.jsx`) currently uses hardcoded indices like `projects[0]` and `projects[1]`. To show all projects dynamically, replace the grid section with:

```jsx
<div className="grid gap-8 md:grid-cols-2">
  {projects.map((project, i) => (
    <ScrollReveal key={project.slug} delay={i % 2 === 1 ? 100 : 0}>
      <ProjectCard project={project} />
    </ScrollReveal>
  ))}
</div>
```

The same applies to `src/components/sections/FeaturedProjects.jsx` on the homepage — it also uses hardcoded indices for the bento grid layout.

---

## Editing Page Content

Most page text is hardcoded directly in the component files (not in data.js). Here's where to find everything:

### Homepage

| Section | File | What to Edit |
|---------|------|-------------|
| Hero heading | `src/components/sections/Hero.jsx` | "I'm a frontend developer with passion to create great experiences" |
| Hero description | `src/components/sections/Hero.jsx` | "I'm Brandon, a Frontend Developer living in Munich..." |
| Hero social links | `src/components/sections/Hero.jsx` | Instagram, Behance, Dribbble URLs (currently `#`) |
| About preview image | `src/components/sections/AboutPreview.jsx` | `/images/headshot.jpg` |
| About preview text | `src/components/sections/AboutPreview.jsx` | Heading and description |
| Featured projects heading | `src/components/sections/FeaturedProjects.jsx` | "Discover my latest works" |
| Clients heading | `src/components/sections/ClientsSection.jsx` | Section heading + client brand list |
| Testimonials heading | `src/components/sections/TestimonialsSection.jsx` | "Let's see what my clients say" |
| Awards image | `src/components/sections/AwardsSection.jsx` | `/images/award-trophy.jpg` |
| Awards heading | `src/components/sections/AwardsSection.jsx` | "Awwards Winning..." + "Brandon Torres - 2022" |
| Blog posts heading | `src/components/sections/InsightsSection.jsx` | "Latest Insights" |
| CTA email | `src/components/sections/CTASection.jsx` | `hello@brandontorres.dev` |

### About Page (`src/pages/About.jsx`)

| Content | What to Edit |
|---------|-------------|
| Page title | `"About Me \| showcasy."` |
| Hero heading | `"About me, a Frontend Developer living in Munich"` |
| Hero description | `"As a Frontend Developer with over 10 years of experience..."` |
| Portrait image | `"/images/headshot.jpg"` |
| Bio heading | `"I'm the frontend developer you need..."` |
| Bio paragraphs | Two paragraph descriptions |
| Award heading | `"Awwards Winning - Independent of The Year"` |
| Award subtitle | `"Brandon Torres - 2022"` |

### Contact Page (`src/pages/Contact.jsx`)

| Content | What to Edit |
|---------|-------------|
| Page title | `"Contact \| showcasy."` |
| Hero heading | `"Say Hi! and tell me about your idea"` |
| Services list | Array: Mobile App, Website Design, Branding, Web Development, Illustration, Logo Design, Graphic Design |
| Budget ranges | Array: $1k-$5k, $5k-$10k, $10k-$20k, $20k-$50k, >$50k |

**Note:** The contact form currently only logs to console. To make it functional, you'll need to connect it to a backend service (Formspree, EmailJS, etc.).

### Case Study Page (`src/pages/CaseStudy.jsx`)

| Content | Where It Comes From |
|---------|-------------------|
| Project title, sidebar, body text | `src/lib/data.js` → `projects` array |
| Hero subtitle | Hardcoded: `"Unleash Your Potential and Push Beyond Limits"` |
| Gallery images | Hardcoded paths (3 images) — update in the JSX |
| CTA email | Hardcoded: `hello@brandontorres.dev` |

---

## Updating Personal Info

Here's every place your personal info appears. Update all of them for consistency:

### Name ("Brandon Torres")

| File | Line/Location |
|------|--------------|
| `src/components/sections/Hero.jsx` | "I'm Brandon, a Frontend Developer..." |
| `src/pages/About.jsx` | "Brandon Torres - 2022" (award subtitle) |
| `src/components/sections/AwardsSection.jsx` | "Brandon Torres - 2022" |
| `src/lib/data.js` | Testimonial quotes mentioning "Brandon" |

### Title ("Frontend Developer")

| File | Line/Location |
|------|--------------|
| `src/components/sections/Hero.jsx` | Heading and description |
| `src/pages/About.jsx` | Hero heading and description |
| `src/components/Footer.jsx` | "A freelance frontend developer..." |
| `index.html` | Meta description |

### Email

| File | Line/Location |
|------|--------------|
| `src/components/sections/CTASection.jsx` | `hello@brandontorres.dev` |
| `src/pages/CaseStudy.jsx` | `hello@brandontorres.dev` |

### Location ("Munich" / "Berlin")

| File | Line/Location |
|------|--------------|
| `src/components/sections/Hero.jsx` | "living in Munich" |
| `src/pages/About.jsx` | "living in Munich" |
| `src/components/Footer.jsx` | "currently based in Berlin" |
| `index.html` | "Currently based in Berlin" |

### Social Media Links (all currently `#`)

| File | Links |
|------|-------|
| `src/components/Navigation.jsx` | Instagram, Behance, Twitter, Dribbble |
| `src/components/sections/Hero.jsx` | Instagram, Behance, Dribbble |
| `src/components/Footer.jsx` | Twitter, YouTube, TikTok, Instagram |

### Brand Name ("showcasy.")

| File | Location |
|------|----------|
| `src/components/Navigation.jsx` | Logo in header + overlay |
| `src/components/Footer.jsx` | Logo in footer |
| `index.html` | `<title>` tag |
| `src/pages/About.jsx` | `document.title` |
| `src/pages/Works.jsx` | `document.title` |
| `src/pages/Contact.jsx` | `document.title` |
| `src/pages/CaseStudy.jsx` | `document.title` |

---

## Managing Images

All images go in the `public/images/` folder. Reference them with paths starting from `/images/`.

### Currently referenced images

| Image Path | Used In |
|------------|---------|
| `/images/headshot.jpg` | About page portrait, About Preview section |
| `/images/award-trophy.jpg` | About page, Awards section |
| `/images/project-estatery-laptop.jpg` | Estatery project card |
| `/images/project-wepay-phone.jpg` | Wepay project card + case study gallery |
| `/images/project-payrole-phone.jpg` | Payrole project card + case study gallery |
| `/images/project-estatery-laptop-2.jpg` | Case study gallery (hardcoded) |
| `/images/blog-typography.jpg` | Insights section |
| `/images/blog-ux.jpg` | Insights section |

### Adding a new image

1. Place file in `public/images/` (e.g. `public/images/my-photo.jpg`)
2. Reference it as `/images/my-photo.jpg` in your code or data
3. Recommended formats: `.jpg`, `.png`, `.webp`
4. Keep file sizes reasonable (under 500KB for fast loading)

---

## Styling & Theming

### Fonts

Defined in `index.html` via Google Fonts CDN:
- **Space Grotesk** — headings and UI text (`font-sans` in Tailwind)
- **Roboto** — body/paragraph text (`font-body` in Tailwind)

### Colors

All colors use CSS custom properties defined in `src/index.css`. The main ones:

| Variable | Default | Used For |
|----------|---------|----------|
| `--background` | White | Page background |
| `--foreground` | Dark gray | Main text |
| `--muted-foreground` | Medium gray | Secondary text |
| `--secondary` | Light gray | Card backgrounds |
| `--border` | Light gray | Borders, dividers |
| `--dark-bg` | Very dark blue | Dark sections (CTA, footer) |

To change a color, edit the HSL values in `src/index.css` under `:root`.

### Animations

The `ScrollReveal` component handles all scroll animations. It fades content in from below when it enters the viewport. You can control the delay with the `delay` prop (in milliseconds).

---

## Routing (Pages)

Routes are defined in `src/App.jsx`:

| URL | Page Component | Description |
|-----|---------------|-------------|
| `/` | `Home.jsx` | Homepage with all sections |
| `/about` | `About.jsx` | About page |
| `/works` | `Works.jsx` | All projects grid |
| `/works/:slug` | `CaseStudy.jsx` | Individual project (slug from data.js) |
| `/contact` | `Contact.jsx` | Contact form |

The `:slug` in `/works/:slug` is dynamic — it matches the `slug` field in your project data. So a project with `slug: 'my-app'` is accessible at `/works/my-app`.

If a slug doesn't match any project, the user is redirected to `/works`.

---

## Component Reference

### Layout Components (appear on every page)

| Component | File | Purpose |
|-----------|------|---------|
| Navigation | `src/components/Navigation.jsx` | Fixed header + full-screen menu overlay |
| Footer | `src/components/Footer.jsx` | CTA section + footer with socials |
| ScrollToTop | `src/components/ScrollToTop.jsx` | Scrolls to top when navigating between pages |

### Section Components (homepage building blocks)

| Component | File | Data Source |
|-----------|------|-------------|
| Hero | `src/components/sections/Hero.jsx` | Hardcoded |
| AboutPreview | `src/components/sections/AboutPreview.jsx` | Hardcoded |
| FeaturedProjects | `src/components/sections/FeaturedProjects.jsx` | `projects` from data.js |
| ClientsSection | `src/components/sections/ClientsSection.jsx` | Hardcoded (local array) |
| TestimonialsSection | `src/components/sections/TestimonialsSection.jsx` | `testimonials` from data.js |
| AwardsSection | `src/components/sections/AwardsSection.jsx` | `awards` from data.js |
| InsightsSection | `src/components/sections/InsightsSection.jsx` | `blogPosts` from data.js |
| CTASection | `src/components/sections/CTASection.jsx` | Hardcoded |

### Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| ScrollReveal | `src/components/ScrollReveal.jsx` | Wraps content for fade-in-on-scroll animation. Props: `delay` (ms), `className` |

---

## Common Tasks Cheat Sheet

### Change a project's "Visit Website" link
`src/lib/data.js` → find the project → change `website: '#'` to your URL

### Add a new project
`src/lib/data.js` → add a new object to the `projects` array (see [Adding New Projects](#adding-new-projects))

### Change your email
Update in both:
- `src/components/sections/CTASection.jsx`
- `src/pages/CaseStudy.jsx`

### Update social media links
- Navigation overlay: `src/components/Navigation.jsx` → `socialLinks` array
- Homepage hero: `src/components/sections/Hero.jsx` → `socialLinks` array
- Footer icons: `src/components/Footer.jsx` → `socialIcons` array

### Change the site title/brand
- Logo: `src/components/Navigation.jsx` and `src/components/Footer.jsx`
- Browser tab: `index.html` → `<title>` tag
- Page titles: Each page file in `src/pages/` → `document.title`

### Add a testimonial
`src/lib/data.js` → add to the `testimonials` array:
```js
{
  quote: 'Your testimonial text...',
  author: 'Person Name',
  role: 'Their Title',
  company: 'Company Name',
}
```

### Add an award
`src/lib/data.js` → add to the `awards` array:
```js
{ title: 'Award Name', year: '2024', org: 'Organization' }
```

### Add a blog post
`src/lib/data.js` → add to the `blogPosts` array:
```js
{
  title: 'Your Blog Post Title',
  date: 'Jan 1, 2024',
  image: '/images/blog-new-post.jpg',
}
```

### Change colors
`src/index.css` → edit HSL values under `:root`

### Change fonts
`index.html` → update the Google Fonts `<link>` URL
`tailwind.config.js` → update `fontFamily.sans` and `fontFamily.body`

### Make the contact form work
The form in `src/pages/Contact.jsx` currently only logs to console. To connect it:
1. Sign up for a form service (Formspree, EmailJS, Web3Forms, etc.)
2. Replace the `handleSubmit` function with an API call to your chosen service
