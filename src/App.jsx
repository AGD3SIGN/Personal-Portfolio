import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Works from '@/pages/Works'
import CaseStudy from '@/pages/CaseStudy'
import Contact from '@/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
