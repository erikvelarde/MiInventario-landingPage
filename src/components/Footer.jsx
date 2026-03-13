export default function Footer() {
  return (
    <footer className="border-t border-macchiato-surface0/50 py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-macchiato-blue flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" opacity="0.6" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" opacity="0.6" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" />
              </svg>
            </div>
            <span
              className="font-bold text-macchiato-subtext1 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              MiInventario
            </span>
          </div>

          <p
            className="text-xs text-macchiato-subtext0 text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 MiInventario · Hecho con 💙 para el comercio latinoamericano
          </p>

          <a
            href="#waitlist"
            className="text-xs text-macchiato-blue hover:text-macchiato-sapphire transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Unirme a la lista →
          </a>
        </div>
      </div>
    </footer>
  )
}
