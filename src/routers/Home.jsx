'use client'
import style from "./style/Home.module.css"
import SplitText from "../components/SplitText"
import DarkVeil from "../components/Darkveil"
import Orb from "../components/Orb"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"

// imágenes
import Cejas from "../assets/eyes-407382_1280.jpg"
import Legs from "../assets/hermosas-piernas.jpg"
import Manic from "../assets/cosmetic-1471346_1280.jpg"

function Home() {
  const handleAnimationComplete = () => {}

  const servicios = [
    {
      img: Cejas,
      titulo: "Cejas",
      desc: "Transforma tu estilo con cejas perfectamente diseñadas",
    },
    {
      img: Legs,
      titulo: "Depilación",
      desc: "La vida no es perfecta, pero tu piel puede serlo",
    },
    {
      img: Manic,
      titulo: "Manicura",
      desc: "Cada uña es una pequeña ventana a tu creatividad",
    },
  ]

  return (
    <div className={style.homeBody}>
      <div className={style.appContainer}>
        <DarkVeil
          className={style.darkveilCanvas}
          hueShift={280}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          scanlineFrequency={4}
          warpAmount={0.03}
          resolutionScale={1}
        />

        <SplitText
          text="¡Ciao bella! Despierta tu belleza interior en un lugar dedicado a ti.✨"
          className={style.content}
          delay={30}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* === Sección de servicios === */}
      <section className={style.containerProc}>
        <div className={style.containerDescription}>
          {servicios.map((s, i) => (
            <div key={i} className={style.description}>
              <div className={style.image}>
                <img src={s.img} alt={s.titulo} />
              </div>
              <h2>{s.titulo}</h2>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <Link to="/procedimientos" className={`${style.btnBase} ${style.btnPrimary}`}>
            Ver servicios
          </Link>
        </div>
      </section>

      {/* === Orb + info === */}
      <div className={style.orbContainer}>
        <Orb hoverIntensity={0} rotateOnHover={true} hue={282} forceHoverState={false} />

        <section className={style.publContainer}>
          <div className={style.publDescription}>
            <div className={style.linea}></div>
            <h2>Visítanos</h2>
            <div>
              <h3>Horario de trabajo</h3>
              <p>Serrano 479, Ciudad Autónoma de Buenos Aires</p>
              <p>Lunes-Viernes: 11 a.m - 8 p.m | Sábado: 10 a.m - 6 p.m</p>
            </div>

            <div>
              <Link to="/contactos" className={`${style.btnBase} ${style.verUbicacion}`}>
                VER UBICACIÓN <FaChevronRight />
              </Link>
            </div>

            <div>
              <h3>Síguenos en nuestras redes</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
