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
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[600px] mx-auto w-full">
      <h1 className="font-title text-4xl md:text-[3.5rem] font-normal text-text mb-3">Reserva un Taller</h1>
      <p className="text-[0.9rem] font-light text-text-light mb-10 leading-[1.6]">
        Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
      </p>

      {enviado && (
        <p className="mb-4 text-[0.9rem] text-text font-medium">
          ✓ Reserva registrada. ¡Pronto te contactamos!
        </p>
      )}

      <form className="bg-white border border-border p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8rem] font-medium text-text" htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            className="bg-bg border border-border text-text font-body text-[0.9rem] font-light p-3 outline-none w-full transition-colors focus:border-text placeholder:text-gray-400"
            placeholder="Ej. Ana Silva"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8rem] font-medium text-text" htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            name="correo"
            className="bg-bg border border-border text-text font-body text-[0.9rem] font-light p-3 outline-none w-full transition-colors focus:border-text placeholder:text-gray-400"
            placeholder="tu@email.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8rem] font-medium text-text" htmlFor="experiencia">Nivel de experiencia</label>
          <select
            id="experiencia"
            name="experiencia"
            className="bg-bg border border-border text-text font-body text-[0.9rem] font-light p-3 outline-none w-full transition-colors focus:border-text cursor-pointer"
            value={formData.experiencia}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona tu nivel</option>
            <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
            <option value="intermedio">Intermedio (Tengo algo de experiencia)</option>
            <option value="avanzado">Avanzado (Practico hace años)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8rem] font-medium text-text" htmlFor="mensaje">Mensaje (opcional)</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="bg-bg border border-border text-text font-body text-[0.9rem] font-light p-3 outline-none w-full transition-colors focus:border-text min-h-[100px] resize-vertical placeholder:text-gray-400"
            placeholder="Cuéntanos algo sobre ti..."
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="self-start bg-text text-white px-7 py-3.5 text-[0.9rem] font-normal transition-opacity hover:opacity-80 cursor-pointer">
          Enviar reserva
        </button>
      </form>
    </main>
  )
}

export default Reservations
