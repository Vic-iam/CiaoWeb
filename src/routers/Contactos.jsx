import React from 'react'
import MyMap from '../components/MyMap';
import style from "./style/Contacto.module.css"

function Contactos() {
    return (

        <>

            <div className={style.contactoContainer}>

                <div className={style.titleContacto}>
                    <h2>Contacto</h2>
                </div>

                <div className={style.contactoText}>
                    <p>"En CiaoBella nos encanta cuidar de tu belleza y bienestar. Si tenés dudas, consultas o querés agendar tu visita, no dudes en contactarnos. ¡Estamos para ayudarte a sentirte y verte increíble!"</p>
                </div>

                <div className={style.cardContainer}>
                    <div className={style.card1}>
                        <h2>Telefono:</h2>
                        <p>+54 9 11 2392-4974</p>
                    </div>
                    <div className={style.card2}>
                        <h2>Horario laboral:</h2>
                        <ul>
                            <li>Lunes 10:00 - 20:00</li>
                            <li>Martes 10:00 - 20:00</li>
                            <li>Miercoles 10:00 - 20:00</li>
                            <li>Jueves 10:00 - 20:00</li>
                            <li>Viernes 10:00 - 20:00</li>
                            <li>Viernes 11:00 - 20:00</li>
                        </ul>
                    </div>
                    <div className={style.card3}>
                        <h2>Direccion:</h2>
                        <p>
                            Serrano 479, C1414DEI Cdad. Autónoma de Buenos Aires</p>
                    </div>
                </div>

            </div>


            <MyMap />
        </>



    )
}

export default Contactos;