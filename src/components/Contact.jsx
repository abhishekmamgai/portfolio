import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('Message sent successfully ✅');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Message failed ❌ Try again.'));
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Gradient & Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black -z-10"></div>
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/70 p-8 rounded-2xl border border-gray-800 shadow-[0_0_40px_rgba(255,0,255,0.1)] backdrop-blur-md w-full max-w-lg"
      >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700 focus:border-pink-500 outline-none transition-all"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700 focus:border-pink-500 outline-none transition-all"
            required
          />

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700 focus:border-pink-500 outline-none transition-all"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-pink-500/40 transition-all"
          >
            Send Message 🚀
          </motion.button>

          {status && (
            <p className="text-center mt-4 text-green-400 font-medium">
              {status}
            </p>
          )}
        </div>
      </motion.form>

      {/* Glow Line at Bottom */}
      <motion.div
        className="absolute bottom-0 w-2/3 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
      ></motion.div>
    </section>
  );
};

export default Contact;
