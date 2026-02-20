import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Lenis from 'lenis'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { GrainOverlay } from '@/components/layout/GrainOverlay'
import { PageTransition } from '@/components/layout/PageTransition'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Works from '@/pages/Works'
import CaseStudy from '@/pages/CaseStudy'
import Contact from '@/pages/Contact'

function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    window.__lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return children
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <ScrollToTop />
        <ScrollProgress />
        <GrainOverlay />
        <AnimatedRoutes />
      </LenisProvider>
    </BrowserRouter>
  )
}

export default App
