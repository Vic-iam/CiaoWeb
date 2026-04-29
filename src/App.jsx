import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Contactos from "./routers/Contactos";
import Home from "./routers/Home";
import Nosotros from "./routers/Nosotros";
import Procedimientos from "./routers/Procedimientos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Reserva from "./pages/Reserva";
import Admin from "./pages/Admin";
import CalendarioReserva from "./components/calendario/Calendario";
import Error from "./components/ui/error/Error";
import ScrollToTop from "./components/scrollTop/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/procedimientos" element={<Procedimientos />} />
            <Route path="/calendario" element={<CalendarioReserva />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/reservas" element={<Reserva />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
