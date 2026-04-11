import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'AI / Machine Learning',
    color: '#7c3aed',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'NumPy / Pandas'],
  },
  {
    label: 'Frontend',
    color: '#06b6d4',
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3', 'Vite'],
  },
  {
    label: 'Backend & Database',
    color: '#ec4899',
    skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'REST APIs', 'Socket.io'],
  },
  {
    label: 'Tools & Others',
    color: '#f59e0b',
    skills: ['Git / GitHub', 'Vercel', 'VS Code', 'Postman', 'Linux', 'Figma'],
  },
]

const Skills = () => {
  return (
    <section id="skills" style={{padding:'96px 24px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',bottom:0,left:'30%',width:400,height:300,background:'radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
      <div style={{maxWidth:1100,margin:'0 auto'}}>

        {/* Label */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
          <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.72rem',color:'#7c3aed',letterSpacing:'0.15em'}}>02 / SKILLS</span>
          <div style={{flex:1,height:1,background:'linear-gradient(90deg,rgba(124,58,237,0.4),transparent)'}} />
        </motion.div>

        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}}
          style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',marginBottom:56,letterSpacing:'-0.02em'}}>
          My <span className="grad-text">Tech Stack</span>
        </motion.h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:24}} className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.label}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:gi*0.12,duration:0.6}}
              style={{background:'rgba(13,13,31,0.8)',border:`1px solid ${group.color}22`,borderRadius:16,padding:28,
                boxShadow:`0 0 0 0 ${group.color}`,transition:'box-shadow 0.3s'}}
              whileHover={{boxShadow:`0 8px 40px ${group.color}22`}}>
              {/* Group header */}
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
                <div style={{width:8,height:8,borderRadius:'50%',background:group.color,boxShadow:`0 0 10px ${group.color}`}} />
                <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.72rem',color:group.color,letterSpacing:'0.12em',fontWeight:700}}>
                  {group.label.toUpperCase()}
                </span>
              </div>

              {/* Skills pills */}
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {group.skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                    transition={{delay:gi*0.1+si*0.05,duration:0.4}}
                    className="skill-pill"
                    style={{borderColor:`${group.color}33`,color:`${group.color}cc`}}
                    onMouseEnter={e=>{e.currentTarget.style.background=`${group.color}22`;e.currentTarget.style.borderColor=`${group.color}88`;e.currentTarget.style.color='#fff'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,58,237,0.08)';e.currentTarget.style.borderColor=`${group.color}33`;e.currentTarget.style.color=`${group.color}cc`}}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

export default Skills
