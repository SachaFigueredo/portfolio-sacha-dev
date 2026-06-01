"use client";

import { motion } from "framer-motion";

/*
  ========================================
  SOBRE MI - Diseño premium
  ========================================
  Texto honesto pero diseño profesional
*/

export default function SobreMi() {
  return (
    <section 
      id="sobre-mi"
      className="py-32 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Sobre mi
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">
              Desarrollo web con{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                enfoque en resultados
              </span>
              {" "}
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Soy desarrollador Full Stack con 2+ años aprendiendo y construyendo proyectos propios. 
                Mi stack: <span className="text-blue-400">React</span>, <span className="text-green-400">Node.js</span>, <span className="text-purple-400">PostgreSQL</span>.
              </p>
              
               <p>
                 Lo que me diferencia? <span className="text-white">Atención personalizada</span>. No soy una agencia, 
                 soy yo trabajando en tu proyecto directamente.
               </p>
               
               <p>
                 Si necesitas algo web y tenés un presupuesto acotado, podemos charlar. 
                 Entrego en tiempo y con buena comunicación.
               </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2+</div>
                 <div className="text-sm text-gray-500 mt-1">años aprendiendo</div>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4</div>
                <div className="text-sm text-gray-500 mt-1">proyectos</div>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-500 mt-1">esfuerzo</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
              
              {/* Card */}
              <div className="relative rounded-2xl bg-[#12121a] border border-white/10 p-8 overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
                
                {/* Terminal window */}
                <div className="relative z-10">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-gray-600">~sacha-dev</span>
                  </div>
                  
                  {/* Code */}
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-gray-500">// Mi perfil</div>
                    <div className="text-purple-400">const</div>{" "}
                    <div className="text-blue-400">developer</div> = {"{"}
                    <div className="pl-4 text-gray-400">
                      nombre: <span className="text-green-400">"Sacha Figueredo"</span>,
                    </div>
                    <div className="pl-4 text-gray-400">
                      stack: [<span className="text-yellow-400">"React"</span>, <span className="text-yellow-400">"Node"</span>, <span className="text-yellow-400">"Postgres"</span>],
                    </div>
                    <div className="pl-4 text-gray-400">
                      disponible: <span className="text-green-400">true</span>,
                    </div>
                    <div className="pl-4 text-gray-400">
                      precio: <span className="text-yellow-400">"accesible"</span>
                    </div>
                    <div>{"}"}</div>
                    
                    {/* Cursor */}
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-blue-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}