const problems = [
  {
    emoji: "❓",
    title: "Sin visibilidad de stock",
    text: "No sabes exactamente qué productos te quedan hasta que ya se agotaron."
  },
  {
    emoji: "📉",
    title: "Sin datos de ventas",
    text: "No sabes qué productos se venden más, así que compras mal y pierdes dinero."
  },
  {
    emoji: "⏰",
    title: "Siempre tarde",
    text: "Te das cuenta cuando un producto se acaba, no antes — y ya perdiste ventas."
  }
]

export default function Problem() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-macchiato-mantle relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-macchiato-surface1 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-macchiato-surface1 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold text-macchiato-red/80 uppercase tracking-widest mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            El problema
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Muchos dueños manejan su
            <br className="hidden sm:block" />
            inventario <span className="text-macchiato-red">"de memoria"</span>
          </h2>
          <p
            className="mt-4 text-macchiato-subtext1 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Y eso tiene un costo real: ventas perdidas, compras innecesarias, y estrés constante.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative bg-macchiato-surface0/60 backdrop-blur-sm border border-macchiato-surface1/50 p-7 rounded-2xl hover:border-macchiato-red/40 hover:bg-macchiato-surface0 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-macchiato-red/10 border border-macchiato-red/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {p.emoji}
              </div>
              <h3
                className="font-bold text-lg text-macchiato-text mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-macchiato-subtext1 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {p.text}
              </p>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 text-macchiato-red/20 text-4xl font-black select-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
