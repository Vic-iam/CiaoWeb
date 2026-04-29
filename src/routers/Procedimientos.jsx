import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

import style from "./style/Procedimientos.module.css";
import servicios from "../data/servicios.json";
import Loading from "../components/ui/loading/Loading";

function Procedimientos() {
  const [openId, setOpenId] = useState(null);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [alerta, setAlerta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleServicio = (id) => {
    const elemento = document.getElementById(`servicio-${id}`);
    if (!elemento) return;

    setOpenId((prev) => (prev === id ? null : id));

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

  const reservarServicio = () => {
    if (!servicioSeleccionado) {
      setAlerta("Selecciona un servicio");
      setTimeout(() => setAlerta(null), 3000);
      return;
    }

    navigate("/calendario", {
      state: { servicio: servicioSeleccionado },
    });
  };

  const scrollMenu = (direction) => {
    menuRef.current?.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  if (isLoading) return <Loading text="...Cargando" />;

  return (
    <section className={style.serviciosBody}>
      <div className={style.menuWrapper}>
        <button className={style.scrollBtn} onClick={() => scrollMenu("left")}>
          <GoTriangleLeft />
        </button>

        <div className={style.menuItemContainer} ref={menuRef}>
          {servicios.map((item) => (
            <button
              key={item.id}
              className={`${style.menuLink} ${
                openId === item.id ? style.activeMenuLink : ""
              }`}
              onClick={() => toggleServicio(item.id)}
            >
              {item.nombre}
            </button>
          ))}
        </div>

        <button className={style.scrollBtn} onClick={() => scrollMenu("right")}>
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
            <div
              className={style.servicioHeader}
              onClick={() => toggleServicio(servicio.id)}
            >
              <h3>{servicio.nombre}</h3>

              <FaChevronRight
                className={`${style.iconArrow} ${
                  openId === servicio.id ? style.open : ""
                }`}
              />
            </div>

            <div
              className={`${style.content} ${
                openId === servicio.id ? style.openContent : ""
              }`}
            >
              <h2 className={style.contentTitle}>Elegí un servicio:</h2>

              <ul className={style.optionsList}>
                {servicio.opciones.map((opcion, index) => (
                  <li
                    key={index}
                    onClick={() => setServicioSeleccionado(opcion)}
                    className={`${style.optionItem} ${
                      servicioSeleccionado === opcion
                        ? style.selectedOption
                        : ""
                    }`}
                  >
                    {opcion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button onClick={reservarServicio} className={style.btnReservarFloat}>
        Reservar turno
      </button>

      {alerta && <div className={style.toast}>{alerta}</div>}
    </section>
  );
}

export default Procedimientos;
