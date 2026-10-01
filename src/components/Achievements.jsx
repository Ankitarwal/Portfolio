import { motion } from 'framer-motion';
import { Award, Code, Zap, Trophy } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description: "Successfully qualified the college-level internal hackathon round of SIH 2025, innovating with a talented team.",
    icon: <Zap className="text-amber-400" size={26} />,
    date: "2024",
    border: "hover:border-amber-500/40",
    gradient: "from-amber-500/15 via-transparent to-transparent",
  },
  {
    title: "Competitive Programming Mastery",
    description: "Solved 400+ algorithmic problems on CodeChef and 90+ problems on GeeksForGeeks. Actively honing problem-solving skills on LeetCode.",
    icon: <Code className="text-blue-400" size={26} />,
    date: "Ongoing",
    border: "hover:border-blue-500/40",
    gradient: "from-blue-500/15 via-transparent to-transparent",
  },
  {
    title: "Cloud & AI Professional Certifications",
    description: "Earned Microsoft Azure Fundamentals (AZ-900) and Oracle OCI AI Foundations Associate certifications.",
    icon: <Award className="text-purple-400" size={26} />,
    date: "2024",
    border: "hover:border-purple-500/40",
    gradient: "from-purple-500/15 via-transparent to-transparent",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Trophy size={13} />
            <span>Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            My <span className="gradient-text">Achievements</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TiltCard3D maxTilt={7} scale={1.02}>
                <div
                  className={`glass-panel p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center relative overflow-hidden group transition-all duration-300 border border-white/10 ${item.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

                  <div className="p-4 bg-white/5 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-inner relative z-10">
                    {item.icon}
                  </div>

                  <div className="flex-grow relative z-10">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
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
