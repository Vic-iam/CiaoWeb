import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contactos from './router/Contactos'
import Home from './router/Home'
import Nosotros from './router/Nosotros'
import Procedimientos from './router/Procedimientos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'; 
import Reserva from './pages/Reserva'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/procedimientos' element={<Procedimientos />} />
          <Route path='/contactos' element={<Contactos />} />
          <Route path='/reservas' element={<Reserva />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
