import GalleryItem from '../components/GalleryItem'

const bonsais = [
  { id: 1, nombre: 'Arce Japonés' },
  { id: 2, nombre: 'Pino Negro' },
  { id: 3, nombre: 'Ficus Retusa' },
  { id: 4, nombre: 'Olmo Chino' },
  { id: 5, nombre: 'Enebro' },
  { id: 6, nombre: 'Azalea' },
]

function Gallery() {
  return (
    <main className="flex-1 py-20 px-6 md:px-12 max-w-[1250px] mx-auto w-full">
      <div className="text-center mb-20">
        <h1 className="font-body text-4xl md:text-[3.7rem] font-light text-text mb-10">Nuestra Colección</h1>
        <p className="text-[1.2rem] font-light text-text-light leading-[1.7] max-w-[650px] mx-auto text-center">
          Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada <br />
          árbol cuenta una historia de tiempo y paciencia.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bonsais.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}

export default Gallery