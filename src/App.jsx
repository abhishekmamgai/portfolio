import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profilePic from './assets/profile.jpg'; // <-- Tumhari profile photo

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 sec loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#1a1a2e]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Glowing Circle with Photo */}
            <motion.div
              className="relative w-36 h-36 rounded-full shadow-[0_0_60px_rgba(236,72,153,0.6)] overflow-hidden"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <img
                src={profilePic}
                alt="Abhishek Mamgai"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
