import styles from "./style/Footer.module.css"

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
            <li><a href="/procedimientos">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Síguenos</h3>
          <a href="https://www.instagram.com/ciaobellaba?igsh=OGw5d29kYnRwMmN6">Instagram</a> |{" "}
          <a href="https://www.tiktok.com/@ciaobellaestetica7?is_from_webapp=1&sender_device=pc">TikTok</a> |{" "}
          <a href="">Facebook</a>
        </div>
      </footer>

      <div className={styles.copy}>
        © 2025 CiaoBella. Todos los derechos reservados.
      </div>
    </>

    );
}

export default Footer;