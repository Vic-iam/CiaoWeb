import { useState, useEffect } from "react";
import style from "./style/Home.module.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaStar, FaHeart } from "react-icons/fa";
import { LuLeafyGreen } from "react-icons/lu";
import Loading from "../components/ui/loading/Loading";
import face from "../assets/face.jpg";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading text="...Cargando" />
      ) : (
        <div className={style.homeBody}>
          <section data-reveal className={style.hero}>
            <div className={style.heroIndex}>
              <h1>Realza tu belleza natural</h1>
              <p>
                Tratamientos estéticos profesionales con resultados visibles
                desde la primera sesión.
              </p>
              <div className={style.heroButtons}>
                <Link
                  to="/procedimientos"
                  onClick={handleLinkClick}
                  className={style.btnPrimary}
                >
                  Ver servicios <FaChevronRight />
                </Link>

                <Link
                  to="/Calendario"
                  onClick={handleLinkClick}
                  className={style.btnSecondary}
                >
                  Reservar cita
                </Link>
              </div>
            </div>
          </section>

          <section className={style.reveal}>
            <h2>Servicios destacados</h2>

            <div className={style.cards}>
              <div className={style.card}>
                <LuLeafyGreen size={28} />
                <h3>Limpieza facial</h3>
                <p>Renová tu piel con tratamientos profundos.</p>
              </div>

              <div className={style.card}>
                <FaHeart size={28} />
                <h3>Rejuvenecimiento</h3>
                <p>Mejorá la firmeza y luminosidad.</p>
              </div>

              <div className={style.card}>
                <FaStar size={28} />
                <h3>Tratamientos premium</h3>
                <p>Resultados visibles y personalizados.</p>
              </div>
            </div>
          </section>

          <section className={style.benefits}>
            <h3>¿Por qué elegirnos?</h3>

            <div className={style.benefitList}>
              <p>Atención personalizada</p>
              <p>Productos de alta calidad</p>
              <p>Profesionales certificados</p>
            </div>
          </section>

          <section className={style.testimonials}>
            <div className={style.testimonialsCard}>
              <div className={style.testimonialsText}>
                <h4>Nuestros resultados</h4>
                <p>
                  Descubrí la transformación de nuestras clientas con
                  tratamientos personalizados y resultados visibles.
                </p>
              </div>

              <div className={style.testimonialImg}>
                <img src={face} alt="Resultados estéticos" />
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
