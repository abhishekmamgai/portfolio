import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'

const roles = ['AIML Student', 'Full Stack Developer', 'React Developer', 'AI Enthusiast']

// Neural network nodes for background
const NODES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i % 7) * 14.5 + 4 + (Math.floor(i / 7) % 2) * 7,
  y: Math.floor(i / 7) * 24 + 8,
}))

const CONNECTIONS = NODES.flatMap((n, i) =>
  NODES.slice(i + 1)
    .filter(m => Math.abs(n.x - m.x) < 20 && Math.abs(n.y - m.y) < 28)
    .slice(0, 2)
    .map(m => ({ from: n, to: m, id: `${n.id}-${m.id}` }))
)

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [pulse, setPulse] = useState(0)

  // Typing animation
  useEffect(() => {
    const role = roles[roleIdx]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(r => (r + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  // Pulse random nodes
  useEffect(() => {
    const t = setInterval(() => setPulse(Math.floor(Math.random() * NODES.length)), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      width: '100vw', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #060610 0%, #0a0520 50%, #060610 100%)',
      padding: '0 24px',
    }}>

      {/* ── FULLSCREEN NEURAL NET SVG ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        {/* Connection lines */}
        {CONNECTIONS.map(c => (
          <motion.line key={c.id}
            x1={c.from.x} y1={c.from.y} x2={c.to.x} y2={c.to.y}
            stroke="url(#lineGrad)" strokeWidth="0.18"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0.15] }}
            transition={{ duration: 3 + Math.random() * 3, delay: Math.random() * 4, repeat: Infinity, repeatDelay: Math.random() * 6 }}
          />
        ))}
        {/* Nodes */}
        {NODES.map(n => (
          <motion.circle key={n.id}
            cx={n.x} cy={n.y} r={n.id === pulse ? 0.7 : 0.35}
            fill={n.id === pulse ? '#ec4899' : '#7c3aed'}
            animate={{ r: n.id === pulse ? [0.35, 0.9, 0.35] : 0.35, opacity: n.id === pulse ? [0.4, 1, 0.4] : 0.4 }}
            transition={{ duration: 0.8 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '5%', left: '-5%', width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600, background: 'radial-gradient(circle,rgba(124,58,237,0.13) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: '45vw', height: '45vw', maxWidth: 500, maxHeight: 500, background: 'radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '40%', width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500, background: 'radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 860, width: '100%', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: 80 }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 100, padding: '7px 20px', marginBottom: 36 }}>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#7c3aed', display: 'inline-block', boxShadow: '0 0 10px #7c3aed' }} />
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.72rem', color: '#a78bfa', letterSpacing: '0.12em' }}>
            CSE · AIML · B.Tech · 3rd Year
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
          style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2.8rem,8vw,5.5rem)', lineHeight: 1.04, marginBottom: 20, letterSpacing: '-0.03em' }}>
          <span style={{ color: '#e2e8f0' }}>Hi, I'm </span>
          <span style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Abhishek
          </span>
          <br />
          <span style={{ color: '#cbd5e1' }}>Mamgai</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: 'clamp(0.9rem,2.5vw,1.2rem)', color: '#06b6d4', letterSpacing: '0.04em' }}>
            {displayed}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} style={{ color: '#7c3aed' }}>|</motion.span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7 }}
          style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', color: '#475569', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.85 }}>
          Building intelligent systems & modern web experiences. Passionate about AI/ML, deep learning, and crafting products that matter.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
          <Link to="projects" smooth duration={600}>
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(124,58,237,0.45)' }} whileTap={{ scale: 0.96 }}
              style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: '#fff', padding: '14px 38px', borderRadius: 10, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', letterSpacing: '0.02em' }}>
              View Projects →
            </motion.button>
          </Link>
          <motion.a href="https://github.com/abhishekmamgai" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: 'rgba(124,58,237,0.7)' }} whileTap={{ scale: 0.96 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#a78bfa', padding: '14px 38px', borderRadius: 10, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.95rem', border: '1px solid rgba(124,58,237,0.35)', cursor: 'pointer', textDecoration: 'none', transition: 'border-color 0.2s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.35 }}>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#94a3b8' }}>SCROLL</span>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom,#7c3aed,transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}

export default Home
