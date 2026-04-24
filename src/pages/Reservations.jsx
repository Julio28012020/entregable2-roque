import { useState } from 'react'

const initialForm = {
  nombre: '',
  correo: '',
  experiencia: '',
  mensaje: '',
}

function Reservations() {
  const [formData, setFormData] = useState(initialForm)
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Reserva:', formData)
    localStorage.setItem('zenith_reserva', JSON.stringify(formData))
    setEnviado(true)
    setFormData(initialForm)
  }

  return (
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[800px] mx-auto w-full">
      <h1 className="font-body text-4xl md:text-[3.7rem] font-light text-text mb-4 text-left">Reserva un Taller</h1>
      <p className="text-[1.1rem] font-light text-text-light mb-12 leading-[1.6] text-left">
        Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
      </p>
      
      {enviado && (
        <p className="mb-8 text-[1.1rem] text-text font-medium bg-white p-4 rounded border border-border shadow-sm">
          ✓ Reserva registrada. ¡Pronto te contactamos!
        </p>
      )}

      <div className="bg-white border border-border p-8 md:p-12 rounded-lg shadow-sm">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="text-[1.1rem] font-medium text-text" htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="bg-white border border-border text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-text placeholder:text-gray-400"
              placeholder="Ej. Ana Silva"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[1.1rem] font-medium text-text" htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              name="correo"
              className="bg-white border border-border text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-text placeholder:text-gray-400"
              placeholder="tu@email.com"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[1.1rem] font-medium text-text" htmlFor="experiencia">Nivel de experiencia</label>
            <select
              id="experiencia"
              name="experiencia"
              className="bg-white border border-border text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-text cursor-pointer"
              value={formData.experiencia}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona tu nivel</option>
              <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
              <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
              <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[1.1rem] font-medium text-text" htmlFor="mensaje">Mensaje (Opcional)</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="bg-white border border-border text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-text min-h-[150px] resize-vertical placeholder:text-gray-400"
              placeholder="¿Qué te gustaría aprender?"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="w-full bg-text text-white rounded px-8 py-3.5 text-[1.1rem] font-medium transition-opacity hover:opacity-80 cursor-pointer mt-4 shadow-sm">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </main>
  )
}

export default Reservations
