// src/components/ImageGallery.jsx
import { useState } from 'react'
import TarjetaVertical from './TarjetaVertical'

const mantenimientos = [
  { id: 1, url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop", titulo: "Mantenimiento Eléctrico Industrial", desc: "Inspección y mantenimiento de tableros" },
  { id: 2, url: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=300&fit=crop", titulo: "Reparación de Motores Trifásicos", desc: "Diagnóstico y reparación" },
  { id: 3, url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop", titulo: "Instalación de Variadores", desc: "Configuración y puesta en marcha" },
]

const proyectosElectronicos = [
  { id: 1, url: "https://images.unsplash.com/photo-1581092335871-4f3d6f8e7c9b?w=400&h=300&fit=crop", titulo: "Fuente de Alimentación", desc: "Diseño 0-30V" },
  { id: 2, url: "https://images.unsplash.com/photo-1581092335582-6e2f0b2c4c3c?w=400&h=300&fit=crop", titulo: "Controlador de Temperatura", desc: "Sistema PID" },
]

const volverAlInicio = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function ImageGallery() {
  const [activeTab, setActiveTab] = useState('mantenimiento')
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const imagenesActuales = activeTab === 'mantenimiento' ? mantenimientos : proyectosElectronicos

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          📸 Galería Técnica
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-300 mt-3 text-sm">
          Mantenimientos eléctricos y proyectos electrónicos
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('mantenimiento')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === 'mantenimiento'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          🔧 Mantenimientos Eléctricos
        </button>
        <button
          onClick={() => setActiveTab('electronica')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === 'electronica'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          💡 Proyectos Electrónicos
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagenesActuales.map((img) => (
          <TarjetaVertical
            key={img.id}
            imagen={img.url}
            titulo={img.titulo}
            descripcion={img.desc}
            icono={activeTab === 'mantenimiento' ? "🔧" : "💡"}
            badges={[
              { texto: "Ver detalles", color: "bg-blue-500/80" }
            ]}
            onClick={() => setImagenSeleccionada(img)}
            onVolverInicio={volverAlInicio}
          />
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              onClick={volverAlInicio}
              className="absolute top-4 left-4 z-10 bg-yellow-500/80 hover:bg-yellow-500 text-black px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Volver al inicio
            </button>
            <img 
              src={imagenSeleccionada.url} 
              alt={imagenSeleccionada.titulo} 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl" 
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
              {imagenSeleccionada.titulo}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}