const bonsais = [
  { id: 1, nombre: 'Arce Japonés' },
  { id: 2, nombre: 'Pino Negro' },
  { id: 3, nombre: 'Ficus Retusa' },
  { id: 4, nombre: 'Olmo Chino' },
]

function Gallery() {
  return (
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[800px] mx-auto w-full text-center">
      <h1 className="font-title text-4xl md:text-[3.5rem] font-normal text-text mb-4">Nuestra Colección</h1>
      <p className="text-[0.9rem] font-light text-text-light leading-[1.7] mb-12 max-w-[500px] mx-auto">
        Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada
        árbol cuenta una historia de tiempo y paciencia.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {bonsais.map((item) => (
          <div key={item.id} className="bg-white border border-border flex flex-col">
            <div className="w-full aspect-[3/4] bg-[#e8e6e0]"></div>
            <p className="p-3 pb-4 text-[0.85rem] font-normal text-text text-left">{item.nombre}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Gallery