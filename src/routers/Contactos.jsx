import React from 'react';
import MyMap from '../components/MyMap';
import style from "./style/Contacto.module.css";

function Contactos() {

    const handleAnimationComplete = () => { };

    return (
        <>
            <div className={style.contactoContainer}>


                {/* Contenido principal */}
                <div className={style.content}>
                    <div className={style.titleContacto}>
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
