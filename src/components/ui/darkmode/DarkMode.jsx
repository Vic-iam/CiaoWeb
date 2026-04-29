
import { useEffect, useState } from "react";
import style from "./DarkMode.module.css"
import { IoMdSunny, IoMdMoon  } from "react-icons/io";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className={style.themeToggle}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <IoMdSunny/> : <IoMdMoon />}
    </button>
  );
}