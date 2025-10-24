import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 py-16 border-t border-gray-800 overflow-hidden">
      {/* Floating Lights */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-0 left-0"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-6 relative z-10"
      >
        {/* Name */}
        <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text drop-shadow-md">
          Abhishek Mamgai
        </h3>

        {/* Subtitle */}
        <p className="text-gray-400 mb-4 text-sm md:text-base tracking-wide">
          Designing intelligent systems & crafting modern digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <motion.a
            href="https://linkedin.com/in/abhishek-mamgai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-gray-800/40 backdrop-blur-sm hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md"
          >
            <FaLinkedinIn size={22} />
          </motion.a>

          <motion.a
            href="https://github.com/abhishekmamgai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-gray-800/40 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all shadow-md"
          >
            <FaGithub size={22} />
          </motion.a>

          <motion.a
            href="mailto:abhishekmamgai2005@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-gray-800/40 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all shadow-md"
          >
            <FaEnvelope size={22} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 tracking-wide">
          © 2025 Abhishek Mamgai — All Rights Reserved.
        </p>
      </motion.div>

      {/* Glow Line at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
      />
    </footer>
  );
};

export default Footer;
