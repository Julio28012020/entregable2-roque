import { Link } from 'react-router-dom'

function Hero({ title, description, buttonText, buttonLink }) {
  return (
    <section className="max-w-[700px]">
      <h1 className="font-body text-5xl md:text-[4rem] font-light leading-[1.1] text-text mb-6">
        {title}
      </h1>
      <p className="text-[1.15rem] font-light text-text-light leading-[1.7] mb-10 max-w-[650px]">
        {description}
      </p>
      {buttonText && buttonLink && (
        <Link 
          to={buttonLink} 
          className="inline-block bg-text text-white rounded px-8 py-4 text-[1.05rem] font-light transition-opacity hover:opacity-80"
        >
          {buttonText}
        </Link>
      )}
    </section>
  )
}

export default Hero

