// src/components/Navbar.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-[#0a0a0f]/90 to-[#1a1a2e]/90 shadow-lg border-b border-[#2a2a3e]/50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-[Poppins]">
        {/* Logo / Name */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Abhishek Mamgai
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={link.id}
                smooth={true}
                duration={600}
                className="cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-400 text-2xl focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col bg-[#0d0d16]/95 border-t border-[#2a2a3e]/70 backdrop-blur-lg text-gray-200 text-lg px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block hover:text-pink-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}

export default Navbar
