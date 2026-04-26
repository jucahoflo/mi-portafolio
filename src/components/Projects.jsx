// src/components/Projects.jsx
const projects = [
  {
    id: 1,
    title: "JUANKALCULA - Suite Técnica",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Todo en uno: calculadora científica, resistencias SMD, código de capacitores, semiconductores y datasheets.",
    icon: "🧮",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    link: "https://jucahoflo.github.io/juankalcula/",
    linkText: "Probar JUANKALCULA →"
  },
  {
    id: 2,
    title: "Calculadora de Resistencias",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Código de colores profesional para resistencias eléctricas de 4 bandas. Ideal para técnicos e ingenieros.",
    icon: "📐",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    link: "https://jucahoflo.github.io/Electronic-Resistance-Calculator/",
    linkText: "Calcular resistencias →"
  },
  {
    id: 3,
    title: "Calculadora de Motores Eléctricos",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Cálculo profesional: HP, voltaje (220V/480V), sistema trifásico/bifásico, factor de potencia y eficiencia.",
    icon: "🔌",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    link: "https://jucahoflo.github.io/calculadora-motor-electrico/",
    linkText: "Calcular motor eléctrico →"
  },
  {
    id: 4,
    title: "KillerJobs - Auditoría de CV con IA",
    tech: ["React", "Vercel", "IA"],
    desc: "Plataforma profesional que audita currículums con inteligencia artificial para potenciar perfiles laborales.",
    icon: "🤖",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    link: "https://cv-auditor-pro.vercel.app/login",
    linkText: "Auditar CV con IA →"
  }
]

// Función para volver al inicio de la página
const volverAlInicio = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Projects() {
  return (
    <section id="proyectos" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Proyectos destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-300 mt-3 text-sm">
          4 herramientas funcionales
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-2xl p-6 border ${project.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden h-full flex flex-col`}
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Botón volver al inicio */}
            <button
              onClick={volverAlInicio}
              className="absolute top-3 right-3 z-10 bg-yellow-500 hover:bg-yellow-400 text-black p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              title="Volver al inicio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            
            {/* Icono */}
            <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {project.icon}
            </div>
            
            {/* Título */}
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 my-3">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-white/10 text-gray-200 text-xs px-3 py-1 rounded-full font-medium border border-white/10 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Descripción */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">{project.desc}</p>
            
            {/* Enlace */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-blue-300 text-sm font-medium hover:text-white transition-all duration-300 group/link bg-white/5 px-4 py-2 rounded-full hover:bg-blue-600/30 w-fit"
            >
              <span>{project.linkText.split('→')[0]}</span>
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}