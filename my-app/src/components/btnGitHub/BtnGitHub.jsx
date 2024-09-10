import "./styles.css";

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src="/img/icons/gitHub-black.svg" alt="" />
      GitHub repo
    </a>
  );
}
