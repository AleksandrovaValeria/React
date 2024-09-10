import "./styles.css";

import { projectList } from "../../helpers/projectList";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectList.map((item, index) => (
            <ProjectCard key={index} title={item.title} image={item.img} index={item.index} />
          ))}
        </ul>
      </div>
    </main>
  );
}
