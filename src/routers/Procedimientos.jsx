import { useState, useRef, useMemo } from 'react';
import style from "./style/Procedimientos.module.css";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import servicios from "../data/servicios.json";
import SplitText from "../components/SplitText";

function Procedimientos() {
    const [openIds, setOpenIds] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);
    const [alerta, setAlerta] = useState(null);

    const menuRef = useRef(null);

    // 🌀 Función para abrir/cerrar servicios manualmente (acordeón)
    const toggleServicio = (id) => {
        if (openIds.includes(id)) {
            setOpenIds([]);
        } else {
            setOpenIds([id]);
        }
    };

    // 🎯 Al seleccionar un servicio desde el menú superior
    const irAlServicio = (id) => {
        const elemento = document.getElementById(`servicio-${id}`);
        if (!elemento) return;

        // Abrir/cerrar acordeón
        if (openIds.includes(id)) {
            setOpenIds([]);
        } else {
            setOpenIds([id]);
        }

        // Altura del menú sticky
        const menuAltura = menuRef.current?.offsetHeight || 0;

        // Margen extra dinámico según tamaño de pantalla
        const esMovil = window.innerWidth <= 768;
        const offsetExtra = Math.round(menuAltura * 0.9); 

        // Posición de destino: offsetTop es más fiable que getBoundingClientRect()
        const posicion = elemento.offsetTop - menuAltura - offsetExtra;

        // Scroll suave
        window.scrollTo({
            top: posicion,
            behavior: "smooth"
        });
    };

    // 🟢 Selección de servicios individuales
    const toggleSeleccion = (opcion) => {
        if (seleccionados.includes(opcion)) {
            setSeleccionados(seleccionados.filter(item => item !== opcion));
        } else {
            setSeleccionados([...seleccionados, opcion]);
        }
    };

    // ⚠️ Alerta visual temporal
    const mostrarAlerta = (mensaje) => {
        setAlerta(mensaje);
        setTimeout(() => setAlerta(null), 3000);
    };

    // 💬 Enviar WhatsApp con los servicios seleccionados
    const enviarWhatsApp = () => {
        if (seleccionados.length === 0) return mostrarAlerta("Selecciona al menos un servicio");
        const numero = "1133973900";
        const mensaje = encodeURIComponent(`Hola, quiero pedir turno para: ${seleccionados.join(", ")}`);
        window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
    };

    // ↔️ Scroll lateral del menú
    const scroll = (direction) => {
        if (menuRef.current) {
            menuRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth"
            });
        }
    };

    // 🧩 Animación del título
    const handleAnimationComplete = () => {
    };

    const tituloAnimado = useMemo(() => (
        <SplitText
            text="Nuestros Servicios"
            className={style.titleContainer}
            delay={100}
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
    ), []);

    return (
        <div className={style.serviciosBody}>

            <div className={style.serviciosContainer}>

                {/* 🟣 Menú Sticky */}
                <div className={style.menuWrapper}>
                    <button className={style.scrollBtn} onClick={() => scroll("left")}>◀</button>

                    <div className={style.menuItemContainer} ref={menuRef}>
                        {servicios.map((item) => (
                            <span
                                key={item.id}
                                className={style.menuLink}
                                onClick={() => irAlServicio(item.id)}
                            >
                                {item.nombre}
                            </span>
                        ))}
                    </div>

                    <button className={style.scrollBtn} onClick={() => scroll("right")}>▶</button>
                </div>


                {/* 🧠 Título animado (no se reinicia) */}
                <div className={style.titleContainer}>
                    {tituloAnimado}
                </div>

                {/* 🧾 Lista de servicios */}
                {servicios.map(servicio => (
                    <div key={servicio.id} className={style.styleServis} id={`servicio-${servicio.id}`}>
                        <div
                            className={style.servicioHeader}
                            onClick={() => toggleServicio(servicio.id)}
                        >
                            <h3 className={style.styleNombre}>{servicio.nombre}</h3>
                            <FaChevronRight className={`${style.iconArrow} ${openIds.includes(servicio.id) ? style.open : ""}`} />
                        </div>

                        <div className={`${style.content} ${openIds.includes(servicio.id) ? style.openContent : ""}`}>
                            <ul>
                                <h2 className={style.contentTitle}>Elige un servicio:</h2>
                                {servicio.opciones.map((otp, index) => (
                                    <li
                                        key={index}
                                        className={`${style.styleOptions} ${seleccionados.includes(otp) ? style.selectedOption : ""}`}
                                        onClick={() => toggleSeleccion(otp)}
                                    >
                                        <span>{otp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {/* 📱 Botón flotante de WhatsApp */}
                <button onClick={enviarWhatsApp} className={style.btnWhatsAppFloat}>
                    <FaWhatsapp />
                </button>

                {/* ⚠️ Toast de alerta */}
                {alerta && <div className={style.toast}>{alerta}</div>}
            </div>
        </div>
    );
}

export default Procedimientos;
