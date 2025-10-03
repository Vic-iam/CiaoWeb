import React, { useState } from 'react'
import style from "./style/Procedimientos.module.css"
import { FaChevronRight } from "react-icons/fa"
import DarkVeil from '../components/Darkveil'

function Procedimientos() {
    

    const servicios = [
        {
            id: 1,
            nombre: "Bellezas de pie",
            opciones: [
                { nombre: "Bellezas de pies esmaltado común" 
                },
                { nombre: "Bellezas de pies esmaltado semipermanente" },
                { nombre: "Bellezas de pies esmaltado semipermanente french" },
                { nombre: "Bellezas de pies sin esmaltado" },
            ],
        },
        {
            id: 2,
            nombre: "Cejas",
            opciones: [
                { nombre: "Diseño + perfilado + henna" }
            ]
        }
    ]


    return (
        <>
        </>
    )
}

export default Procedimientos
