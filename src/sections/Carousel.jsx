import { useState, useEffect, useRef } from "react"

// 👇 AGREGA aquí tus imágenes desde src/assets/
// Importa cada imagen y agrégala al array con un título descriptivo
// Ejemplo:
import screenshot1 from "../assets/views/dashboard.png"
import screenshot2 from "../assets/views/inventario.png"
import screenshot3 from "../assets/views/ventas.png"
//   import screenshot2 from "../assets/screenshot2.png"
//
// const slides = [
//   { img: screenshot1, label: "Vista de inventario" },
//   { img: screenshot2, label: "Registro de ventas" },
// ]
//
// Por ahora usamos placeholders para que veas el diseño:

const slides = [
  {
    img: screenshot1,
    label: "Dashboard Principal",
    placeholder: "📊",
    desc: "Dashboard principal que el usuario podra ver"
  },
  {
    img: screenshot2,
    label: "Vista de inventario",
    placeholder: "📦",
    desc: "Tu stock completo de un vistazo"
  },
  {
    img: screenshot3,
    label: "Registro de ventas",
    placeholder: "🛒",
    desc: "Registra ventas en segundos"
  },
  // {
  //   img: null,
  //   label: "Productos más vendidos",
  //   placeholder: "📊",
  //   desc: "Descubre qué vende más"
  // },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const autoplayRef = useRef(null)

  const total = slides.length

  const goTo = (index) => {
    setCurrent((index + total) % total)
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 4000)
    return () => clearInterval(autoplayRef.current)
  }, [current])

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(next, 4000)
  }

  // Touch / drag handlers
  const onDragStart = (clientX) => {
    setIsDragging(true)
    setDragStartX(clientX)
    setDragOffset(0)
    clearInterval(autoplayRef.current)
  }

  const onDragMove = (clientX) => {
    if (!isDragging) return
    setDragOffset(clientX - dragStartX)
  }

  const onDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragOffset < -60) next()
    else if (dragOffset > 60) prev()
    setDragOffset(0)
    resetAutoplay()
  }

  return (
    <section className="py-16 px-5 sm:px-8 overflow-hidden relative">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-macchiato-surface1/60 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-semibold text-macchiato-blue/80 uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Así se ve el sistema
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Diseñado para ser{" "}
            <span className="text-macchiato-blue">simple y rápido</span>
          </h2>
          <p
            className="mt-3 text-macchiato-subtext1 max-w-lg mx-auto text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Sin complicaciones. Si sabes usar WhatsApp, puedes usar MiInventario.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative select-none">

          {/* Main slide — browser/phone frame */}
          <div
            className="relative overflow-hidden rounded-3xl border border-macchiato-surface1/60 bg-macchiato-mantle shadow-2xl shadow-black/40 cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
            onTouchEnd={onDragEnd}
          >
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-macchiato-surface0 border-b border-macchiato-surface1/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-macchiato-red/60" />
                <div className="w-3 h-3 rounded-full bg-macchiato-yellow/60" />
                <div className="w-3 h-3 rounded-full bg-macchiato-green/60" />
              </div>
              <div className="flex-1 mx-3 bg-macchiato-surface1/50 rounded-lg px-4 py-1.5 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-macchiato-subtext0/40" />
                <span
                  className="text-xs text-macchiato-subtext0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  miinventario.app
                </span>
              </div>
              {/* Mobile icon */}
              <span className="text-sm ml-1">📱</span>
            </div>

            {/* Slide content */}
            <div
              className="relative aspect-[16/9] sm:aspect-[16/8] flex items-center justify-center overflow-hidden transition-transform duration-300"
              style={{ transform: `translateX(${dragOffset}px)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transform: i === current
                      ? 'translateX(0) scale(1)'
                      : i < current
                        ? 'translateX(-4%) scale(0.97)'
                        : 'translateX(4%) scale(0.97)',
                    pointerEvents: i === current ? 'auto' : 'none',
                  }}
                >
                  {slide.img ? (
                    <img
                      src={slide.img}
                      alt={slide.label}
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  ) : (
                    /* Placeholder — reemplazar cuando tengas las imágenes */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-macchiato-crust">
                      {/* Fake UI skeleton */}
                      <div className="w-full max-w-sm px-6 space-y-3">
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-5 w-28 bg-macchiato-surface1 rounded-lg" />
                          <div className="h-8 w-8 bg-macchiato-blue/20 rounded-xl flex items-center justify-center text-lg">
                            {slide.placeholder}
                          </div>
                        </div>
                        {[80, 60, 90, 50, 70].map((w, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-macchiato-surface1/60 rounded-xl flex-shrink-0" />
                            <div className="flex-1 space-y-1.5">
                              <div className="h-2.5 bg-macchiato-surface1 rounded-full" style={{ width: `${w}%` }} />
                              <div className="h-2 bg-macchiato-surface0 rounded-full" style={{ width: `${w * 0.6}%` }} />
                            </div>
                            <div className="w-12 h-6 bg-macchiato-blue/20 rounded-lg flex-shrink-0" />
                          </div>
                        ))}
                        <div className="mt-4 h-10 bg-macchiato-blue/30 rounded-xl flex items-center justify-center">
                          <div className="h-3 w-32 bg-macchiato-blue/50 rounded-full" />
                        </div>
                      </div>
                      {/* Label over skeleton */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-macchiato-surface0/80 backdrop-blur-sm border border-macchiato-surface1 rounded-full px-4 py-1.5">
                        <span
                          className="text-xs text-macchiato-subtext1"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          📸 Aquí irá tu captura de pantalla: <strong className="text-macchiato-text">{slide.label}</strong>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows — hidden on mobile, shown on sm+ */}
          <button
            onClick={() => { prev(); resetAutoplay() }}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 bg-macchiato-surface0 border border-macchiato-surface1 rounded-full items-center justify-center text-macchiato-subtext1 hover:text-macchiato-text hover:border-macchiato-blue/40 hover:bg-macchiato-surface1 transition-all duration-200 shadow-xl shadow-black/30 z-10"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => { next(); resetAutoplay() }}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 bg-macchiato-surface0 border border-macchiato-surface1 rounded-full items-center justify-center text-macchiato-subtext1 hover:text-macchiato-text hover:border-macchiato-blue/40 hover:bg-macchiato-surface1 transition-all duration-200 shadow-xl shadow-black/30 z-10"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

        {/* Dots + label */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAutoplay() }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '8px',
                  background: i === current ? '#8aadf4' : '#494d64',
                }}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Current slide label */}
          <p
            className="text-sm text-macchiato-subtext0"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {slides[current].label}
            <span className="mx-2 text-macchiato-surface1">·</span>
            <span className="text-macchiato-subtext0/60">{current + 1} / {total}</span>
          </p>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAutoplay() }}
              className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 ${i === current
                ? 'bg-macchiato-surface0 border-macchiato-blue/50 shadow-lg shadow-macchiato-blue/10'
                : 'bg-macchiato-surface0/30 border-macchiato-surface1/40 hover:bg-macchiato-surface0/60'
                }`}
            >
              <span className="text-base">{slide.placeholder}</span>
              <span
                className={`text-xs font-medium transition-colors ${i === current ? 'text-macchiato-text' : 'text-macchiato-subtext0'}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {slide.label}
              </span>
              {i === current && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-macchiato-blue rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Swipe hint — only on mobile */}
        <p
          className="sm:hidden text-center text-xs text-macchiato-subtext0/60 mt-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          ← Desliza para ver más →
        </p>
      </div>
    </section>
  )
}
