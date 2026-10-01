import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, BrainCircuit, CheckCircle2 } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: <Cloud className="text-blue-400" size={36} />,
    color: "from-blue-600/25 via-blue-500/10 to-transparent",
    borderHover: "hover:border-blue-500/50"
  },
  {
    title: "OCI AI Foundations Associate",
    code: "1Z0-1122-24",
    issuer: "Oracle",
    icon: <BrainCircuit className="text-red-400" size={36} />,
    color: "from-red-600/25 via-red-500/10 to-transparent",
    borderHover: "hover:border-red-500/50"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <CheckCircle2 size={13} />
            <span>Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Licenses & <span className="gradient-text">Certifications</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TiltCard3D maxTilt={12} scale={1.04}>
                <div
                  className={`glass-panel p-8 sm:p-10 rounded-3xl overflow-hidden relative group cursor-default transition-all duration-300 border border-white/10 ${cert.borderHover}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="p-4 bg-white/5 rounded-2xl shadow-inner shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-300 text-sm font-medium">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <ShieldCheck size={16} />
                          <span>{cert.issuer}</span>
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-lg text-xs font-mono text-gray-300">
                          {cert.code}
                        </span>
                      </div>
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
