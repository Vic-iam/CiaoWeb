import { ClockLoader } from "react-spinners";
import style from "./Loading.module.css";

export default function Loading({ text = "...Cargando" }) {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loading}>
        <ClockLoader size={120} color="var(--text)" />
        <p>{text}</p>
      </div>
    </div>
  );
}
