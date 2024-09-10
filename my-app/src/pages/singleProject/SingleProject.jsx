import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projectList } from "../../helpers/projectList";

import "./styles.css";

export default function SingleProject() {
  const { id } = useParams();
  const data = projectList[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{data.title}</h1>

          <img
            src={`/img/projects/${data.imgBig}`}
            alt={data.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {data.skills}</p>
          </div>

          <BtnGitHub link="https://github.com" />
        </div>
      </div>
    </main>
  );
}
