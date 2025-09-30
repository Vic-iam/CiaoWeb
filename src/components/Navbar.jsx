import { useState } from 'react'
import style from "./style/Navbar.module.css"
import { Link } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)  
    }

        return (
            <>
                <header className={style.containerHeader}>
                    <nav className={style.containerNav}>
                        <div className={style.titleStyle}>
                            <h1>Ciao</h1><span>Bella</span>
                        </div>
                        <div className={`${style.containerLink} ${isOpen && style.open}`}>

                            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
                            <li><Link to="/procedimientos" onClick={handleLinkClick}>Servicios</Link></li>
                            <li><Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
                            <li><Link to="/contactos" onClick={handleLinkClick}>Contactos</Link></li>

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
            </>
        )
    }


    export default Navbar