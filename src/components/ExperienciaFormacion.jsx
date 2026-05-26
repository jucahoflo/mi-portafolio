// src/components/ExperienciaFormacion.jsx
import { useState } from 'react'

export default function ExperienciaFormacion() {
  const [activo, setActivo] = useState('experiencia')

  // Experiencia laboral
  const experiencias = [
    {
      id: 1,
      cargo: "Profesional Electrónico - Independiente",
      empresa: "INKOL SAS",
      periodo: "Agosto 2023 - Actualmente",
      descripcion: "Ingeniería Electrónica, Control y Electricidad Industrial, desarrollando y supervisando proyectos de instalación, mantenimiento preventivo, correctivo y predictivo de sistemas eléctricos en baja tensión (BT) y media tensión (MT).",
      logros: [
        "Configuración y puesta en marcha de variadores de velocidad ABB",
        "Mantenimiento de motores eléctricos desde 10 HP hasta 400 HP",
        "Implementación de lazos de control y optimización de procesos",
        "Gestión de Mantenimiento ERP automatización y control industrial",
        "Soporte técnico en sistemas automatizados y solución de fallas eléctricas"
      ]
    },
    {
      id: 2,
      cargo: "Técnico Electricista 1",
      empresa: "MASA STORK - MAGNEX",
      periodo: "Julio 2016 - Julio 2025",
      descripcion: "Responsable de mantenimiento eléctrico industrial y apoyo a instrumentación en Campo Teca Nare.",
      logros: [
        "Mantenimiento electrónico de UPS, variadores y fuentes DC",
        "Diseño y construcción de gabinetes eléctricos",
        "Aplicación de normativas RETIE, NFPA70E, RETILAP, MASE, IEC",
        "Mantenimiento en módulos de producción y gabinetes de control",
        "Diseño y elaboración de planos eléctricos y electrónicos"
      ]
    },
    {
      id: 3,
      cargo: "Supervisor Electricista",
      empresa: "SINOPEC INTERNATIONAL PETROLEUM SERVICES",
      periodo: "Julio 2010 - Marzo 2016",
      descripcion: "Supervisión y mantenimiento preventivo/correctivo de equipos en campo.",
      logros: [
        "Reducción del 20% en tiempos de diagnóstico de fallas",
        "Optimización de eficiencia energética en sistemas de distribución",
        "Disponibilidad operativa del 95% en equipos críticos",
        "Supervisión de mantenimiento de equipos robotizados de perforación",
        "Control de inventarios y logística de materiales eléctricos"
      ]
    },
    {
      id: 4,
      cargo: "Técnico Electrónico - Instrumentación",
      empresa: "LFP INSTRUMENTACION",
      periodo: "Marzo 2004 - Julio 2008",
      descripcion: "Mantenimiento y operaciones en sistemas eléctricos, electrónicos e instrumentación para sector hidrocarburos.",
      logros: [
        "Instalación y puesta en marcha de facilidades de pozo",
        "Parametrización de variadores de velocidad (VSD)",
        "Aplicación de normas de seguridad industrial",
        "Calibración y control de equipos críticos del proceso",
        "Monitoreo de caudal, nivel y presión"
      ]
    }
  ]

  // Educación
  const educaciones = [
    {
      id: 1,
      titulo: "Programador Front End Junior",
      institucion: "Universidad Estud-IA Cymetria",
      periodo: "Finalizado: Marzo 07-2026",
      ubicacion: "Medellín, Antioquia"
    },
    {
      id: 2,
      titulo: "Supervisor de Operaciones",
      institucion: "Curso Especializado",
      periodo: "Finalizado: Mayo 07-2026",
      ubicacion: "Medellín, Antioquia"
    },
    {
      id: 3,
      titulo: "Gestión y Control de Procesos Efectivos",
      institucion: "Curso Especializado",
      periodo: "Finalizado: Mayo 07-2026",
      ubicacion: "Medellín, Antioquia"
    },
    {
      id: 4,
      titulo: "Ingeniería Arquitectura",
      institucion: "Universidad Autónoma de Durango UAD",
      periodo: "Actualmente",
      ubicacion: "México - Ciudad de Durango"
    },
    {
      id: 5,
      titulo: "Tecnólogo en Diseño Electrónico",
      institucion: "SENA",
      periodo: "Finalizado Octubre 2025",
      ubicacion: "Colombia"
    },
    {
      id: 6,
      titulo: "Maestría Electricidad Industrial",
      institucion: "ESNECCA Business School",
      periodo: "Enero 2020",
      ubicacion: "Madrid, España - Virtual"
    },
    {
      id: 7,
      titulo: "Técnico Electricista y Electrónico",
      institucion: "Universidad Remington",
      periodo: "Febrero 1995",
      ubicacion: "Medellín, Colombia"
    },
    {
      id: 8,
      titulo: "Técnico Producción de Pozos de Petróleo",
      institucion: "INSTIPETROL",
      periodo: "Julio 2013",
      ubicacion: "Villavicencio, Meta"
    }
  ]

  // Certificaciones
  const certificaciones = [
    "Especialista internacional de variadores de velocidad",
    "SAP PM – Mantenimiento Key User",
    "Energía solar - On-grid y Off-grid (12V, 24V, 48V DC)",
    "Automatización y control PLC - TIA Portal",
    "Ingeniería de control y programación PLC",
    "Gestión en mantenimiento Industrial ERP",
    "IEEE - Optimización del mantenimiento de subestaciones",
    "Gestión proyectos UPV básico",
    "Certificación redes energizadas y desenergizadas BT-MT (SENA)",
    "Normas técnicas: NFPA70E, RETIE, IEC, RETILAP, NTC2050",
    "Diseño eléctrico con énfasis en NTC 2050 - RETIE - RETILAP - NFPA 70E",
    "Tarjeta Profesional Conte",
    "Aislamiento Seguro MASE – Emisor ECOPETROL",
    "Certificado TESCO Company"
  ]

  // Habilidades blandas
  const habilidades = [
    "Trabajo en equipo",
    "Comunicación asertiva",
    "Liderazgo técnico",
    "Adaptabilidad al cambio",
    "Pensamiento crítico",
    "Resolución de problemas",
    "Toma de decisiones bajo presión",
    "Responsabilidad y compromiso",
    "Organización y gestión del tiempo",
    "Capacidad de aprendizaje continuo",
    "Ética profesional",
    "Relaciones interpersonales"
  ]

  // Software y herramientas
  const software = [
    "Visual Studio Code",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "SAP PM",
    "AutoCAD",
    "Proteus",
    "PLC TIA Portal",
    "Excel avanzado",
    "Power BI",
    "SQL Server",
    "Python básico",
    "SketchUp",
    "ProfiCAD",
    "Ofimática"
  ]

  // Energías renovables
  const energiasRenovables = [
    "Diseño de sistemas fotovoltaicos On-grid y Off-grid",
    "Sistemas 12V DC, 24V DC y 48V DC",
    "Configuración de inversores y controladores de carga",
    "Bancos de baterías y protecciones eléctricas",
    "Diagnóstico de fallas y optimización energética"
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Experiencia y Formación
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-300 mt-3 text-sm">
          Más de 15 años en el sector hidrocarburos, electrónica e instrumentación industrial
        </p>
      </div>

      {/* Pestañas */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActivo('experiencia')}
          className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            activo === 'experiencia'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          💼 Experiencia
        </button>
        <button
          onClick={() => setActivo('educacion')}
          className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            activo === 'educacion'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          🎓 Educación
        </button>
        <button
          onClick={() => setActivo('certificaciones')}
          className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            activo === 'certificaciones'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          📜 Certificaciones
        </button>
        <button
          onClick={() => setActivo('habilidades')}
          className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            activo === 'habilidades'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          🛠️ Habilidades
        </button>
        <button
          onClick={() => setActivo('renovables')}
          className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            activo === 'renovables'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          ☀️ Energías Renovables
        </button>
      </div>

      {/* Contenido - Experiencia */}
      {activo === 'experiencia' && (
        <div className="space-y-6">
          {experiencias.map((exp) => (
            <div key={exp.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{exp.cargo}</h3>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {exp.periodo}
                </span>
              </div>
              <p className="text-yellow-400 text-sm mb-3">{exp.empresa}</p>
              <p className="text-gray-300 text-sm mb-3">{exp.descripcion}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.logros.map((logro, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">{logro}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Contenido - Educación */}
      {activo === 'educacion' && (
        <div className="grid md:grid-cols-2 gap-6">
          {educaciones.map((edu) => (
            <div key={edu.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-white">{edu.titulo}</h3>
              <p className="text-yellow-400 text-sm mt-1">{edu.institucion}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">{edu.periodo}</span>
                <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">{edu.ubicacion}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contenido - Certificaciones */}
      {activo === 'certificaciones' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificaciones.map((cert, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex items-center gap-3">
              <span className="text-2xl">📜</span>
              <span className="text-gray-200 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      )}

      {/* Contenido - Habilidades */}
      {activo === 'habilidades' && (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-2">
              {habilidades.map((hab, idx) => (
                <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {hab}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Software y Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              {software.map((sw, idx) => (
                <span key={idx} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contenido - Energías Renovables */}
      {activo === 'renovables' && (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">☀️ Energías Renovables - Sistemas Fotovoltaicos</h3>
          <ul className="list-disc list-inside space-y-2">
            {energiasRenovables.map((item, idx) => (
              <li key={idx} className="text-gray-300 text-sm">{item}</li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mt-4 italic">
            Diseño, instalación, puesta en marcha y mantenimiento de sistemas fotovoltaicos para aplicaciones industriales, comerciales y autónomas.
          </p>
        </div>
      )}
    </section>
  )
}