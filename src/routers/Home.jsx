import { useState, useEffect } from "react";
import style from "./style/Home.module.css";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { LuLeafyGreen } from "react-icons/lu";
import { useReveal } from "../components/ui/usereveal/UseReveal";
import Loading from "../components/ui/loading/Loading"; 

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useReveal();

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className={style.homeBody}>
          <section
            data-reveal
            className={`${style.hero} ${style.reveal} ${style.fadeUp}`}
          >
            <div className={style.heroIndex}>
              <h1>Realza tu belleza natural</h1>
              <p>
                Tratamientos estéticos profesionales con resultados visibles desde la
                primera sesión.
              </p>
              <div className={style.heroButtons}>
                <Link to="/procedimientos" className={style.btnPrimary}>
                  Ver servicios <FaChevronRight />
                </Link>

                <Link to="/" className={style.btnSecondary}>
                  Reservar cita
                </Link>
              </div>
            </div>
          </section>

          <section
            data-reveal
            className={`${style.reveal} ${style.fadeUp}`}
          >
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

          <section
            data-reveal
            className={`${style.benefits} ${style.reveal} ${style.fadeUp}`}
          >
            <h3>¿Por qué elegirnos?</h3>

            <div className={style.benefitList}>
              <p>° Atención personalizada</p>
              <p>° Productos de alta calidad</p>
              <p>° Profesionales certificados</p>
            </div>
          </section>

          <section className={style.testimonials}>
            <h4>Lo que dicen nuestras clientas</h4>

            <div className={style.testimonialCard}>
              <p>“Increíble atención y resultados. Volvería sin dudarlo.”</p>
              <span>- María</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
