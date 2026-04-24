function GalleryItem({ nombre }) {
  return (
    <div className="bg-[#fcfbf9] border border-border aspect-square flex items-center justify-center shadow-sm">
      <p className="text-[0.9rem] font-normal text-text text-center px-4">{nombre}</p>
    </div>
  )
}

export default GalleryItem

