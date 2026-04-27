import { useState, useRef, useMemo } from "react";
import style from "./style/Procedimientos.module.css";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import servicios from "../data/Servicios.json";

function Procedimientos() {
  const [openIds, setOpenIds] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [alerta, setAlerta] = useState(null);

  const menuRef = useRef(null);

  const toggleServicio = (id) => {
    const elemento = document.getElementById(`servicio-${id}`);
    if (!elemento) return;

    if (openIds.includes(id)) {
      setOpenIds([]);
      return;
    }

    if (openIds.length > 0) {
      setOpenIds([]);
      setTimeout(() => abrirYDesplazar(id, elemento), 150);
    } else {
      abrirYDesplazar(id, elemento);
    }
  };

  const abrirYDesplazar = (id, elemento) => {
    setOpenIds([id]);

    const esMovil = window.innerWidth <= 768;
    const menuAltura = menuRef.current?.offsetHeight || 0;
    const offsetExtra = esMovil ? 160 : 80;

    setTimeout(() => {
      const posicion =
        elemento.getBoundingClientRect().top +
        window.scrollY -
        menuAltura -
        offsetExtra;
      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    }, 250);
  };

  const toggleSeleccion = (opcion) => {
    if (seleccionados.includes(opcion)) {
      setSeleccionados(seleccionados.filter((item) => item !== opcion));
    } else {
      setSeleccionados([...seleccionados, opcion]);
    }
  };

  const mostrarAlerta = (mensaje) => {
    setAlerta(mensaje);
    setTimeout(() => setAlerta(null), 3000);
  };

  const enviarWhatsApp = () => {
    if (seleccionados.length === 0)
      return mostrarAlerta("Selecciona al menos un servicio");
    const numero = "5491123924974";
    const mensaje = encodeURIComponent(
      `Hola, quiero pedir turno para: ${seleccionados.join(", ")}`,
    );
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
  };

  const scroll = (direction) => {
    if (menuRef.current) {
      menuRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const handleAnimationComplete = () => {};

  return (
    <div className={style.serviciosBody}>
      <div className={style.serviciosContainer}>
        <div className={style.menuWrapper}>
          <button className={style.scrollBtn} onClick={() => scroll("left")}>
            ◀
          </button>

          <div className={style.menuItemContainer} ref={menuRef}>
            {servicios.map((item) => (
              <span
                key={item.id}
                className={style.menuLink}
                onClick={() => toggleServicio(item.id)}
              >
                {item.nombre}
              </span>
            ))}
          </div>

          <button className={style.scrollBtn} onClick={() => scroll("right")}>
            ▶
          </button>
        </div>


        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className={style.styleServis}
            id={`servicio-${servicio.id}`}
          >
            <div
              className={style.servicioHeader}
              onClick={() => toggleServicio(servicio.id)}
            >
              <h3 className={style.styleNombre}>{servicio.nombre}</h3>
              <FaChevronRight
                className={`${style.iconArrow} ${openIds.includes(servicio.id) ? style.open : ""}`}
              />
            </div>

            <div
              className={`${style.content} ${openIds.includes(servicio.id) ? style.openContent : ""}`}
            >
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
      </div>

      <button onClick={enviarWhatsApp} className={style.btnWhatsAppFloat}>
        <FaWhatsapp />
      </button>

      {alerta && <div className={style.toast}>{alerta}</div>}
    </div>
  );
}

export default Procedimientos;
