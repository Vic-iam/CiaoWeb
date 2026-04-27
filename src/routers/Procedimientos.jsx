import { useState, useRef } from "react";
import style from "./style/Procedimientos.module.css";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import servicios from "../data/servicios.json";

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

    setOpenIds([id]);

    setTimeout(() => {
      const menuAltura = menuRef.current?.offsetHeight || 0;
      const posicion =
        elemento.getBoundingClientRect().top +
        window.scrollY -
        menuAltura -
        100;

      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    }, 250);
  };

  const toggleSeleccion = (opcion) => {
    setSeleccionados((prev) =>
      prev.includes(opcion)
        ? prev.filter((item) => item !== opcion)
        : [...prev, opcion]
    );
  };

  const enviarWhatsApp = () => {
    if (seleccionados.length === 0) {
      setAlerta("Selecciona al menos un servicio");
      setTimeout(() => setAlerta(null), 3000);
      return;
    }

    const numero = "5491123924974";
    const mensaje = encodeURIComponent(
      `Hola, quiero pedir turno para: ${seleccionados.join(", ")}`
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

  return (
    <section className={style.serviciosBody}>
      
      {/* MENÚ SUPERIOR */}
      <div className={style.menuWrapper}>
        <button className={style.scrollBtn} onClick={() => scroll("left")}>
          ◀
        </button>

        <div className={style.menuItemContainer} ref={menuRef}>
          {servicios.map((item) => (
            <button
              key={item.id}
              className={style.menuLink}
              onClick={() => toggleServicio(item.id)}
            >
              {item.nombre}
            </button>
          ))}
        </div>

        <button className={style.scrollBtn} onClick={() => scroll("right")}>
          ▶
        </button>
      </div>

      {/* SERVICIOS */}
      <div className={style.serviciosContainer}>
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className={style.servicioCard}
            id={`servicio-${servicio.id}`}
          >
            <div
              className={style.servicioHeader}
              onClick={() => toggleServicio(servicio.id)}
            >
              <h3>{servicio.nombre}</h3>

              <FaChevronRight
                className={`${style.iconArrow} ${
                  openIds.includes(servicio.id) ? style.open : ""
                }`}
              />
            </div>

            <div
              className={`${style.content} ${
                openIds.includes(servicio.id) ? style.openContent : ""
              }`}
            >
              <h2 className={style.contentTitle}>Elegí un servicio:</h2>

              <ul className={style.optionsList}>
                {servicio.opciones.map((opcion, index) => (
                  <li
                    key={index}
                    className={`${style.optionItem} ${
                      seleccionados.includes(opcion) ? style.selectedOption : ""
                    }`}
                    onClick={() => toggleSeleccion(opcion)}
                  >
                    {opcion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN WHATSAPP */}
      <button onClick={enviarWhatsApp} className={style.btnWhatsAppFloat}>
        <FaWhatsapp />
      </button>

      {/* ALERTA */}
      {alerta && <div className={style.toast}>{alerta}</div>}
    </section>
  );
}

export default Procedimientos;
