import { useState, useEffect, useRef } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const activeClass = ({ isActive }) =>
  isActive ? style.activeLink : "";

  return (
    <header
      className={`${style.Header} ${!showNavbar ? style.hide : ""}`}
    >
      <nav className={style.Nav}>
        
        <div className={style.logo}>
          <span className={style.ciao}>CIAO</span>
          <span className={style.bella}>BELLA</span>
        </div>

        <div className={ `${style.containerLink} ${isOpen ? style.open : ""}` }
        ref={menuRef}>
          <ul className={style.link}>
            <li>
              <NavLink to="/" className={activeClass} onClick={handleLinkClick}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/procedimientos" className={activeClass} onClick={handleLinkClick}>
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={activeClass} onClick={handleLinkClick}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactos" className={activeClass} onClick={handleLinkClick}>
                Contactos
              </NavLink>
            </li>

            <li className={style.dateP}>
              <NavLink to="/" onClick={handleLinkClick}>
                Reservar cita
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className={style.itemToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
