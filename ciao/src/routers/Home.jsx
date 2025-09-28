'use client'
import style from "./style/Home.module.css"
import SplitText from "../components/SplitText"
import DarkVeil from "../components/Darkveil"

function Home() {


    const handleAnimationComplete = () => {
    };

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

            <h2>Hola</h2>

        </>
    )
}

export default Home