import React, { useState } from 'react'
import style from "./style/Procedimientos.module.css"
import { FaChevronRight } from "react-icons/fa"
import DarkVeil from '../components/Darkveil'
import servicios from "../data/servicios.json"

function Procedimientos() {

    const [openId, setOpenId] = useState(null)

    const toggleServicio = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className={style.serviciosBody}>

            <div className={style.serviciosContainer}>

                <div className={style.titleContainer}>
                    <h2>Nuestros servicios</h2>
                </div>

                {servicios.map(servicio => (

                    <div key={servicio.id} className={style.styleServis}>

                        <div className={style.servicioHeader} onClick={() => toggleServicio(servicio.id)}>

                            <h3 className={style.styleNombre}> {servicio.nombre}</h3>

                            <FaChevronRight className={`${style.iconArrow} ${openId === servicio.id ? style.open : ""}`} />

                        </div>

                        {openId === servicio.id && (

                            <div className={`${style.content} ${openId === servicio.id ? style.openContent : ""}`}> 

                                <ul>

                                    {servicio.opciones.map((otp, index) => (

                                        <div className={style.styleOptions}>

                                            <li key={index}>

                                                {otp}

                                                <button onClick={() => pedirTurno(otp)} className={style.btn}>Pedir turno</button>

                                            </li>

                                        </div>
                                        
                                    ))}

                                </ul>

                            </div>

                        )}
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Procedimientos
