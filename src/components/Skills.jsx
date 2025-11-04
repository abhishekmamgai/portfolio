import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', textColor: 'text-blue-500', icon: <SiReact size={28} /> },
    { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600', textColor: 'text-green-500', icon: <SiNodedotjs size={28} /> },
    { name: 'JavaScript', level: 98, color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-500', icon: <SiJavascript size={28} /> },
    { name: 'Tailwind CSS', level: 85, color: 'from-indigo-400 to-indigo-600', textColor: 'text-indigo-500', icon: <SiTailwindcss size={28} /> },
    { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700', textColor: 'text-green-600', icon: <SiMongodb size={28} /> },
    { name: 'Python', level: 90, color: 'from-orange-400 to-orange-600', textColor: 'text-orange-500', icon: <SiPython size={28} /> },
    { name: 'Machine Learning', level: 92, color: 'from-teal-400 to-green-500', textColor: 'text-teal-500', icon: <SiPython size={28} /> },
    { name: 'Deep Learning', level: 90, color: 'from-pink-500 to-red-500', textColor: 'text-pink-500', icon: <SiTensorflow size={28} /> },
    { name: 'TensorFlow / PyTorch', level: 85, color: 'from-purple-400 to-fuchsia-600', textColor: 'text-purple-500', icon: <SiPytorch size={28} /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-20 relative overflow-hidden max-w-6xl mx-auto">
      {/* Floating soft glows (upper theme) */}
      <motion.div
        className="absolute -left-20 -top-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-pink-400 to-purple-500"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-10 bottom-0 w-96 h-96 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-blue-400 to-indigo-600"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="w-64 bg-white/60 dark:bg-gray-800/60 glass backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-lg flex flex-col items-center gap-4 cursor-pointer"
          >
            <div className={`p-3 rounded-full bg-white/30 dark:bg-black/30 ${skill.textColor} shadow-inner`}>{skill.icon}</div>

            <h3 className={`text-lg font-semibold ${skill.textColor}`}>{skill.name}</h3>

            {/* compact progress bar similar to upper theme */}
            <div className="w-40 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
              <motion.div
                className={`h-3 rounded-full bg-gradient-to-r ${skill.color} absolute left-0 top-0`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: i * 0.05 }}
                animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
                style={{ backgroundSize: '200% 100%' }}
              />
            </div>

            <div className="w-full flex justify-between items-center mt-2 px-2">
              <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">Level</span>
              <span className="text-sm font-mono text-gray-800 dark:text-gray-100">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
