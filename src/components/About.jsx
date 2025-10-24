// src/components/About.jsx
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // <-- Image import

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden text-gray-300 font-[Poppins]"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#1a1a2e] -z-10"></div>

      {/* Floating Glow Elements */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/20 blur-[120px] rounded-full top-10 left-10"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full bottom-20 right-10"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Profile Image */}
        <motion.div
          className="relative flex justify-center md:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-3xl shadow-2xl border border-pink-500/40 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent rounded-3xl"></div>
            <img
              src={profilePic} // <-- Updated
              alt="Abhishek Mamgai"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl mb-5 text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate full-stack developer with 3+ years of experience
            creating scalable and user-focused web apps. I love transforming
            complex ideas into elegant, performant, and visually striking
            solutions using React, Node.js, and AI-driven tools.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            When I’m not coding, I explore AI trends, contribute to open-source
            projects, and experiment with emerging technologies to push my
            creative and technical limits.
          </motion.p>

          {/* CV Button */}
          <motion.a
            href="/Abhishek_Mamgai_CV.pdf"
            download="Abhishek_Mamgai_CV.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(236,72,153,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
