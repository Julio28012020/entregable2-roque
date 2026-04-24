import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Philosophy from './pages/Philosophy'
import Gallery from './pages/Gallery'
import Reservations from './pages/Reservations'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Philosophy />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/reservas" element={<Reservations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
