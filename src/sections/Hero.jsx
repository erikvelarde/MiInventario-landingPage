export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-5 sm:px-8 overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main blue glow centered-top */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-macchiato-blue/10 rounded-full blur-[120px]" />
        {/* Warm accent bottom-left — evokes warmth/humanity */}
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-macchiato-peach/8 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#8aadf4 1px, transparent 1px), linear-gradient(90deg, #8aadf4 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
        {/* Diagonal decorative stripe top-right */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.06]"
          style={{
            background: 'repeating-linear-gradient(45deg, #8aadf4 0px, #8aadf4 1px, transparent 1px, transparent 12px)'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* ── Top badge ── */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-macchiato-surface0/70 border border-macchiato-surface1/80 rounded-full px-5 py-2 backdrop-blur-sm shadow-lg shadow-black/20">
            <span className="text-base">📱</span>
            <span
              className="text-sm font-semibold text-macchiato-text"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Solo necesitas tu celular
            </span>
            <span className="w-px h-3 bg-macchiato-surface1" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-macchiato-green animate-pulse" />
              <span
                className="text-xs text-macchiato-green font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Gratis para probar
              </span>
            </span>
          </div>
        </div>

        {/* ── Main headline ── */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="block text-macchiato-text">Tu tienda,</span>
            <span className="block relative mt-1">
              {/* Word with highlight box behind it */}
              <span className="relative inline-block">
                <span className="relative z-10 text-macchiato-crust bg-macchiato-blue px-4 py-1 rounded-2xl">
                  bajo control
                </span>
              </span>
            </span>
            <span
              className="block mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-macchiato-subtext1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              desde tu celular
            </span>
          </h1>
        </div>

        {/* ── Sub-headline ── */}
        <p
          className="text-center text-lg sm:text-xl text-macchiato-subtext1 max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Olvídate de los cuadernos y las hojas de cálculo. Con{" "}
          <strong className="text-macchiato-text font-semibold">MiInventario</strong>{" "}
          sabes exactamente qué tienes, qué se acaba y qué más se vende —
          todo desde el navegador de tu celular.
        </p>

        {/* ── CTA buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#waitlist"
            className="group w-full sm:w-auto bg-macchiato-blue text-macchiato-crust px-8 py-4 rounded-2xl font-bold text-base hover:bg-macchiato-sapphire transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-macchiato-blue/30 text-center"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Quiero probarlo gratis
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-macchiato-subtext1 hover:text-macchiato-text border border-macchiato-surface1 hover:border-macchiato-surface2 px-7 py-4 rounded-2xl text-sm font-medium transition-all duration-200 hover:bg-macchiato-surface0/40"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ver cómo funciona ↓
          </a>
        </div>

        {/* ── Key benefits row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
          {[
            { icon: "📦", title: "Stock al instante", desc: "Ve cuánto tienes de cada producto en segundos" },
            { icon: "⚠️", title: "Alertas de agotamiento", desc: "Te avisamos antes de que se te acabe algo" },
            { icon: "📊", title: "Qué más se vende", desc: "Descubre tus productos estrella y compra mejor" },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-row sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-3 bg-macchiato-surface0/40 hover:bg-macchiato-surface0/70 border border-macchiato-surface1/50 hover:border-macchiato-blue/30 rounded-2xl px-5 py-4 sm:py-6 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-macchiato-surface1/50 group-hover:bg-macchiato-blue/15 rounded-xl flex items-center justify-center text-xl transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <p
                  className="font-bold text-macchiato-text text-sm sm:text-base"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-macchiato-subtext0 text-xs sm:text-sm mt-0.5 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Social proof bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Avatars + count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {['🧑‍💼', '👩‍🍳', '👨‍🔧', '👩‍🏪', '🧔'].map((e, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-macchiato-surface1 border-2 border-macchiato-crust flex items-center justify-center text-sm shadow-md"
                  style={{ zIndex: 5 - i }}
                >
                  {e}
                </div>
              ))}
            </div>
            <div>
              <p
                className="text-sm font-bold text-macchiato-text"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                +120 dueños
              </p>
              <p
                className="text-xs text-macchiato-subtext0"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                en lista de espera
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-macchiato-surface1" />

          {/* Country flags */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-macchiato-subtext0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Dueños de tienda de
            </span>
            <div className="flex gap-1.5">
              {['🇧🇴', '🇵🇪', '🇲🇽', '🇨🇴', '🇦🇷'].map((flag, i) => (
                <span key={i} className="text-lg" title={flag}>{flag}</span>
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-macchiato-surface1" />

          {/* No-install badge */}
          <div className="flex items-center gap-2 text-macchiato-subtext1">
            <span className="text-lg">✅</span>
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sin instalar nada
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
