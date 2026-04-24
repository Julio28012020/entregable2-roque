import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Philosophy from '../pages/Philosophy'
import Gallery from '../pages/Gallery'
import Reservations from '../pages/Reservations'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filosofia" element={<Philosophy />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/reservas" element={<Reservations />} />
    </Routes>
  )
}

export default AppRoutes
