import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Hide the native HTML loader with a smooth fade
    const timer = setTimeout(() => {
      if (window.__hideNativeLoader) window.__hideNativeLoader()
      setReady(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Keep app invisible until loader fades out
  return (
    <div style={{
      background: '#060610',
      minHeight: '100vh',
      opacity: ready ? 1 : 0,
      transition: 'opacity 0.4s ease',
    }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
