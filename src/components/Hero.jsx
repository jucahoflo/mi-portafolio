export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 pb-8 border-b border-white/10">
      {/* Foto de perfil */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <img 
            src="https://ui-avatars.com/api/?name=Juan+Carlos+Holguin&background=1e1b4b&color=ffffff&size=200&bold=true&font-size=0.6&length=2&rounded=true"
            alt="Juan Carlos Holguín"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
          📸 Juan Carlos
        </div>
      </div>

      {/* Información */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Juan Carlos Holguín F.
        </h1>
        <div className="mt-3">
          <p className="text-xl text-gray-300">
            Ingeniero Electrónico | Magíster Electricidad Industrial
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
            <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/30">
              🚀 Frontend Junior
            </span>
            <span className="inline-block bg-purple-500/20 backdrop-blur-sm text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-purple-500/30">
              ⚡ Automatización
            </span>
            <span className="inline-block bg-pink-500/20 backdrop-blur-sm text-pink-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-pink-500/30">
              📊 NEC
            </span>
          </div>
        </div>
        <p className="mt-5 text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Combino automatización industrial, normativa NEC y desarrollo frontend 
          para crear herramientas técnicas funcionales y de alto impacto.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
          <a 
            href="#proyectos" 
            className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            📂 Ver proyectos
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></span>
          </a>
          <a 
            href="#" 
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}