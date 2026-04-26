import { useState } from 'react'

const categories = [
  {
    id: "gabinetes",
    title: "📦 Diseño de Gabinetes VSD",
    desc: "Diseño y ensamblaje de gabinetes para variadores de velocidad",
    icon: "📦",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    images: [
      { url: "/imagenes/variadores/mtt1.jpeg", title: "Gabinete VSD", desc: "Diseño industrial" },
      { url: "/imagenes/variadores/mtt2.jpeg", title: "Layout Eléctrico", desc: "Distribución de componentes" },
      { url: "/imagenes/variadores/mtt3.jpeg", title: "Cableado Estructurado", desc: "Canaletas y bornes" }
    ]
  },
  {
    id: "preventivo",
    title: "🔧 Mantenimiento Preventivo",
    desc: "Inspecciones programadas, limpieza y ajuste de conexiones",
    icon: "🔧",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    images: [
      { url: "/imagenes/variadores/mtt4.jpeg", title: "Limpieza de Tablero", desc: "Remoción de polvo" },
      { url: "/imagenes/variadores/mtt5.jpeg", title: "Termografía", desc: "Detección de puntos calientes" },
      { url: "/imagenes/variadores/mtt6.jpeg", title: "Ajuste de Bornes", desc: "Torque de conexiones" }
    ]
  },
  {
    id: "correctivo",
    title: "⚡ Mantenimiento Correctivo",
    desc: "Diagnóstico y reparación de fallas en variadores",
    icon: "⚡",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    images: [
      { url: "/imagenes/variadores/mtt7.jpeg", title: "Diagnóstico de Falla", desc: "Identificación de falla" },
      { url: "/imagenes/variadores/mtt8.jpeg", title: "Reemplazo de IGBT", desc: "Cambio de módulo" }
    ]
  },
  {
    id: "reparacion",
    title: "🛠️ Reparación de Variadores",
    desc: "Reparación de tarjetas electrónicas y fuentes de poder",
    icon: "🛠️",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    images: [
      { url: "/imagenes/variadores/mtt9.jpeg", title: "Reparación de Tarjeta", desc: "Diagnóstico electrónico" }
    ]
  }
]

export default function VariadoresGallery() {
  const [activeCategory, setActiveCategory] = useState("gabinetes")
  const [selectedImage, setSelectedImage] = useState(null)

  const currentCategory = categories.find(c => c.id === activeCategory)

  if (!currentCategory) return null

  return (
    <section className="mb-16">
      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden">
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-full object-contain" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage.title} - {selectedImage.desc}
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          🔧 Trabajos con Variadores de Velocidad (VSD)
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-300 mt-3 text-sm">
          Diseño de gabinetes | Mantenimiento preventivo | Correctivo | Reparación especializada
        </p>
      </div>

      {/* Pestañas */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
              activeCategory === cat.id
                ? `bg-gradient-to-r ${cat.color} text-white shadow-lg border border-white/20`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {cat.icon} {cat.title.split(' ').slice(1).join(' ')}
          </button>
        ))}
      </div>

      {/* Descripción */}
      <div className={`bg-gradient-to-r ${currentCategory.color} rounded-2xl p-5 mb-6 border ${currentCategory.border}`}>
        <h3 className="text-xl font-bold text-white">{currentCategory.title}</h3>
        <p className="text-gray-200 text-sm mt-1">{currentCategory.desc}</p>
      </div>

      {/* Grid de imágenes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentCategory.images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-3 right-3">
                <h4 className="text-white font-bold text-sm">{img.title}</h4>
                <p className="text-gray-300 text-xs">{img.desc}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xs">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Contador */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-xs">
          📸 {currentCategory.images.length} evidencias - {currentCategory.title}
        </p>
      </div>
    </section>
  )
}