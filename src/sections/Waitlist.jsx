import { useState } from "react"

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6JVulIWbRwzlcrKI5OJXvYPeWIRcR-Up3ZLFd_MYMBDUQzPdm3dFGP3xnumZPjBt_/exec"

export default function Waitlist() {
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    whatsapp: "",
    email: "",
  })
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email) {
      alert("Por favor completa al menos tu nombre y email.")
      return
    }
    setStatus("loading")
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // Google Apps Script necesita text/plain para evitar CORS preflight
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      })
      setStatus("success")
      setForm({ nombre: "", negocio: "", ciudad: "", whatsapp: "", email: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="waitlist" className="py-28 px-5 sm:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-macchiato-mantle border border-macchiato-green/30 rounded-3xl p-12 shadow-2xl shadow-black/30">
            <div className="w-16 h-16 rounded-2xl bg-macchiato-green/10 border border-macchiato-green/30 flex items-center justify-center text-3xl mx-auto mb-6">
              🎉
            </div>
            <h3 className="text-2xl font-extrabold text-macchiato-text mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              ¡Ya estás en la lista!
            </h3>
            <p className="text-macchiato-subtext1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Te avisaremos por WhatsApp y email cuando MiInventario esté listo. ¡Gracias!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-28 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-macchiato-blue/6 rounded-full blur-3xl" />
      </div>
      <div className="max-w-lg mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-macchiato-blue/10 border border-macchiato-blue/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-macchiato-blue rounded-full" />
            <span className="text-xs font-semibold text-macchiato-blue/80 uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Acceso anticipado
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Sé de los primeros<br />en probarlo
          </h2>

          <p className="mt-4 text-macchiato-subtext1 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            📢 Sé de los primeros en probar el sistema. Déjanos tus datos y te avisaremos cuando esté listo.
            <span className="font-medium text-macchiato-green"> Los primeros dueños de tienda obtendrán 2 semanas gratis</span> para probar todas las funcionalidades. Sin compromiso, sin spam.
          </p>
        </div>
        <div className="bg-macchiato-mantle border border-macchiato-surface1/60 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/30">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-macchiato-subtext0 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>Tu nombre *</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Ej: María García" required
                  className="w-full px-4 py-3 rounded-xl bg-macchiato-surface0/60 border border-macchiato-surface1/60 text-macchiato-text placeholder-macchiato-subtext0/50 focus:outline-none focus:border-macchiato-blue/60 focus:bg-macchiato-surface0 transition-all duration-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-macchiato-subtext0 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>Nombre del negocio</label>
                <input type="text" name="negocio" value={form.negocio} onChange={handleChange} placeholder="Ej: Minimarket El Sol"
                  className="w-full px-4 py-3 rounded-xl bg-macchiato-surface0/60 border border-macchiato-surface1/60 text-macchiato-text placeholder-macchiato-subtext0/50 focus:outline-none focus:border-macchiato-blue/60 focus:bg-macchiato-surface0 transition-all duration-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-macchiato-subtext0 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ciudad / País</label>
              <input type="text" name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Ej: Lima, Perú"
                className="w-full px-4 py-3 rounded-xl bg-macchiato-surface0/60 border border-macchiato-surface1/60 text-macchiato-text placeholder-macchiato-subtext0/50 focus:outline-none focus:border-macchiato-blue/60 focus:bg-macchiato-surface0 transition-all duration-200 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-macchiato-subtext0 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>WhatsApp</label>
                <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+51 999 000 111"
                  className="w-full px-4 py-3 rounded-xl bg-macchiato-surface0/60 border border-macchiato-surface1/60 text-macchiato-text placeholder-macchiato-subtext0/50 focus:outline-none focus:border-macchiato-blue/60 focus:bg-macchiato-surface0 transition-all duration-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-macchiato-subtext0 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required
                  className="w-full px-4 py-3 rounded-xl bg-macchiato-surface0/60 border border-macchiato-surface1/60 text-macchiato-text placeholder-macchiato-subtext0/50 focus:outline-none focus:border-macchiato-blue/60 focus:bg-macchiato-surface0 transition-all duration-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
            </div>
            {status === "error" && (
              <p className="text-sm text-macchiato-red text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Hubo un error al enviar. Intenta de nuevo.
              </p>
            )}
            <div className="pt-2">
              <button type="submit" disabled={status === "loading"}
                className="w-full bg-macchiato-blue text-macchiato-crust py-4 rounded-xl font-bold text-base hover:bg-macchiato-sapphire transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-macchiato-blue/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {status === "loading" ? "Enviando..." : "Quiero acceso anticipado →"}
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {["🔒 Tus datos están seguros", "✉️ Sin spam", "🆓 Es gratis"].map((text, i) => (
              <span key={i} className="text-xs text-macchiato-subtext0" style={{ fontFamily: "'DM Sans', sans-serif" }}>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
