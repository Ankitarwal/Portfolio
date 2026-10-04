import { motion } from 'framer-motion';
import { Code2, Brain, Trophy, GraduationCap, Sparkles, MapPin } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const stats = [
  {
    icon: <Code2 size={24} className="text-blue-500 dark:text-blue-400" />,
    value: "400+",
    label: "CodeChef Problems",
    gradient: "from-blue-500/15 to-transparent",
    border: "hover:border-blue-500/40",
  },
  {
    icon: <Brain size={24} className="text-purple-500 dark:text-purple-400" />,
    value: "90+",
    label: "GFG Problems",
    gradient: "from-purple-500/15 to-transparent",
    border: "hover:border-purple-500/40",
  },
  {
    icon: <Trophy size={24} className="text-amber-500 dark:text-yellow-400" />,
    value: "SIH 2025",
    label: "College Qualifier",
    gradient: "from-yellow-500/15 to-transparent",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: <GraduationCap size={24} className="text-emerald-500 dark:text-emerald-400" />,
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
          {/* Left Column: Photo in 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <TiltCard3D maxTilt={10} scale={1.02} className="w-full max-w-sm">
              <div className="glass-panel p-4 rounded-3xl overflow-hidden shadow-2xl relative group border border-[var(--glass-border)]">
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 shadow-inner">
                  <img
                    src="/profile.jpg"
                    alt="Ankit Kumar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle 3D gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 text-white flex items-center justify-between shadow-lg">
                    <div>
                      <h4 className="font-bold text-sm tracking-wide text-white">Ankit Kumar</h4>
                      <div className="flex items-center gap-1.5 text-xs text-blue-300 font-medium">
                        <MapPin size={12} />
                        <span>Bhopal, India</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-emerald-300">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Right Column: Story & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Card */}
            <TiltCard3D maxTilt={6} glare={false}>
              <div className="glass-panel p-8 rounded-3xl space-y-5">
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                  I am a pre-final year B.Tech student in <span className="text-blue-600 dark:text-blue-400 font-semibold">Computer Science & Engineering (AI & ML)</span> at Technocrats Institute of Technology, Bhopal. With a solid foundation in algorithms and full-stack engineering, I love crafting digital experiences that are fast, intuitive, and visually captivating.
                </p>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                  My core specialization revolves around the <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). From architecting reliable server-side APIs to designing fluid, hardware-accelerated 3D frontends, I strive for clean architecture and peak performance.
                </p>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                  Beyond web development, I actively delve into <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Cloud Computing</span> and <span className="text-pink-600 dark:text-pink-400 font-semibold">AI/ML</span>, regularly competing in national hackathons and solving challenging data structure problems.
                </p>
              </div>
            </TiltCard3D>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <TiltCard3D key={index} maxTilt={12} scale={1.04}>
                  <div className={`glass-panel p-5 rounded-2xl flex flex-col items-center text-center space-y-2.5 group relative overflow-hidden transition-all duration-300 ${stat.border}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                    <div className="p-3 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-inner relative z-10">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight relative z-10">
                      {stat.value}
                    </h3>
                    <p className="text-[11px] text-[var(--text-secondary)] font-semibold uppercase tracking-wider relative z-10 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
