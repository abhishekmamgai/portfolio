import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack shopping app built with React, Node.js, and MongoDB for seamless online transactions.',
      img: 'https://th.bing.com/th/id/OIP.mBPsl3qAOVgexYlgZe9TogHaD4?w=345&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      link: 'https://github.com/abhishek/project1',
    },
    {
      title: 'TaskSync',
      desc: 'A real-time task management tool powered by Socket.io for smooth team collaboration.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      link: 'https://github.com/abhishek/project2',
    },
    {
      title: 'Facial Recognition Auth',
      desc: 'AI-based authentication system leveraging facial biometrics for security and identification.',
      img: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=900&q=80',
      link: 'https://github.com/abhishek/project3',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Projects Showcase
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 md:h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-5 leading-relaxed">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-400 font-medium hover:text-purple-400 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
