'use client'
import Navbar from "../components/Navbar"
import "./Home.module.css"
import DarkVeil from "../components/Darkveil"

function Home() {
    return (
        <>

            <Navbar />

            <div className="app-container">
                <DarkVeil
                    hueShift={280}        // ~280° en el círculo de color = púrpura
                    noiseIntensity={0.05} // un poco de ruido
                    scanlineIntensity={0.1}
                    scanlineFrequency={4}
                    warpAmount={0.03}
                    resolutionScale={1}
                />

                <div className="content">
                    <h1>Ciao bella, tu estilo es la obra de arte que te define.✨</h1>
                    <p>Sé valiente. Sé audaz. Sé simplemente hermosa.</p>
                </div>
            </div>


        </>
    )
}

export default Home