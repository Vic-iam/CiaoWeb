'use client'
import style from "./style/Home.module.css"
import SplitText from "../components/SplitText"
import DarkVeil from "../components/Darkveil"
import Cejas from "../assets/eyes-407382_1280.jpg"
import legs from "../assets/hermosas-piernas.jpg"
import manic from "../assets/cosmetic-1471346_1280.jpg"
import { Link } from "react-router-dom"


function Home() {


    const handleAnimationComplete = () => {
    };

    const insideStyles = {
        padding: "20",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "traslate(-50%, -50%)"
    }


    return (
        <>




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

            <div className={style.containerProc}>

                <div className={style.containerDescription}>

                    <div className={style.description}>

                        <div className={style.image}>
                            <img src={Cejas} alt="image" />
                        </div>

                        <h1>Cejas</h1>

                        <p>"Transforma tu estilo con cejas perfectamente diseñadas"</p>

                    </div>

                    <div className={style.description}>

                        <div className={style.image}>
                            <img src={legs} alt="image" />
                        </div>

                        <h1>Depilacion</h1>

                        <p>"La vida no es perfecta, pero tu piel puede serlo"</p>

                    </div>

                    <div className={style.description}>

                        <div className={style.image}>
                            <img src={manic} alt="image" />
                        </div>

                        <h1>Manicura</h1>

                        <p>"Cada uña es una pequeña ventana a tu creatividad"</p>

                    </div>

                </div>

                <div className={style.btn}>
                    <Link className={style.btn1} to="/procedimientos">Ver servicios</Link>
                </div>

            </div>





        </>
    )
}

export default Home;