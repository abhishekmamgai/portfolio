import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => { setStatus('success'); setFormData({ name: '', email: '', message: '' }) })
      .catch(() => setStatus('error'))
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: 10,
    background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)',
    color: '#e2e8f0', fontFamily: 'Syne,sans-serif', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '20%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.72rem', color: '#7c3aed', letterSpacing: '0.15em' }}>04 / CONTACT</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(124,58,237,0.4),transparent)' }} />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 56, letterSpacing: '-0.02em' }}>
          Let's <span className="grad-text">Connect</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: 40 }}>
              I'm currently open to internship opportunities and collaborative projects. Whether you want to discuss AI, build something cool, or just say hi — my inbox is open!
            </p>

            {[
              { icon: '📧', label: 'Email', value: 'abhishekmamgai2005@gmail.com', href: 'mailto:abhishekmamgai2005@gmail.com' },
              { icon: '🐙', label: 'GitHub', value: 'github.com/abhishekmamgai', href: 'https://github.com/abhishekmamgai' },
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 12, marginBottom: 12, textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.62rem', color: '#7c3aed', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.82rem', color: '#cbd5e1' }}>{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 16, padding: 32 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input type="text" placeholder="Your Name" value={formData.name} required
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'} />
              <input type="email" placeholder="Your Email" value={formData.email} required
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'} />
              <textarea placeholder="Your Message" value={formData.message} rows={5} required
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'} />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: '#fff', padding: '13px', borderRadius: 10, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', letterSpacing: '0.03em' }}>
                Send Message 🚀
              </motion.button>
              {status === 'success' && <p style={{ textAlign: 'center', color: '#22c55e', fontFamily: 'Space Mono,monospace', fontSize: '0.8rem' }}>Message sent ✓</p>}
              {status === 'error' && <p style={{ textAlign: 'center', color: '#ef4444', fontFamily: 'Space Mono,monospace', fontSize: '0.8rem' }}>Failed to send. Try email directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

export default Contact
