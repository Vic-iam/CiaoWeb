import lupa from "../../../assets/lupa.png"
import style from "./Error.module.css"

export default function Error() {
  return (
    <div className={style.errorContainer}>
      <h2>Error....Busqueda no encontrada</h2>

      <div className={style.lupaStyle}>
        <img src={lupa} alt="Error" />
      </div>
    </div>
  );
}
