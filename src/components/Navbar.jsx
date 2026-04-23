import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 bg-bg">
      <Link to="/" className="font-body text-[0.9rem] font-bold tracking-[0.15em] uppercase text-text">Zenith Bonsai</Link>
      <ul className="flex gap-6 md:gap-10 list-none">
        <li>
          <NavLink 
            to="/filosofia" 
            className={({ isActive }) => `text-[0.9rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'underline underline-offset-4' : ''}`}
          >
            Filosofía
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/galeria" 
            className={({ isActive }) => `text-[0.9rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'underline underline-offset-4' : ''}`}
          >
            Galería
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/reservas" 
            className={({ isActive }) => `text-[0.9rem] font-normal text-text transition-opacity hover:opacity-60 ${isActive ? 'underline underline-offset-4' : ''}`}
          >
            Reservas
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
