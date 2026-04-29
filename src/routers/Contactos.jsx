import MyMap from "../components/ui/mymap/MyMap";
import style from "./style/Contacto.module.css";
import Loading from "../components/ui/loading/Loading";
import { useState, useEffect } from "react";

function Contactos() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
        <>
          {isLoading ? (
            <Loading text="...Cargando" />
          ) : (

    <section className={style.contactoContainer}>
      
      <div className={style.header}>
        <h1>Contacto</h1>
        <p>
          En CiaoBella nos encanta cuidar de tu belleza y bienestar.
          Si tenés dudas, consultas o querés agendar tu visita,
          estamos para ayudarte a sentirte y verte increíble.
        </p>
      </div>

      <div className={style.cardContainer}>
        
        <div className={style.card}>
          <h2>Teléfono</h2>
          <p>+54 9 11 2392-4974</p>
        </div>

        <div className={style.card}>
          <h2>Horario laboral</h2>
          <div className={style.horarioLista}>
            <div>Lunes</div><div>10:00 - 20:00</div>
            <div>Martes</div><div>10:00 - 20:00</div>
            <div>Miércoles</div><div>10:00 - 20:00</div>
            <div>Jueves</div><div>10:00 - 20:00</div>
            <div>Viernes</div><div>10:00 - 20:00</div>
            <div>Sábado</div><div>11:00 - 20:00</div>
          </div>
        </div>

        <div className={style.card}>
          <h2>Dirección</h2>
          <p>Serrano 479, CABA</p>
        </div>

      </div>

      <div className={style.mapSection}>
        <MyMap />
      </div>

    </section>
          )}
    </>
  );
}

export default Contactos;
