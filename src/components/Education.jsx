import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const education = [
  {
    degree: "B.Tech in CSE-AIML",
    institution: "Technocrats Institute of Technology, Bhopal",
    period: "2023 – 2027",
    icon: <GraduationCap size={24} className="text-blue-400" />,
    color: "from-blue-600/20 to-transparent",
  },
  {
    degree: "Class XII – BSEB",
    institution: "RLSY College, Patna",
    period: "2021 – 2023",
    icon: <BookOpen size={24} className="text-purple-400" />,
    color: "from-purple-600/20 to-transparent",
  },
  {
    degree: "Class X – CBSE",
    institution: "South Point Public School, Patna",
    period: "2020 – 2021",
    icon: <School size={24} className="text-pink-400" />,
    color: "from-pink-600/20 to-transparent",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Calendar size={13} />
            <span>Academic Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            My <span className="gradient-text">Education</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical 3D Glowing Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center 3D glowing node for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0f] border-2 border-white/20 items-center justify-center z-10 shadow-xl shadow-purple-500/20">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <TiltCard3D maxTilt={10} scale={1.03}>
                    <div className="glass-panel p-8 rounded-2xl group transition-all duration-300 border border-white/10 hover:border-purple-500/40 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                      <div className="flex items-center space-x-4 mb-4 relative z-10">
                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shadow-inner">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{item.degree}</h3>
                          <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">{item.period}</span>
                        </div>
                      </div>
                      <h4 className="text-base text-gray-300 font-medium relative z-10">{item.institution}</h4>
                    </div>
                  </TiltCard3D>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
