// src/components/Home.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const fullText = "Hi, I'm Abhishek Mamgai";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#1a1a2e] text-white"
    >
      {/* Soft glowing shapes */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-pink-500/20 blur-[180px] rounded-full -top-40 -left-20"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[35rem] h-[35rem] bg-blue-500/20 blur-[180px] rounded-full bottom-0 right-0"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Typing text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]">
            {displayedText}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl mb-10 text-gray-300 font-light"
        >
          Full-Stack Developer & AI Enthusiast crafting bold and modern digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex justify-center items-center flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(236,72,153,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-pink-500/30"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400/60 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-md transition-all hover:text-white"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
