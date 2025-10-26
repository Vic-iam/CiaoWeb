import React from 'react';
import MyMap from '../components/MyMap';
import style from "./style/Contacto.module.css";
import SplitText from "../components/SplitText";
import Orb from "../components/Orb";

function Contactos() {

    const handleAnimationComplete = () => { };

    return (
        <>
            <div className={style.contactoContainer}>

                {/* Orb de fondo */}
                <div className={style.orbBackground}>
                    <Orb hoverIntensity={0} rotateOnHover={true} hue={282} forceHoverState={false} />
                </div>

                {/* Contenido principal */}
                <div className={style.content}>
                    <div className={style.titleContacto}>
                        <SplitText
                            text="Contactos"
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

                    <div className={style.contactoText}>
                        <p>
                            "En CiaoBella nos encanta cuidar de tu belleza y bienestar.
                            Si tenés dudas, consultas o querés agendar tu visita, no dudes en contactarnos.
                            ¡Estamos para ayudarte a sentirte y verte increíble!"
                        </p>
                    </div>

                    <div className={style.cardContainer}>
                        <div className={style.card1}>
                            <h2>Teléfono:</h2>
                            <p>+54 9 11 2392-4974</p>
                        </div>

                        <div className={style.card2}>
                            <h2>Horario laboral:</h2>
                            <div className={style.horarioLista}>
                                <div>Lunes:</div><div>10:00 - 20:00</div>
                                <div>Martes:</div><div>10:00 - 20:00</div>
                                <div>Miércoles:</div><div>10:00 - 20:00</div>
                                <div>Jueves:</div><div>10:00 - 20:00</div>
                                <div>Viernes:</div><div>10:00 - 20:00</div>
                                <div>Sábado:</div><div>11:00 - 20:00</div>
                            </div>
                        </div>

                        <div className={style.card3}>
                            <h2>Dirección:</h2>
                            <p>Serrano 479, C1414DEI Cdad. Autónoma de Buenos Aires</p>
                        </div>
                    </div>
                </div>
            </div>

            <MyMap />
        </>
    );
}

export default Contactos;
