import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPython, 
  SiTensorflow, 
  SiPytorch 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', textColor: 'text-blue-500', logo: <SiReact size={28} /> },
    { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600', textColor: 'text-green-500', logo: <SiNodedotjs size={28} /> },
    { name: 'JavaScript', level: 98, color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-500', logo: <SiJavascript size={28} /> },
    { name: 'Tailwind CSS', level: 85, color: 'from-indigo-400 to-indigo-600', textColor: 'text-indigo-500', logo: <SiTailwindcss size={28} /> },
    { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700', textColor: 'text-green-600', logo: <SiMongodb size={28} /> },
    { name: 'Python', level: 90, color: 'from-orange-400 to-orange-600', textColor: 'text-orange-500', logo: <SiPython size={28} /> },
    { name: 'Machine Learning', level: 92, color: 'from-teal-400 to-green-500', textColor: 'text-teal-500', logo: <SiPython size={28} /> },
    { name: 'Deep Learning', level: 90, color: 'from-pink-500 to-red-500', textColor: 'text-pink-500', logo: <SiTensorflow size={28} /> },
    { name: 'TensorFlow / PyTorch', level: 85, color: 'from-purple-400 to-fuchsia-600', textColor: 'text-purple-500', logo: <SiPytorch size={28} /> },
    { name: 'Reinforcement Learning', level: 78, color: 'from-orange-400 to-red-500', textColor: 'text-orange-500', logo: <SiPython size={28} /> },
    { name: 'Data Science & Analysis', level: 90, color: 'from-blue-400 to-green-400', textColor: 'text-blue-500', logo: <SiPython size={28} /> },
    { name: 'SQL / Databases', level: 82, color: 'from-yellow-400 to-orange-600', textColor: 'text-yellow-500', logo: <SiJavascript size={28} /> },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative max-w-6xl mx-auto py-16 px-4"
    >
      {/* Soft glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: 'spring', stiffness: 100 }}
            className="glass p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div className={`${skill.textColor}`}>{skill.logo}</div>

            <div className="flex-1">
              <h3 className={`text-xl font-semibold mb-3 ${skill.textColor}`}>{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
                <motion.div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} absolute top-0 left-0`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 0%'],
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                  whileHover={{
                    scaleY: 1.3,
                    transition: { duration: 0.3 },
                  }}
                />
              </div>

              <p className="text-right mt-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                {skill.level}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
