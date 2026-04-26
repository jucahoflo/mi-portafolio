// src/components/TarjetaVertical.jsx
export default function TarjetaVertical({ 
  imagen,        
  titulo,        
  descripcion,   
  badges,        
  onClick,       
  icono          
}) {
  return (
    <div 
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 h-96 md:h-[420px]"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imagen} 
          alt={titulo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50"></div>
      </div>
      
      {/* Contenido - texto más visible */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center h-full p-5 pb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center px-2 drop-shadow-lg">
          {titulo}
        </h3>
        <p className="text-gray-100 text-sm md:text-base text-center px-3 line-clamp-3 drop-shadow-md">
          {descripcion}
        </p>
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {badges.map((badge, idx) => (
              <span 
                key={idx} 
                className={`${badge.color || 'bg-white/20'} backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}
              >
                {badge.texto}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 text-yellow-300 group-hover:translate-x-1 transition-transform bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm inline-flex items-center gap-2 border border-yellow-400/50">
          <span className="text-xs md:text-sm font-medium">Ver galería</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  )
}