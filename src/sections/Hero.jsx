export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-5 sm:px-8 text-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-macchiato-blue/8 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-macchiato-mauve/6 rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/4 w-56 h-56 bg-macchiato-sapphire/6 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--macchiato-surface1, #494d64) 1px, transparent 1px), linear-gradient(90deg, var(--macchiato-surface1, #494d64) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-macchiato-surface0/80 border border-macchiato-surface1 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-macchiato-green rounded-full animate-pulse" />
          <span className="text-xs font-medium text-macchiato-subtext1 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Acceso anticipado disponible
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Deja de adivinar
          <br />
          <span className="relative">
            <span className="text-macchiato-blue">tu inventario</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" style={{ height: '6px' }}>
              <path d="M2 8C50 4 100 2 150 5C200 8 250 6 298 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-macchiato-blue/40" />
            </svg>
          </span>
        </h1>

        <p
          className="mt-8 text-lg sm:text-xl text-macchiato-subtext1 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Con <strong className="text-macchiato-text font-semibold">MiInventario</strong> sabrás exactamente qué productos tienes
          y cuándo se te van a acabar según tus ventas.
        </p>

        <p
          className="mt-3 text-sm text-macchiato-subtext0"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Diseñado para tiendas de barrio, minimarkets y negocios pequeños de LATAM.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="group w-full sm:w-auto bg-macchiato-blue text-macchiato-crust px-8 py-4 rounded-2xl font-bold text-base hover:bg-macchiato-sapphire transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-macchiato-blue/25"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Quiero probar el sistema
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto text-macchiato-subtext1 hover:text-macchiato-text px-6 py-4 text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ver funcionalidades ↓
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {['🧑‍💼', '👩‍🍳', '👨‍🔧', '👩‍🏪'].map((emoji, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-macchiato-surface1 border-2 border-macchiato-crust flex items-center justify-center text-xs">
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-sm text-macchiato-subtext0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-macchiato-text font-semibold">+120 dueños</span> en lista de espera
          </p>
        </div>
      </div>
    </section>
  )
}
