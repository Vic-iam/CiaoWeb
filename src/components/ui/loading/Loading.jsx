import style from "./Loading.module.css";

function Loading({ text }) {
  return (
    <div className={style.loadingContainer}>
      <div className={style.spinner}></div>
      <p>{text}</p>
    </div>
  );
}

export default Loading;