import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import "./styles.css";

export default function BtnTheme() {
  const [theme, setTheme] = useLocalStorage("theme", detectDarkMode());

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newTheme = event.matches ? "dark" : "light";
        setTheme(newTheme);
      });
  }, [setTheme]);

  function changeTheme() {
    setTheme((currentValue) => (currentValue === "light" ? "dark" : "light"));
  }

  return (
    <button
      className={
        theme === "dark"
          ? "dark-mode-btn dark-mode-btn--active"
          : "dark-mode-btn"
      }
      onClick={changeTheme}
    >
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
