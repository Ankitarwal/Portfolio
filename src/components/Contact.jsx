import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare size={13} />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Let's Build Something <span className="gradient-text">Together</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300/80 max-w-2xl mx-auto text-base sm:text-lg">
            Have a question, opportunity, or idea? Feel free to reach out, and your message will land straight in my inbox!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <TiltCard3D maxTilt={8} scale={1.02}>
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-8 bg-gradient-to-b from-white/[0.05] to-black/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:ankitkumararwal24@gmail.com" className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="p-3.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-2xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base group-hover:text-blue-400 transition-colors">ankitkumararwal24@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/ankitkumar77a/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="p-3.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-2xl group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <LinkedinIcon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">LinkedIn</p>
                      <p className="text-white font-medium text-sm sm:text-base group-hover:text-purple-400 transition-colors">linkedin.com/in/ankitkumar77a</p>
                    </div>
                  </a>

                  <a href="https://github.com/Ankitarwal" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="p-3.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-2xl group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                      <GithubIcon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">GitHub</p>
                      <p className="text-white font-medium text-sm sm:text-base group-hover:text-pink-400 transition-colors">github.com/Ankitarwal</p>
                    </div>
                  </a>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative z-20"
          >
            <form
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl bg-gradient-to-b from-white/[0.05] to-black/50 hover:border-blue-500/30 transition-colors duration-300"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 cursor-pointer">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0f] border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 cursor-pointer">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0f] border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text"
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 cursor-pointer">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0f] border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none cursor-text"
                  placeholder="Tell me about your project, idea, or inquiry..."
                ></textarea>
              </div>

              {/* Status alerts */}
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-2xl text-sm font-medium"
                >
                  <CheckCircle size={20} className="shrink-0 text-emerald-400" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-rose-500/15 border border-rose-500/30 text-rose-300 rounded-2xl text-sm font-medium"
                >
                  <AlertCircle size={20} className="shrink-0 text-rose-400" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl shadow-blue-500/25 cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
