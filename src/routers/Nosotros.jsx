import React from 'react';
import style from "./style/nosotros.module.css";
import SplitText from "../components/SplitText";
import Orb from "../components/Orb";

function Nosotros() {

    const handleAnimationComplete = () => { };

    return (
        <div className={style.nosotrosContainer}>
            
            {/* Orb de fondo */}
            <div className={style.orbBackground}>
                <Orb hoverIntensity={0} rotateOnHover={true} hue={282} forceHoverState={false} />
            </div>

            {/* Contenido principal */}
            <div className={style.content}>
                {/* Título animado */}
                <div className={style.titleNosotros}>
                    <SplitText
                        text="¡Sobre nosotros!"
                        className={style.contentText}
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

                {/* Texto principal */}
                <div className={style.nosotrosText}>
                    <div className={style.titleText}>CiaoBella nació con un propósito:</div>
                    <p>
                        Realzar la belleza que cada persona lleva dentro. Somos una estética comprometida
                        con brindar experiencias únicas de cuidado personal, combinando profesionalismo,
                        calidez humana y las últimas tendencias en tratamientos de belleza.
                        Creemos que cuidarse no es un lujo, sino una forma de amor propio. Por eso,
                        ofrecemos un espacio cómodo y relajante donde cada visita se convierte en un momento especial para vos.
                    </p>

                    <div className={style.titleText}>Nuestra Misión:</div>
                    <p>
                        Brindar servicios estéticos de alta calidad, personalizados para cada cliente,
                        utilizando productos profesionales y técnicas seguras e innovadoras.
                    </p>

                    <div className={style.titleText}>Nuestra Visión:</div>
                    <p>
                        Ser la estética de referencia en nuestra comunidad, reconocida no solo por nuestros resultados,
                        sino por la confianza y conexión que generamos con cada persona que nos elige.
                    </p>

                    {/* Diferenciales */}
                    <div className={style.diferente}>
                        <div className={style.titleText}>¿Qué nos hace diferentes?</div>
                        <ul className={style.emojis}>
                            <li>🤍 Atención cercana y personalizada</li>
                            <li>💄 Amplia variedad de tratamientos para rostro, cuerpo, manos y pies.</li>
                            <li>🌿 Productos profesionales de máxima calidad.</li>
                            <li>✨ Un ambiente cálido donde te vas sintiendo mejor de lo que llegaste.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;
