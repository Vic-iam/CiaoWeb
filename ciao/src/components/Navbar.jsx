import { BrowserRouter, Link } from 'react-router-dom'
import { useState } from 'react'
import style from "./Navbar.module.css"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <BrowserRouter>
                <header className={style.containerHeader}>
                    <nav className={style.containerNav}>
                        <div className={style.titleStyle}>
                            <h1>Ciao</h1><span>Bella</span>
                        </div>
                        <div className={`${style.containerLink} ${isOpen && style.open}`}>
                            <li><Link to="/Home">Inicio</Link></li>
                            <li><Link to="/Procedimientos">Procedimientos</Link></li>
                            <li><Link to="/Nosotros">Nosotros</Link></li>
                            <li><Link to="/Contactos">Contactos</Link></li>
                            <div className={style.titleToggle}>
                                <p>CiaoBella</p>
                            </div>
                        </div>

                        <div className={`${style.itemToggle} ${isOpen && style.open}`} onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </header>
            </BrowserRouter>
        </>
    )
}

export default Navbar