import ReservationForm from '../components/ReservationForm'

function Reservations() {
  return (
    <main className="flex-1 py-20 px-6 md:px-12 w-full">
      <div className="max-w-[700px] mx-auto w-full">
        <h1 className="font-body text-4xl md:text-[3.7rem] font-light text-text mb-4 text-left">Reserva un Taller</h1>
        <p className="text-[1.1rem] font-light text-text-light mb-12 leading-[1.6] text-left">
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>
        
        <ReservationForm />
      </div>
    </main>
  )
}

export default Reservations

