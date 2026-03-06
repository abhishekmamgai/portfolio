import { motion } from 'framer-motion'

const projects = [
  {
    title: 'HealthPro — Gym SaaS',
    desc: 'Full-featured Gym SaaS platform with store integration. Manage memberships, track fitness goals, and handle gym operations end-to-end.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    link: 'https://health-pro-abhishekmamgais-projects.vercel.app/',
    tags: ['SaaS', 'Full Stack', 'React'],
    isNew: true,
    color: '#7c3aed',
  },
  {
    title: 'Ask Tech',
    desc: 'ASK TECH is a forward-thinking tech company delivering cutting-edge IT services and AI-powered solutions. From intelligent automation to full-stack development, we help businesses transform digitally — faster, smarter, and future-ready.',
    img: 'data:image/webp;base64,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',
    link: 'https://ask-phi-five.vercel.app/',
    tags: ['React', 'Music UI', 'Frontend'],
    isNew: true,
    color: '#ec4899',
  },
  {
    title: 'Melofy',
    desc: 'Music streaming app with React frontend, Python backend & MySQL. Features playlists, waveform visualizer & real-time audio controls.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    link: 'https://melofystudio.vercel.app/',
    tags: ['React', 'Python', 'MySQL'],
    isNew: false,
    color: '#06b6d4',
  },
  {
    title: 'TaskSync',
    desc: 'Real-time task management tool powered by Socket.io for seamless team collaboration and live project tracking.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/abhishek/project2',
    tags: ['Socket.io', 'Node.js', 'React'],
    isNew: false,
    color: '#f59e0b',
  },
  {
    title: 'Facial Recognition Auth',
    desc: 'AI-powered authentication system using facial biometrics for secure and intelligent user identification.',
    img: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/abhishek/project3',
    tags: ['Python', 'AI/ML', 'OpenCV'],
    isNew: false,
    color: '#10b981',
  },
  {
    title: 'SmartExpense — AI Budget Tracker',
    desc: 'Intelligent expense tracking app powered by ML that auto-categorizes transactions, predicts spending patterns, and gives smart saving recommendations.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    link: null,
    tags: ['Python', 'ML', 'React'],
    isNew: false,
    color: '#f97316',
  },
]

// Every card is IDENTICAL in structure & size — flex layout handles it
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.55 }}
    whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.color}22` }}
    style={{
      background: 'rgba(13,13,31,0.9)',
      border: `1px solid ${project.color}22`,
      borderRadius: 16,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      height: '100%',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = `${project.color}55`}
    onMouseLeave={e => e.currentTarget.style.borderColor = `${project.color}22`}
  >
    {/* Image — fixed height, same for ALL cards */}
    <div style={{ position: 'relative', overflow: 'hidden', height: 200, flexShrink: 0 }}>
      <motion.img src={project.img} alt={project.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(6,6,16,0.88) 0%,rgba(6,6,16,0.1) 55%,transparent 100%)' }} />

      {/* Badges */}
      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
        {project.isNew && (
          <span style={{ background: `linear-gradient(135deg,${project.color},#ec4899)`, color: '#fff', fontFamily: 'Space Mono,monospace', fontSize: '0.55rem', fontWeight: 700, padding: '3px 9px', borderRadius: 100, letterSpacing: '0.08em' }}>
            ✦ NEW
          </span>
        )}
        <span style={{ background: 'rgba(6,6,16,0.85)', border: `1px solid ${project.color}44`, color: '#22c55e', fontFamily: 'Space Mono,monospace', fontSize: '0.55rem', padding: '3px 9px', borderRadius: 100, backdropFilter: 'blur(8px)' }}>
          ● LIVE
        </span>
      </div>
    </div>

    {/* Content — flex:1 so all cards stretch equally */}
    <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Tags */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.55rem', color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30`, padding: '3px 8px', borderRadius: 100, letterSpacing: '0.06em' }}>
            {tag}
          </span>
        ))}
      </div>

      <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#e2e8f0', marginBottom: 8, lineHeight: 1.3 }}>
        {project.title}
      </h3>

      {/* desc takes up all remaining space → pushes link to bottom */}
      <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.72, flex: 1, marginBottom: 16 }}>
        {project.desc}
      </p>

      {project.link ? (
        <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: project.color, fontFamily: 'Space Mono,monospace', fontSize: '0.68rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
          View Project →
        </motion.a>
      ) : (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#475569', fontFamily: 'Space Mono,monospace', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', border: '1px solid #1e293b', padding: '3px 10px', borderRadius: 100 }}>
          🔒 Coming Soon
        </span>
      )}
    </div>
  </motion.div>
)

const Projects = () => (
  <section id="projects" style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '30%', right: 0, width: 350, height: 350, background: 'radial-gradient(circle,rgba(236,72,153,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      {/* Section label */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.72rem', color: '#7c3aed', letterSpacing: '0.15em' }}>03 / PROJECTS</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(124,58,237,0.4),transparent)' }} />
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
        style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 12, letterSpacing: '-0.02em' }}>
        What I've <span style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built</span>
      </motion.h2>
      <p style={{ color: '#475569', fontFamily: 'Space Mono,monospace', fontSize: '0.72rem', marginBottom: 48, letterSpacing: '0.05em' }}>✦ Latest projects at top</p>

      {/* ALL 5 projects — uniform 3-col grid, equal card heights via CSS grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        gridAutoRows: '1fr',     // ← key: all rows same height
      }} className="proj-grid">

        {/* First row: featured 2 cards span naturally, 3rd empty slot covered by grid */}
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>

    <style>{`
      @media(max-width:900px){ .proj-grid{ grid-template-columns: repeat(2,1fr) !important; } }
      @media(max-width:580px){ .proj-grid{ grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
)

export default Projects
