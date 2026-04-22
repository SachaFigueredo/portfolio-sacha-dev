"use client";

import { motion } from "framer-motion";

/*
  ========================================
  TECNOLOGÍAS - Diseño premium
  ========================================
  Grid moderno con glow effects
*/

interface Technology {
  name: string;
  icon: string;
}

interface TecnologiaProps {
  technologies: Technology[];
}

// Skills con sus colores representativos
const skillColors: Record<string, string> = {
  "JavaScript": "from-yellow-400 to-yellow-500",
  "React": "from-cyan-400 to-cyan-500",
  "TypeScript": "from-blue-400 to-blue-500",
  "Node.js": "from-green-400 to-green-500",
  "Express": "from-gray-400 to-gray-500",
  "PostgreSQL": "from-blue-600 to-cyan-600",
  "Tailwind CSS": "from-cyan-400 to-blue-500",
  "Git": "from-orange-400 to-red-500",
};

export default function Tecnologia({ technologies }: TecnologiaProps) {
  return (
    <section 
      id="tecnologias"
      className="py-32 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Tecnologias
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Mi stack tecnico
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => {
            const colors = skillColors[tech.name] || "from-blue-400 to-purple-400";
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <div className="font-semibold text-white group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 mt-10"
        >
          Siempre aprendiendo cosas nuevas
        </motion.p>
      </div>
    </section>
  );
}