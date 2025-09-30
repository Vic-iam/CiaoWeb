import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contactos from './routers/Contactos'
import Home from './routers/Home'
import Nosotros from './routers/Nosotros'
import Procedimientos from './routers/Procedimientos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
