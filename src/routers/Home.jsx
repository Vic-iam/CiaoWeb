'use client'
import style from "./style/Home.module.css"
import SplitText from "../components/SplitText"
import DarkVeil from "../components/Darkveil"
import Orb from "../components/Orb"
import { Link } from "react-router-dom"
import { FaChevronRight, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa"

import Cejas from "../assets/eyes-407382_1280.jpg"
import Legs from "../assets/hermosas-piernas.jpg"
import Manic from "../assets/cosmetic-1471346_1280.jpg"

function Home() {
    const handleAnimationComplete = () => { }

    const serviciosHome = [
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
                    {serviciosHome.map((s, i) => (
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
                            <p>Lunes-Viernes: 11 a.m - 8 p.m | Sábado: 10 a.m - 8 p.m</p>
                        </div>

                        <div>
                            <Link to="/contactos" className={`${style.btnBase} ${style.verUbicacion}`}>
                                VER UBICACIÓN <FaChevronRight />
                            </Link>
                        </div>
                        <div className={style.socialLinks}>
                            <h3>Síguenos en nuestras redes</h3>
                            <div className={style.icons}>
                                <a href="https://www.instagram.com/ciaobellaba?igsh=OGw5d29kYnRwMmN6" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.tiktok.com/@ciaobellaestetica7?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok />
                                </a>
                                <a href="https://www.facebook.com/tusuario" target="_blank" rel="noopener noreferrer">
                                     <FaFacebook />
                                </a>
                            </div>
                        </div>
                        <p>Amarse a uno mismo es el comienzo de un romance para toda la vida</p>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default Home
