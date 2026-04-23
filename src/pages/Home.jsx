import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="flex-1 py-24 px-6 md:px-12 max-w-[700px]">
      <h1 className="font-title text-5xl md:text-[4.5rem] font-normal leading-[1.1] text-text mb-6">
        El arte de la paciencia
      </h1>
      <p className="text-[0.95rem] font-light text-text-light leading-[1.7] mb-10 max-w-[420px]">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        Un espacio para reconectar con la naturaleza.
      </p>
      <Link to="/reservas" className="inline-block bg-text text-white px-7 py-3.5 text-[0.9rem] font-normal transition-opacity hover:opacity-80">
        Reserva un taller
      </Link>
    </main>
  )
}

export default Home