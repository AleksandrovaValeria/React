import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import "./styles.css";

export default function BtnTheme() {
  const [theme, setTheme] = useLocalStorage("theme", detectDarkMode());
  const btnRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newTheme = event.matches ? "dark" : "light";
        setTheme(newTheme);
      });
  }, []);

  function changeTheme() {
    setTheme((currentValue) => (currentValue === "light" ? "dark" : "light"));
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={changeTheme}>
      <img
        src="/img/icons/sun.svg"
        alt="Light mode"
        className="dark-mode-btn__icon"
      />
      <img
        src="/img/icons/moon.svg"
        alt="Dark mode"
        className="dark-mode-btn__icon"
      />
    </button>
  );
}
