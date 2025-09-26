'use client'
import Navbar from "../components/Navbar"
import style from "./Home.module.css"
import DarkVeil from "../components/Darkveil"

function Home() {

    return (
        <>

            <Navbar />

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

                <div className={style.content}>
                    <h1>¡Ciao bella! Despierta tu belleza interior en un lugar dedicado a ti.✨</h1>
                    <p>La elegancia es un eco, no un grito.</p>
                </div>
            </div>

        </>
    )
}

export default Home