import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function BtnTheme() {
  const [theme, setTheme] = useState('light');
  const btnRef = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [theme])

  function changeTheme() {
    setTheme((currentValue) => currentValue === 'light' ? 'dark' : 'light')
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
