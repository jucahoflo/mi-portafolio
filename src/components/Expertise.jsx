export default function Expertise() {
  const skills = [
    { name: "⚙️ PLC", color: "from-blue-500/20 to-blue-600/20" },
    { name: "📊 Normativa NEC", color: "from-green-500/20 to-green-600/20" },
    { name: "🔌 Variadores", color: "from-yellow-500/20 to-orange-500/20" },
    { name: "⚛️ React", color: "from-cyan-500/20 to-blue-500/20" },
    { name: "🎨 Tailwind", color: "from-teal-500/20 to-emerald-500/20" },
    { name: "📱 Responsive", color: "from-purple-500/20 to-pink-500/20" },
    { name: "🟨 JavaScript", color: "from-yellow-500/20 to-amber-500/20" },
    { name: "🐙 Git", color: "from-red-500/20 to-orange-500/20" }
  ]
  
  return (
    <div className="relative mb-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl"></div>
      
      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="text-5xl animate-float">⚡</div>
          <div>
            <h3 className="font-bold text-2xl text-white">Valor diferencial: Ingeniería + Frontend</h3>
            <p className="text-gray-300 mt-1">Experiencia industrial que me permite crear herramientas con fundamento técnico real</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-gradient-to-r ${skill.color} backdrop-blur-sm rounded-full p-0.5`}
            >
              <span className="block px-4 py-2 rounded-full bg-black/40 text-gray-200 text-sm font-medium group-hover:bg-black/20 transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Cita destacada */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-gray-300 text-sm italic">
            "De la lógica del PLC al código limpio — Construyendo puentes entre la industria y el desarrollo web"
          </p>
        </div>
      </div>
    </div>
  )
}