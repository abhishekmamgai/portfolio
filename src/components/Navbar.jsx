import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(6,6,16,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 68 }}>

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.04 }} style={{ cursor: 'pointer' }}>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.95rem', fontWeight: 700, color: '#7c3aed' }}>&lt;Abhishek</span>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.95rem', fontWeight: 700, color: '#ec4899' }}>.dev/&gt;</span>
        </motion.div>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link to={link.id} smooth duration={600} style={{ cursor: 'pointer' }}>
                <span className="underline-anim"
                  style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.75rem', color: '#64748b', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#e2e8f0'}
                  onMouseLeave={e => e.target.style.color = '#64748b'}>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}

          {/* GitHub icon link */}
          <li>
            <motion.a href="https://github.com/abhishekmamgai" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#e2e8f0' }}
              style={{ color: '#64748b', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}>
              <GithubIcon />
            </motion.a>
          </li>

          <li>
            <a href="/Abhishek_Mamgai_CV.pdf" download
              style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: '#fff', padding: '8px 18px', borderRadius: 8, fontSize: '0.72rem', fontFamily: 'Space Mono,monospace', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7c3aed', fontSize: '1.4rem' }}
          className="md:hidden">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            style={{ background: 'rgba(6,6,16,0.97)', borderTop: '1px solid rgba(124,58,237,0.2)', padding: '20px 24px' }}>
            {navLinks.map(link => (
              <Link key={link.id} to={link.id} smooth duration={600} onClick={() => setIsOpen(false)}>
                <div style={{ padding: '11px 0', fontFamily: 'Space Mono,monospace', fontSize: '0.85rem', color: '#94a3b8', borderBottom: '1px solid rgba(124,58,237,0.08)', cursor: 'pointer' }}>{link.label}</div>
              </Link>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
              <a href="https://github.com/abhishekmamgai" target="_blank" rel="noopener noreferrer"
                style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Space Mono,monospace', fontSize: '0.75rem', textDecoration: 'none' }}>
                <GithubIcon /> GitHub
              </a>
              <a href="/Abhishek_Mamgai_CV.pdf" download
                style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: '#fff', padding: '9px 20px', borderRadius: 8, fontSize: '0.78rem', fontFamily: 'Space Mono,monospace', textDecoration: 'none' }}>
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
