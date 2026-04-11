import { motion } from 'framer-motion'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const Footer = () => (
  <footer style={{ borderTop: '1px solid rgba(124,58,237,0.15)', padding: '44px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(124,58,237,0.5),transparent)' }} />

    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div style={{ fontFamily: 'Space Mono,monospace', fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>
        <span style={{ color: '#7c3aed' }}>&lt;Abhishek</span>
        <span style={{ color: '#ec4899' }}>.dev/&gt;</span>
      </div>

      {/* GitHub only */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <motion.a href="https://github.com/abhishekmamgai" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.15, color: '#e2e8f0' }}
          style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Space Mono,monospace', fontSize: '0.72rem', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 8, transition: 'color 0.2s, border-color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)' }}>
          <GithubIcon /> github.com/abhishekmamgai
        </motion.a>
      </div>

      <p style={{ color: '#1e293b', fontFamily: 'Space Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.1em' }}>
        © 2025 Abhishek Mamgai · CSE AIML · Built with React + Framer Motion
      </p>
    </motion.div>
  </footer>
)

export default Footer
