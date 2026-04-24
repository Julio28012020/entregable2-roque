import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full bg-[#fcfbf9] border-b border-border">
      <nav className="flex items-center justify-between px-6 py-11 md:px-12 max-w-[1350px] mx-auto w-full">
        <Link to="/" className="font-body text-[1.25rem] font-bold tracking-[0.15em] uppercase text-text">Zenith Bonsai</Link>
        <ul className="flex gap-6 md:gap-12 list-none">
          <li>
            <NavLink
              to="/filosofia"
              className={({ isActive }) => `text-[1rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'opacity-50 underline underline-offset-4' : ''}`}
            >
              Filosofía
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galeria"
              className={({ isActive }) => `text-[1rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'opacity-50 underline underline-offset-4' : ''}`}
            >
              Galería
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservas"
              className={({ isActive }) => `text-[1rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'opacity-50 underline underline-offset-4' : ''}`}
            >
              Reservas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
