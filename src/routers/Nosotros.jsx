import style from "./style/Nosotros.module.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { LuLeafyGreen } from "react-icons/lu";
import { GiLipstick } from "react-icons/gi";
import Loading from "../components/ui/loading/Loading";
import { useState, useEffect } from "react";

function Nosotros() {
  const [isLoading, setIsLoading] = useState(true);

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
        <section className={style.nosotrosContainer}>
          <div className={style.header}>
            <h1>Sobre Nosotros</h1>
            <p>
              En CiaoBella trabajamos para resaltar tu belleza natural con
              profesionalismo, dedicación y calidez.
            </p>
          </div>

          <div className={style.section}>
            <h2>CiaoBella nació con un propósito</h2>
            <p>
              Realzar la belleza que cada persona lleva dentro. Somos una
              estética comprometida con brindar experiencias únicas de cuidado
              personal, combinando profesionalismo, calidez humana y las últimas
              tendencias en tratamientos de belleza.
            </p>
            <p>
              Creemos que cuidarse no es un lujo, sino una forma de amor propio.
              Por eso, ofrecemos un espacio cómodo y relajante donde cada visita
              se convierte en un momento especial para vos.
            </p>
          </div>

          <div className={style.gridSection}>
            <div className={style.card}>
              <h2>Nuestra Misión</h2>
              <p>
                Brindar servicios estéticos de alta calidad, personalizados para
                cada cliente, utilizando productos profesionales y técnicas
                seguras e innovadoras.
              </p>
            </div>

            <div className={style.card}>
              <h2>Nuestra Visión</h2>
              <p>
                Ser la estética de referencia en nuestra comunidad, reconocida
                por nuestros resultados y la confianza que generamos con cada
                persona.
              </p>
            </div>
          </div>

          <div className={style.section}>
            <h2>¿Qué nos hace diferentes?</h2>

            <ul className={style.features}>
              <li>
                <FaHeart className={style.icon} />
                Atención cercana y personalizada
              </li>

              <li>
                <GiLipstick className={style.icon} />
                Amplia variedad de tratamientos para rostro, cuerpo, manos y
                pies
              </li>

              <li>
                <LuLeafyGreen className={style.icon} />
                Productos profesionales de máxima calidad
              </li>

              <li>
                <FaStar className={style.icon} />
                Un ambiente cálido donde te sentís mejor de lo que llegaste
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default Nosotros;
