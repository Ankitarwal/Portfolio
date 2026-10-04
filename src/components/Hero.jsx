import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Sparkles, Code, Cpu } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import TiltCard3D from './TiltCard3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic 3D ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-blue-500/10"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-ping"></span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">Available for Opportunities</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none text-[var(--text-primary)]">
              Hi, I'm <br />
              <span className="gradient-text">Ankit Kumar</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold mb-6 flex flex-wrap items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">B.Tech CSE-AIML</span>
              <span className="text-slate-400 dark:text-gray-500">•</span>
              <span className="text-purple-600 dark:text-purple-400">Full-Stack Developer</span>
              <span className="text-slate-400 dark:text-gray-500">•</span>
              <span className="text-cyan-600 dark:text-cyan-400">AI Enthusiast</span>
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed font-normal">
              Building modern, scalable web applications with React, Node.js, Express, and MongoDB, while exploring cutting-edge AI/ML and cloud computing.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[var(--badge-bg)] hover:bg-slate-200 dark:hover:bg-white/10 text-[var(--text-primary)] px-6 py-3.5 rounded-xl font-medium transition-all border border-[var(--badge-border)] backdrop-blur-md"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                className="inline-flex items-center space-x-2 bg-transparent border border-slate-300 dark:border-gray-700 hover:border-slate-500 dark:hover:border-gray-400 text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-6 py-3.5 rounded-xl font-medium transition-all"
              >
                <FileText size={18} />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Quick 3D Badges */}
            <div className="mt-12 flex flex-wrap gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 bg-[var(--badge-bg)] px-3.5 py-2 rounded-xl border border-[var(--badge-border)] shadow-sm backdrop-blur-sm">
                <Code size={14} className="text-blue-500" />
                <span className="font-semibold">MERN Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--badge-bg)] px-3.5 py-2 rounded-xl border border-[var(--badge-border)] shadow-sm backdrop-blur-sm">
                <Cpu size={14} className="text-purple-500" />
                <span className="font-semibold">AIML Engineer</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--badge-bg)] px-3.5 py-2 rounded-xl border border-[var(--badge-border)] shadow-sm backdrop-blur-sm">
                <Sparkles size={14} className="text-amber-500" />
                <span className="font-semibold">3D Interactive UI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual with Interactive 3D Hologram (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* 3D WebGL Hologram */}
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              <Hero3DCanvas />

              {/* Floating 3D Tilt Badge 1 (CodeChef stats) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-4 z-20"
              >
                <TiltCard3D maxTilt={15} scale={1.05}>
                  <div className="glass-panel p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xl backdrop-blur-xl">
                    <div className="bg-blue-500/15 p-2.5 rounded-xl border border-blue-500/30">
                      <span className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl">400+</span>
                    </div>
                    <div className="text-xs text-[var(--text-primary)] font-medium leading-tight">
                      Problems Solved <br/>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">on CodeChef</span>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>

              {/* Floating 3D Tilt Badge 2 (SIH 2025 Qualifier) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 z-20"
              >
                <TiltCard3D maxTilt={15} scale={1.05}>
                  <div className="glass-panel p-3.5 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-xl">
                    <div className="bg-purple-500/15 p-2.5 rounded-xl border border-purple-500/30">
                      <Sparkles size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-xs text-[var(--text-primary)] font-medium leading-tight">
                      SIH 2025 <br/>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">Qualifier</span>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
