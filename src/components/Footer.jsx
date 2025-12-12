import styles from "./style/footer.module.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
    <>
      <footer className={styles.footerColumns}>
        <div className={styles.col}>
          <h3>Sobre nosotros</h3>
          <p>Belleza y estilo en cada detalle.</p>
          <p>Ciao Bella</p>
        </div>

        <div className={styles.col}>
          <h3>Enlaces</h3>
          <ul>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Inicio</Link>
            <Link to="/procedimientos" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Servicios</Link>
            <Link to="/nosotros" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Nosotros</Link>
            <Link to="/contactos" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contactos</Link>
            
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Síguenos</h3>
          <a href="https://www.instagram.com/ciaobellaba?igsh=OGw5d29kYnRwMmN6" >Instagram</a> 
          <a href="https://www.tiktok.com/@ciaobellaestetica7?is_from_webapp=1&sender_device=pc">TikTok</a> 
          <a href="https://www.facebook.com/profile.php?id=61582412773854">Facebook</a>
        </div>
      </footer>

      <div className={styles.copy}>
        © 2025 CiaoBella. Todos los derechos reservados.
      </div>
    </>

    );
}

export default Footer;