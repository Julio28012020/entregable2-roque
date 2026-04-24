import Hero from '../components/Hero'

function Home() {
  return (
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[1350px] mx-auto w-full">
      <Hero
        title={<>El arte de la <br /> paciencia</>}
        description={<>Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.<br />Un espacio para reconectar con la naturaleza.</>}
        buttonText="Reserva un taller"
        buttonLink="/reservas"
      />
    </main>
  )
}

export default Home