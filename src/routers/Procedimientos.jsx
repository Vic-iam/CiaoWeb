import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

import style from "./style/Procedimientos.module.css";
import servicios from "../data/servicios.json";

function Procedimientos() {
  const [openId, setOpenId] = useState(null);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [alerta, setAlerta] = useState(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleServicio = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const seleccionarCategoria = (id) => {
    setOpenId(id);

    setTimeout(() => {
      const elemento = document.getElementById(`servicio-${id}`);
      if (!elemento) return;

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

  const reservarServicio = () => {
    if (!servicioSeleccionado) {
      setAlerta("Selecciona un servicio");
      setTimeout(() => setAlerta(null), 3000);

      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      navigate("/calendario", {
        state: { servicio: servicioSeleccionado.nombre },
      });
    }, 500);
  };

  const scrollMenu = (direction) => {
    menuRef.current?.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <section className={style.serviciosBody}>
      <div className={style.menuWrapper}>
        <button
          type="button"
          className={style.scrollBtn}
          onClick={() => scrollMenu("left")}
          aria-label="Ver categorías anteriores"
        >
          <GoTriangleLeft />
        </button>

        <div
          className={style.menuItemContainer}
          ref={menuRef}
          role="group"
          aria-label="Categorías de servicios"
        >
          {servicios.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`${style.menuLink} ${
                openId === item.id ? style.activeMenuLink : ""
              }`}
              onClick={() => seleccionarCategoria(item.id)}
              aria-expanded={openId === item.id}
              aria-controls={`opciones-servicio-${item.id}`}
            >
              {item.nombre}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={style.scrollBtn}
          onClick={() => scrollMenu("right")}
          aria-label="Ver más categorías"
        >
          <GoTriangleRight />
        </button>
      </div>

      <div className={style.serviciosContainer}>
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            id={`servicio-${servicio.id}`}
            className={style.servicioCard}
          >
            <button
              type="button"
              className={style.servicioHeader}
              onClick={() => toggleServicio(servicio.id)}
              aria-expanded={openId === servicio.id}
              aria-controls={`opciones-servicio-${servicio.id}`}
            >
              <h3>{servicio.nombre}</h3>

              <FaChevronRight
                className={`${style.iconArrow} ${
                  openId === servicio.id ? style.open : ""
                }`}
              />
            </button>

            <div
              id={`opciones-servicio-${servicio.id}`}
              className={`${style.content} ${
                openId === servicio.id ? style.openContent : ""
              }`}
              aria-hidden={openId !== servicio.id}
              inert={openId !== servicio.id}
            >
              <div className={style.contentInner}>
                <h2 className={style.contentTitle}>Elegí un servicio:</h2>

                <ul className={style.optionsList}>
                  {servicio.opciones.map((opcion) => {
                    const seleccionado =
                      servicioSeleccionado?.categoriaId === servicio.id &&
                      servicioSeleccionado.nombre === opcion;

                    return (
                      <li key={opcion}>
                        <button
                          type="button"
                          onClick={() => {
                            setServicioSeleccionado({
                              categoriaId: servicio.id,
                              categoria: servicio.nombre,
                              nombre: opcion,
                            });
                            setAlerta(null);
                          }}
                          className={`${style.optionItem} ${
                            seleccionado ? style.selectedOption : ""
                          }`}
                          aria-pressed={seleccionado}
                        >
                          {opcion}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {servicioSeleccionado && (
        <p className={style.selectionSummary} aria-live="polite">
          {servicioSeleccionado.categoria}:{" "}
          <strong>{servicioSeleccionado.nombre}</strong>
        </p>
      )}

      <button
        type="button"
        onClick={reservarServicio}
        className={style.btnReservarFloat}
      >
        Reservar turno
      </button>

      {alerta && (
        <div className={style.toast} role="status" aria-live="polite">
          {alerta}
        </div>
      )}
    </section>
  );
}

export default Procedimientos;
