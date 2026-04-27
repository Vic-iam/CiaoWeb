import React from 'react';
import style from "./style/Nosotros.module.css";
import { FaStar, FaHeart   } from "react-icons/fa"
import { LuLeafyGreen } from "react-icons/lu";
import { GiLipstick } from "react-icons/gi";


function Nosotros() {

    const handleAnimationComplete = () => { };

    return (
        <div className={style.nosotrosContainer}>

            {/* Contenido principal */}
            <div className={style.content}>
                {/* Título animado */}
                <div className={style.titleNosotros}>

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
                        <div className={style.titleTextDiferente}>¿Qué nos hace diferentes?</div>
                        <ul className={style.emojis}>
                            <li><FaHeart /> Atención cercana y personalizada</li>
                            <li><GiLipstick /> Amplia variedad de tratamientos para rostro, cuerpo, manos y pies.</li>
                            <li><LuLeafyGreen /> Productos profesionales de máxima calidad.</li>
                            <li><FaStar /> Un ambiente cálido donde te vas sintiendo mejor de lo que llegaste.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;
