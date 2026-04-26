// src/components/DisenoMantenimiento.jsx
import { useState } from 'react'
import TarjetaVertical from './TarjetaVertical'

// ============================================
// 📌 VARIADORES VSD (15 imágenes)
// ============================================

const imagenesVariadores = [
  { id: 1, url: "/imagenes/variadores/mtt1.jpeg", titulo: "instalacion y prueba medidor de amperios cts" },
  { id: 2, url: "/imagenes/variadores/mtt2.jpeg", titulo: "Gabinete VSD 20hp y 1hp" },
  { id: 3, url: "/imagenes/variadores/mtt3.jpeg", titulo: "Mediro de tension prueba " },
  { id: 4, url: "/imagenes/variadores/mtt4.jpeg", titulo: "Gabinete VSD de 5hp" },
  { id: 5, url: "/imagenes/variadores/mtt5.jpeg", titulo: "sistema a tierra soldadura exotermica " },
  { id: 6, url: "/imagenes/variadores/mtt6.jpeg", titulo: "Gabinete VSD " },
  { id: 7, url: "/imagenes/variadores/mtt7.jpeg", titulo: "Gabinete VSD " },
  { id: 8, url: "/imagenes/variadores/mtt8.jpeg", titulo: "Gabinete VSD 8" },
  { id: 9, url: "/imagenes/variadores/mtt9.jpeg", titulo: "Gabinete VSD 9" },
  { id: 10, url: "/imagenes/variadores/mtt10.jpg", titulo: "Gabinete VSD ACS880" },
  { id: 11, url: "/imagenes/variadores/mtt11.jpg", titulo: "Gabinete VSD Vector 7" },
  { id: 12, url: "/imagenes/variadores/mtt12.jpg", titulo: "Gabinete VSD ACS800" },
  { id: 13, url: "/imagenes/variadores/mtt13.jpg", titulo: "Gabinete VSD mantenimiento ACS880" },
  { id: 14, url: "/imagenes/variadores/mtt14.jpg", titulo: "Pruebas y mediciones tarjetas electronicas" },
  { id: 15, url: "/imagenes/variadores/mtt15.jpg", titulo: "Pruebas y mediciones tarjetas electronicas" }
]

// ============================================
// 📌 MANTENIMIENTOS ELÉCTRICOS
// ============================================

const imagenesMantenimientos = [
  { id: 1, url: "/imagenes/mantenimientos/mantenimiento1.jpg", titulo: "Mantenimiento Eléctrico 1" },
  { id: 2, url: "/imagenes/mantenimientos/mantenimiento2.jpg", titulo: "Mantenimiento Eléctrico 2" },
  { id: 3, url: "/imagenes/mantenimientos/mantenimiento3.jpg", titulo: "Mantenimiento Eléctrico 3" },
  { id: 4, url: "/imagenes/mantenimientos/mantenimiento4.jpg", titulo: "Mantenimiento Eléctrico 4" },
  { id: 5, url: "/imagenes/mantenimientos/mantenimiento5.jpg", titulo: "Mantenimiento Eléctrico 5" },
  { id: 6, url: "/imagenes/mantenimientos/mantenimiento6.jpg", titulo: "Mantenimiento Eléctrico 6" },
  { id: 7, url: "/imagenes/mantenimientos/mantenimiento7.jpg", titulo: "Mantenimiento Eléctrico 7" },
  { id: 8, url: "/imagenes/mantenimientos/mantenimiento8.jpg", titulo: "Mantenimiento Eléctrico 8" },
  { id: 9, url: "/imagenes/mantenimientos/mantenimiento9.jpg", titulo: "Mantenimiento Eléctrico 9" },
  { id: 10, url: "/imagenes/mantenimientos/mantenimiento10.jpg", titulo: "Mantenimiento Eléctrico 10" },
  { id: 11, url: "/imagenes/mantenimientos/mantenimiento11.jpg", titulo: "Mantenimiento Eléctrico 11" },
  { id: 12, url: "/imagenes/mantenimientos/mantenimiento12.jpg", titulo: "Mantenimiento Eléctrico 12" },
  { id: 13, url: "/imagenes/mantenimientos/mantenimiento13.jpg", titulo: "Mantenimiento Eléctrico 13" },
  { id: 14, url: "/imagenes/mantenimientos/mantenimiento14.jpg", titulo: "Mantenimiento Eléctrico 14" },
  { id: 15, url: "/imagenes/mantenimientos/mantenimiento15.jpg", titulo: "Mantenimiento Eléctrico 15" }
]

// ============================================
// 📌 PROYECTOS ELECTRÓNICOS (electron1 al 16)
// ============================================

const imagenesElectronicos = [
  { id: 1, url: "/imagenes/electronicos/electron1.jpg", titulo: "Mantenimiento soldadura de estaño" },
  { id: 2, url: "/imagenes/electronicos/electron2.jpg", titulo: "Montaje de diodos MIC10" },
  { id: 3, url: "/imagenes/electronicos/electron3.jpg", titulo: "Mantenimiento preventivo pcb " },
  { id: 4, url: "/imagenes/electronicos/electron4.jpg", titulo: "Mantenimiento preventivo pcb" },
  { id: 5, url: "/imagenes/electronicos/electron5.jpg", titulo: "Mantenimiento correctivo" },
  { id: 6, url: "/imagenes/electronicos/electron6.jpg", titulo: "Mantenimiento correctivo regulador solar 20A" },
  { id: 7, url: "/imagenes/electronicos/electron7.jpg", titulo: "Ensamble tarjeta infrarojo" },
  { id: 8, url: "/imagenes/electronicos/electron8.jpg", titulo: "Esquema y grabado en PCB negativo" },
  { id: 9, url: "/imagenes/electronicos/electron9.jpg", titulo: "Mantenimiento portatil main board" },
  { id: 10, url: "/imagenes/electronicos/electron10.jpg", titulo: "Bobinado diafragma sound " },
  { id: 11, url: "/imagenes/electronicos/electron11.jpg", titulo: "PCB cloruro ferrico" },
  { id: 12, url: "/imagenes/electronicos/electron12.jpg", titulo: "Esquematico infrarojo" },
  { id: 13, url: "/imagenes/electronicos/electron13.jpg", titulo: "Pruebas proyecto infrarojo" },
  { id: 14, url: "/imagenes/electronicos/electron14.jpg", titulo: "Esquematico pcb live wire" },
  { id: 15, url: "/imagenes/electronicos/electron15.jpg", titulo: "Proyecto Electrónico 15" },
  ]

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop"

export default function DisenoMantenimiento() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenesActuales, setImagenesActuales] = useState([])
  const [tituloModal, setTituloModal] = useState("")
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const abrirGaleria = (imagenes, titulo) => {
    setImagenesActuales(imagenes)
    setTituloModal(titulo)
    setModalAbierto(true)
  }

  // ✅ CORREGIDO: Cierra la galería y va al inicio de la PÁGINA PRINCIPAL
  const volverAlInicio = () => {
    setModalAbierto(false)
    setImagenSeleccionada(null)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const cerrarGaleria = () => {
    setModalAbierto(false)
    setImagenSeleccionada(null)
  }

  return (
    <>
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Diseño y Mantenimiento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mt-3"></div>
          <p className="text-gray-300 mt-3 text-sm">
            Especialista en automatización industrial, mantenimiento eléctrico y desarrollo de proyectos electrónicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <TarjetaVertical
            imagen="/imagenes/variadores/mtt15.jpg"
            titulo="Variadores de Velocidad VSD"
            descripcion="Diseño de gabinetes, mantenimiento preventivo, correctivo y reparación especializada"
            badges={[
              { texto: `${imagenesVariadores.length} imágenes`, color: "bg-yellow-500/80 text-black" },
              { texto: "Mantenimiento", color: "bg-blue-600/80" },
              { texto: "Reparación", color: "bg-purple-600/80" }
            ]}
            onClick={() => abrirGaleria(imagenesVariadores, "Galería - Variadores VSD")}
          />

          <TarjetaVertical
            imagen="/imagenes/mantenimientos/mantenimiento1.jpg"
            titulo="Mantenimientos Eléctricos"
            descripcion="Mantenimiento industrial, reparación de motores trifásicos y variadores de velocidad"
            badges={[
              { texto: `${imagenesMantenimientos.length} imágenes`, color: "bg-green-500/80 text-black" },
              { texto: "Industrial", color: "bg-blue-600/80" },
              { texto: "Motores", color: "bg-orange-600/80" }
            ]}
            onClick={() => abrirGaleria(imagenesMantenimientos, "Galería - Mantenimientos Eléctricos")}
          />

          <TarjetaVertical
            imagen="/imagenes/electronicos/electron1.jpg"
            titulo="Proyectos Electrónicos"
            descripcion="Diseño y construcción de fuentes regulables, controladores de temperatura y sistemas embebidos"
            badges={[
              { texto: `${imagenesElectronicos.length} imágenes`, color: "bg-purple-500/80 text-black" },
              { texto: "PCB", color: "bg-blue-600/80" },
              { texto: "Arduino", color: "bg-green-600/80" }
            ]}
            onClick={() => abrirGaleria(imagenesElectronicos, "Galería - Proyectos Electrónicos")}
          />
        </div>
      </div>

      {/* Modal de galería */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="min-h-screen w-full p-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Botones superiores */}
              <div className="flex justify-center gap-4 mb-6">
                <button 
                  onClick={volverAlInicio}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-bold"
                >
                  Volver al Inicio
                </button>
                <button 
                  onClick={cerrarGaleria}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold"
                >
                  Cerrar Galería
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">{tituloModal}</h2>
                <p className="text-gray-400">{imagenesActuales.length} imágenes</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {imagenesActuales.map((img) => (
                  <div 
                    key={img.id} 
                    onClick={() => setImagenSeleccionada(img)} 
                    className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                  >
                    <div className="h-48 bg-gray-900">
                      <img 
                        src={img.url} 
                        alt={img.titulo} 
                        className="w-full h-full object-contain" 
                        onError={(e) => { e.target.src = DEFAULT_IMAGE }} 
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-white font-bold text-sm">{img.titulo}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal imagen ampliada */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" 
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-4xl">
            <button 
              onClick={(e) => { e.stopPropagation(); setImagenSeleccionada(null) }} 
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Cerrar
            </button>
            <img 
              src={imagenSeleccionada.url} 
              alt={imagenSeleccionada.titulo} 
              className="max-w-full max-h-[80vh] object-contain rounded-xl" 
            />
            <div className="text-center mt-2 text-white">{imagenSeleccionada.titulo}</div>
          </div>
        </div>
      )}
    </>
  )
}