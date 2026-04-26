export default function SocialBar() {
  const socials = [
    { name: "GitHub", icon: "🐙", url: "#", color: "hover:bg-gray-700" },
    { name: "LinkedIn", icon: "🔗", url: "#", color: "hover:bg-blue-700" },
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:bg-sky-500" },
    { name: "Facebook", icon: "📘", url: "#", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: "📷", url: "#", color: "hover:bg-pink-600" },
    { name: "YouTube", icon: "▶️", url: "#", color: "hover:bg-red-600" },
    { name: "TikTok", icon: "🎵", url: "#", color: "hover:bg-black" },
    { name: "WhatsApp", icon: "💬", url: "#", color: "hover:bg-green-600" },
    { name: "Telegram", icon: "✈️", url: "#", color: "hover:bg-blue-500" },
    { name: "GitLab", icon: "🦊", url: "#", color: "hover:bg-orange-600" },
  ]
  
  return (
    <div className="mt-10">
      <div className="text-center mb-5">
        <h3 className="text-white/80 text-sm uppercase tracking-wider">Conéctate conmigo</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
          >
            <span className="text-lg">{social.icon}</span>
            <span className="text-sm hidden sm:inline">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}