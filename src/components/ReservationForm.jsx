import { useState } from 'react'

const initialForm = {
  nombre: '',
  correo: '',
  experiencia: '',
  mensaje: '',
}

function ReservationForm() {
  const [formData, setFormData] = useState(initialForm)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Reserva:', formData)
    localStorage.setItem('zenith_reserva', JSON.stringify(formData))
    
    alert('✓ Reserva registrada con éxito. ¡Pronto te contactaremos!')
    
    setFormData(initialForm)
  }

  return (
    <div className="bg-[#fffdf9] border border-border p-8 md:p-12 rounded-lg shadow-sm">
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <label className="text-[1.1rem] font-medium text-text" htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            className="bg-[#fffdf9] border border-[#b0afaa] text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-[#b0afaa] placeholder:text-gray-400"
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
            className="bg-[#fffdf9] border border-[#b0afaa] text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-[#b0afaa] placeholder:text-gray-400"
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
            className="bg-[#fffdf9] border border-[#b0afaa] text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-[#b0afaa] cursor-pointer"
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
            className="bg-[#fffdf9] border border-[#b0afaa] text-text font-body text-[1rem] font-light p-4 rounded outline-none w-full transition-colors focus:border-[#b0afaa] min-h-[150px] resize-vertical placeholder:text-gray-400"
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
  )
}

export default ReservationForm
