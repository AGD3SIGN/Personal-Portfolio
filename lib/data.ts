export const projects = [
  {
    slug: "estatery",
    title: "Estatery",
    category: "UIUX",
    description: "A cutting-edge real estate platform that simplifies property search and management with intuitive design.",
    image: "/images/project-estatery-laptop.jpg",
    featured: true,
    size: "large" as const,
    date: "May 5, 2023",
    client: "Jacob McDany",
    services: ["Mobile App", "Website Design", "UIUX"],
    website: "#",
    about: "At Sporttify, we believe in making fitness fun and convenient. That's why we've developed a cutting-edge mobile app and dashboard that allows you to effortlessly track and manage your sport activities. Whether you're an avid runner, a devoted cyclist, or a fitness enthusiast, Sporttify has got you covered! With Sporttify, you'll enjoy a user-friendly interface that empowers you to log your workouts, set personal goals, and monitor your achievements.",
    clients: "Our esteemed clients, who are passionate about maintaining an active lifestyle, inspired us to create Sporttify. They sought an all-in-one solution that could seamlessly monitor their progress, provide insightful data, and keep them motivated throughout their fitness journey. We listened, and we delivered.",
    challenge: "To ensure a holistic experience, Sporttify also offers a personalized dashboard accessible from any device. This dashboard gives you an overview of your progress, allowing you to analyze your data, track trends, and identify areas for improvement.",
    results: "We understand that motivation plays a crucial role in maintaining an active lifestyle. That's why we've incorporated exciting features like badges, rewards, and challenges within Sporttify. Achieve your goals and unlock various milestones to earn recognition and stay motivated on your fitness journey.",
    metrics: [
      { value: "$22.8M", label: "Total raised in funding so far" },
      { value: "+24%", label: "Conversion rate with new design" },
      { value: "~400K", label: "Daily users enjoying sporttify" },
    ],
    testimonial: {
      quote: "Working with Ivan was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.",
      author: "Jacob McDany",
      role: "CEO of Rackspace",
      company: "rackspace",
    },
  },
  {
    slug: "wepay",
    title: "Wepay",
    category: "Branding",
    description: "A modern fintech payment solution with clean, user-friendly interface design.",
    image: "/images/project-wepay-phone.jpg",
    featured: true,
    size: "medium" as const,
    date: "June 12, 2023",
    client: "Sarah Chen",
    services: ["Branding", "Mobile App", "UIUX"],
    website: "#",
    about: "Wepay is a revolutionary fintech payment platform designed to streamline financial transactions for businesses of all sizes. Our comprehensive approach to design ensured both aesthetics and functionality.",
    clients: "Our clients needed a payment solution that was both secure and intuitive, allowing their users to manage transactions effortlessly while maintaining trust in the platform.",
    challenge: "The main challenge was creating a mobile-first experience that could handle complex financial data while maintaining a clean, approachable interface that users of all technical levels could navigate with ease.",
    results: "Through extensive user research and iterative design, we delivered a platform that significantly improved user engagement and transaction completion rates.",
    metrics: [
      { value: "$15.2M", label: "Processed in first quarter" },
      { value: "+38%", label: "User retention improvement" },
      { value: "~200K", label: "Active monthly users" },
    ],
    testimonial: {
      quote: "Ivan's professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. He made invaluable contributions and would highly recommend him.",
      author: "Spencer Morgan",
      role: "Co-Founder",
      company: "django",
    },
  },
  {
    slug: "payrole",
    title: "Payrole",
    category: "Mobile App",
    description: "A comprehensive payroll management system designed for modern businesses.",
    image: "/images/project-payrole-phone.jpg",
    featured: true,
    size: "medium" as const,
    date: "August 20, 2023",
    client: "Michael Rivera",
    services: ["Mobile App", "UIUX"],
    website: "#",
    about: "Payrole is a next-generation payroll management application that simplifies employee payment processing and tax calculations for small to medium businesses.",
    clients: "Small and medium business owners who needed a straightforward payroll solution that could scale with their growing teams.",
    challenge: "Designing an interface that could accommodate complex payroll calculations while keeping the experience simple and stress-free for business owners.",
    results: "We delivered a streamlined payroll experience that reduced processing time by 60% and eliminated common calculation errors.",
    metrics: [
      { value: "60%", label: "Reduction in processing time" },
      { value: "+45%", label: "Increase in user satisfaction" },
      { value: "~100K", label: "Businesses served globally" },
    ],
    testimonial: {
      quote: "Ivan is an exceptionally talented designer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs.",
      author: "Rachel Krakow",
      role: "CEO of Pipefy",
      company: "pipefy",
    },
  },
]

export const clients = [
  { name: "pipefy", label: "Pipefy.io", date: "May 5, 2023" },
  { name: "django", label: "Django", date: "May 5, 2023" },
  { name: "rackspace", label: "Rackspace", date: "May 5, 2023" },
  { name: "portal", label: "Portal", date: "May 5, 2023" },
]

export const testimonials = [
  {
    quote: "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Ivan for anyone looking for a talented and professional designer.",
    author: "Richard Jones",
    role: "CEO at Teamwork",
    company: "teamwork.",
  },
  {
    quote: "His professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. He made invaluable contributions and would highly recommend him to anyone in need of a talented and reliable designer.",
    author: "Spencer Morgan",
    role: "Co-Founder",
    company: "django",
  },
  {
    quote: "Ivan is an exceptionally talented designer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs that perfectly captured our brand's essence.",
    author: "Rachel Krakow",
    role: "CEO of Pipefy",
    company: "pipefy",
  },
  {
    quote: "Working with Ivan was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.",
    author: "Jacob McDany",
    role: "CEO of Rackspace",
    company: "rackspace",
  },
]

export const awards = [
  { title: "Honorable Mention", year: "2022", org: "AWWWARDS" },
  { title: "Site of The Day", year: "2022", org: "CSS Winners" },
  { title: "Best UI Design", year: "2023", org: "CSS Design Awards" },
  { title: "Site of The Day", year: "2023", org: "AWWWARDS" },
]

export const experience = [
  { period: "2013-2015", duration: "2 years", role: "as a Product Designer at Uber" },
  { period: "2015-2018", duration: "3 years", role: "as a Lead of Product Designer at Spotify" },
  { period: "2018-Now", duration: "5+ years", role: "as a Head of Product Designer at Rovio" },
]

export const blogPosts = [
  {
    title: "The Power of Typography in Visual Design: Enhancing Communication and Impact",
    date: "Feb 1, 2023",
    image: "/images/blog-typography.jpg",
  },
  {
    title: "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
    date: "April 5, 2023",
    image: "/images/blog-ux.jpg",
  },
]
