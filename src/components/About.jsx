import { motion } from 'framer-motion'
import profilePic from '../assets/profile.jpg'

const About = () => {
  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Year', value: '3rd' },
    { label: 'CGPA Focus', value: 'AIML' },
  ]

  return (
    <section id="about" style={{padding:'96px 24px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'20%',right:'0',width:300,height:300,background:'radial-gradient(circle,rgba(124,58,237,0.08) 0%,transparent 70%)',pointerEvents:'none'}} />
      <div style={{maxWidth:1100,margin:'0 auto'}}>

        {/* Section Label */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          style={{display:'flex',alignItems:'center',gap:12,marginBottom:64}}>
          <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.72rem',color:'#7c3aed',letterSpacing:'0.15em'}}>01 / ABOUT</span>
          <div style={{flex:1,height:1,background:'linear-gradient(90deg,rgba(124,58,237,0.4),transparent)'}} />
        </motion.div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="about-grid">
          {/* Photo */}
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,ease:'easeOut'}}
            style={{display:'flex',justifyContent:'center'}}>
            <div style={{position:'relative'}}>
              {/* Decorative rings */}
              <div style={{position:'absolute',inset:-16,borderRadius:24,border:'1px solid rgba(124,58,237,0.2)',zIndex:0}} />
              <div style={{position:'absolute',inset:-32,borderRadius:28,border:'1px solid rgba(236,72,153,0.1)',zIndex:0}} />

              {/* Corner accents */}
              <div style={{position:'absolute',top:-2,left:-2,width:24,height:24,borderTop:'3px solid #7c3aed',borderLeft:'3px solid #7c3aed',borderRadius:'4px 0 0 0',zIndex:2}} />
              <div style={{position:'absolute',bottom:-2,right:-2,width:24,height:24,borderBottom:'3px solid #ec4899',borderRight:'3px solid #ec4899',borderRadius:'0 0 4px 0',zIndex:2}} />

              {/* Photo */}
              <motion.div whileHover={{scale:1.03}} transition={{duration:0.3}}
                style={{width:300,height:380,borderRadius:20,overflow:'hidden',position:'relative',zIndex:1,
                  boxShadow:'0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)'}}>
                <img src={profilePic} alt="Abhishek Mamgai"
                  style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />
                {/* Overlay gradient */}
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(6,6,16,0.5) 0%,transparent 50%)',pointerEvents:'none'}} />
              </motion.div>

              {/* Floating badge */}
              <motion.div animate={{y:[-4,4,-4]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
                style={{position:'absolute',bottom:-20,right:-20,background:'rgba(6,6,16,0.95)',border:'1px solid rgba(124,58,237,0.4)',borderRadius:12,padding:'10px 16px',zIndex:3,
                  boxShadow:'0 8px 32px rgba(124,58,237,0.2)'}}>
                <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.65rem',color:'#7c3aed',letterSpacing:'0.1em',marginBottom:2}}>STATUS</div>
                <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.78rem',color:'#e2e8f0',fontWeight:700}}>
                  <span style={{color:'#22c55e',marginRight:6}}>●</span>Open to Internships
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,ease:'easeOut'}}>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(2rem,4vw,3rem)',lineHeight:1.1,marginBottom:24,letterSpacing:'-0.02em'}}>
              Crafting the Future<br/>with <span className="grad-text">AI & Code</span>
            </h2>

            <p style={{color:'#94a3b8',lineHeight:1.9,fontSize:'0.95rem',marginBottom:16}}>
              I'm a <strong style={{color:'#a78bfa'}}>3rd year B.Tech CSE (AIML)</strong> student who loves building things that sit at the intersection of AI and modern web. From training deep learning models to shipping full-stack applications — I enjoy the full spectrum.
            </p>
            <p style={{color:'#94a3b8',lineHeight:1.9,fontSize:'0.95rem',marginBottom:32}}>
              Currently focused on <strong style={{color:'#06b6d4'}}>Gym SaaS platforms, music web apps</strong>, and exploring how AI can make everyday products smarter. Always learning, always building.
            </p>

            {/* Stats */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginBottom:36}} className="stats-grid">
              {stats.map((s,i) => (
                <motion.div key={s.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.5}}
                  style={{background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.2)',borderRadius:12,padding:'14px 10px',textAlign:'center'}}>
                  <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.3rem',color:'#a78bfa',marginBottom:4}}>{s.value}</div>
                  <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#475569',letterSpacing:'0.08em'}}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a href="/Abhishek_Mamgai_CV.pdf" download
              style={{display:'inline-flex',alignItems:'center',gap:8,background:'linear-gradient(135deg,#7c3aed,#ec4899)',color:'#fff',padding:'13px 32px',borderRadius:10,fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',textDecoration:'none',transition:'opacity 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.opacity='0.88'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
              Download Resume ↓
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid{grid-template-columns:1fr !important; gap:48px !important;}
          .stats-grid{grid-template-columns:repeat(2,1fr) !important;}
        }
      `}</style>
    </section>
  )
}

export default About
