// src/components/VariadoresVSD.jsx
import { useState } from 'react'
import TarjetaVertical from './TarjetaVertical'

const TODAS_LAS_IMAGENES = [
  { id: 1, url: "/imagenes/variadores/mtt1.jpeg", titulo: "Gabinete VSD - Diseño Industrial" },
  { id: 2, url: "/imagenes/variadores/mtt2.jpeg", titulo: "Layout Eléctrico" },
  { id: 3, url: "/imagenes/variadores/mtt3.jpeg", titulo: "Cableado Estructurado" },
  { id: 4, url: "/imagenes/variadores/mtt4.jpeg", titulo: "Mantenimiento Preventivo" },
  { id: 5, url: "/imagenes/variadores/mtt5.jpeg", titulo: "Termografía" },
  { id: 6, url: "/imagenes/variadores/mtt6.jpeg", titulo: "Mantenimiento Correctivo" },
  { id: 7, url: "/imagenes/variadores/mtt7.jpeg", titulo: "Reparación - Diagnóstico" },
  { id: 8, url: "/imagenes/variadores/mtt8.jpeg", titulo: "Reparación - IGBT" },
  { id: 9, url: "/imagenes/variadores/mtt9.jpeg", titulo: "Reparación Electrónica" },
  { id: 10, url: "/imagenes/variadores/mtt10.jpg", titulo: "Instalación de Gabinete" },
  { id: 11, url: "/imagenes/variadores/mtt11.jpg", titulo: "Mantenimiento de Tablero" },
  { id: 12, url: "/imagenes/variadores/mtt12.jpg", titulo: "Reparación de Variador" },
  { id: 13, url: "/imagenes/variadores/mtt13.jpg", titulo: "Cambio de Componentes" },
  { id: 14, url: "/imagenes/variadores/mtt14.jpg", titulo: "Pruebas de Funcionamiento" },
  { id: 15, url: "/imagenes/variadores/mtt15.jpg", titulo: "Entrega de Proyecto Industrial" },
]

export default function VariadoresVSD() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const volverAlInicio = () => {
    setModalAbierto(false);
    setImagenSeleccionada(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sección de título - más visible */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Trabajos con Variadores VSD
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-200 mt-3 text-sm font-medium">
          Diseño de gabinetes | Mantenimiento preventivo | Mantenimiento correctivo | Reparación especializada
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TarjetaVertical
            imagen="/imagenes/variadores/mtt15.jpg"
            titulo="Variadores de Velocidad VSD"
            descripcion="Diseño de gabinetes de control, mantenimiento preventivo, mantenimiento correctivo y reparación especializada"
            badges={[
              { texto: `${TODAS_LAS_IMAGENES.length} imágenes`, color: "bg-yellow-500/80 text-black" },
              { texto: "Mantenimiento", color: "bg-blue-600/80" },
              { texto: "Instalación", color: "bg-green-600/80" },
              { texto: "Reparación", color: "bg-purple-600/80" }
            ]}
            onClick={() => setModalAbierto(true)}
          />
        </div>
      </div>

      {/* Modal con galería - texto mejorado */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="min-h-screen w-full p-3 md:p-6">
            <div className="relative max-w-6xl mx-auto bg-gray-900/95 rounded-2xl border border-white/20 overflow-hidden">
              
              <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm p-3 md:p-4 border-b border-white/20 flex justify-center">
                <button 
                  onClick={volverAlInicio}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base font-bold shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Volver al Inicio
                </button>
              </div>

              <div className="text-center py-5 md:py-7 px-4 border-b border-white/20 bg-black/40">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                  Galería de Trabajos - Variadores VSD
                </h2>
                <p className="text-gray-300 text-xs md:text-sm mt-2 font-medium">
                  {TODAS_LAS_IMAGENES.length} imágenes encontradas - Haz clic en cualquier imagen para ampliar
                </p>
              </div>

              <div className="p-3 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {TODAS_LAS_IMAGENES.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => setImagenSeleccionada(img)}
                      className="group relative bg-gray-800/70 rounded-xl overflow-hidden border border-white/15 hover:border-yellow-500/70 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-lg"
                    >
                      <div className="relative h-48 sm:h-52 md:h-56 bg-gray-900">
                        <img
                          src={img.url}
                          alt={img.titulo}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300?text=Error+de+carga'
                          }}
                        />
                      </div>
                      <div className="p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="text-white font-bold text-sm md:text-base drop-shadow-md">{img.titulo}</h4>
                        <p className="text-gray-300 text-xs md:text-sm mt-1">Trabajo en Variadores VSD</p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition backdrop-blur-sm">
                        <span className="text-white text-[10px] md:text-xs font-medium">Ampliar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center py-6 border-t border-white/20 bg-black/40">
                <button 
                  onClick={volverAlInicio}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base font-bold shadow-lg mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Volver al Inicio de la Página
                </button>
                <p className="text-gray-400 text-xs mt-3 font-medium">
                  {TODAS_LAS_IMAGENES.length} imágenes en la galería - Documentación de trabajos realizados
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para imagen ampliada - texto mejorado */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 md:p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[95vh]">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  volverAlInicio();
                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base font-bold shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Volver al Inicio
              </button>
            </div>
            <img 
              src={imagenSeleccionada.url} 
              alt={imagenSeleccionada.titulo} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl mt-16" 
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
              {imagenSeleccionada.titulo}
            </div>
          </div>
        </div>
      )}
    </>
  )
}