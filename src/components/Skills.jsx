import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Database, PenTool, Cpu, Sparkles } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal size={22} className="text-blue-500 dark:text-blue-400" />,
    gradient: "from-blue-500/15 to-transparent",
    borderHover: "hover:border-blue-500/40",
    skills: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3 / Modern CSS"],
  },
  {
    title: "Frontend Development",
    icon: <Layout size={22} className="text-purple-500 dark:text-purple-400" />,
    gradient: "from-purple-500/15 to-transparent",
    borderHover: "hover:border-purple-500/40",
    skills: ["React.js", "Three.js / 3D UI", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend Development",
    icon: <Server size={22} className="text-emerald-500 dark:text-emerald-400" />,
    gradient: "from-emerald-500/15 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    skills: ["Node.js", "Express.js", "REST APIs", "Middleware Architecture"],
  },
  {
    title: "Database & Cloud",
    icon: <Database size={22} className="text-amber-500 dark:text-amber-400" />,
    gradient: "from-amber-500/15 to-transparent",
    borderHover: "hover:border-amber-500/40",
    skills: ["MongoDB", "Mongoose", "AWS Deployment", "Cloud Fundamentals"],
  },
  {
    title: "Developer Tools",
    icon: <PenTool size={22} className="text-pink-500 dark:text-pink-400" />,
    gradient: "from-pink-500/15 to-transparent",
    borderHover: "hover:border-pink-500/40",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
  },
  {
    title: "Core Computer Science",
    icon: <Cpu size={22} className="text-rose-500 dark:text-rose-400" />,
    gradient: "from-rose-500/15 to-transparent",
    borderHover: "hover:border-rose-500/40",
    skills: ["Data Structures & Algorithms", "DBMS", "OOPs", "Operating Systems", "Computer Networks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles size={13} />
            <span>Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard3D maxTilt={10} scale={1.03} className="h-full">
                <div className={`glass-panel p-8 rounded-2xl h-full flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${category.borderHover}`}>
                  {/* Subtle 3D background light */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  <div>
                    <div className="flex items-center space-x-4 mb-6 relative z-10">
                      <div className="p-3 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-xl group-hover:scale-110 transition-all duration-300 shadow-inner">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5 relative z-10">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--pill-text)] rounded-xl shadow-sm hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
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
