import "./styles.css";

export default function BtnTheme() {
  return (
    <button className="dark-mode-btn">
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
