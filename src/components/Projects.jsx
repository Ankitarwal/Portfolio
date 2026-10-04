import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, Layers, ShieldAlert } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projects = [
  {
    title: "ScamShield AI – Scam-to-Action",
    description: "Developed an AI-powered scam detection and prevention platform using Google Gemini API to analyze suspicious WhatsApp messages, SMS, emails, and job offers. The system identifies potential scam types, detects red flags, explains suspicious claims, assesses risk, and provides actionable safety steps to help users avoid scams. It also includes an anonymized Scam Radar dashboard to visualize emerging scam patterns and trends.",
    tags: ["Google Gemini API", "React.js", "Node.js", "Analytics", "Cybersecurity"],
    github: "https://github.com/Ankitarwal",
    live: "https://scam-shield-ai-alpha.vercel.app/",
    featured: true,
    icon: <ShieldAlert size={26} />,
    accent: "from-cyan-600/15 via-blue-600/10 to-transparent",
  },
  {
    title: "Stock Trading Platform",
    description: "Developed a full-stack Stock Trading Platform using the MERN stack. Implemented REST APIs, authentication, and CRUD operations. Integrated MongoDB for data storage, created interactive dashboard analytics using Chart.js, built responsive React components, performed API testing, and deployed on AWS.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "AWS"],
    github: "https://github.com/Ankitarwal",
    live: "#",
    featured: true,
    icon: <Code2 size={26} />,
    accent: "from-blue-600/15 via-purple-600/10 to-transparent",
  },
  {
    title: "Simon Says Interactive Game",
    description: "An interactive Simon Says memory game with sequence generation and user input validation. Features score tracking, game-over functionality, responsive UI with animations, visual effects, and DOM manipulation using JavaScript event handling.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Web Audio"],
    github: "https://github.com/Ankitarwal",
    live: "#",
    featured: false,
    icon: <Code2 size={26} />,
    accent: "from-purple-600/15 via-pink-600/10 to-transparent",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Layers size={13} />
            <span>Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <TiltCard3D maxTilt={9} scale={1.03} className="h-full">
                <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between h-full relative group transition-all duration-300 overflow-hidden">
                  {/* Dynamic 3D ambient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                      <div className="p-3.5 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-2xl text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
                        {project.icon}
                      </div>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-cyan-300 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          <Sparkles size={13} />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors relative z-10 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 relative z-10">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-5 border-t border-[var(--nav-border)] relative z-10">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-purple-500 transition-all"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[var(--badge-bg)] hover:bg-slate-200 dark:hover:bg-white/15 text-[var(--text-primary)] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border border-[var(--badge-border)]"
                      >
                        <GithubIcon />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
