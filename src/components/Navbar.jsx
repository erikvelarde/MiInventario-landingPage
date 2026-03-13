export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 border-b border-macchiato-surface0/50 backdrop-blur-md bg-macchiato-crust/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-macchiato-blue flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" opacity="0.6" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" opacity="0.6" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" className="text-macchiato-crust" />
            </svg>
          </div>
          <span className="text-lg font-bold text-macchiato-text tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            MiInventario
          </span>
        </div>
        <a
          href="#waitlist"
          className="group relative bg-macchiato-blue text-macchiato-crust px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-macchiato-sapphire transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-macchiato-blue/20"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Quiero probarlo
        </a>
      </div>
    </nav>
  )
}
