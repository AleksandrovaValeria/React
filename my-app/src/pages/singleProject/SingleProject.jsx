import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";

import "./styles.css";

export default function SingleProject() {
  const {id} = useParams();
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img
            src="/img/projects/02-big.jpg"
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link="https://github.com" />
        </div>
      </div>
    </main>
  );
}
