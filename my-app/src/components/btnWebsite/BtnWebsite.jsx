import "./styles.css";

export default function BtnWebsite({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src="/img/icons/globe.svg" alt="" />
      Visit Website
    </a>
  );
}
