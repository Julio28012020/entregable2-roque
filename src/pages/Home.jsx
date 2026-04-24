import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[1350px] mx-auto w-full">
      <div className="max-w-[700px]">
        <h1 className="font-body text-5xl md:text-[4rem] font-light leading-[1.1] text-text mb-6">
          El arte de la <br />
          paciencia
        </h1>
        <p className="text-[1.15rem] font-light text-text-light leading-[1.7] mb-10 max-w-[650px]">
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.<br />
          Un espacio para reconectar con la naturaleza.
        </p>
        <Link to="/reservas" className="inline-block bg-text text-white rounded px-8 py-4 text-[1.05rem] font-light transition-opacity hover:opacity-80">
          Reserva un taller
        </Link>
      </div>
    </main>
  )
}

export default Home