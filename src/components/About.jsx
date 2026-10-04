import { motion } from 'framer-motion';
import { Code2, Brain, Trophy, GraduationCap, Sparkles } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const stats = [
  {
    icon: <Code2 size={28} className="text-blue-500 dark:text-blue-400" />,
    value: "400+",
    label: "CodeChef Problems",
    gradient: "from-blue-500/15 to-transparent",
    border: "hover:border-blue-500/40",
  },
  {
    icon: <Brain size={28} className="text-purple-500 dark:text-purple-400" />,
    value: "90+",
    label: "GFG Problems",
    gradient: "from-purple-500/15 to-transparent",
    border: "hover:border-purple-500/40",
  },
  {
    icon: <Trophy size={28} className="text-amber-500 dark:text-yellow-400" />,
    value: "SIH 2025",
    label: "College Qualifier",
    gradient: "from-yellow-500/15 to-transparent",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: <GraduationCap size={28} className="text-emerald-500 dark:text-emerald-400" />,
    value: "2027",
    label: "B.Tech Batch",
    gradient: "from-emerald-500/15 to-transparent",
    border: "hover:border-emerald-500/40",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles size={13} />
            <span>Discover</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed"
          >
            <TiltCard3D maxTilt={6} glare={false}>
              <div className="glass-panel p-8 rounded-3xl space-y-5">
                <p>
                  I am a pre-final year B.Tech student in <span className="text-blue-600 dark:text-blue-400 font-semibold">Computer Science & Engineering (AI & ML)</span> at Technocrats Institute of Technology, Bhopal. With a solid foundation in algorithms and full-stack engineering, I love crafting digital experiences that are fast, intuitive, and visually captivating.
                </p>
                <p>
                  My core specialization revolves around the <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). From architecting reliable server-side APIs to designing fluid, hardware-accelerated 3D frontends, I strive for clean architecture and peak performance.
                </p>
                <p>
                  Beyond web development, I actively delve into <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Cloud Computing</span> and <span className="text-pink-600 dark:text-pink-400 font-semibold">AI/ML</span>, regularly competing in national hackathons and solving challenging data structure problems.
                </p>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Right 3D Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <TiltCard3D key={index} maxTilt={14} scale={1.04}>
                <div className={`glass-panel p-7 rounded-2xl flex flex-col items-center text-center space-y-4 group relative overflow-hidden transition-all duration-300 ${stat.border}`}>
                  {/* Subtle 3D background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  <div className="p-4 bg-[var(--badge-bg)] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-inner relative z-10 border border-[var(--badge-border)]">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight relative z-10">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-semibold uppercase tracking-wider relative z-10">
                    {stat.label}
                  </p>
                </div>
              </TiltCard3D>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
