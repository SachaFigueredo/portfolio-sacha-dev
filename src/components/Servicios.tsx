"use client";

import { motion } from "framer-motion";
import { Code, Server, Wrench, Layout, ArrowRight, Sparkles } from "lucide-react";

/*
  ========================================
  SERVICIOS - Diseño premium
  ========================================
  Cards con gradientes y hover effects
*/

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServiciosProps {
  services: Service[];
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  web: Code,
  layout: Layout,
  server: Server,
  wrench: Wrench,
};

export default function Servicios({ services }: ServiciosProps) {
  return (
    <section 
      id="servicios"
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
            Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Lo que puedo hacer por ti
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Proyectos con atencion directa mia. Sin intermediarios.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-white/10 transition-all cursor-pointer"
                onClick={() => {
                  const contacto = document.getElementById("contacto");
                  if (contacto) {
                    contacto.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all rounded-2xl" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA on hover */}
                <div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <span>Pedir presupuesto</span>
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Tenes otro proyecto en mente?{" "}
            <button 
              onClick={() => {
                const contacto = document.getElementById("contacto");
                if (contacto) {
                  contacto.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-blue-400 hover:underline"
            >
              Escribime
            </button>{" "}
            y vemos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}