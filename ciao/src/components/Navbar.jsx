import { BrowserRouter, Link } from 'react-router-dom'
import style from "./Navbar.module.css"

function Navbar() {
    return (
        <>

            <BrowserRouter>

                <nav className={style.containerNav}>
                    <h1>Ciao</h1><span>Bella</span>
                    <div className={style.containerLink}>
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/Procedimientos">Procedimientos</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                    <li><Link to="/Contactos">Contactos</Link></li>
                    </div>
                </nav>

            </BrowserRouter>
        </>
    )
}

export default Navbar