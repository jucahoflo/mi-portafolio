// src/App.jsx
import Hero from './components/Hero'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import SocialBar from './components/SocialBar'
import DisenoMantenimiento from './components/DisenoMantenimiento'  // ← Nuevo componente unificado

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fondos decorativos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-slow-spin"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <Hero />
          <Projects />
          
          {/* Sección unificada: Diseño y Mantenimiento */}
          <DisenoMantenimiento />
          
          <Expertise />
          <SocialBar />
          
          <footer className="mt-16 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2025 Juan Carlos Holguín F. — Ingeniería Electrónica + Desarrollo Web</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App